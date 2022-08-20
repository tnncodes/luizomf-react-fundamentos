import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
        {
          id: 4,
          userId: 4,
          title: 'title 4',
          body: 'body 4',
          url: 'img4.jpg',
        },
        {
          id: 5,
          userId: 5,
          title: 'title 5',
          body: 'body 5',
          url: 'img5.jpg',
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

    // xpect.assertions(3);

    // search
    expect(
      screen.getByPlaceholderText(/type your search/i)
    ).toBeInTheDocument();

    // image
    expect(screen.getAllByRole('img')).toHaveLength(4);

    // button
    expect(
      screen.getByRole('button', { name: /load more posts/i })
    ).toBeInTheDocument();
  });

  it('should search for posts', async () => {
    render(<Home />);
    await waitForElementToBeRemoved(screen.getByText('Não existem posts!'));

    const search = screen.getByPlaceholderText(/type your search/i);

    // ao carregar o componente eu espero encontrar 2 itens
    expect(
      screen.getByRole('heading', { name: 'title 1' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'title 2' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'title 3' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'title 4' })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'title 5' })
    ).not.toBeInTheDocument();

    // ao digitar no search eu desejo filtrar
    userEvent.type(search, 'title 1');

    expect(
      screen.getByRole('heading', { name: 'title 1' })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'title 2' })
    ).not.toBeInTheDocument();

    // ao limpar o search eu desejo ver novamente os 4 itens
    userEvent.clear(search);

    expect(
      screen.getByRole('heading', { name: 'title 1' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'title 2' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'title 3' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'title 4' })
    ).toBeInTheDocument();

    // ao pesquisar por um item que não existe deve retornar a mensagem Não existem posts!
    userEvent.type(search, 'lorem ipsum');
    expect(screen.getByText('Não existem posts!')).toBeInTheDocument();
  });

  it('should load more posts', async () => {
    render(<Home />);

    await waitForElementToBeRemoved(screen.getByText('Não existem posts!'));

    const button = screen.getByRole('button', { name: /load more posts/i });

    // clicando no botão
    userEvent.click(button);

    // espero que apareça na tela o item 5
    expect(
      screen.getByRole('heading', { name: 'title 5' })
    ).toBeInTheDocument();

    // espero que o botão esteja desabilitadoEsse
    expect(button).toBeDisabled();
  });
});
