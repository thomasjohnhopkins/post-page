var PostActions = require('../actions/post_actions');

var PostUtil = {
  addPost: function (post) {
    $.ajax({
      type: "POST",
      url: "postss",
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function (data) {
        PostActions.addPost(data);
      },
      error: function (data) {
        
      }
    });
  },

  fetchPosts: function () {
    $.ajax({
      type: "GET",
      url: "posts",
      dataType: 'json',
      success: function (data) {
        PostActions.fetchPosts(data);
      },
      error: function (data) {

      }
    });
  }
};

module.exports = PostUtil;
