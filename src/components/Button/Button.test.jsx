/* eslint-disable */
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import Button from './Button'

const onClick = jest.fn();

describe('Button', () => {
  test('renders the component', () => {
    const { getByText } = render(<Button
      label='Hello World'
      onClick={() => {}}
    />)
    expect(getByText('Hello World')).toBeInTheDocument()
  })
  test("Button should be clickable", () => {
    render(<Button
        label='Button'
        onClick={onClick}
      />);
    userEvent.click(screen.getByText("Button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
})
