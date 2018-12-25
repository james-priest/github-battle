var React = require('react')
var ReactDOM = require('react-dom')

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
      <h1>
        Hello World!
      </h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)