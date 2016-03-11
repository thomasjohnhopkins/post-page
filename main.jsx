var React = require('react');
var ReactDOM = require('react-dom');

var Post = require('./components/post');
var Preview = require('./components/preview');
var PostList = require('./components/postList');

var Main = React.createClass({
  render: function () {
    return(
      <div className="title">
        <Post />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Main />, document.getElementById('main'));
});
