import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(
  <Users list={['Tyler', 'Mikenzi', 'Ryan', 'Michael']} />,
  document.getElementById('app')
);
