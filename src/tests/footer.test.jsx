import { render, screen } from '@testing-library/react';
 import Footer from '../component/footer';
 import { describe, it,expect} from 'vitest';

describe('Footer', () => {
  it('renders Footer', () => {
    render(<Footer/>);
    expect(screen.getByRole("heading").textContent).toMatch(/The Humanist/i);
  });
});