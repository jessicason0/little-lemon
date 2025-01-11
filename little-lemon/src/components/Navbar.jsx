import React from "react";
import "./navbar.css";
import { Link } from "react-router";

const layout = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/reservations", label: "Reservations" },
];

export default function Navbar() {
  return (
    <div className="wrapper">
      <header className="navbar">
        <Link to="/">
          <div className="img-container">
            <img
              src="https://littlelemonproject.com/Logo.png"
              alt="Little Lemon Logo"
            />
          </div>
        </Link>
        <nav>
          <ul>
            {layout.map((item, idx) => {
              return (
                <li key={idx}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
}
