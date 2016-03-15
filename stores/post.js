var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/app_dispatcher');
var PostConstants = require('../constants/post_constants');

var _posts = [];

var PostStore = new Store(AppDispatcher);

var resetPosts = function (posts) {
  _posts = posts;
};

var addPost = function (post) {
  if (_posts.length === 0) {
    post.id = 1;
  } else {
    post.id = _posts[_posts.length - 1].id + 1;
  }

  _posts.push(post);
};

var deletePost = function (id) {
  for (var i = 0; i < _posts.length; i++) {
    if (_posts[i].id === id) {
      _posts.splice(i, 1);
    }
  }
};

var editPost = function (post) {
  for (var i = 0; i < _posts.length; i++) {
    if (_posts[i].id === post.id) {
      _posts[i] = post;
    }
  }
  PostStore.__emitChange();
};

PostStore.all = function () {
  if (_posts === undefined) {
    _posts = [];
  }
  return _posts.slice(0);
};

PostStore.find = function (id) {
  for (var i = 0; i < _posts.length; i++) {
    if (_posts[i].id === id) {
      return _posts[i];
    }
  }
};


PostStore.__onDispatch = function (payload) {
switch(payload.actionType) {
  case PostConstants.FETCH_POSTS:
    resetPosts(payload.posts);
    PostStore.__emitChange();
    break;
  case PostConstants.ADD_POST:
    addPost(payload.post);
    PostStore.__emitChange();
    break;
  case PostConstants.DELETE_POST:
    deletePost(payload.id);
    PostStore.__emitChange();
    break;
  case PostConstants.EDIT_POST:
    editPost(payload.post);
    break;
  }
};

module.exports = PostStore;
