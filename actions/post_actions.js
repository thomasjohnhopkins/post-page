var AppDispatcher = require('../dispatcher/app_dispatcher.js');
var PostConstants = require('../constants/post_constants');

PostActions = {
  addPost: function (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.ADD_POST,
      post: post
    });
  },

  fetchPosts: function (posts) {
    AppDispatcher.dispatch({
      actionType: PostConstants.FETCH_POSTS,
      posts: posts
    });
  }
};

module.exports = PostActions;
