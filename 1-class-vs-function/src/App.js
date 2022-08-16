import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'O titulo 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O titulo 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O titulo 3',
        body: 'O corpo 3'
      }
    ]
  };

  timeoutUpdate = null;

  // quando o componente é montado
  componentDidMount() {
    this.handleTimeout();
  }

  // quando o componente é atualizado
  componentDidUpdate() {
    this.handleTimeout();
  }

  // quando o componente é desmontado
  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }
  
  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'O titulo mudou';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 5000);
  }

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  };
};

export default App;
