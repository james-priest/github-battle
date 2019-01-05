import React from 'react';
import ReactDOM from 'react-dom';

class Avatar extends React.Component {
  render() {
    const { img } = this.props;
    return <img src={img} alt="profile" />;
  }
}

class Label extends React.Component {
  render() {
    const { name } = this.props;
    return <h2>{name}</h2>;
  }
}

class ScreenName extends React.Component {
  render() {
    const { user } = this.props;
    return <h3>Username: {user}</h3>;
  }
}

class Badge extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>Badge 3</h1>
        <Avatar img={user.img} />
        <Label name={user.name} />
        <ScreenName user={user.username} />
      </div>
    );
  }
}

ReactDOM.render(
  <Badge
    user={{
      img: 'https://avatars1.githubusercontent.com/u/27903822?s=460&v=4',
      name: 'James Priest',
      username: 'james-priest'
    }}
  />,
  document.getElementById('app')
);
