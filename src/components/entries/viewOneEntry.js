import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEntry } from "../../actions/entries/entries";
import ViewOneEntryView from "../../views/entriesViews/viewOneEntry";

export class ViewOneEntry extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.getEntry(id);
  }
  render() {
    const props = {
      entry: this.props.entry
    };
    return <ViewOneEntryView {...props}/>;
  }
}

ViewOneEntry.propTypes = {
  entries: PropTypes.object,
  getEntry:PropTypes.func,
  match:PropTypes.func
};
const mapStateToProps = state => ({
  entry: state.entryReducer.result
});
export default connect(
  mapStateToProps,
  { getEntry }
)(ViewOneEntry);
