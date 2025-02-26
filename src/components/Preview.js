import React from "react";
import { useSelector } from "react-redux";
import { marked } from "marked";

import "bootstrap/dist/css/bootstrap.min.css";

const renderer = new marked.Renderer();
renderer.br = () => "<br>";

marked.setOptions({
  breaks: true,
  renderer: renderer,
});

const Preview = () => {
  const content = useSelector((state) => state.editor.content);

  return (
    <div
      id="preview"
      data-testid="preview"
      className="border w-50 p-3"
      dangerouslySetInnerHTML={{ __html: marked(content) }}
    />
  );
};

export default Preview;
