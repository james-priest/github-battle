const React = require('react');
const ReactDOM = require('react-dom');

class Badge extends React.Component {
  render() {
    const { name, username, img } = this.props;
    return (
      <div>
        <h1>Badge 1</h1>
        <img src={img} alt="" />
        <h2>Name: {name}</h2>
        <h3>Username: {username}</h3>
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
