// Detail.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import image from './pic.jpg';

function Detail({ items }) {
  const { id } = useParams();
  const itemId = parseInt(id);
  const item = items.find((item) => item.id === itemId);

  const [showDetail, setShowDetail] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);

  const toggleDetail = () => {
    setShowDetail(true);
    setShowUserInfo(false);
  };

  const toggleUserInfo = () => {
    setShowDetail(false);
    setShowUserInfo(true);
  };

  if (!item) {
    return <div className="detail-container">Item not found.</div>;
  }

  return (
    <div className="detail-container">
      <nav className="navbar">
        <h1>Social Media App</h1>
        <Link to="/" className="nav-link">
          Back to Home
        </Link>
      </nav>
      <div className="item-detail">
        <img className='img' src={image} alt='img' />
        <div>
          <h2 className="item-title">{item.title}</h2>
          <div className="toggle-buttons">
            <button
              className={`detail-button ${showDetail ? 'active' : ''}`}
              onClick={toggleDetail}
            >
              Detail
            </button>
            <button
              className={`detail-button ${showUserInfo ? 'active' : ''}`}
              onClick={toggleUserInfo}
            >
              User Info
            </button>
          </div>
          {showDetail && <p className="item-body">{item.body}</p>}
          {showUserInfo && <p className="user-id">User ID: {item.userId}</p>}
        </div>
      </div>
      <h3>More Posts</h3>
      <div className="item-list">
        {items.map((post) => (
          <Link key={post.id} to={`/item/${post.id}`} className="item-card">
            <img className='imag' src={image} alt='img' />
            <h2 className="item-title">{post.title}</h2>
            <p className="item-description">{`${post.body.slice(0, 100)}...`}</p>
            <p className="read-more">Read More...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.data.items,
});

export default connect(mapStateToProps)(Detail);
