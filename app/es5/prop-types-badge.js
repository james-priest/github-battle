var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./style.css');

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

Badge.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

// img will produce PropTypes error: got 'object' expected 'string'
ReactDOM.render(
  <Badge
    name="James Priest"
    username="james-priest"
    img={{
      image: 'https://avatars1.githubusercontent.com/u/27903822?s=460&v=4'
    }}
  />,
  document.getElementById('app')
);
