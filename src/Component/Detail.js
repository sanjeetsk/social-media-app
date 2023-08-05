// components/Detail.js
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Detail({ items, match }) {
    const itemId = parseInt(match.params.id);
    const item = items.find((item) => item.id === itemId);

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
                <h2 className="item-title">{item.title}</h2>
                <p className="item-body">{item.body}</p>
                <p className="user-id">User ID: {item.userId}</p>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    items: state.data.items,
});

export default connect(mapStateToProps)(Detail);
