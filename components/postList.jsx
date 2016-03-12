var React= require('react');

var PostStore = require('../stores/post');
var PostActions = require('../actions/post_actions');

var PostList = React.createClass({
  getInitialState: function () {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    return {
      posts: PostStore.all(),
    };
  },

  componentDidMount: function () {
    this.listenerToken = PostStore.addListener(this._onChange);
    PostActions.fetchPosts();
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  render: function () {

    if (this.state.posts === undefined) {
      return <div></div>;
    }

    var allPosts = [];

    if (this.state !== null) {
      debugger
      this.state.posts.forEach( function (post) {

        allPosts.push(<li className="post-list-item" key={post.title}>
        <h2>{post.title}</h2>
        <p className="post-body">{post.body}</p>
      </li>);
      }
    )};

    return(
      <div className="post-component">
        <h1>POSTS</h1>
        <ul className="posts">
          {allPosts}
        </ul>
      </div>
    );
  }
});

module.exports = PostList;
