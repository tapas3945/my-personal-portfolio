import { useState } from "react";
import emailjs from "@emailjs/browser";

import "./App.css";


function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

  <div className="container nav-content">



    {/* Logo */}

    <a

      href="#home"

      className="logo"

      onClick={() => setMenuOpen(false)}

    >

      <span className="logo-mark">T</span>



      <span>

        Tapas<span className="logo-dot">.</span>

      </span>

    </a>


    {/* Desktop Navigation */}

    <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>



      <a href="#home" onClick={() => setMenuOpen(false)}>

        Home

      </a>



      <a href="#services" onClick={() => setMenuOpen(false)}>

        Services

      </a>



      <a href="#pricing" onClick={() => setMenuOpen(false)}>

        Pricing

      </a>



      <a href="#process" onClick={() => setMenuOpen(false)}>

        Process

      </a>



      <a href="#about" onClick={() => setMenuOpen(false)}>

        About

      </a>



      <a href="#faq" onClick={() => setMenuOpen(false)}>

        FAQ

      </a>



      <a href="#contact" onClick={() => setMenuOpen(false)}>

        Contact

      </a>



    </nav>


    {/* Desktop Contact Button */}

    <a href="#contact" className="nav-button">

      Let's Talk

    </a>


    {/* Mobile Menu Button */}

    <button

      className={`menu-toggle ${menuOpen ? "active" : ""}`}

      onClick={() => setMenuOpen(!menuOpen)}

      aria-label="Toggle navigation menu"

      aria-expanded={menuOpen}

    >

      <span></span>

      <span></span>

      <span></span>

    </button>



  </div>

</header>


      {/* ================= HERO ================= */}



      <main>



        <section className="hero" id="home">



          <div className="container hero-content">



            {/* LEFT SIDE */}



            <div className="hero-text">



              <div className="availability">

                <span className="status-dot"></span>

                Available for New Projects

              </div>



              <p className="hero-small-title">

                WEB DEVELOPMENT SERVICE

              </p>



              <h1>

                I Build

                <span className="gradient-text">

                  {" "}Modern Websites

                </span>



                <br />



                For Growing Businesses.

              </h1>



              <p className="hero-description">

                I create modern, responsive and professional websites

                that help businesses build a strong online presence

                and connect with more customers.

              </p>


              {/* BUTTONS */}



              <div className="hero-buttons">



                <a

                  href="#contact"

                  className="primary-button"

                >

                  Get Your Website

                  <span>↗</span>

                </a>



                <a

  href="#services"

  className="secondary-button"

>

  View Services

