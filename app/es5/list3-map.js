var React = require('react');
var ReactDOM = require('react-dom');

class FriendsContainer extends React.Component {
  render() {
    var name = 'James Priest';
    var friends = ['Evi', 'Joeylene', 'Brittany', 'Anusha', 'Divya'];
    var containerStyle = {
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
    var listStyle = {
      border: '1px solid red',
      padding: '10px'
    };
    return (
      <div style={listStyle}>
        <h3>Twitter Friends</h3>
        <ul>
          {this.props.names.map(function(friend) {
            return <li key={friend}>{friend}</li>;
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<FriendsContainer />, document.getElementById('app'));
