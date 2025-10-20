import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import LoadingBar from 'react-top-loading-bar';

export class App extends Component {
  pageSize=8;
  state ={
    progress:12
  }
  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  render() {
    
    return (
      
      <Router>
        <div >
          <Navbar />
          <LoadingBar
          color='red' height={3}
          progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News key="general" pageSize={this.pageSize} setProgress={this.setProgress} country="us" category="general" />} />
            <Route path="/business" element={<News key="business" pageSize={this.pageSize} setProgress={this.setProgress} country="us" category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} setProgress={this.setProgress} country="us" category="entertainment" />} />
            <Route path="/general" element={<News key="general" pageSize={this.pageSize} setProgress={this.setProgress} country="us" category="general" />} />
            <Route path="/health" element={<News key="health" pageSize={this.pageSize} setProgress={this.setProgress} country="us" category="health" />} />
            <Route path="/science" element={<News key="science" pageSize={this.pageSize} setProgress={this.setProgress} country="us" category="science" />} />
            <Route path="/sports" element={<News key="sports" pageSize={this.pageSize} setProgress={this.setProgress} country="us" category="sports" />} />
            <Route path="/technology" element={<News key="technology" pageSize={this.pageSize} setProgress={this.setProgress} country="us" category="technology" />} />  
            <Route path="/aboutus" element={<AboutUs/>}/>         
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App
