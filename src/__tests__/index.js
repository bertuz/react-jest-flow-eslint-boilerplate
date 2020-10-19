// @flow
import { waitFor } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import React from "react";
import MyComponent from "../index";

describe('happy case', () => {
  it('shows the header title', async () => {
    expect.hasAssertions();
    render(<MyComponent />);

    await waitFor(() =>
        expect(screen.findByText('My App')).toBeTruthy()
    );
  });
});
