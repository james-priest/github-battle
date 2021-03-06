var React = require('react');
var ReactDOM = require('react-dom');

require('./hello-world.css');

// COMPONENTS CONSIST OF 3 THINGS
// state
// lifecycle events
// UI

class App extends React.Component {
  render() {
    return <h1 className="App">Yo! It&apos;s lit {this.props.name}</h1>;
  }
}

ReactDOM.render(<App name="James" />, document.getElementById('app'));
