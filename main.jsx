var React = require('react');
var ReactDOM = require('react-dom');

var Post = require('./components/post');
var PostList = require('./components/postList');

var Main = React.createClass({
  render: function () {
    return(
      <div className="group">
        <Post />
        <PostList />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Main />, document.getElementById('main'));
});
