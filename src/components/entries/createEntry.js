import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addEntry, getEntries } from "../../actions/entries/entries";
import CreateEntryView from "../../views/entriesViews/createEntry";
import NavBar from "../../views/entriesViews/navBar";

export class CreateEntry extends Component {
  state = {
    title: "",
    body: ""
  };
  componentWillReceiveProps(nextProps) {
 
    if (nextProps.message === "entry has been added successfully") {
      return nextProps.history.push("/home");
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.getEntries();
    const data = {
      title: this.state.title,
      content: this.state.content
    };
    this.props.addEntry(data);
    
  };
  render() {
    const props = {
      handleSubmit: this.handleSubmit,
      title: this.state.title,
      content: this.state.content,
      handleChange: this.handleChange,
      error: this.props.message
    };
    return (
      <div>
        <NavBar />
        <CreateEntryView {...props} />
      </div>
    );
  }
}

CreateEntry.propTypes = {
  entries: PropTypes.array
};
const mapStateToProps = state => ({
  message: state.entryReducer.message,
  entries: state.entryReducer.entries
});

export default connect(
  mapStateToProps,
  { addEntry,getEntries }
)(CreateEntry);
