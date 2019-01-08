import React from 'react';
import ReactDOM from 'react-dom';

const ProfilePic = function(props) {
  const { username } = props;
  return <img src={`https://photo.fb.com/${username}`} alt="" />;
};

const ProfileLink = function(props) {
  const { username } = props;
  return <a href={`https://www.fb.com/${username}`}>{username}</a>;
};

const Avatar = function(props) {
  const { username } = props;
  return (
    <div>
      <h3>Stateless Functional Components</h3>
      <ProfilePic username={username} />
      <ProfileLink username={username} />
    </div>
  );
};

ReactDOM.render(
  <Avatar username="james-priest" />,
  document.getElementById('app')
);
