import React from "react";
import "./navbar.css";

export default function Navbar() {
  const navLinks = [
    { path: "/home", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/menu", name: "Menu" },
    { path: "/reservations", name: "Reservations" },
  ];

  return (
    <div className="wrapper">
      <header className="navbar">
        <div className="img-container">
          <img
            src="https://littlelemonproject.com/Logo.png"
            alt="Little Lemon Logo"
          />
        </div>
        <nav>
          <ul>
            {navLinks.map((item, idx) => {
              return (
                <li key={idx}>
                  <a href={item.path}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
}
