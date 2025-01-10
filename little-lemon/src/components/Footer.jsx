import React from "react";

export default function Footer() {
  const navLinks = [
    { path: "/home", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/menu", name: "Menu" },
    { path: "/reservations", name: "Reservations" },
    { path: "orderonline", name: "Order Online" },
    { path: "login", name: "Login" },
  ];

  return (
    <footer>
      <div className="img-container">
        <img src="" alt="Footer Img" />
      </div>
      <div className="footer_card">
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
          <ul>
            <li>
              <a href="/address">Address</a>
            </li>
            <li>
              <a href="/phone">Phone Number</a>
            </li>
            <li>
              <a href="/email">Email</a>
            </li>
          </ul>
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
    </footer>
  );
}
