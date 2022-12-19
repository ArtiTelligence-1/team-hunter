import React, { useEffect, useState } from 'react';

const Contact = () => (
  <>
    {/* <!-- Map Begin --> */}
    <div className="map">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10292.545729952744!2d24.02638767756957!3d49.839893944898236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7a31f0dccd%3A0x9869cc7025bc8e3f!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIgItCb0YzQstGW0LLRgdGM0LrQsCDQn9C-0LvRltGC0LXRhdC90ZbQutCwIg!5e0!3m2!1suk!2sua!4v1664650649071!5m2!1suk!2sua"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
      />
    </div>
    {/* <!-- Map End --> */}
    {/* <!-- Contact Section Begin --> */}
    <section className="contact spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="contact__text">
              <div className="section-title">
                <span>Information</span>
                <h2>Contact Us</h2>
                <p>
                  While we’re good with smoke signals,
                  there are simpler ways for us to get in touch.
                </p>
              </div>
              <ul>
                <li>
                  <h4>Ukraine</h4>
                  <p>
                    12 S.Bandery street, Lviv, 79013
                    <br />
                    +38 032 258-22-82
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="contact__form">
              <form action="#">
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="col-lg-12">
                    <textarea className="textarea_prop" placeholder="Message" />
                    <button type="submit" className="site-btn">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Contact Section End --> */}
  </>
);

export default Contact;
