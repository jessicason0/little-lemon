import React from "react";

export default function Navbar() {
  const navLinks = [
    { path: "/home", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/menu", name: "Menu" },
    { path: "/reservations", name: "Reservations" },
    { path: "orderonline", name: "Order Online" },
    { path: "login", name: "Login" },
  ];

  return (
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
  );
}
