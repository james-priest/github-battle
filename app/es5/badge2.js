var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
  name: 'James Priest',
  img: 'https://avatars1.githubusercontent.com/u/27903822?s=460&v=4',
  username: 'james-priest'
};

class Badge extends React.Component {
  render() {
    return (
      <div>
        <h1>Badge 2</h1>
        <img src={this.props.user.img} alt="" />
        <h2>Name: {this.props.user.name}</h2>
        <h3>Username: {this.props.user.username}</h3>
      </div>
    );
  }
}

ReactDOM.render(<Badge user={USER_DATA} />, document.getElementById('app'));
