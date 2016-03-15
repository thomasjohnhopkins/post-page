var AppDispatcher = require('../dispatcher/app_dispatcher.js');
var PostConstants = require('../constants/post_constants');

PostActions = {
  addPost: function (title, body) {
    AppDispatcher.dispatch({
      actionType: PostConstants.ADD_POST,
      post: {title: title, body: body}
    });
  },

  editPost: function (title, body, id) {
    AppDispatcher.dispatch({
      actionType: PostConstants.EDIT_POST,
      post: {title: title, body: body, id: id}
    });
  },

  selectPost: function (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.SET_POST,
      post: post
    });
  },

  deletePost: function (id) {
    AppDispatcher.dispatch({
      actionType: PostConstants.DELETE_POST,
      id: id
    });
  },

  fetchPosts: function () {
    AppDispatcher.dispatch({
      actionType: PostConstants.FETCH_POSTS
    });
  }
};

module.exports = PostActions;
