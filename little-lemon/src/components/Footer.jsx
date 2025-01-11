import React from "react";
import "./footer.css";

export default function Footer() {
  const navLinks = [
    { path: "/home", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/menu", name: "Menu" },
    { path: "/reservations", name: "Reservations" },
  ];

  return (
    <footer>
      <div className="wrapper">
        <div className="footer">
          <div className="img-container">
            <img
              src="https://little-lemon-restaurant-project.netlify.app/static/media/Logo%20Footer.2c859235d6c57bb54176.png"
              alt="Footer Img"
            />
          </div>
          <div className="footer__card">
            <article className="footer__card__links">
              <h3>Navigation</h3>
              <ul>
                {navLinks.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <a href={item.path}>{item.name}</a>
                    </li>
                  );
                })}
              </ul>
            </article>
            <article className="footer__card__links">
              <h3>Contact</h3>
              <p>Chicago, Illinois, USA</p>
              <p>(402) 458-3490</p>
              <p>info@littlelemon.com</p>
            </article>
            <article className="footer__card__links">
              <h3>Social Media Links</h3>
              <ul>
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Instagram</a>
                </li>
                <li>
                  <a href="/">YouTube</a>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </footer>
  );
}
