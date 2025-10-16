import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <img src='/Loading.gif' alt='Loading.gif'></img>
      </div>
    )
  }
}

export default Spinner
