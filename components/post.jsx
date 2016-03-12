var React= require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var PostActions = require('../actions/post_actions');

var Post = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return ({title: "", body: ""});
  },

  addPost: function(e) {
    e.preventDefault();

    // var formData = new FormData();
    //
    // formData.append("post[title]", this.state.title);
    // formData.append("post[body]", this.state.body);

    PostActions.addPost(this.state.title, this.state.body);

    this.clearForm(e);
  },

  clearForm: function(e) {
    this.setState({title: "", body: ""});
  },

  render: function () {

    return(
      <div className="post-component">

        <h2>Write a post!</h2>
        <form className="form-post" onSubmit={this.addPost}>
          <label className="post">Title</label>
          <input type="text" className="title"
            valueLink={this.linkState("title")} />

          <label className="post">Content</label>
            <textarea className="body"
              valueLink={this.linkState("body")}>

            </textarea>

          <ul className="button-list group">
            <li className="button-item">
              <button className="post-button" onClick={this.clearForm}>
                Discard
              </button>
            </li>
            <li className="button-item">
              <button className="post-button" type="submit">
                Save
              </button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
});

module.exports = Post;
