import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("tests 5 equals 5", () => {
    render(<App />);
    expect(5).toBe(5);
});
