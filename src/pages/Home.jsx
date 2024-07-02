import React from "react";

export const Home = () => {
  return (
    <div>
       <section className="w3l-banner-main">
        <div className="bannerhny-content text-center">
          <h3 data-aos="fade-up">
            Manage your time,make <span>things</span>
            <br />
            more oraganized.
          </h3>
          <h6 data-aos="fade-up">Click to Join the Advance Workshop</h6>
          <div className="banner-button" data-aos="fade-down">
            <a href="contact.html" className="btn">
              {" "}
              Join With Us
            </a>
            <small>
              for macOS /<a href="#">See all platforms</a>
            </small>
          </div>
        </div>
      </section>

      <section className="w3l-content-12-main">
        <div className="content-12 text-left py-5">
          <div className="container pt-lg-3">
            <h3 className="hny-title text-center">How it Works </h3>
            <div className="content-info-tabs mt-4">
              <div className="tab-main mx-auto text-md-center">
                <input id="tab1" type="radio" name="tabs" checked />
                <label for="tab1">
                  <span className="fa fa-lock" aria-hidden="true"></span>
                  Create Account
                </label>
                <input id="tab2" type="radio" name="tabs" />
                <label for="tab2">
                  <span className="fa fa-credit-card" aria-hidden="true"></span>{" "}
                  Make Payment
                </label>
                <input id="tab3" type="radio" name="tabs" />
                <label for="tab3">
                  <span className="fa fa-smile-o" aria-hidden="true"></span>
                  Enjoy Yourself
                </label>
                <input id="tab4" type="radio" name="tabs" />
                <label for="tab4">
                  <span className="fa fa-trophy" aria-hidden="true"></span>
                  Rewards
                </label>
                <section id="content1" data-aos="zoom-in">
                  <img
                    src= "./src/assets/images/screen-1.png"
                    className="img-fluid"
                    alt="mobile-image"
                  />
                </section>
                <section id="content2" data-aos="zoom-in">
                  <img
                    src="./src/assets/images/screen-2.png"
                    className="img-fluid"
                    alt="mobile-image"
                  />
                </section>
                <section id="content3" data-aos="zoom-in">
                  <img
                    src="./src/assets/images/screen-3.png"
                    className="img-fluid"
                    alt="mobile-image"
                  />
                </section>
                <section id="content4" data-aos="zoom-in">
                  <img
                    src="./src/assets/images/screen-4.png"
                    className="img-fluid"
                    alt="mobile-image"
                  />
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
