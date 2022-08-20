import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);

    // imagem
    expect(screen.getByAltText(/title 1/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'img/img.png');

    // titulo
    expect(
      screen.getByRole('heading', { name: 'title 1' })
    ).toBeInTheDocument();

    // paragrafo
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
