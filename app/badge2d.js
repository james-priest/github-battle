const React = require('react');
const ReactDOM = require('react-dom');

const USER_DATA = {
  name: 'James Priest',
  img: 'https://avatars1.githubusercontent.com/u/27903822?s=460&v=4',
  username: 'james-priest'
};

class Badge extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>Badge 2</h1>
        <img src={user.img} alt="" />
        <h2>Name: {user.name}</h2>
        <h3>Username: {user.username}</h3>
      </div>
    );
  }
}

ReactDOM.render(<Badge user={USER_DATA} />, document.getElementById('app'));