</a>



              </div>


              {/* TRUST ITEMS */}



              <div className="hero-trust">



                <div className="trust-item">

                  <strong>Modern</strong>

                  <span>UI Design</span>

                </div>



                <div className="trust-line"></div>



                <div className="trust-item">

                  <strong>Responsive</strong>

                  <span>All Devices</span>

                </div>



                <div className="trust-line"></div>



                <div className="trust-item">

                  <strong>Fast</strong>

                  <span>Delivery</span>

                </div>



              </div>



            </div>


            {/* RIGHT SIDE */}



            <div className="hero-visual">



              <div className="hero-glow"></div>



              <div className="image-frame">



                <img

                  src="/images/hero-profile.png"

                  alt="Tapas Mondal - Web Developer"

                  className="hero-image"

                />



              </div>


              {/* Floating Card */}



              <div className="floating-card card-top">



                <div className="floating-icon">

                  ✦

                </div>



                <div>

                  <strong>Modern Design</strong>

                  <small>Built for businesses</small>

                </div>



              </div>


              {/* Floating Card */}



              <div className="floating-card card-bottom">



                <div className="floating-icon">

                  ↗

                </div>



                <div>

                  <strong>Responsive Website</strong>

                  <small>Mobile & Desktop</small>

                </div>



              </div>



            </div>



          </div>


          {/* SCROLL */}



          <div className="scroll-indicator">



            <span>

              Scroll to explore

            </span>



            <span className="scroll-arrow">

              ↓

            </span>



          </div>



        </section>



                {/* ================= SERVICES ================= */}



        <section className="services-section" id="services">



          <div className="container">



            {/* Section Header */}



            <div className="section-header">



              <div className="section-tag">

                WHAT I CAN BUILD

              </div>



              <h2>

                Websites Built For

                <span> Your Business.</span>

              </h2>



              <p>

                From simple landing pages to complete business websites,

                I create modern digital experiences designed around your goals.

              </p>



            </div>


            {/* Services Grid */}



            <div className="services-grid">



              {/* Service 1 */}



              <div className="service-card">



                <div className="service-top">



                  <div className="service-icon">

                    ◇

                  </div>



                  <span className="service-number">

                    01

                  </span>



                </div>



                <h3>

                  Business Website

                </h3>



                <p>

                  Professional websites for businesses that want

                  a strong and trustworthy online presence.

                </p>



                <div className="service-bottom">



                  <span>

                    Starting from ₹3,999

                  </span>



                  <a href="#contact">

                    →

                  </a>



                </div>



              </div>


              {/* Service 2 */}



              <div className="service-card">



                <div className="service-top">



                  <div className="service-icon">

                    ◈

                  </div>



                  <span className="service-number">

                    02

                  </span>



                </div>



                <h3>

                  Landing Page

                </h3>



                <p>

                  High-converting landing pages for products,

                  services, campaigns and online promotions.

                </p>



                <div className="service-bottom">



                  <span>

                    Starting from ₹2,999

                  </span>



                  <a href="#contact">

                    →

                  </a>



                </div>



              </div>


              {/* Service 3 */}



              <div className="service-card">



                <div className="service-top">



                  <div className="service-icon">

                    ◎

                  </div>



                  <span className="service-number">

                    03

                  </span>



                </div>



                <h3>

                  Portfolio Website

                </h3>



                <p>

                  Clean and modern personal portfolios for

                  developers, freelancers and professionals.

                </p>



                <div className="service-bottom">



                  <span>

                    Starting from ₹3,999

                  </span>



                  <a href="#contact">

                    →

                  </a>



                </div>



              </div>


              {/* Service 4 */}



              <div className="service-card">



                <div className="service-top">



                  <div className="service-icon">

                    ✦

                  </div>



                  <span className="service-number">

                    04

                  </span>



                </div>



                <h3>

                  Restaurant Website

                </h3>



                <p>

                  Attractive restaurant websites with menus,

                  location, gallery and customer contact options.

                </p>



                <div className="service-bottom">



                  <span>

                    Starting from ₹4,999

                  </span>



                  <a href="#contact">

                    →

                  </a>



                </div>



              </div>


              {/* Service 5 */}



              {/* Service 5 */}



<div className="service-card">



  <div className="service-top">



    <div className="service-icon">

      🛒

    </div>



    <span className="service-number">

      05

    </span>



  </div>



  <h3>

    E-Commerce Website

  </h3>



  <p>

    Modern online stores with product listings,

    shopping cart, checkout and essential business features.

  </p>



  <div className="service-bottom">



    <span>

      Starting from ₹12,999

    </span>



    <a href="#contact">

      →

    </a>



  </div>



</div>


              {/* Service 6 */}



<div className="service-card">



  <div className="service-top">



    <div className="service-icon">

      ⚡

    </div>



    <span className="service-number">

      06

    </span>



  </div>



  <h3>

    Web Application

  </h3>



  <p>

    Custom web applications built for business

    workflows, dashboards, booking systems and more.

  </p>



  <div className="service-bottom">



    <span>

      Custom Quote

    </span>



    <a href="#contact">

      →

    </a>



  </div>



