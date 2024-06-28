import React from "react";

export const Header = () => {
  return (
    <div className="template">
      <header id="site-header" 
              className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark stroke">
            <a className="navbar-brand" href="index.html">
              <span className="fa fa-lightbulb-o"></span>
              Usance
            </a>
            <button className="navbar-toggler bg-gradient"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
            <span className="navbar-toggler-icon fa fa-bars"> </span>
            </button>
            <div className="collapse navbar-collapse" 
                 id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" 
                     href="index.html">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link effect-3" 
                     href="services.html">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link effect-3" 
                     href="pricing.html">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link effect-3" 
                     href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};
