import React from "react";
import PropTypes from "prop-types";

const CreateEntryView = props => {
  const { handleSubmit, title, content,handleChange} = props;
  return (
    <div>
    
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Add Entry</h1>
          <hr />
          <label htmlFor="title">
            <b>Title</b>
          </label>
          <input
            type="text"
            id="add_title"
            placeholder="Enter Title"
            name="title"
            value={title}
            onChange={handleChange}
          />
          <p id="date" />
          <label htmlFor="content">Content</label>
          <textarea
            id="add_content"
            name="content"
            placeholder="Write something.."
            value={content}
            onChange={handleChange}
          />
          <hr />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};
CreateEntryView.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string
};
export default CreateEntryView;
