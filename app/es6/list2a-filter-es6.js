import React from 'react';
import ReactDOM from 'react-dom';

class Users extends React.Component {
  render() {
    const { list } = this.props;
    const friends = list.filter(user => user.friend === true);
    const nonFriends = list.filter(user => user.friend === false);
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map(person => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>

        <hr />

        <h1>Non Friends</h1>
        <ul>
          {nonFriends.map(person => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <Users
    list={[
      { name: 'Tyler', friend: true },
      { name: 'Ryan', friend: true },
      { name: 'Michael', friend: false },
      { name: 'Mikenzi', friend: false },
      { name: 'Jessica', friend: true },
      { name: 'Dan', friend: false }
    ]}
  />,
  document.getElementById('app')
);
