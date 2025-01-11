import React from "react";
import "./reservations.css";

export default function Reservations() {
  return (
    <div className="wrapper">
      <main className="reservations">
        <section className="reservations__header">
          <h1>Reservations</h1>
          <h2>Book a Table</h2>
        </section>

        <form className="reservations__cntr">
          <div className="reservations__cntr__box">
            <div className="reservations__cntr__box-input">
              <label htmlFor="name">Name</label>
              <input type="text" required id="name" />
            </div>
            <div className="reservations__cntr__box-input">
              <label htmlFor="guest">Number of Guests</label>
              <select required>
                <option id="guest" value=""></option>
                <option id="guest" value="1">
                  1
                </option>
                <option id="guest" value="2">
                  2
                </option>
                <option id="guest" value="3">
                  3
                </option>
                <option id="guest" value="4">
                  4
                </option>
                <option id="guest" value="5">
                  5
                </option>
                <option id="guest" value="6">
                  6
                </option>
                <option id="guest" value="7">
                  7
                </option>
                <option id="guest" value="8">
                  8
                </option>
                <option id="guest" value="9+">
                  9+
                </option>
              </select>
            </div>
          </div>

          <div className="reservations__cntr__box">
            <div className="reservations__cntr__box-input">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" required />
            </div>
            <div className="reservations__cntr__box-input">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                pattern="[0-9]{3} - [0-9]{3} - [0-9]{4}"
                required
                id="phone"
              />
            </div>
          </div>

          <div className="reservations__cntr__box">
            <div className="reservations__cntr__box-input">
              <label htmlFor="date">Date</label>
              <input id="date" type="date" required />
            </div>
            <div className="reservations__cntr__box-input">
              <label htmlFor="time">Time</label>
              <input id="time" type="time" required />
            </div>
          </div>

          <div className="reservations__cntr__box-input">
            <label htmlFor="comment">Comments (optional)</label>
            <textarea id="comment"></textarea>
          </div>
        </form>
      </main>
    </div>
  );
}
