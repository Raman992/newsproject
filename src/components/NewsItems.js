import React, { Component } from 'react';

export class NewsItems extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, author, date } = this.props;

    return (
      <div className="my-3">
        
        <div
          className="card"
          style={{
            minHeight: '28rem',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}
        >
          
          <img
            src={ imageUrl ? imageUrl : "https://imgs.search.brave.com/nPzFg34aSrbbdUKnUjcGbpZo5pO9L3NK5RNG2bJ4be0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNDQz/OTQwOC9wZXhlbHMt/cGhvdG8tNDQzOTQw/OC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA" }
            className="card-img-top"
            alt="News thumbnail"
            style={{
              height: '160px',
              objectFit: 'cover',
            }}
          />
          <div className="card-body" style={{ display: 'flex', flexDirection: 'column' }}>
            <h5
              className="card-title"
              style={{
                fontSize: '1.05rem',
                fontWeight: '600',
                marginBottom: '10px',
                minHeight: '48px',
                overflow: 'hidden',
              }}
            >
              {title ? title.slice(0, 60) + (title.length > 60 ? '…' : '') : 'Untitled'}
            </h5>
            <p
              className="card-text"
              style={{
                fontSize: '0.9rem',
                color: '#555',
                flexGrow: 1,
                minHeight: '70px',
                overflow: 'hidden',
              }}
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
              className="btn btn-sm btn-primary"
              style={{
                alignSelf: 'flex-start',
                marginTop: '10px',
                padding: '6px 12px',
              }}
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