</div>



            </div>



          </div>



        </section>



        <section className="pricing-section" id="pricing">

  <div className="container">



    <div className="section-header">

      <div className="section-tag">SIMPLE PRICING</div>



      <h2>

        Choose The Right Plan For<span> Your Business.</span>

      </h2>



      <p>

        Transparent starting prices for professional websites.

        Custom requirements can be discussed based on your business needs.

      </p>

    </div>



    <div className="pricing-grid">



      {/* STARTER */}

      <div className="pricing-card">



        <div className="pricing-top">

          <div>

            <h3>Starter</h3>

            <p>Perfect for small businesses and personal websites.</p>

          </div>

        </div>



        <div className="price">

          <span>₹</span>3,999<span className="price-plus">+</span>

        </div>



        <div className="price-label">Starting price</div>



        <div className="pricing-divider"></div>



        <ul className="pricing-features">

          <li>✓ 1–3 Pages</li>

          <li>✓ Responsive Design</li>

          <li>✓ Modern UI Design</li>

          <li>✓ WhatsApp Button</li>

          <li>✓ Contact Form</li>

          <li>✓ Google Maps</li>

          <li>✓ Basic SEO</li>

          <li>✓ 1 Revision</li>

          <li>✓ 5–7 Days Delivery</li>

        </ul>



        <a href="#contact" className="pricing-btn">

          Get Started →

        </a>



      </div>


      {/* PROFESSIONAL */}

      <div className="pricing-card popular">



        <div className="popular-badge">

          MOST POPULAR

        </div>



        <div className="pricing-top">

          <div>

            <h3>Professional</h3>

            <p>For businesses that need a premium online presence.</p>

          </div>

        </div>



        <div className="price">

          <span>₹</span>7,999<span className="price-plus">+</span>

        </div>



        <div className="price-label">Starting price</div>



        <div className="pricing-divider"></div>



        <ul className="pricing-features">

          <li>✓ 5–7 Pages</li>

          <li>✓ Premium UI Design</li>

          <li>✓ Responsive Design</li>

          <li>✓ WhatsApp Integration</li>

          <li>✓ Contact Form</li>

          <li>✓ Gallery / Portfolio</li>

          <li>✓ Testimonials Section</li>

          <li>✓ FAQ Section</li>

          <li>✓ Basic SEO</li>

          <li>✓ Analytics Setup</li>

          <li>✓ 2 Revisions</li>

          <li>✓ 5–7 Days Delivery</li>

        </ul>



        <a href="#contact" className="pricing-btn primary">

          Get Started →

        </a>



      </div>


      {/* BUSINESS */}

      <div className="pricing-card">



        <div className="pricing-top">

          <div>

            <h3>Business</h3>

            <p>For growing businesses that need advanced features.</p>

          </div>

        </div>



        <div className="price">

          <span>₹</span>14,999<span className="price-plus">+</span>

        </div>



        <div className="price-label">Starting price</div>



        <div className="pricing-divider"></div>



        <ul className="pricing-features">

          <li>✓ 8–12 Pages</li>

          <li>✓ Custom UI/UX</li>

          <li>✓ Advanced Animations</li>

          <li>✓ Blog Section</li>

          <li>✓ Advanced Forms</li>

          <li>✓ Lead Capture</li>

          <li>✓ WhatsApp CTA</li>

          <li>✓ SEO Setup</li>

          <li>✓ Analytics</li>

          <li>✓ Search Console</li>

          <li>✓ 3 Revisions</li>

          <li>✓ 7–12 Days Delivery</li>

          <li>✓ 30 Days Basic Support</li>

        </ul>



        <a href="#contact" className="pricing-btn">

          Get Started →

        </a>



      </div>



    </div>


    {/* CUSTOM QUOTE */}

    <div className="custom-pricing">



      <div>

        <span className="custom-label">CUSTOM PROJECTS</span>



        <h3>

          Need an E-Commerce Website or Web Application?

        </h3>



        <p>

          Every custom project has different requirements.

          Let's discuss your features, design and development needs.

        </p>

      </div>



      <a href="#contact" className="custom-btn">

        Request Custom Quote →

      </a>



    </div>



  </div>

