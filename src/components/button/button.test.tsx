import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Button from "./";

describe("Running Test for Marbella Button", () => {
  test("Check Button Disabled", () => {
    render(
      <Button test="red" disabled>
        Test
      </Button>
    );
    expect(screen.getByText("Test")).toBeDisabled();
  });
});
