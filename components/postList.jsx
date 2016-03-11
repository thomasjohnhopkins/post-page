var React= require('react');

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
    apiUtils.fetchAllPosts();
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
      this.state.posts.forEach( function (post) {

        allPosts.push(<li className="post-list-item" key={post.title}>
        <PostListItem post={post} />
      </li>);
      }
    )};

    return(
      <div className="post">
      </div>
    );
  }
});

module.exports = PostList;
