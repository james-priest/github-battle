import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Users extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <ul>
        {list.map(name => (
          <li key={name}>{name}</li>
        ))}
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
