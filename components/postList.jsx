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

  selectPost: function (event) {
    event.preventDefault();

    var postId = parseInt(event.currentTarget
              .getAttribute("data-reactid").split("$")[1]);

    var activePost = PostStore.find(postId);

    PostActions.selectPost(activePost);
  },

  render: function () {

    if (this.state.posts === undefined) {
      return <div></div>;
    }

    var allPosts = [];
    var that = this;

    if (this.state !== null) {
      this.state.posts.forEach( function (post) {

        allPosts.push(<li className="post-list-item" key={post.id}>
        <h2 className="post-title" onClick={that.selectPost}>{post.title}</h2>
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
