import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App foundation', () => {
  it('renders the Phase 0 placeholder', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: 'Foundation is ready.' }),
    ).toBeInTheDocument();
  });
});
