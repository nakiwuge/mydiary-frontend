import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Home from "../../views/entriesViews/home";
import { getEntries } from "../../actions/entries/entries";
import NavBar from "../../views/entriesViews/navBar";

export class ViewEntries extends Component {
  state = { display: "none" };
  componentWillMount() {
    this.props.getEntries();
  }
  handleClick = id => {
    this.props.history.push(`/home/${id}`);
  };
  render() {
    const props = {
      entries: this.props.entries,
      handleClick: this.handleClick,
      display:this.props.display
    
    };
    return (
      <div>
        <NavBar />
        <Home {...props} />;
      </div>
    );
  }
}

ViewEntries.propTypes = {
  entries: PropTypes.object
};
const mapStateToProps = state => ({
  entries: state.entryReducer.entries,
  display:state.entryReducer.display
});
export default connect(
  mapStateToProps,
  { getEntries }
)(ViewEntries);
