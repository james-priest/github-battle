const React = require('react');
const ReactDOM = require('react-dom');

require('./index.css');

// COMPONENTS CONSIST OF 3 THINGS
// state
// lifecycle events
// UI

// Not a violation of SEPARATION OF CONCERNS
// The concern is at the component level, not the technology level
class App extends React.Component {
  render() {
    return <h1 className="App">Hello React!</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
