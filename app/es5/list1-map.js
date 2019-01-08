var React = require('react');
var ReactDOM = require('react-dom');

class Users extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map(function(name) {
          return <li key={name}>{name}</li>;
        })}
      </ul>
    );
  }
}

ReactDOM.render(
  <Users list={['Tyler', 'Mikenzi', 'Ryan', 'Michael']} />,
  document.getElementById('app')
);
