import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <footer className="page-footer grey darken-3 z-depth-5">
      <div className="row container z-depth-5">
        <div className="col l6 s6">
        <h5 className="white-text">Nazmul Alom</h5>
          <p className="grey-text text-lighten-4">
            This site is created using React and Redux with Materialize CSS
          </p>
        </div>

        <div className="col l6 s6">
          <div className="footer-items right">
            <div className="row">
              <ul>
                <li className="col">
                  <Link
                    to="/post"
                    className="footer-link white-text text-darken-1"
                  >
                    Create Post
                  </Link>
                </li>
                <li className="col">
                  <Link to="/" className="footer-link white-text text-darken-1">
                    View Post
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row">
              <ul>
                <li className="col">
                  <a
                    href="https://www.linkedin.com/in/nazmul-alom-441180125/"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in white-text text-darken-1" />
                  </a>
                </li>
                <li className="col">
                  <a href="https://twitter.com/nazmulshuvo03" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter white-text text-darken-1" />
                  </a>
                </li>
                <li className="col">
                  <a href="https://github.com/nazmulshuvo03" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github white-text text-darken-1" />
                  </a>
                </li>
                <li className="col">
                  <a
                    href="https://codesandbox.io/u/nazmulshuvo03"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <i className="fab fa-react white-text text-darken-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container center">
          copywight © 2019
          <br /> <i className="far fa-user"> Nazmul Alom </i>
          <br /> <i className="far fa-envelope"> nazmulshuvo03@gmail.com</i>
        </div>
      </div>
    </footer>
  );
};

export default Navbar;
