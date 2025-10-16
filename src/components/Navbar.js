import React, { Component } from 'react'

export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid">
            
            <a className="navbar-brand" href="/"><img alt="icon" src="/favicon-32x32.png" width="40" height="40" /> News24</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/aboutus">About us</a>
                </li>
              </ul>
              <span className="navbar-text fw-bolder">
                Welcome to the News24 where you can find all the news for free
              </span>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
