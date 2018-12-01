import React from "react";
import NavBar from "./navBar";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ViewOneEntryView = props => {
  const {
    entry,
    toggle,
    modal,
    handleSave,
    handleChange,
    editTitle,
    editContent
  } = props;
  return (
    <div>
      <NavBar />
      <div className="container">
        {" "}
        <h2>{entry.title}</h2>
        <div>
          <p>{entry.date}</p>
          <p>{entry.content}</p>

          <button onClick={toggle} className="text" type="submit">
            edit
          </button>
          <button className="text button-danger" type="submit">
            delete
          </button>
          <form onSubmit={handleSave}>
            <Modal isOpen={modal} toggle={toggle} className="">
              <ModalHeader toggle={toggle}>Edit</ModalHeader>
              <ModalBody>
                <label htmlFor="title">
                  <b>Title</b>
                </label>
                <input name="title" value={editTitle} onChange={handleChange} />
                <label htmlFor="content">
                  <b>Content</b>
                </label>
                <input
                  name="content"
                  value={editContent}
                  onChange={handleChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" type="submit" onClick={handleSave}>
                  save
                </Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </form>
        </div>
      </div>
    </div>
  );
};
ViewOneEntryView.propTypes = {
  entry: PropTypes.object,
  toggle: PropTypes.func,
  modal: PropTypes.bool,
  handleSave: PropTypes.func,
  handleChange: PropTypes.func,
  editTitle: PropTypes.string,
  editContent: PropTypes.string
};
export default ViewOneEntryView;
