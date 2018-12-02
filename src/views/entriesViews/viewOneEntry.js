import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const ViewOneEntryView = props => {
  const {
    entry,
    toggle,
    modal,
    handleSave,
    handleChange,
    editTitle,
    editContent,
    handleDelete,
    handleClick,
    delModal
  } = props;
  const editModal = (
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
          <textarea name="content" value={editContent} onChange={handleChange} id="text-edit" >

          </textarea>
          {/* <input name="content" value={editContent} onChange={handleChange} /> */}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit" onClick={handleSave}>
            save
          </Button>{" "}
          <Button color="secondary" onClick={handleClick}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </form>
  );
  const deleteModal = (
    <Modal isOpen={delModal} toggle={toggle} className="">
      <ModalHeader toggle={toggle}>delete</ModalHeader>
      <ModalBody>
        <h1>Are you sure?</h1>
        <p>Do you want to delete this entry. </p>
        <p>This action cannot be undone </p>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          type="submit"
          onClick={handleDelete}
          className="text button-danger"
        >
          Delete
        </Button>{" "}
        <Button color="secondary" onClick={handleClick}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );

  return (
    <div>
      <div className="container">
        <Card id="add_entry">
          <CardBody>
            <CardTitle>{entry.title}</CardTitle>
            <CardSubtitle>{entry.date}</CardSubtitle>
          </CardBody>
          <CardBody>
            <CardText>{entry.content}</CardText>
            <CardLink
              href="#"
              onClick={toggle}
              className="info-text"
              type="submit"
              id="edit-btn"
            >
              Edit
            </CardLink>
            <CardLink
              href="#"
              className="error"
              id="delete-btn"
              onClick={toggle}
            >
              delete
            </CardLink>
          </CardBody>
        </Card>
        {deleteModal}
        {editModal}
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
  editContent: PropTypes.string,
  handleDelete: PropTypes.func,
  handleClick: PropTypes.func,
  delModal: PropTypes.func
};
export default ViewOneEntryView;
