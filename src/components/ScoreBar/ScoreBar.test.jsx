/* eslint-disable */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ScoreBar from "./ScoreBar";

describe("Button", () => {
  test("renders the component", () => {
    const { getByText } = render(
      <ScoreBar questions={20} answered={3} questionNo={10} />
    );
    expect(getByText("Score: 30%")).toBeInTheDocument();
    expect(getByText("Max Score: 65%")).toBeInTheDocument();
  });
});
