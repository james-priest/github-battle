import React from 'react';
import ReactDOM from 'react-dom';

class HelloUser extends React.Component {
  render() {
    const { name } = this.props;
    return <div>Hello, {name}</div>;
  }
}
ReactDOM.render(<HelloUser name="James" />, document.getElementById('app'));
