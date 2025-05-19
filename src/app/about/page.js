// pages/about.js
"use client"

import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

export default function About() {
  return (
    <>
      
      <section className="hotel-info">
        <div className="container">
          <h2>Welcome to Hotel REAL LIFE</h2>
          <p className="intro">
            Experience luxury and comfort in the heart of the city. Our hotel
            offers world-class services, modern amenities, and warm hospitality
            to make your stay unforgettable.
          </p>

          <div className="info-grid">
            <div className="info-section">
              <h3>Location & Contact</h3>
              <p><strong>Address:</strong> Rinchending, Phuntsholing, Chhuka Bhutan</p>
              <p><strong>Phone:</strong> +975 17 00 00 00</p>
              <p><strong>Email:</strong> hotelreallife@gmail.com</p>
              <p><strong>Nearby Attractions:</strong> Zangdo Phelri, Children park, Football Stadium</p>
            </div>

            <div className="info-section">
              <h3>Accommodation</h3>
              <ul>
                <li>Deluxe Room</li>
                <li>Executive Suite</li>
                <li>Standard Suite</li>
                <li>Family Suite</li>
                <li>Penthouse Suite</li>
              </ul>
            </div>

            <div className="info-section">
              <h3>Dining & Restaurants</h3>
              <ul>
                <li><strong>The Hotel's Restaurant:</strong> Fine dining with rooftop views.</li>
                <li><strong>Café:</strong> Cozy café serving artisan coffee and pastries.</li>
                <li><strong>Sunset Bar:</strong> Exotic cocktails with live music.</li>
              </ul>
            </div>

            <div className="info-section">
              <h3>Facilities & Services</h3>
              <ul>
                <li>Swimming Pool & Spa</li>
                <li>Fully Equipped Gym</li>
                <li>Conference & Event Spaces</li>
                <li>24/7 Concierge & Room Service</li>
              </ul>
            </div>

            <div className="info-section">
              <h3>Guest Reviews</h3>
              <blockquote>
                "An unforgettable experience! The service was impeccable, and
                the location was perfect." - Dendhup Tshering.
              </blockquote>
              <blockquote>
                "The best hotel I've ever stayed in. Highly recommend!" - Pema Dorji.
              </blockquote>
            </div>
          </div>
          <hr />
          <div className="info-section">
            <h3>Our History</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
  Founded in 2005, Hotel REAL LIFE has been a symbol of elegance and excellence for nearly two decades. 
  Nestled in the heart of Phuntsholing, our establishment has grown from a modest 20-room lodge to 
  Bhutan's premier luxury destination, renowned for blending traditional Himalayan hospitality with 
  world-class modern comforts.
</p>

<p className="text-gray-700 leading-relaxed mb-6">
  What began as a family-run guesthouse has flourished into a 5-star sanctuary, earning numerous 
  accolades including the "Bhutan Tourism Excellence Award" for seven consecutive years. Our 
  architecture pays homage to classic Dzong design, with hand-carved woodwork and intricate 
  Buddhist motifs adorning every space, while offering state-of-the-art amenities that discerning 
  travelers expect.
</p>

<p className="text-gray-700 leading-relaxed mb-6">
  The REAL LIFE experience is defined by our commitment to sustainable luxury. We source 90% of our 
  ingredients from local organic farms, employ solar heating across the property, and maintain 
  Bhutan's first carbon-neutral spa. Our staff of 150 (85% from the local community) undergo 
  rigorous training in both international service standards and traditional Bhutanese warmthy.
</p>

<p className="text-gray-700 leading-relaxed mb-6">
  Notable milestones include hosting the 2012 ASEAN Tourism Summit, being featured in Conde Nast 
  Traveler's "Best New Hotels of the Decade", and developing our signature "Happiness Butler" 
  service - personal attendants trained in mindfulness techniques to enhance guest wellbeing.
</p>

<p className="text-gray-700 leading-relaxed">
  Today, while we've expanded to include three restaurants, a riverside spa, and conference 
  facilities, we remain true to our founding principle: creating spaces where modern luxury 
  and Bhutanese soul harmoniously coexist. Every corner tells a story - from the lobby's 
  200-year-old reclaimed timber beams to our rooftop garden where monks bless the herbs used 
  in our kitchens.
</p>
          </div>
          <hr />
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
              <Link href="/rooms">Rooms</Link>
              <Link href="/dinning">Dining</Link>
              <Link href="/events">Events</Link>
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
      <Script src="/script.js" />
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossOrigin="anonymous"
      />
    </>
  );
}
