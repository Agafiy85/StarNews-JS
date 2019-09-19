import React from "react";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="row">
      <div className="col navigation">
        <nav>
          <ul className="main-nav">
            <li>
            <Link to="/Home">Home</Link>
            </li>
            <li>
            <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Categories">Categories</Link>
            </li>
            <li>
            <Link to="/Lifestyle">Lifestyle</Link>
              
            </li>
            <li>
            <Link to="/Posts">Posts</Link>
            </li>
            <li>
            <Link to="/Video">Video</Link>
            </li>
            <li>
            <Link to="/Blog">Blog</Link>
            </li>
            <li>
            <Link to="/Events">Events</Link>
            </li>
            <li>
            <Link to="/FAQ">FAQ</Link>
            </li>
            <li>
              <a href="#">Get in touch</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
