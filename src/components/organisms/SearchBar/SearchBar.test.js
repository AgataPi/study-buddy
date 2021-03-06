import { render, screen, fireEvent } from 'test-utils';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('Renders the component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Search');
  });

  it('Displays users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'Low' } });

    await screen.findByText(/Lowell/);
  });
});
