const React = require('react');
const ReactDOM = require('react-dom');

class Badge extends React.Component {
  render() {
    return (
      <div>
        <h1>Badge 1</h1>
        <img src={this.props.img} alt="" />
        <h2>Name: {this.props.name}</h2>
        <h3>Username: {this.props.username}</h3>
      </div>
    );
  }
}

ReactDOM.render(
  <Badge
    name="James Priest"
    username="james-priest"
    img="https://avatars1.githubusercontent.com/u/27903822?s=460&v=4"
  />,
  document.getElementById('app')
);
