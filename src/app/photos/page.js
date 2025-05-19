"use client";

import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function GalleryPage() {
  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    fetch('/api/photos') // ✅ Correct API route
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  const openLightbox = (index) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);
  const changeImage = (direction) => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + direction + photos.length) % photos.length;
      return newIndex;
    });
  };

  return (
    <>
      

      

      <h2 style={{ textAlign: "center" }}>Hotel Gallery</h2>

      <div className="gallery-container">
        {photos.map((photo, idx) => (
          <img
            key={photo.id}
            src={photo.url}
            alt={`Image ${idx + 1}`}
            onClick={() => openLightbox(idx)}
          />
        ))}
      </div>

      {currentIndex !== null && (
        <div className="lightbox" id="lightbox">
          <span className="close-btn" onClick={closeLightbox}>&times;</span>
          <span className="nav-btn prev" onClick={() => changeImage(-1)}>&#10094;</span>
          <img id="lightbox-image" src={photos[currentIndex].url} alt="Selected" />
          <span className="nav-btn next" onClick={() => changeImage(1)}>&#10095;</span>
        </div>
      )}

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
                <a href="https://www.instagram.com/" className="social-link"><i className="fab fa-instagram"></i> Instagram</a>
                <a href="https://www.facebook.com/" className="social-link"><i className="fab fa-facebook-f"></i> Facebook</a>
                <a href="https://x.com/" className="social-link"><i className="fab fa-twitter"></i> Twitter</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Hotel REAL LIFE. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
    </>
  );
}
