import React, { Component } from 'react';
import "./NewsItem.css";

export class NewsItems extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, author, date } = this.props;

    return (
      <div className="my-3">        
        <div
          className="news-card"
        >          
          <img
            src={ imageUrl ? imageUrl : "https://imgs.search.brave.com/nPzFg34aSrbbdUKnUjcGbpZo5pO9L3NK5RNG2bJ4be0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNDQz/OTQwOC9wZXhlbHMt/cGhvdG8tNDQzOTQw/OC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA" }
            className="news-img"
            alt="News thumbnail"
          />
          <div className="news-content" style={{ display: 'flex', flexDirection: 'column' }}>
            <h5
              className="news-title"
            >
              {title ? title.slice(0, 60) + (title.length > 60 ? '…' : '') : 'Untitled'}
            </h5>
            <p
              className="news-description"
            >
              {description
                ? description.slice(0, 100) + (description.length > 100 ? '…' : '')
                : 'No description available.'}
            </p>
            <p className="card-text">
              <small className="text-body-secondary">Last updated by {author} on {new Date(date).toLocaleTimeString()}</small>
              <span className="badge text-bg-success">Hotnews</span>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="read-more"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
