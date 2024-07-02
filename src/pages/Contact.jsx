import React from 'react'
export const Contact = () => {
  return (
    <div>
    <section className="w3l-inner-page-main">
    <div className="breadcrumb-infhny">
      <div className="container">
        <nav aria-label="breadcrumb">
          <h2 className="hny-title text-center">Contact</h2>
          <ol className="breadcrumb mb-0">
            <li><a href="/">Home</a>
              <span className="fa fa-angle-double-right"></span></li>
            <li className="active">Contact</li>
          </ol>
        </nav>
      </div>
    </div>
  </section>

  <section className="w3l-contact-main">
  <div className="contact-infhny py-5">
      <div className="container py-lg-3">
        <div className="top-map">
          <div className="map-content-9">
            <form action="https://sendmail.w3layouts.com/submitForm" method="post">
              <div className="form-top1">
                <h3 className="hny-title text-center mb-lg-5 mb-4" data-aos="fade-down">Leave us a Message</h3>
                <div className="form-top">
                  <div className="form-top-left" 
                       data-aos="fade-up">
                    <input type="text" 
                           name="w3lName" 
                           id="w3lName" 
                           placeholder="Name" 
                           required=""/>
                    <input type="email" 
                           name="w3lSender" 
                           id="w3lSender" 
                           placeholder="Email*" 
                           required=""/>
                    <input type="text" 
                           name="w3lSubject" 
                           id="w3lName" 
                           placeholder="Subject" 
                           required=""/>
                  </div>
                  <div className="form-top-righ" 
                       data-aos="fade-up">
                    <textarea name="w3lMessage" 
                              id="w3lMessage" 
                              placeholder="Message*" 
                              required="">
                    </textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Submit Now</button>
                </div>
              </div>
            </form>
          </div>
          <div className="cont-details">
            <div className="cont-top london text-center" data-aos="fade-up">
              <h6><span className="fa fa-map-marker"></span> London Office</h6>
              <p>90 Maryam Springs Suite 260, Courbevoie, London, London</p>
              <p><a href="tel:+342 5897555">+342 5897556</a></p>
              <p><a href="mailto:info@example.com">mail@example.com</a></p>
            </div>
            <div className="cont-top paris text-center" 
                 data-aos="fade-up">
              <h6><span className="fa fa-map-marker"></span> Paris Office</h6>
              <p>20 Maryam Springs Suite 260, Courbevoie, Paris, Paris</p>
              <p><a href="tel:+442 5897555">+442 5897555</a></p>
              <p><a href="mailto:info@example.com">mail@example.com</a></p>
            </div>
            <div className="cont-top newyork text-center" data-aos="fade-up">
              <h6><span className="fa fa-map-marker"></span> New York Office</h6>
              <p>80 Maryam Springs Suite 260, Courbevoie, New York, USA</p>
              <p><a href="tel:+242 5897555">+242 5897554</a></p>
              <p><a href="mailto:info@example.com">mail@example.com</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986613799748!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e3!4m0!4m0!5e0!3m2!1sen!2sin!4v1570181661801!5m2!1sen!2sin"
        allowfullscreen=""></iframe>
        </div>
    </div>
  </section>
  </div>
  )
}