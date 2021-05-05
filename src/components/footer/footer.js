import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="s-footer">
          <div className="row">
            <div className="column large-4 medium-6 w-1000-stack s-footer__social-block">
              <ul className="s-footer__social">
                <li>
                  <a href="https://github.com/MissNG-Git">
                    <i className="fab fa-github" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jessie-n-9302b962/">
                    <i className="fab fa-linkedin-in" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="mailto:MissNg.dev@gmail.com">
                    <i className="far fa-envelope" aria-hidden="true" />
                  </a>
                </li>
              </ul>
              <span>© Content Copyright MissNG 2021</span>
            </div>
            <div className="column large-7 medium-6 w-1000-stack ss-copyright">
              <span>
                © Ceevee 2021 &#38; Design by{" "}
                <a href="https://www.styleshout.com/">StyleShout</a>
              </span>
            </div>
          </div>
          <div className="ss-go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z" />
              </svg>
            </a>
          </div>
          {/* end ss-go-top */}
        </footer>
      </React.Fragment>
    );
  }
}
