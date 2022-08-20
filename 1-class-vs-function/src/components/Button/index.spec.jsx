import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
  it('should render the button with the text "Load more"', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);
    expect(
      screen.getByRole('button', { name: /load more/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /load more/i })).toHaveAttribute(
      'class',
      'button'
    );
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);
    fireEvent.click(screen.getByRole('button', { name: /load more/i }));
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled onClick={fn} />);
    expect(screen.getByRole('button', { name: /load more/i })).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);
    expect(screen.getByRole('button', { name: /load more/i })).toBeEnabled();
  });
});
