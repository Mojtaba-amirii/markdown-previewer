import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateContent } from "../redux/editorSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const Editor = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.editor.content);

  const handleChange = (event) => {
    dispatch(updateContent(event.target.value));
  };

  return (
    <div data-testid="editor" className="form-group w-50">
      <textarea
        id="editor"
        className="form-control"
        rows="10"
        value={content}
        onChange={handleChange}
      />
    </div>
  );
};

export default Editor;
