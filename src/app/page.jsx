"use client";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function ReviewSection() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    cleanliness: '',
    service: '',
    amenities: '',
    property: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const overall =
      (parseFloat(formData.cleanliness) +
        parseFloat(formData.service) +
        parseFloat(formData.amenities) +
        parseFloat(formData.property)) /
      4;

    const newReview = {
      ...formData,
      overall: overall.toFixed(1),
      timestamp: Date.now(),
    };

    setReviews([newReview, ...reviews]);

    setFormData({
      name: '',
      comment: '',
      cleanliness: '',
      service: '',
      amenities: '',
      property: '',
    });

    document.getElementById('success-message').style.display = 'inline';
    setTimeout(() => {
      document.getElementById('success-message').style.display = 'none';
    }, 3000);
  };
  const images = [
    "https://th.bing.com/th/id/OIP.Dsnj_qYgbqDBAqHzefi6HgHaEL?w=249&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://th.bing.com/th/id/OIP.L7J0xpC0zEVmt3TCAsfjRgHaEe?w=267&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://th.bing.com/th/id/OIP.qhDkOvbVXX16YZE_ryh57gHaE8?w=241&h=181&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://th.bing.com/th/id/OIP.WnmlG44gUdsVzV7s3l_euwHaE7?w=286&h=191&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://th.bing.com/th/id/OIP.Vo3ZrDwx2jOblL_hhRpzFwHaEc?w=309&h=185&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://th.bing.com/th/id/OIP.m9iZn8qf8Ih5642lYBVAJAHaFj?w=201&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://th.bing.com/th/id/OIP.PZ5L4s7wQiWhU4ewb6tBugHaE8?w=296&h=198&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://th.bing.com/th/id/OIP.pCpmCHnT3Y2GtWmxI79biQHaFj?w=197&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://th.bing.com/th/id/OIP.lMu98Yn__M_xiDI7R7cWIAHaEn?w=235&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://th.bing.com/th/id/OIP.eq7a98uejSg7GqtFjN7HFwHaFc?w=275&h=202&c=7&r=0&o=5&dpr=1.1&pid=1.7"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <>
    
      <div className="reviews-container">
        <div className="left-panel">
          <h2>Reviews</h2>
          <div className="rating-box">
            <span className="rating">4.1</span><span className="out-of">/5</span>
            <p>Good</p>
            <small>954 reviews</small>
          </div>
          <div className="rating-categories">
            <div className="category"><span>🧹 Cleanliness</span><span className="score">4.4/5</span></div>
            <div className="category"><span>👨‍💼 Staff & Service</span><span className="score">4.4/5</span></div>
            <div className="category"><span>🏨 Amenities</span><span className="score">4.2/5</span></div>
            <div className="category"><span>🏢 Property conditions & facilities</span><span className="score">4.2/5</span></div>
          </div>
        </div>

        <div className="right-panel">
          <div id="additional-reviews">
            {reviews.length === 0 && <p>No user feedback yet.</p>}
            {reviews.map((review, idx) => (
              <div key={idx} className="review-card" style={{ borderBottom: '1px solid #ccc', marginBottom: '15px', paddingBottom: '10px' }}>
                <strong>{review.name}</strong> – <small>{new Date(review.timestamp).toLocaleString()}</small>
                <p><em>"{review.comment}"</em></p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>🧹 Cleanliness: {review.cleanliness}/5</li>
                  <li>👨‍💼 Staff & Service: {review.service}/5</li>
                  <li>🏨 Amenities: {review.amenities}/5</li>
                  <li>🏢 Property: {review.property}/5</li>
                  <li><strong>Overall: {review.overall}/5</strong></li>
                </ul>
              </div>
            ))}
          </div>
          <button id="view-more-btn" onClick={() => window.toggleReviews()}>View Previous Comments</button>
        </div>
      </div>

      <hr />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="card-title mb-3">Leave a Feedback</h4>
                <form id="feedback-form" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Your Feedback"
                      required
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label>🧹 Cleanliness</label>
                    <select
                      className="form-select"
                      required
                      value={formData.cleanliness}
                      onChange={(e) => setFormData({ ...formData, cleanliness: e.target.value })}
                    >
                      <option value="">Select</option>
                      <option value="5">5 - Excellent</option>
                      <option value="4">4 - Good</option>
                      <option value="3">3 - Fair</option>
                      <option value="2">2 - Poor</option>
                      <option value="1">1 - Very Poor</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label>👨‍💼 Staff & Service</label>
                    <select
                      className="form-select"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">Select</option>
                      <option value="5">5 - Excellent</option>
                      <option value="4">4 - Good</option>
                      <option value="3">3 - Fair</option>
                      <option value="2">2 - Poor</option>
                      <option value="1">1 - Very Poor</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label>🏨 Amenities</label>
                    <select
                      className="form-select"
                      required
                      value={formData.amenities}
                      onChange={(e) => setFormData({ ...formData, amenities: e.target.value })}
                    >
                      <option value="">Select</option>
                      <option value="5">5 - Excellent</option>
                      <option value="4">4 - Good</option>
                      <option value="3">3 - Fair</option>
                      <option value="2">2 - Poor</option>
                      <option value="1">1 - Very Poor</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label>🏢 Property Condition</label>
                    <select
                      className="form-select"
                      required
                      value={formData.property}
                      onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                    >
                      <option value="">Select</option>
                      <option value="5">5 - Excellent</option>
                      <option value="4">4 - Good</option>
                      <option value="3">3 - Fair</option>
                      <option value="2">2 - Poor</option>
                      <option value="1">1 - Very Poor</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-success">Submit</button>
                  <span id="success-message" className="text-success ms-3" style={{ display: 'none' }}>
                    Feedback submitted successfully!
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function HomePage() {

  useEffect(() => {
    window.toggleReviews = function () {
      const reviews = document.getElementById('additional-reviews');
      const btn = document.getElementById('view-more-btn');
      if (reviews.style.display === 'none') {
        reviews.style.display = 'block';
        btn.textContent = 'Hide Comments';
      } else {
        reviews.style.display = 'none';
        btn.textContent = 'View Previous Comments';
      }
    };

    const form = document.getElementById('feedback-form');
    const successMsg = document.getElementById('success-message');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        successMsg.style.display = 'inline';
        form.reset();
      });
    }
  }, []);
