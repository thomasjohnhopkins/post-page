var PostActions = require('../actions/post_actions');

// var sqlObject = require('../agile_record/sql_object.rb');



var PostUtil = {
  addPost: function (title, body) {
    debugger
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
