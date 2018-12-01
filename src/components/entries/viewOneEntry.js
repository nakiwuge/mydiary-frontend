import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEntry, editEntry } from "../../actions/entries/entries";
import ViewOneEntryView from "../../views/entriesViews/viewOneEntry";

let id;
export class ViewOneEntry extends Component {
  state = {
    modal: false,
    title: "",
    content: " "
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
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
      editContent: this.state.content
    };
    return <ViewOneEntryView {...props} />;
  }
}

ViewOneEntry.propTypes = {
  entries: PropTypes.object,
  getEntry: PropTypes.func,
  match: PropTypes.func
};
const mapStateToProps = state => ({
  entry: state.entryReducer.result
});
export default connect(
  mapStateToProps,
  { getEntry, editEntry }
)(ViewOneEntry);
