import React from "react";

import Editor from "./Editor";
import Preview from "./Preview";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

const App = () => {
  return (
    <div className="container d-flex flex-column h-100 justify-content-center align-items-center mt-4">
      <h1 className="text-center">Markdown Previewer</h1>
      <Editor />
      <Preview />
    </div>
  );
};

export default App;
