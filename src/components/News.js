import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'

export class News extends Component {

      static defaultProps = {
        country: 'in',
        pageSize: 8, 
        category: 'general',
      }

      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number, 
        category: PropTypes.string,
      }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1

    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=dcb27ee3af6345d1b5a6a628a815802a&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
  }
  
  handleNextClick= async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=dcb27ee3af6345d1b5a6a628a815802a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);  
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
  }

  handlePrevClick=async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=dcb27ee3af6345d1b5a6a628a815802a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
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
        <h2 className='text-center'>News24 - Top Headlines</h2>
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
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News