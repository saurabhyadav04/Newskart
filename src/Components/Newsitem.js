import React, { Component } from 'react'
import toast from 'react-hot-toast';

export default class Newsitem extends Component {
  render() {
    const notify = () =>{
      toast.success('Clicked On Read More !');
    }
    let {title , description ,imageurl ,newsurl , author, date}= this.props;
    return (
      <div>
      <div className="text-center my-3">
        <div className="card">
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date (date).toGMTString ()}</small></p>
            <a rel="noreferrer" href= {newsurl} target="_blank"className="btn btn-primary" onClick={notify}> Read More </a>
          </div>
        </div> 
      </div>
    </div>
      )
  }
}
