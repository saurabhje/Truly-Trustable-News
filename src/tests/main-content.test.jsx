import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MainContent from "../component/main-content";
import { describe, it, expect, beforeEach } from 'vitest';

describe('main-news-component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <MainContent />
      </MemoryRouter>
    );
  });

  it('changes the page route after the news-card is clicked', () => {
    const newsCard = screen.getByRole('link', { name: /this is the heading just a little bit bigger/i });
    fireEvent.click(newsCard);

    expect(newsCard).toHaveAttribute('href', '/news1');
  });
});
