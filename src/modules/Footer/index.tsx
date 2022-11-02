import React from "react";
import { Link } from "react-router-dom";
import { LogoSrcIcon } from "../../components/ImgLoader";
import { structureMap } from "../../routing/siteMapping";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="footer__about">
            <div className="footer__logo">
              <Link to="#">
                <LogoSrcIcon style={{ fill: "#fff" }} />
              </Link>
            </div>
            <p>The customer is at the heart of our unique business model, which includes design.</p>
          </div>
        </div>
        <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
          <div className="footer__widget">
            <h6>TeamHunter</h6>
            <ul>
              {
                structureMap("footer").map((item) => <li>{item.component}</li>)
              }
            </ul>
          </div>
        </div>
        <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
          <div className="footer__widget">
            <h6>NewLetter</h6>
            <div className="footer__newslatter">
              <p>Be the first to know about new arrivals, look books, sales & promos!</p>
              <form action="#">
                <input type="text" placeholder="Your email" />
                <button type="submit"><span className="icon_mail_alt"></span></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="footer__copyright__text">
            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            <p>Copyright ©
              <script>
                document.write(new Date().getFullYear());
              </script>2020
              All rights reserved | This template is made with <i className="fa fa-heart-o"
              aria-hidden="true"></i> by <Link to="#" target="_blank">ArtiTelligence</Link>
            </p>
            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer;