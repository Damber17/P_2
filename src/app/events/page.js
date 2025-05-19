'use client'

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('/api/events');
      const data = await res.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <>
      <section className="events container">
        <h2>Recent Events</h2>
        <div className="event-list grid md:grid-cols-2 gap-4">
          {events.map((event, i) => (
            <div className="event-card border p-4 rounded shadow" key={i}>
              <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover rounded" />
              <div className="event-info mt-2">
                <h3>{event.title}</h3>
                <p className="date">Date: {new Date(event.date).toLocaleDateString()}</p>
                <p className="description">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

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
              <a href="/dinning">Dining</a>
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
            <p>&copy; 2025 Hotel REAL LIFE. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* External Scripts */}
      <Script src="/script.js" strategy="afterInteractive" />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}