"use client";

import Head from "next/head";
import Script from "next/script";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function BookNow() {
  const searchParams = useSearchParams();

  // Initialize roomForm with query parameters if available
  const [roomForm, setRoomForm] = useState({
    fullName: searchParams.get("fullName") || "",
    cid: "",
    roomType: searchParams.get("roomType") || "Single Room",
    checkIn: "",
    guests: 1,
    special: "",
  });

  const [eventForm, setEventForm] = useState({
    fullName: "",
    cid: "",
    eventType: "",
    date: "",
    guests: 1,
    special: "",
  });

  const [diningForm, setDiningForm] = useState({
    fullName: "",
    cid: "",
    diningType: "Breakfast",
    date: "",
    time: "",
    guests: 1,
    special: "",
  });

  // Update roomForm if query parameters change
  useEffect(() => {
    setRoomForm((prev) => ({
      ...prev,
      fullName: searchParams.get("fullName") || prev.fullName,
      roomType: searchParams.get("roomType") || prev.roomType,
    }));
  }, [searchParams]);

  const handleRoomChange = (e) => {
    const { id, value } = e.target;
    setRoomForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleEventChange = (e) => {
    const { id, value } = e.target;
    setEventForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleDiningChange = (e) => {
    const { id, value } = e.target;
    setDiningForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleRoomSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/bookroom", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(roomForm),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Room booked successfully!");
        setRoomForm({
          fullName: "",
          cid: "",
          roomType: "Single Room",
          checkIn: "",
          guests: 1,
          special: "",
        });
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      alert("Request failed: " + err.message);
    }
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/eventBooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventForm),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Event booked successfully!");
        setEventForm({
          fullName: "",
          cid: "",
          eventType: "Wedding",
          date: "",
          guests: 1,
          special: "",
        });
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      alert("Request failed: " + err.message);
    }
  };

  const handleDiningSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/diningBooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(diningForm),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Dining booked successfully!");
        setDiningForm({
          fullName: "",
          cid: "",
          diningType: "Breakfast",
          date: "",
          time: "",
          guests: 1,
          special: "",
        });
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      alert("Request failed: " + err.message);
    }
  };

  return (
    <>
      
      
      <h2>Choose what you want to book from the below options:</h2>

      <div className="booking-container">
        {/* Room Booking Form */}
        <form className="booking-form" onSubmit={handleRoomSubmit}>
          <h3>Book a Room</h3>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={roomForm.fullName}
            onChange={handleRoomChange}
            required
          />

          <label htmlFor="cid">CID number:</label>
          <input
            type="text"
            id="cid"
            value={roomForm.cid}
            onChange={handleRoomChange}
            required
          />

          <label htmlFor="roomType">Room Type:</label>
          <select id="roomType" value={roomForm.roomType} onChange={handleRoomChange}>
            <option>Single Room</option>
            <option>Double Room</option>
            <option>Suite</option>
            <option>Standard</option>
            <option>Penthouse</option>
          </select>

          <label htmlFor="checkIn">Check-in Date:</label>
          <input
            type="date"
            id="checkIn"
            value={roomForm.checkIn}
            onChange={handleRoomChange}
            required
          />

          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            id="guests"
            min="1"
            value={roomForm.guests}
            onChange={handleRoomChange}
            required
          />

          <label htmlFor="special">Any special requests:</label>
          <input
            type="text"
            id="special"
            value={roomForm.special}
            onChange={handleRoomChange}
          />

          <button type="submit">Book Room</button>
        </form>

        {/* Event Booking Form */}
        <form className="booking-form" onSubmit={handleEventSubmit}>
          <h3>Book an Event</h3>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={eventForm.fullName}
            onChange={handleEventChange}
            required
          />

          <label htmlFor="cid">CID number:</label>
          <input
            type="text"
            id="cid"
            value={eventForm.cid}
            onChange={handleEventChange}
            required
          />

          <label htmlFor="eventType">Event Type:</label>
          <select id="eventType" value={eventForm.eventType} onChange={handleEventChange}>
            <option>Wedding</option>
            <option>Conference</option>
            <option>Birthday Party</option>
            <option>Gathering</option>
            <option>Farewell</option>
            <option>Others</option>


          </select>

         <label htmlFor="eventDate">Event Date:</label>
            <input
              type="date"
              id="eventDate"
              value={eventForm.eventDate}
              onChange={handleEventChange}
              required
            />


          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            id="guests"
            min="1"
            value={eventForm.guests}
            onChange={handleEventChange}
            required
          />

          <label htmlFor="special">Any special requests:</label>
          <input
            type="text"
            id="special"
            value={eventForm.special}
            onChange={handleEventChange}
          />

          <button type="submit">Book Event</button>
        </form>

        {/* Dining Booking Form */}
        <form className="booking-form" onSubmit={handleDiningSubmit}>
          <h3>Book for Dining</h3>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={diningForm.fullName}
            onChange={handleDiningChange}
            required
          />

          <label htmlFor="cid">CID number:</label>
          <input
            type="text"
            id="cid"
            value={diningForm.cid}
            onChange={handleDiningChange}
            required
          />

          <label htmlFor="diningType">Dining Type:</label>
          <select id="diningType" value={diningForm.diningType} onChange={handleDiningChange}>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
          </select>

          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={diningForm.date}
            onChange={handleDiningChange}
            required
          />

          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={diningForm.time}
            onChange={handleDiningChange}
            required
          />

          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            id="guests"
            min="1"
            value={diningForm.guests}
            onChange={handleDiningChange}
            required
          />

          <label htmlFor="special">Any special requests:</label>
          <input
            type="text"
            id="special"
            value={diningForm.special}
            onChange={handleDiningChange}
          />

          <button type="submit">Book Dining</button>
        </form>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Contact Us</h4>
              <p>Rinchending, Phuntsholing</p>
              <p>Chhuka, BHUTAN</p>
              <p>Phone: +975 17 00 00 00</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="/rooms">Rooms</a>
              <a href="/dinning">Dinning</a>
              <a href="/events">Events</a>
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://www.instagram.com/" className="social-link">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
                <a href="https://www.facebook.com/" className="social-link">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="https://x.com/" className="social-link">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Hotel REAL LIFE. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/script.js" strategy="lazyOnload" />
    </>
  );
}