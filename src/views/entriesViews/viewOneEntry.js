import React from "react";
import NavBar from "./navBar";
import PropTypes from "prop-types";

const ViewOneEntryView = props => {
  const { entry} = props;
  return (
    <div>
      <NavBar />
      <div className="container">
        {" "}
        <h2>{entry.title}</h2>
        <div>
          <p>{entry.date}</p>
          <p>{entry.content}</p>

          <button className="text"  type="submit">
            edit
          </button>
          <button className="text button-danger"  type="submit">
            delete
          </button>
        </div>
      </div>
    </div>
  );
};
ViewOneEntryView.propTypes = {
  entry: PropTypes.object
};
export default ViewOneEntryView;
