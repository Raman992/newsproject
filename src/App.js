import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import NewsItems from './components/NewsItems'

export class App extends Component {
  render() {
    return (
      <div className='bg-dark' >
        <Navbar/>
        <News/>
      </div>
    )
  }
}

export default App
