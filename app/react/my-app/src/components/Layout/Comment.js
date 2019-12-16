import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';

class CommentForm extends Component {
    getInitialState = () => {
      return {author: '', text: ''};
    }
    handleAuthorChange = (e) => {
      this.setState({author: e.target.value});
    }
    handleTextChange = (e) => {
      this.setState({text: e.target.value});
    }
    handleSubmit = (e) => {
      e.preventDefault();
      var author = this.state.author.trim();
      var text = this.state.text.trim();
      if (!text || !author) {
        return;
      }
      this.props.onCommentSubmit({author: author, text: text});
      this.setState({author: '', text: ''});
    }
    render() {
      return (
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={this.state.author}
            onChange={this.handleAuthorChange}
          />
          <input
            type="text"
            placeholder="Say something..."
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <input type="submit" value="Post" />
        </form>
      );
    }
  }
  class CommentBox extends Component{
    loadCommentsFromServer = () => {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        cache: false,
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    }
    handleCommentSubmit = (comment) => {
      var comments = this.state.data;
      
      comment.id = Date.now();
      var newComments = comments.concat([comment]);
      this.setState({data: newComments});
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: comment,
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          this.setState({data: comments});
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    }
    getInitialState = () => {
      return {data: []};
    }
    componentDidMount = () => {
      this.loadCommentsFromServer();
      setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }
    render = () => {
      return (
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList data={this.state.data} />
          <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        </div>
      );
    }
  }

  var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
  ];
  class CommentList extends Component{
    render = () => {
      var commentNodes = this.props.data.map(function(comment) {
        return (
          <Comment author={comment.author} key={comment.id}>
            {comment.text}
          </Comment>
        );
      });
      return (
        <div className="commentList">
          {commentNodes}
        </div>
      );
    }
  }

  class Comment extends Component{
    render = () => {
      return (
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          {this.props.children}
        </div>
      );
    }
  }

export default CommentForm;