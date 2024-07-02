import React from "react";
export const Pricing = () => {
  return (
    <div>
      <section className="w3l-inner-page-main">
        <div className="breadcrumb-infhny">
          <div className="container">
            <nav aria-label="breadcrumb">
              <h2 className="hny-title text-center">Pricing</h2>
              <ol className="breadcrumb mb-0">
                <li>
                  <a href="/">Home</a>
                  <span className="fa fa-angle-double-right"></span>
                </li>
                <li className="active">Pricing</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="w3l-pricing-6">
        <div className="pricing py-5">
          <div className="container py-lg-3">
            <div className="card-body">
              <div className="table-main">
                <table className="table">
                  <thead className="sub-titles">
                    <tr>
                      <th className="fixed">Website</th>

                      <th>Free </th>
                      <th>Unlimited</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="price">
                      <td className="top-bottom-gap fixed">
                        <h5 className="sub-titles">Pricing and its Info</h5>
                      </td>
                      <td className="top-bottom-gap">
                        <span className="sign" data-aos="fade-up">
                          $
                        </span>
                        <span className="currency" data-aos="fade-up">
                          0
                        </span>
                        <p data-aos="fade-up">
                          Per month billed annually, or $15 billed monthly, or
                          $120 billed monthly
                        </p>
                      </td>
                      <td className="top-bottom-gap">
                        <span className="sign" data-aos="fade-up">
                          $
                        </span>
                        <span className="currency" data-aos="fade-up">
                          40
                        </span>
                        <p data-aos="fade-down">
                          Per month billed annually, or $15 billed monthly, or
                          $120 billed monthly
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="fixed">
                        <h5 className="sub-titles">Hosting</h5>
                      </td>
                      <td className="check">✓</td>
                      <td className="check">✓</td>
                    </tr>
                    <tr>
                      <td className="fixed">
                        <div className="d-grid">
                          <h5 className="sub-titles">Connect of domain</h5>
                        </div>
                      </td>
                      <td className="check">✓</td>
                      <td className="check">✓</td>
                    </tr>
                    <tr>
                      <td className="fixed">
                        <h5 className="sub-titles">SSL certificate</h5>
                      </td>
                      <td className="check">✓</td>
                      <td className="check">✓</td>
                    </tr>
                    <tr>
                      <td className=" fixed">
                        <div className="grid-className">
                          <h5 className="sub-titles">Monthly visits </h5>
                        </div>
                      </td>
                      <td>
                        <h6 className="amount">25,000</h6>
                      </td>
                      <td>
                        <h6 className="amount">50,000</h6>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="fixed">
                        <div className="d-grid">
                          <h5 className="sub-black">Form submission</h5>
                        </div>
                        <p>
                          Collection of components and UI elements for creating
                          website.{" "}
                        </p>
                      </td>
                      <td>
                        <h5 className="sub-black">500</h5>
                      </td>
                      <td>
                        <h5 className="sub-black">1000</h5>
                        <p>
                          Collection of components and UI elements for creating
                          efficient website
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="fixed">
                        <div className="grid-class">
                          <h5 className="sub-titles">CMS items </h5>
                        </div>
                      </td>
                      <td></td>

                      <td>
                        <h6 className="amount">10,000</h6>
                      </td>
                    </tr>
                    <tr>
                      <td className="fixed border-none"></td>
                      <td className="border-none">
                        <button className="pricing-button btn" data-aos="fade-up">
                          Purchase
                        </button>
                      </td>
                      <td className="border-none">
                        <button className="pricing-button btn" data-aos="fade-up">
                          Purchase
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};