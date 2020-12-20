import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import './landing.css';
import Post from '../Post';
import { fetchPosts } from '../../features/posts';
import { createPost } from '../../features/postDetails';

const customModalStyles = {
  content : {
    minWidth: '75%',
    minHeight: '400px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class Landing extends Component {
  state = {
    showPostForm: false,
    postTitle: '',
    postContent: ''
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  createPost = () => {
    const postProps = {
      title: this.state.postTitle,
      content: this.state.postContent
    };
    this.props.createPost(postProps);
  }

  toggleForm = () => {
    this.setState(prevState => ({ showPostForm: !prevState.showPostForm }))
  }

  render() {
    const { posts } = this.props;
    const { showPostForm, postTitle, postContent } = this.state;

    if (!posts) return <div>Loading...</div>;

    if (posts.error) {
      return (
        <div>Whoops! Something went wrong. Try refreshing the page.</div>
      )
    }

    return (
      <div className="landing">
        <Modal
          isOpen={showPostForm}
          ariaHideApp={false}
          // onAfterOpen={afterOpenModal}
          onRequestClose={() => this.setState({ showPostForm: false })}
          style={customModalStyles}
          contentLabel="Creat a post"
        >
          <h2 style={{ textAlign: 'center' }}>Create a Post!</h2>
          <form className="ui form" onSubmit={this.createPost}>
            <div className="field">
              <label>Title:</label>
              <input value={postTitle} onChange={e => this.setState({ postTitle: e.target.value })} />
            </div>
            <div className="field">
              <label>Content:</label>
              <textarea value={postContent} onChange={e => this.setState({ postContent: e.target.value })} />
            </div>
            <button
              className="ui primary button"
              type="submit"
              style={{ margin: '0 auto', display: 'flex', padding: '.75rem 2rem' }}
            >
              Post
            </button>
          </form>
        </Modal>
        <button onClick={this.toggleForm} className="ui primary button">
          <span>Create Post</span>
          <i className="ui icon plus" />
        </button>
        {!posts.length ? (
          <div>Be the first to post!</div>
        ) : (
          <ul>
            {posts.map(post => <Post post={post} key={post?.id} />)}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => { 
  return { posts };
}

export default connect(mapStateToProps, { fetchPosts, createPost })(Landing);