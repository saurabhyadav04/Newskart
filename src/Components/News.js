import React, { Component } from "react";
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types'
export default class News extends Component {
  capitalizeFirstletter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
}
  constructor(props) {
    super(props);
    this.state = {
      articles : [],
    }
    document.title=`NewsKart - ${this.capitalizeFirstletter(this.props.topic)}`;
  }

  static defaultProps = {
    topic : 'breaking-news',
    country: 'in',
    Lang : 'en',
    
  }
  static PropsTypes = {
    topic : PropTypes.string,
    country: PropTypes.string,
    Lang : PropTypes.string,
  }

 async componentDidMount(){
    let url = `https://gnews.io/api/v4/top-headlines?country=${this.props.country}&topic=${this.props.topic}&token=e3f1aff6eeb861fd975b094396f74b38&lang=en`;
    let data = await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
    this.setState({
      articles : parseData.articles
    })
  }
  
  render() {
    return (
      <div className="text-center my-4">
        <h1 > NewsKart - Top {this.capitalizeFirstletter(this.props.topic)} Headlines </h1>
        <div className="row mx-5">
        {this.state.articles.map((element) => {
         return <div className="col-md-4" key={element.url}>
           <Newsitem
            title={element.title}
            description={element.description}
            imageurl={element.image}
            newsurl={element.url}
            date={element.publishedAt}
            author={element.author}
          />
</div>
        })}
      </div>
      </div> 
    );
  }
}
