var React= require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var Post = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return ({title: '', body: ''});
  },

  render: function () {

    return(
      <div>

        <h2>Write a post!</h2>
        <form className="form-session group" onSubmit={this.logIn}>
          <label>Title</label>
          <input type="text"
            valueLink={this.linkState("title")} />

          <label>Content</label>
            <input type="text"
              valueLink={this.linkState("body")} />

          <ul className="form-buttons group">
            <li className="post-button">
              <button className="post-button" type="submit">
                Save
              </button>
            </li>
            <li className="post-button">
              <button className="post-button" onClick={this.clearForm}>
                Discard
              </button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
});

module.exports = Post;
