import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getEntry,
  editEntry,
  deleteEntry,
  getEntries
} from "../../actions/entries/entries";
import ViewOneEntryView from "../../views/entriesViews/viewOneEntry";
import NavBar from "../../views/entriesViews/navBar";

let id;
export class ViewOneEntry extends Component {
  state = {
    modal: false,
    delModal: false,
    title: "",
    content: " ",
 
  };

  toggle = e => {
    e.preventDefault();

    if (e.target.id === "edit-btn") {
      this.setState({
        modal: true
      });
    } else if (e.target.id === "delete-btn") {
      this.setState({
        delModal: true
      });
    }
  };
  handleClick = e => {
    e.preventDefault();
    this.setState({
      modal: false,
    });
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSave = e => {
    e.preventDefault();
    const data = { title: this.state.title, content: this.state.content };
    this.props.editEntry(id, data);
    this.setState({
      modal: false
    });
  };
  handleDelete = e => {
    e.preventDefault();
    this.props.deleteEntry(id);
    this.setState({
      modal: false
    });
    this.props.getEntries();
    this.props.history.push("/home");
  }
 
  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.entry.title,
      content: nextProps.entry.content
    });
    
    if (nextProps.entry.message === "the update was successfull") {
      this.props.getEntry(id);
    }
    
  }

  componentWillMount() {
    id = this.props.match.params.id;
    this.props.getEntry(id);
  }
  render() {
    
    const props = {
      entry: this.props.entry,
      toggle: this.toggle,
      modal: this.state.modal,
      handleSave: this.handleSave,
      handleChange: this.handleChange,
      editTitle: this.state.title,
      editContent: this.state.content,
      handleDelete: this.handleDelete,
      delModal: this.state.delModal,
      handleClick: this.handleClick
      
    };
    return (
      <div>
        <NavBar />
        <ViewOneEntryView {...props} />;
   
      </div>
    );
  }
}

ViewOneEntry.propTypes = {
  entries: PropTypes.object,
  getEntry: PropTypes.func,
  match: PropTypes.func
};
const mapStateToProps = state => ({
  entry: state.entryReducer.result,
  message:state.entryReducer.message
});
export default connect(
  mapStateToProps,
  { getEntry, editEntry, deleteEntry,getEntries }
)(ViewOneEntry);
