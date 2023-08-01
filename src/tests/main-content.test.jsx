import { render, screen } from "@testing-library/react";
import MainContent from "../component/main-content";
import { describe, it, expect } from 'vitest';

describe('main-news-component', () => {
  it('renders the news-cards', () => {
    const { container } = render(<MainContent />);
    expect(container).toMatchSnapshot();
  });

  it('changes the page route after the news-card is clicked', () => {
    render(<MainContent />);

    const newscard = screen.getByRole('link');

    expect(newscard).toHaveAttribute('href', 'news1')
  });
});
