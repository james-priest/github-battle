var React = require('react');
var ReactDOM = require('react-dom');

require('./index.css');

// COMPONENTS CONSIST OF 3 THINGS
//  - State
//  - Lifecycle events
//  - UI

class App extends React.Component {
  render() {
    return <h1 className="App">Hello React!</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
