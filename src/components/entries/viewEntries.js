import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Home from "../../views/entriesViews/home";
import { getEntries } from "../../actions/entries/entries";

export class ViewEntries extends Component {
  componentWillMount() {
    this.props.getEntries();
  }
  render() {
    const props = {
      entries: this.props.entries
    };
    return <Home {...props} />;
  }
}

ViewEntries.propTypes = {
  entries: PropTypes.object
};
const mapStateToProps = state => ({
  entries: state.entryReducer.entries
});
export default connect(
  mapStateToProps,
  { getEntries }
)(ViewEntries);
