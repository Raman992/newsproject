import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class AboutUs extends Component {
  render() {
    return (
     <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">About This Project</h1>
        <p className="text-muted fs-5">
          Learn more about this simple yet powerful React news app with newsapi.
        </p>
      </div>

      <div className="accordion shadow-lg rounded-4 overflow-hidden" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About this Website
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body bg-light">
              <strong>This is my first website built using React and a free api (newsapi).</strong> 
              In this project, I used React with newsapi to get news with top headlines straight to the user.
            </div>
          </div>
        </div>
       <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What This Website Does
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body bg-light">
              <strong>It is a news website.</strong> This website allows user to get latest news with top headlines straight to the user with less effort thanks to react and newsapi.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Motive
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body bg-light">
              <strong>Keep learning!</strong> Since this is my first React project, 
              my goal is to continue learning this framework and build 
              more interactive and problem solving web applications in the future.
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <Link className="btn btn-primary px-4 py-2 fw-semibold" to="/">
          Back to Home
        </Link>
      </div>
    </div>
    )
  }
}

export default AboutUs
