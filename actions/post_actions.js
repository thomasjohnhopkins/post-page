var AppDispatcher = require('../dispatcher/app_dispatcher.js');
var PostConstants = require('../constants/post_constants');

PostActions = {
  addPost: function (title, body) {
    AppDispatcher.dispatch({
      actionType: PostConstants.ADD_POST,
      post: {title: title, body: body}
    });
  },

  fetchPosts: function () {
    AppDispatcher.dispatch({
      actionType: PostConstants.FETCH_POSTS
    });
  }
};

module.exports = PostActions;
