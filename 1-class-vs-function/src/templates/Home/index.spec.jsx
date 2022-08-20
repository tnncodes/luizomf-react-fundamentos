import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { Home } from '.';

const handlers = [
  rest.get('*jsonplaceholder.typicode.com*', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          userId: 1,
          title: 'title 1',
          body: 'body 1',
          url: 'img1.jpg',
        },
        {
          id: 2,
          userId: 2,
          title: 'title 2',
          body: 'body 2',
          url: 'img2.jpg',
        },
        {
          id: 3,
          userId: 3,
          title: 'title 3',
          body: 'body 3',
          url: 'img3.jpg',
        },
      ])
    );
  }),
];
const server = setupServer(...handlers);

describe('<Home />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  it('should render serach, posts and load more', async () => {
    render(<Home />);
    await waitForElementToBeRemoved(screen.getByText('Não existem posts!'));

    expect.assertions(3);

    // search
    expect(
      screen.getByPlaceholderText(/type your search/i)
    ).toBeInTheDocument();

    // image
    expect(screen.getAllByRole('img')).toHaveLength(3);

    // button
    expect(
      screen.getByRole('button', { name: /load more posts/i })
    ).toBeInTheDocument();
  });
});
