import React from 'react';
import ReactDOM from 'react-dom';

class ProfilePic extends React.Component {
  render() {
    const { username } = this.props;
    return <img src={`https://photo.fb.com/${username}`} alt="" />;
  }
}

class ProfileLink extends React.Component {
  render() {
    const { username } = this.props;
    return <a href={`https://www.fb.com/${username}`}>{username}</a>;
  }
}

class Avatar extends React.Component {
  render() {
    const { username } = this.props;
    return (
      <div>
        <h3>Component Composition</h3>
        <ProfilePic username={username} />
        <ProfileLink username={username} />
      </div>
    );
  }
}

ReactDOM.render(
  <Avatar username="james-priest" />,
  document.getElementById('app')
);
