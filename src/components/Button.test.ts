import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import App from "../App";

// console.log(renderer);
describe("Block 1", () => {
  test("should sum", () => {
    // pass
  });

  test("should render App", () => {
    // renderer.create(<App />);
    const root = document.createElement("div");
    // ReactDOM.render(<App />, root);
    // ReactDOM.render(<App />, root);
    renderer.create(<App />);
  });
});
