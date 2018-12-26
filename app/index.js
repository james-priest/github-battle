var React = require('react')
var ReactDOM = require('react-dom')
// var HelloWorld = require('./hello-world')

require('./index.css');

// COMPONENTS CONSIST OF 3 THINGS
// state
// lifecycle events
// UI

// Not a violation of SEPARATION OF CONCERNS
// The concern is at the component level, not the technology level
class App extends React.Component {
  render() {
    return (
      <h1 className="App">
        {/* <HelloWorld /> */}
        Hello React!
      </h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)