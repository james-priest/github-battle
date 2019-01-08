// formatted with Prettier
const React = require('react');
const ReactDOM = require('react-dom');
require('./hello-world.css');

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
