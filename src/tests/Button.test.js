import React from 'react';
import { render, wait, getAllByTestId } from 'react-testing-library';
import "react-testing-library/cleanup-after-each";
import App from '../App';

describe("Testing Buttons", () => {
  test("Button Next", async () => {
    const { getByText } = render(<App />);
    const buttonNext = getByText("Next");
    const textNext = buttonNext.textContent;
    expect(textNext).toBe("Next");
  });

  test("Button Prev", () => {
    const { getByText } = render(<App />);
    const buttonPrev = getByText("Prev");
    const textPrev = buttonPrev.textContent;
    expect(textPrev).toBe("Prev");
  });
});
