import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {

  static defaultProps = {
    country: 'us',
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
      page: 1,
      totalResults: 0,

    }
  }

  async funcNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dcb27ee3af6345d1b5a6a628a815802a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.funcNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })
  };


  //   handlePrevClick= async ()=>{
  //         this.setState({
  //             page: this.state.page - 1,            
  //       })
  //       this.funcNews();
  // }

  //   handleNextClick = async () => {
  //     if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {   for previous and next page functions
  //               this.setState({
  //             page: this.state.page + 1,            
  //       })
  //       this.funcNews();
  //     }
  //   }

  render() {
    return (
      <div className="container my-3">
        <h2 className='text-center' style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "800",
          margin: "2rem 0 1rem",
          background: "linear-gradient(180deg, #000000ff, #5f7e66ff, #ff0000ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "1px",
          fontFamily: "'Poppins', sans-serif",
        }}>News24 - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length < this.state.totalResults}
        loader={this.state.articles.length < this.state.totalResults ? <Spinner /> : null}
        endMessage={
          this.state.articles.length >= this.state.totalResults && this.state.articles.length > 0 ? (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              <b>No more articles to load.</b>
            </p>
          ) : null
        }
      >
        <div className="container">
          <div className="row">
            {this.state.articles.map((element, index) => {
              const uniqueKey = element.url ? element.url + index : index;
              return (
                <div className="col-md-3" key={uniqueKey}>
                  <NewsItems
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt ? element.publishedAt : "Unknown"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>


        {/* <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <NewsItems                                  
              title={element.title ? element.title : ""} 
              description={element.description ? element.description : ""}        to use the previous and next page functions
              imageUrl={element.urlToImage} 
              newsUrl={element.url}
              author={element.author?element.author:"Unknown"}
              date={element.publishedAt?element.publishedAt:"Unknown"}
              />
            </div>
          })}
        </div> */}
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" >Page {this.state.page}</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </div>
    )
  }
}

export default News