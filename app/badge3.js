import React from 'react';
import ReactDOM from 'react-dom';

class Avatar extends React.Component {
  render() {
    return <img src={this.props.img} alt="profile" />;
  }
}

class Label extends React.Component {
  render() {
    return <h2>{this.props.name}</h2>;
  }
}

class ScreenName extends React.Component {
  render() {
    return <h3>Username: {this.props.user}</h3>;
  }
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <h1>Badge 3</h1>
        <Avatar img={this.props.user.img} />
        <Label name={this.props.user.name} />
        <ScreenName user={this.props.user.username} />
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
