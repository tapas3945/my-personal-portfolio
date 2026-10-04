function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <div className="section-tag">MY WORK</div>

          <h1>
            Projects I've <span>Built.</span>
          </h1>

          <p>
            Explore some of the websites and web applications I have
            designed and developed.
          </p>
        </div>
      </section>

      <section className="projects-list">
        <div className="container">
          <div className="projects-grid">
            <div className="project-card">
  <div className="project-card-content">
    <span className="project-category">BUSINESS WEBSITE</span>

    <h2>Balaram Starter Business Website</h2>

    <p>
      A modern, responsive business website built to help small businesses
      establish a professional online presence and connect with customers.
    </p>

    <div className="project-tech">
      <span>React</span>
      <span>TypeScript</span>
      <span>Vite</span>
      <span>Node.js</span>
      <span>Express</span>
      <span>PostgreSQL</span>
    </div>

    <div className="project-buttons">
      <a
        href="https://balaram-starter-business-website.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-live-button"
      >
        Live Demo ↗
      </a>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;