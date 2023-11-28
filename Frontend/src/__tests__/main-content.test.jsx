import { describe, it, expect, beforeEach, after, render, screen, cleanup, waitFor} from 'vitest';
import axiosMock from 'axios-mock-adapter';
import { spyOn } from 'jest-mock';
import MainContent from './MainContent';


const mockAxios = new axiosMock();

describe('MainContent Component - Data Fetching and User Interaction', () => {
  beforeEach(() => {
    mockAxios.reset();
  });

  after(() => {
    cleanup();
  });

  it('fetches data successfully from an API', async () => {
    const responseData = [{ id: 1, title: 'Test News 1' }];
    mockAxios.onGet('http://localhost:3000').reply(200, responseData);
    render(MainContent);
    await waitFor(() => {
      expect(screen.getByText('Test News 1')).toBeInTheDocument();
    });
  });

  it('handles API error', async () => {
    mockAxios.onGet('http://localhost:3000/?page=1').reply(500);
    render(MainContent);
    await waitFor(() => {
      expect(screen.getByText('Error fetching data:')).toBeInTheDocument();
    });
  });

  it('triggers handleLoadMore on "Load More" button click', async () => {
    const handleLoadMoreSpy = spyOn(MainContent, 'handleLoadMore');

    render(MainContent);
    const loadMoreButton = screen.getByText('Load More');
    loadMoreButton.click();

    await waitFor(() => {
      expect(handleLoadMoreSpy).toHaveBeenCalled();
    });
  });

  it('changes state when a category is selected', async () => {
    const responseData = [{ id: 1, title: 'Test News 1' }];
    mockAxios.onGet('http://localhost:3000/?page=1&cat=selectedCategory').reply(200, responseData);

    render(MainContent);

    // Select a category
    const categoryDropdown = screen.getByRole('combobox');
    categoryDropdown.value = 'selectedCategory';
    categoryDropdown.dispatchEvent(new Event('change'));

    await waitFor(() => {
      expect(screen.getByText('Test News 1')).toBeInTheDocument();
    });
  });
});
