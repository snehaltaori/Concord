import './Footer.css';

export default function Footer(){
    return (
      <div>
        <footer className="footer">
          <div className="section__container footer__container">
            <div className="footer__col">
              <h5>
                <a href="#">Concord.</a>
              </h5>
              <p>
                Together, we strive to redefine organizational management. Join
                us on this journey as we empower organizations to achieve
                greater heights through efficient and effective management
                practices.
              </p>
              <div className="footer__socials">
                <a href="#">
                  <i className="ri-facebook-fill" />
                </a>
                <a href="#">
                  <i className="ri-twitter-fill" />
                </a>
                <a href="#">
                  <i className="ri-instagram-line" />
                </a>
                <a href="#">
                  <i className="ri-linkedin-fill" />
                </a>
              </div>
            </div>
            <div className="footer__col">
              <h4>Quick Links</h4>
              <div className="footer__links">
                <a href="#">Home</a>
                <a href="#about">About Us</a>
                <a href="#blog">Blog</a>
              </div>
            </div>
            <div className="footer__col">
              <h4>Our Services</h4>
              <div className="footer__links">
                <a href="#">School Management</a>
                <a href="#">College Management</a>
                <a href="#">Institution Management</a>
                <a href="#">Resources Archive</a>
                <a href="#">AI Teaching Assistant</a>
              </div>
            </div>
            <div className="footer__col">
              <h4>Help</h4>
              <div className="footer__links">
                <a href="#">Privacy Policy</a>
                <a href="#">Support</a>
                <a href="#">Terms &amp; Condition</a>
              </div>
            </div>
          </div>
          <div className="footer__bar">
            Copyright © 2023 Concord. All rights reserved.
          </div>
        </footer>
      </div>
    );
}