</section>



<section className="process-section" id="process">

  <div className="container">



    <div className="section-header">

      <div className="section-tag">HOW IT WORKS</div>



      <h2>

        From Idea To <span>Live Website.</span>

      </h2>



      <p>

        A simple and transparent process from the first conversation

        to launching your website online.

      </p>

    </div>



    <div className="process-grid">



      <div className="process-card">

        <div className="process-number">01</div>

        <h3>Tell Me Your Requirements</h3>

        <p>

          Share your business details, website requirements,

          features and ideas with me.

        </p>

      </div>



      <div className="process-card">

        <div className="process-number">02</div>

        <h3>Plan & Design</h3>

        <p>

          I plan the website structure and create a modern

          design based on your business goals.

        </p>

      </div>



      <div className="process-card">

        <div className="process-number">03</div>

        <h3>Development</h3>

        <p>

          Your website is developed with responsive design,

          required features and proper testing.

        </p>

      </div>



      <div className="process-card">

        <div className="process-number">04</div>

        <h3>Launch Your Website</h3>

        <p>

          After testing and approval, your website is deployed

          and made available online.

        </p>

      </div>



    </div>



  </div>

</section>



{/* About Section */}



<section className="about-section" id="about">

  <div className="container">



    <div className="about-grid">



      {/* Left Side */}

      <div className="about-image-wrapper">

        <div className="about-image-glow"></div>



        <img

          src="/images/hero-profile.png"

          alt="Tapas Mondal - Web Developer"

          className="about-image"

        />



        <div className="about-floating-card">

          <span className="about-card-dot"></span>

          Available for Projects

        </div>

      </div>


      {/* Right Side */}

      <div className="about-content">



        <div className="section-tag">ABOUT ME</div>



        <h2>

          Building Websites That Help

          <span> Businesses Grow.</span>

        </h2>



        <p className="about-intro">

          I'm Tapas Mondal, a web developer focused on creating

          modern, responsive and user-friendly websites for

          businesses, professionals and individuals.

        </p>



        <p>

          I believe a website should not only look good but also

          provide a clear experience for visitors and help a

          business build a stronger online presence.

        </p>



        <p>

          From landing pages and business websites to custom web

          applications, I work on creating solutions based on

          the specific requirements of each project.

        </p>


        <div className="about-highlights">



          <div className="about-highlight">

            <div className="highlight-icon">✦</div>

            <div>

              <h4>Modern Design</h4>

              <p>Clean and professional user interfaces.</p>

            </div>

          </div>



          <div className="about-highlight">

            <div className="highlight-icon">↗</div>

            <div>

              <h4>Responsive</h4>

              <p>Designed for mobile, tablet and desktop.</p>

            </div>

          </div>



          <div className="about-highlight">

            <div className="highlight-icon">⚡</div>

            <div>

              <h4>Business Focused</h4>

              <p>Websites built around your business goals.</p>

            </div>

          </div>



          <div className="about-highlight">

            <div className="highlight-icon">✓</div>

            <div>

              <h4>Client Focused</h4>

              <p>Clear communication throughout the project.</p>

            </div>

          </div>



        </div>


        <a href="#contact" className="about-btn">

          Let's Work Together →

        </a>



      </div>



    </div>



  </div>

</section>

{/* FAQ Section */}



