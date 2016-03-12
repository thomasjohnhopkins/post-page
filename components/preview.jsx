var React= require('react');


var Preview = React.createClass({

  render: function () {
    var postPreview;

    if (this.props.title.value === "" &&
          this.props.body.value ==="") {
      postPreview = <div></div>;
    } else {
      debugger
      postPreview = <div className="post-list-item">
        <h2>{this.props.title.value}</h2>
        <p className="post-body">{this.props.body.value}</p>
      </div>;
    }
    return (
      <div className="preview-component">
        <h2>Preview</h2>
        {postPreview}
      </div>
    );
  },
});

module.exports = Preview;
