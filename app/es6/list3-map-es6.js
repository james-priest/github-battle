import React from 'react';
import ReactDOM from 'react-dom';

class FriendsContainer extends React.Component {
  render() {
    const name = 'James Priest';
    const friends = ['Evi', 'Joeylene', 'Brittany', 'Anusha', 'Divya'];
    const containerStyle = {
      border: '1px solid blue',
      padding: '10px'
    };
    return (
      <div style={containerStyle}>
        <h3>Name : {name}</h3>
        <ShowList names={friends} />
      </div>
    );
  }
}

class ShowList extends React.Component {
  render() {
    const { names } = this.props;
    const listStyle = {
      border: '1px solid red',
      padding: '10px'
    };
    return (
      <div style={listStyle}>
        <h3>Twitter Friends</h3>
        <ul>
          {names.map(friend => (
            <li key={friend}>{friend}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<FriendsContainer />, document.getElementById('app'));
