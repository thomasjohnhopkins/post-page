var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/app_dispatcher');
var PostConstants = require('../constants/post_constants');

var _posts = [];

var PostStore = new Store(AppDispatcher);

var resetPosts = function (posts) {
  _posts = posts;
};

var addPost = function (post) {
  _posts.push(post);
};

PostStore.all = function () {
  return _posts.slice(0);
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
  }
};

module.exports = PostStore;
