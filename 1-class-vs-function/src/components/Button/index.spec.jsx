import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";

describe('<Button />', () => {
  it('should render the button with the text "Load more"', () => {
    render(<Button text="Load more" />);
    expect(screen.getByRole('button', { name: /load more/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /load more/i })).toHaveAttribute('class', 'button');
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);
    fireEvent.click(screen.getByRole('button', { name: /load more/i }));
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    render(<Button text="Load more" disabled={true} />);
    expect(screen.getByRole('button', { name: /load more/i })).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    render(<Button text="Load more" disabled={false} />);
    expect(screen.getByRole('button', { name: /load more/i })).toBeEnabled();
  });
});