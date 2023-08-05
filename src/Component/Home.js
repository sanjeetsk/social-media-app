
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/dataActions';
import { Link } from 'react-router-dom';
import image from './pic.jpg';

function Home({ items, loading, fetchData }) {
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="home-container">
            <nav className="navbar">
                <h1>Social Media App</h1>
            </nav>
            <div className="item-list">
                {items.map((item) => (
                    <Link key={item.id} to={`/item/${item.id}`} className="item-card">
                        <img className='img' src={image} alt='img'/>
                        <h2 className="item-title">{item.title}</h2>
                        <p className="item-description">{`${item.body.slice(0, 100)}...`}</p>
                        <p className="read-more">Read More...</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    items: state.data.items,
    loading: state.data.loading,
});

export default connect(mapStateToProps, { fetchData })(Home);
