var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

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

Users.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired
};

ReactDOM.render(
  <Users list={['Tyler', 'John', 'Ryan', 'Michael', 23]} />,
  document.getElementById('app')
);
