import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <hr />
          <article className="foot-content-left">
            <ul>2023 by GadgetArena</ul>
          </article>

          <article className="foot-content">
            <ul>
              <li>
                <a href="#">gadgetarena@gmail.com</a>
              </li>
              <li className="social">
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li className="social">
                <a href="https://twitter.com/">Twitter</a>
              </li>
              <li className="social">
                <a href="https://www.linkedin.com/company/">LinkedIn</a>
              </li>
            </ul>
          </article>
        </div>
      </footer>
    </div>
  );
}
