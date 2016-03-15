var React= require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var Preview = require('./preview');
var PostUtil = require('../util/post_util');
var PostActions = require('../actions/post_actions');
var ActivePostStore = require('../stores/activePost');

var Post = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return ({title: "", body: "", activePost: undefined});
  },

  savePost: function (e) {
    e.preventDefault();

    if (this.state.body.length > 300) {
      return;
    } else if (this.state.activePost) {
      PostActions.editPost(this.state.title, this.state.body,
                            this.state.activePost.id)
    } else {
      PostActions.addPost(this.state.title, this.state.body);
    }

    this.clearForm();
  },

  componentDidMount: function () {
    this.listenerToken = ActivePostStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  _onChange: function () {
    var activePost = ActivePostStore.current();

    this.setState({title: activePost.title,
                    body: activePost.body, activePost: activePost});

  },

  discardPost: function (e) {
    e.preventDefault();

    if (this.state.activePost) {
      PostActions.deletePost(this.state.activePost.id);
    }

    this.clearForm();
  },

  clearForm: function () {
    this.setState({title: "", body: "", activePost: undefined});
  },

  render: function () {

    var remainingCharacters = 300 - this.state.body.length
    return(
      <div className="post-component">

        <h2>Write a post!</h2>
        <form className="form-post" onSubmit={this.savePost}>
          <label className="post">Title</label>
          <input type="text" className="title"
            valueLink={this.linkState("title")} />

          <label className="post">Content</label>
            <textarea className="body"
              valueLink={this.linkState("body")}>

            </textarea>

          <ul className="button-list group">
            <li className="remaining-characters">
              Remaining Characters: {remainingCharacters}
            </li>
            <li className="button-item">
              <button className="post-button" onClick={this.discardPost}>
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
        <Preview title={this.linkState("title")}
                  body={this.linkState("body")} />
      </div>
    );
  }
});

module.exports = Post;
