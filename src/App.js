import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'


export class App extends Component {
  render() {
    return (
      <div className='bg-dark' >
        <Navbar/>
        <News pageSize={5}/>
      </div>
    )
  }
}

export default App
