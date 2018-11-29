import React from "react";
import NavBar from "./navBar";
import PropTypes from "prop-types";

const Home = props => {
  const entries = props.entries.map(entry => (
    <div className="view-entries" key={entry.id}>
    
      <table>
        <tbody>
          <tr>
            <td>
              <a href="#">{entry.title}</a>
            </td>
            <td>{entry.date}</td>
            <td>
              <a className="info-text" href="#">
                view
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ));

  return (
    <div>
      <NavBar />
      <p></p>
      {entries}
    </div>
  );
};
Home.propTypes = {
  entries: PropTypes.array
};
export default Home;
