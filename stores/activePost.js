var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/app_dispatcher');
var PostConstants = require('../constants/post_constants');

var _activePost = {};

var ActivePostStore = new Store(AppDispatcher);

var setPost = function (post) {
  _activePost = post;
};

var resetActivePost = function () {
  _activePost = {};
};

ActivePostStore.current = function () {
  return _activePost;
};

ActivePostStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PostConstants.SET_POST:
      setPost(payload.post);
      ActivePostStore.__emitChange();
      break;
    case PostConstants.DELETE_POST:
      resetActivePost();
      ActivePostStore.__emitChange();
      break;
  }
};

module.exports = ActivePostStore;
