var React = require('react');
var ReactDOM = require('react-dom');

class ProfilePic extends React.Component {
  render() {
    return <img src={`https://photo.fb.com/${this.props.username}`} alt="" />;
  }
}

class ProfileLink extends React.Component {
  render() {
    return (
      <a href={`https://www.fb.com/${this.props.username}`}>
        {this.props.username}
      </a>
    );
  }
}

class Avatar extends React.Component {
  render() {
    return (
      <div>
        <h3>Component Composition</h3>
        <ProfilePic username={this.props.username} />
        <ProfileLink username={this.props.username} />
      </div>
    );
  }
}

ReactDOM.render(
  <Avatar username="james-priest" />,
  document.getElementById('app')
);