<section className="faq-section" id="faq">

  <div className="container">



    <div className="section-header">

      <div className="section-tag">FAQ</div>



      <h2>

        Frequently Asked <span>Questions.</span>

      </h2>



      <p>

        Here are some common questions about website development,

        pricing and the project process.

      </p>

    </div>


    <div className="faq-list">



      <details className="faq-item">

        <summary>

          How long does it take to build a website?

          <span>+</span>

        </summary>



        <p>

          The delivery time depends on the type and size of the

          website. A simple website can usually take around

          5–7 days, while larger projects may require more time.

        </p>

      </details>


      <details className="faq-item">

        <summary>

          How much does a website cost?

          <span>+</span>

        </summary>



        <p>

          Website pricing starts from ₹2,999–₹3,999 depending on

          the type of website and required features. E-commerce

          websites and web applications are available with custom

          pricing based on the project requirements.

        </p>

      </details>


      <details className="faq-item">

        <summary>

          Will my website work on mobile devices?

          <span>+</span>

        </summary>



        <p>

          Yes. Websites are designed to be responsive so they can

          work across smartphones, tablets, laptops and desktop

          screens.

        </p>

      </details>


      <details className="faq-item">

        <summary>

          Can you add WhatsApp to my website?

          <span>+</span>

        </summary>



        <p>

          Yes. WhatsApp buttons and contact options can be added

          so visitors can quickly contact your business.

        </p>

      </details>


      <details className="faq-item">

        <summary>

          Can I request changes to the website?

          <span>+</span>

        </summary>



        <p>

          Yes. Revisions are included depending on the selected

          package. Additional changes can also be discussed if

          required.

        </p>

      </details>


      <details className="faq-item">

        <summary>

          Do you provide domain and hosting?

          <span>+</span>

        </summary>



        <p>

          Domain and hosting requirements can be discussed during

          the project. I can also guide you through the setup and

          deployment process.

        </p>

      </details>


      <details className="faq-item">

        <summary>

          Can you build an E-Commerce website?

          <span>+</span>

        </summary>



        <p>

          Yes. E-commerce websites can include product pages,

          shopping cart, checkout and other required features.

          Pricing depends on the project's scope and functionality.

        </p>

      </details>


      <details className="faq-item">

        <summary>

          Can you build a custom Web Application?

          <span>+</span>

        </summary>



        <p>

          Yes. Custom web applications such as dashboards,

          booking systems and business management tools can be

          developed based on the requirements.

        </p>

      </details>



    </div>



  </div>

</section>



{/* Contact Section */}



<section className="contact-section" id="contact">

  <div className="container">



    <div className="section-header">

      <div className="section-tag">GET IN TOUCH</div>



      <h2>

        Let's Build Something <span>Great.</span>

      </h2>



      <p>

        Have a website idea or need a website for your business?

        Tell me about your project and let's discuss it.

      </p>

    </div>


    <div className="contact-grid">



      {/* Contact Information */}



      <div className="contact-info">



        <h3>Let's Talk About Your Project</h3>



        <p>

          Whether you need a business website, landing page,

          portfolio, restaurant website or a custom web application,

          feel free to get in touch.

        </p>


        <div className="contact-details">



          <a href="mailto:your-email@example.com" className="contact-detail">

            <div className="contact-icon">

              ✉

            </div>



            <div>

              <span>Email</span>

              <strong>your-email@example.com</strong>

            </div>

          </a>


          <a

            href="https://wa.me/919002973945"

            target="_blank"

            rel="noopener noreferrer"

            className="contact-detail"

          >

            <div className="contact-icon">

              ☎

            </div>



            <div>

              <span>WhatsApp</span>

              <strong>Chat on WhatsApp</strong>

            </div>

          </a>


          <div className="contact-detail">

            <div className="contact-icon">

              ◉

            </div>



            <div>

              <span>Location</span>

              <strong>West Bengal, India</strong>

            </div>

          </div>



        </div>



      </div>


      {/* Contact Form */}



      <div className="contact-form-wrapper">



        <form
  className="contact-form"
  onSubmit={(e) => {
    e.preventDefault();
    const form = e.currentTarget;

const formData = new FormData(form);

const templateParams = {
  from_name: formData.get("name"),
  from_email: formData.get("email"),
  service: formData.get("service"),
  message: formData.get("message"),
};

emailjs
  .send(
    "service_kogiwmn",
    "template_15egljm",
    templateParams,
    "PT07rL3HPI8M09VDB"
  )
  .then(() => {
    alert("Your project request has been sent successfully!");
    form.reset();
  })
  .catch((error) => {
    console.error(error);
    alert("Something went wrong. Please try again.");
  });
  }}
