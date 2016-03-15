var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/app_dispatcher');
var PostConstants = require('../constants/post_constants');

var _activePost = {};

var ActivePostStore = new Store(AppDispatcher);

var setPost = function (post) {
  _activePost = post;
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
  }
};

module.exports = ActivePostStore;
