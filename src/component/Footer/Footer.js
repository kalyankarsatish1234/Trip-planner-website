import React from "react";
import twitterLogo from "../../images/twitter_logo.jpg";
import githubLogo from "../../images/github_logo.png";
import './Footer.css'

export default function () {
  return (
    <>
      <div className="footer">
        <footer>
          <div className="footerLastBx">
            <div className="footerIcons">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterLogo} alt="Twitter" width="30" height="30" />
              </a>
              <a
                href="https://github.com/PiyushKumbhare07/Trip_Planner_Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubLogo} alt="GitHub" width="30" height="30" />
              </a>
              {/* Add other social media icons and links as needed */}
            </div>
            <div className="footer-container">
              <table>
                <thead className="white-header">
                  <tr>
                    <th>About Us</th>
                    <th>Explore</th>
                    <th>Help & Support</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <ul>
                        <li>
                          <a href="/about">Our Story</a>
                        </li>
                        <li>
                          <a href="/team">Our Team</a>
                        </li>
                        <li>
                          <a href="/careers">Careers</a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>
                          <a href="/destinations">Destinations</a>
                        </li>
                        <li>
                          <a href="/hotels">Hotels</a>
                        </li>
                        <li>
                          <a href="/flights">Flights</a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>
                          <a href="/contact">Contact Us</a>
                        </li>
                        <li>
                          <a href="/faq">FAQ</a>
                        </li>
                        <li>
                          <a href="/terms">Terms of Use</a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="footerCopyrightbx">
              <h1>© 2024 Trippy PVT. LTD.</h1>
              <h2>
                Country <b>India</b>
              </h2>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
