import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  articles = [
{
"source": {
"id": "associated-press",
"name": "Associated Press"
},
"author": "Riaz Khan",
"title": "Afghanistan says it has killed 58 Pakistani soldiers in overnight border operations - AP News",
"description": "Afghanistan says it has killed 58 Pakistani soldiers in overnight border operations, in response to what it called repeated violations of its territory and airspace. Earlier in the week, Afghan authorities accused Pakistan of bombing the capital, Kabul, and a…",
"url": "https://apnews.com/article/pakistan-afghanistan-border-6089d7b9cf33d2dcac365808ad3dad53",
"urlToImage": "https://dims.apnews.com/dims4/default/101a76b/2147483647/strip/true/crop/4032x2268+0+210/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F81%2F2e%2F02eb98e1e4459b9c0bcb252cd32e%2F2fd546528419440c9b3137903bb3fe5e",
"publishedAt": "2025-10-12T08:13:00Z",
"content": "KABUL, Afghanistan (AP) Afghanistan said Sunday it killed 58 Pakistani soldiers in overnight border operations, in response to what it called repeated violations of its territory and airspace.\r\nEarli… [+4171 chars]"
},
{
"source": {
"id": "associated-press",
"name": "Associated Press"
},
"author": "Nalova Akua, Wilson Mcmakin",
"title": "Cameroon heads to the polls as the world’s oldest president bids to extend his rule - AP News",
"description": "Voters in Cameroon are heading to the polls in an election that could extend the rule of 93-year-old President Paul Biya. Analysts predict Biya will win Sunday's vote, continuing his leadership since 1982. Biya faces nine opposition candidates, including some…",
"url": "https://apnews.com/article/cameroon-presidential-election-voting-biya-161234517f711518a41d66a29357eac8",
"urlToImage": "https://dims.apnews.com/dims4/default/b28e6cf/2147483647/strip/true/crop/5472x3078+0+285/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fdd%2F18%2F2ac96b9326b794b45bb50487e650%2Fa5f8dff0c7994435b33ad5d1804114e9",
"publishedAt": "2025-10-12T07:17:00Z",
"content": "YAOUNDE, Cameroon (AP) Polls opened in Cameroon on Sunday in an election that could see Africas oldest leader extend his rule by another 7 years.\r\nAround 8 million voters, including over 34,000 overs… [+2179 chars]"
},
{
"source": {
"id": "associated-press",
"name": "Associated Press"
},
"author": "Nalova Akua, Wilson Mcmakin",
"title": "Cameroon heads to the polls as the world’s oldest president bids to extend his rule - AP News",
"description": "Voters in Cameroon are heading to the polls in an election that could extend the rule of 93-year-old President Paul Biya. Analysts predict Biya will win Sunday's vote, continuing his leadership since 1982. Biya faces nine opposition candidates, including some…",
"url": "https://apnews.com/article/cameroon-presidential-election-voting-biya-161234517f711518a41d66a29357eac8",
"urlToImage": "https://dims.apnews.com/dims4/default/b28e6cf/2147483647/strip/true/crop/5472x3078+0+285/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fdd%2F18%2F2ac96b9326b794b45bb50487e650%2Fa5f8dff0c7994435b33ad5d1804114e9",
"publishedAt": "2025-10-12T07:17:00Z",
"content": "YAOUNDE, Cameroon (AP) Polls opened in Cameroon on Sunday in an election that could see Africas oldest leader extend his rule by another 7 years.\r\nAround 8 million voters, including over 34,000 overs… [+2179 chars]"
},{
"source": {
"id": "associated-press",
"name": "Associated Press"
},
"author": "Nalova Akua, Wilson Mcmakin",
"title": "Cameroon heads to the polls as the world’s oldest president bids to extend his rule - AP News",
"description": "Voters in Cameroon are heading to the polls in an election that could extend the rule of 93-year-old President Paul Biya. Analysts predict Biya will win Sunday's vote, continuing his leadership since 1982. Biya faces nine opposition candidates, including some…",
"url": "https://apnews.com/article/cameroon-presidential-election-voting-biya-161234517f711518a41d66a29357eac8",
"urlToImage": "https://dims.apnews.com/dims4/default/b28e6cf/2147483647/strip/true/crop/5472x3078+0+285/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fdd%2F18%2F2ac96b9326b794b45bb50487e650%2Fa5f8dff0c7994435b33ad5d1804114e9",
"publishedAt": "2025-10-12T07:17:00Z",
"content": "YAOUNDE, Cameroon (AP) Polls opened in Cameroon on Sunday in an election that could see Africas oldest leader extend his rule by another 7 years.\r\nAround 8 million voters, including over 34,000 overs… [+2179 chars]"
},
]

  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News24 - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News