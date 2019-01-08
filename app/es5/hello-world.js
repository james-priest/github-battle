// formatted with Prettier
var React = require('react');
var ReactDOM = require('react-dom');
require('./hello-world.css');

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