>



          <div className="form-row">



            <div className="form-group">

              <label htmlFor="name">Your Name</label>



              <input

                type="text"

                id="name"

                name="name"

                placeholder="Enter your name"

                required

              />

            </div>


            <div className="form-group">

              <label htmlFor="email">Email Address</label>



              <input

                type="email"

                id="email"

                name="email"

                placeholder="Enter your email"

                required

              />

            </div>



          </div>


          <div className="form-group">

            <label htmlFor="phone">Phone / WhatsApp</label>



            <input

              type="tel"

              id="phone"

              name="phone"

              placeholder="Enter your phone number"

            />

          </div>


          <div className="form-group">

            <label htmlFor="service">What Do You Need?</label>



            <select id="service" name="service">



              <option value="">

                Select a service

              </option>



              <option value="business-website">

                Business Website

              </option>



              <option value="landing-page">

                Landing Page

              </option>



              <option value="portfolio">

                Portfolio Website

              </option>



              <option value="restaurant">

                Restaurant Website

              </option>



              <option value="ecommerce">

                E-Commerce Website

              </option>



              <option value="web-application">

                Web Application

              </option>



              <option value="other">

                Other

              </option>



            </select>

          </div>


          <div className="form-group">

            <label htmlFor="message">Project Details</label>



            <textarea

              id="message"

              name="message"

              rows={5}

              placeholder="Tell me about your project..."

            ></textarea>

          </div>


          <button type="submit" className="contact-submit">

            Send Project Request →

          </button>



          <p className="form-note">

            I'll review your requirements and get back to you.

          </p>



        </form>



      </div>



    </div>



  </div>

</section>

      </main>



      {/* Footer Section */}



<footer className="footer-section">



  <div className="container">



    <div className="footer-grid">



      {/* Brand */}



      <div className="footer-brand">



        <a href="#" className="footer-logo">

          Tapas<span>.</span>

        </a>



        <p>

          Modern websites and digital solutions for businesses,

          professionals and growing brands.

        </p>



        <a href="#contact" className="footer-cta">

          Start a Project →

        </a>



      </div>


      {/* Quick Links */}



      <div className="footer-column">



        <h4>Quick Links</h4>



        <a href="#home">Home</a>

        <a href="#services">Services</a>

        <a href="#pricing">Pricing</a>

        <a href="#about">About</a>

        <a href="#faq">FAQ</a>

        <a href="#contact">Contact</a>



      </div>


      {/* Services */}



      <div className="footer-column">



        <h4>Services</h4>



        <a href="#services">Business Website</a>

        <a href="#services">Landing Page</a>

        <a href="#services">Portfolio Website</a>

        <a href="#services">Restaurant Website</a>

        <a href="#services">E-Commerce Website</a>

        <a href="#services">Web Application</a>



      </div>


      {/* Contact */}

      <div className="footer-column">

        <h4>Let's Connect</h4>

        <a href="mailto:tapasmobdal49@gmail.com">

          Email Me

        </a>

        <button
  type="button"
  className="contact-detail"
  onClick={() => {
    window.open(
      "https://api.whatsapp.com/send?phone=919002973945",
      "_blank",
      "noopener,noreferrer"
    );
  }}
>
  <div className="contact-icon">
    ☎
  </div>

  <div>
    <span>WhatsApp</span>
    <strong>Chat on WhatsApp</strong>
  </div>
</button>


        <a href="#contact">

          Start a Project

        </a>



      </div>



    </div>


    <div className="footer-bottom">



      <p>

        © {new Date().getFullYear()} Tapas Mondal. All rights reserved.

      </p>



      <div className="footer-bottom-links">

        <a href="#">Privacy Policy</a>

        <a href="#">Terms & Conditions</a>

      </div>



    </div>



  </div>



</footer>



    </div>

  );

}


export default App;