var React = require('react');
var ReactDOM = require('react-dom');

class HelloUser extends React.Component {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}
ReactDOM.render(<HelloUser name="James" />, document.getElementById('app'));
