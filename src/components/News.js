import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {


  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=dcb27ee3af6345d1b5a6a628a815802a&page=1&pageSize=10";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
  }
  
  handleNextClick= async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=dcb27ee3af6345d1b5a6a628a815802a&page=${this.state.page + 1}&pageSize=10`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);  
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
  }

  handlePrevClick=async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=dcb27ee3af6345d1b5a6a628a815802a&page=${this.state.page - 1}&pageSize=10`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);  
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News24 - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <NewsItems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" >Page {this.state.page}</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News