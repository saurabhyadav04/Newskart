import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default class NavBar extends Component {
 
  render() {
    const notify = () =>{
      toast.success('Here NewsKart - Top General Headlines !');
    }
    const homey = () =>{
      toast.success('Clicked On Home !');
    }
    const Abme = () =>{
      toast.success('Clicked On About Me !');
    }
    const sp = () =>{
      toast.success('Clicked On Sports !');
    }
    const En = () =>{
      toast.success('Clicked On Entertainment !');
    }
    const he = () =>{
      toast.success('Clicked On Health');
    }
    const Te = () =>{
      toast.success('Clicked On Technology !');
    }
    const sc = () =>{
      toast.success('Clicked On Science !');
    }
    return (
      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" onClick={notify} to="/">
          <img src="navbarimage.jpg" alt="" width="30" height="30" className="d-inline-block align-text-top"/>
             ewsKart
            </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page"  onClick={homey} to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page"  onClick={Abme} to="/About">About Me</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page"  onClick={sp} to="/Sports">Sports</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page"  onClick={En} to="/Entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page"  onClick={he} to="/Health">Health</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page"  onClick={Te} to="/Technology">Technology</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" onClick={sc}  to="/Science">Science</Link>
              </li>
            </ul>
            <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}
