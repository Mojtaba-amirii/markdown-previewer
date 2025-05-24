import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import App from "../components/App";
import store from "../redux/store";

describe("App component", () => {
  test("renders the heading", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const headingElement = screen.getByText(/Markdown Previewer/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders the Editor component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const editorElement = screen.getByTestId("editor");
    expect(editorElement).toBeInTheDocument();
  });

  test("renders the Preview component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const previewElement = screen.getByTestId("preview");
    expect(previewElement).toBeInTheDocument();
  });
});
