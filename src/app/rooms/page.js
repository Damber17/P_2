"use client";

import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { useState } from 'react';

export default function RoomsPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      
      <section className="rooms-grid">
        <div className="container">

          {/* Deluxe Room */}
          <div className="room-type deluxe">
            <div className="room-images">
              <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80" alt="Deluxe Room" />
              <div className="room-gallery">
                <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80" alt="Bathroom" />
              </div>
            </div>
            <div className="room-details">
              <h2>Deluxe Room</h2>
              <div className="room-features">
                <span>45 m²</span>
                <span>City View</span>
                <span>King Bed</span>
                <span>Rain Shower</span>
              </div>
              <p>Experience luxury in our spacious Deluxe Room, featuring contemporary design and premium amenities.</p>
              <div className="room-price">
                <span className="price">Nu.3500</span>
                <span className="per-night">per night</span>
              </div>
              <button className="book-btn" data-room-type="Deluxe Room">Book Now</button>
            </div>
          </div>

          {/* Executive Suite */}
          <div className="room-type suite">
            <div className="room-images">
              <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80" alt="Suite" />
              <div className="room-gallery">
                <img src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&q=80" alt="Living Room" />
                <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80" alt="Balcony" />
              </div>
            </div>
            <div className="room-details">
              <h2>Executive Suite</h2>
              <div className="room-features">
                <span>75 m²</span>
                <span>Ocean View</span>
                <span>Living Room</span>
                <span>Private Balcony</span>
              </div>
              <p>Indulge in the ultimate luxury experience with our Executive Suite, offering breathtaking views and exclusive amenities.</p>
              <div className="room-price">
                <span className="price">Nu.4500</span>
                <span className="per-night">per night</span>
              </div>
              <button className="book-btn" data-room-type="Executive Suite">Book Now</button>
            </div>
          </div>

          {/* Standard Room */}
          <div className="room-type standard">
            <div className="room-images">
              <img src="https://th.bing.com/th/id/OIP.YPhRUCy2j4GhDqdwXV4ESwHaFD?w=282&h=192&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="Standard Room" />
            </div>
            <div className="room-details">
              <h2>Standard Room</h2>
              <div className="room-features">
                <span>30 m²</span>
                <span>Garden View</span>
                <span>Queen Bed</span>
                <span>Walk-in Shower</span>
              </div>
              <p>A cozy and comfortable stay awaits in our Standard Room, perfect for budget-conscious travelers.</p>
              <div className="room-price">
                <span className="price">Nu.2500</span>
                <span className="per-night">per night</span>
              </div>
              <button className="book-btn" data-room-type="Standard Room">Book Now</button>
            </div>
          </div>

          {/* Family Suite */}
          <div className="room-type family">
            <div className="room-images">
              <img src="https://th.bing.com/th/id/OIP.qhDkOvbVXX16YZE_ryh57gHaE8?w=241&h=181&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="Family Suite" />
            </div>
            <div className="room-details">
              <h2>Family Suite</h2>
              <div className="room-features">
                <span>90 m²</span>
                <span>Mountain View</span>
                <span>Two Bedrooms</span>
                <span>Kitchenette</span>
              </div>
              <p>Spacious and perfect for families, our Family Suite provides comfort and convenience with additional space.</p>
              <div className="room-price">
                <span className="price">Nu.5000</span>
                <span className="per-night">per night</span>
              </div>
              <button className="book-btn" data-room-type="Family Suite">Book Now</button>
            </div>
          </div>

          {/* Penthouse Suite */}
          <div className="room-type penthouse">
            <div className="room-images">
              <img src="https://th.bing.com/th/id/OIP.2qlUKvt9FwmaWyX7hWW-dgHaE7?w=302&h=202&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="Penthouse Suite" />
            </div>
            <div className="room-details">
              <h2>Penthouse Suite</h2>
              <div className="room-features">
                <span>150 m²</span>
                <span>Panoramic City View</span>
                <span>Private Pool</span>
                <span>Rooftop Terrace</span>
              </div>
              <p>Live like royalty in our exclusive Penthouse Suite, featuring a private pool and breathtaking city skyline views.</p>
              <div className="room-price">
                <span className="price">Nu.10,000</span>
                <span className="per-night">per night</span>
              </div>
              <button className="book-btn" data-room-type="Penthouse Suite">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="room-amenities">
        <div className="container">
          <h2>Room Amenities</h2>
          <div className="amenities-grid">
            <div className="amenity-item">
              <h3>Comfort</h3>
              <ul>
                <li>Premium Bedding</li>
                <li>Climate Control</li>
                <li>Blackout Curtains</li>
                <li>Soundproof Windows</li>
              </ul>
            </div>
            <div className="amenity-item">
              <h3>Technology</h3>
              <ul>
                <li>Smart TV</li>
                <li>High-Speed WiFi</li>
                <li>USB Charging Ports</li>
                <li>Digital Room Controls</li>
              </ul>
            </div>
            <div className="amenity-item">
              <h3>Bathroom</h3>
              <ul>
                <li>Rain Shower</li>
                <li>Luxury Toiletries</li>
                <li>Heated Floors</li>
                <li>Plush Robes</li>
              </ul>
            </div>
            <div className="amenity-item">
              <h3>Services</h3>
              <ul>
                <li>24/7 Room Service</li>
                <li>Daily Housekeeping</li>
                <li>Laundry Service</li>
                <li>Concierge</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

      {/* Scripts - these must use <Script /> in Next.js */}
      <Script src="/script.js" strategy="afterInteractive" />
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}