<section className="hotel-gallery" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="gallery-slider" style={{ transition: 'transform 0.5s ease-in-out' }}>
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover'
          }}
        />
      </div>
    </section>
  return (
    <>
      <main>
        <h1>WELCOME TO THE HOTEL</h1>
       

        <section className="hotel-gallery" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="gallery-slider" style={{ transition: 'transform 0.5s ease-in-out' }}>
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover'
          }}
        />
      </div>
    </section>

        <hr />

        <section className="booking">
          <h2> ***check for Rooms***</h2>
          <form>
            <div className="form-group">
              <label>Check-in date</label>
              <input type="date" defaultValue="2025-03-17" />
            </div>
            <div className="form-group">
              <label>Check-out date</label>
              <input type="date" defaultValue="2025-03-18" />
            </div>
            <div className="form-group">
              <label>Travellers</label>
              <select>
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>3 Adults</option>
                <option>4 Adults</option>
              </select>
            </div>
            <div className="form-group">
              <label>Rooms</label>
              <select>
                <option>1 Room</option>
                <option>2 Rooms</option>
                <option>3 Rooms</option>
                <option>4 Rooms</option>
              </select>
            </div>
           <Link href="/bookNow" className="inline-block bg-green-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors duration-300" style={{ margin: '0 auto'}}>
           Check Availability
          </Link>
          </form>
        </section>

        <form className="booking-form" style={{ display: 'none' }}>
          <h3>Book a Room</h3>
          <label htmlFor="room-name">Full Name:</label>
          <input type="text" id="room-name" required />

          <label htmlFor="room-type">Room Type:</label>
          <select id="room-type">
            <option>Single Room</option>
            <option>Double Room</option>
            <option>Suite</option>
            <option>Standard</option>
            <option>Penthouse</option>
          </select>

          <label htmlFor="room-date">Check-in Date:</label>
          <input type="date" id="room-date" required />

          <label htmlFor="room-guests">Number of Guests:</label>
          <input type="number" id="room-guests" min="1" required />
          <input type="text" placeholder="Any special requests" />
          <button type="submit">Book Room</button>
        </form>

        <ReviewSection />

        <section id="map">
          <h3>OUR LOCATION</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6785096600547!2d89.39181245863438!3d26.85017589250885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3cb2c210e611d%3A0x44c5cb2cd32b18d4!2sCollege%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sbt!4v1747560193359!5m2!1sen!2sbt"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>            
        </section>
      </main>

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
            <Link href="/admin/login" passHref legacyBehavior>
              <Nav.Link>★</Nav.Link>
            </Link>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Hotel REAL LIFE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
