"use client"
import Script from 'next/script';

export default function DinningPage() {
  return (
    <>
      <section className="restaurant">
        <div className="container">
          <div className="restaurant-card">
            <div className="restaurant-image">
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/62fe3a28c22bf8624fce7c7a/restaurant-interior-with-green-banquets/960x0.jpg?format=jpg&width=960"
                alt="The Grand Restaurant"
              />
            </div>
            <div className="restaurant-info">
              <h2>The Hotel's Restaurant</h2>
              <p className="cuisine">Contemporary Bhutanese Cuisine</p>
              <div className="details">
                <span>Dinner: 6:00 PM - 10:30 PM</span>
                <span>Smart Elegant</span>
                <span>Michelin Starred</span>
              </div>
              <p className="description">
                Experience the epitome of fine dining with our innovative Bhutanese and foreign cuisine,
                crafted by renowned Chefs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="menu">
        <div className="menu-preview">
          <h3>Signature Dishes</h3>
          <ul>
            <li>Ezay (Chili Sauce)</li>
            <li>Phaksha Paa (Pork with Chili and Radish)</li>
            <li>Jasha Maru (Spicy Chicken Stew)</li>
            <li>Shakam Paa (Dried Beef with Chili)</li>
            <li>Khichu (Rice with Butter and Cheese)</li>
            <li>Goep (Tripe Stew)</li>
            <li>Suja (Butter Tea)</li>
            <li>Red Rice</li>
          </ul>
          <hr />
        </div>
        <div className="menu-categories">
          <h3>Menu Categories</h3>
          <ul>
            <li>Appetizers</li>
            <li>Entrees</li>
            <li>Vegetarian</li>
            <li>Wine & Desserts</li>
          </ul>
        </div>
      </section>

      <hr />

      <section className="special-events">
        <div className="container">
          <h3>Reserve for Special Events</h3>
          <p>
            Host your exclusive events at The Grand Restaurant. We offer tailored packages for weddings,
            anniversaries, and corporate events.
          </p>
        </div>
      </section>

      <hr />

      <section className="chefs">
        <div className="container">
          <h2>Meet Our Chefs</h2>
          <div className="chef-grid">
            <div className="chef-card">
              <div className="chef-image">
                <img
                  src="https://th.bing.com/th/id/OIP.VDVfCLXDqxtHnFavaeFGpwHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                  alt="Chef Dorji"
                />
              </div>
              <div className="chef-info">
                <h3>Chef Dorji</h3>
                <p>Specialty: Contemporary Bhutanese and foreign Cuisine</p>
                <p>
                  Chef Dorji brings a wealth of experience from Michelin-starred restaurants worldwide,
                  combining classic techniques with innovative twists.
                </p>
              </div>
            </div>

            <div className="chef-card">
              <div className="chef-image">
                <img src="https://th.bing.com/th/id/OIP.bm67ZpFF8UptcTz7PfZTpAHaJI?w=165&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="Chef Wangchuk" />
              </div>
              <div className="chef-info">
                <h3>Chef Wangchuk</h3>
                <p>Specialty: Mediterranean Fusion</p>
                <p>
                  Known for bold flavors and Mediterranean-inspired dishes, using the freshest ingredients
                  for an unforgettable experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dining-reservation">
        <div className="container">
          <h2>Make a Reservation</h2>
          <form className="reservation-form">
            <div className="form-group">
              <label htmlFor="restaurant">Restaurant</label>
              <input type="text" id="restaurant" value="The Grand Restaurant" disabled />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" required />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input type="time" id="time" required />
            </div>
            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <select id="guests" required>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5+ People</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="special-requests">Special Requests</label>
              <textarea id="special-requests" rows="4"></textarea>
            </div>
            <button type="submit" className="submit-btn">Confirm Reservation</button>
          </form>
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
