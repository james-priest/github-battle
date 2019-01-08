const React = require('react');
const ReactDOM = require('react-dom');

require('./hello-world.css');

// COMPONENTS CONSIST OF 3 THINGS
// state
// lifecycle events
// UI

class App extends React.Component {
  render() {
    const { name } = this.props;
    return <h1 className="App">Yo! It&apos;s lit {name}</h1>;
  }
}

ReactDOM.render(<App name="James" />, document.getElementById('app'));
