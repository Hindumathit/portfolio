import React from "react";
import "./App.css";
import profilePic from "./profile.jpg"; // <-- Put your image inside src folder

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Hindumathi T</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <img src={profilePic} alt="Hindumathi" className="profile-pic" />
        <h2>Hi, I'm Hindumathi 👋</h2>
        <p>
          A passionate Computer Science Engineering student skilled in Java, React,
          SQL, and building responsive web applications.
        </p>
        <a href="#projects" className="btn">View My Work</a>
      </header>

      {/* About Section */}
      <section id="about" className="section about">
        <h3>About Me</h3>
        <p>
          I'm a highly motivated Computer Science Engineering student with strong
          problem-solving and communication skills. Experienced in full-stack
          development with a focus on front-end technologies.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <h3>Projects</h3>
        <div className="project-list">
          <div className="project-card">
            <h4>Personal Portfolio</h4>
            <p>A responsive portfolio built with React, HTML, CSS, and JavaScript.</p>
          </div>
          <div className="project-card">
            <h4>To-Do List App</h4>
            <p>
              A dynamic To-Do List app with task addition, deletion, and completion features.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h3>Get in Touch</h3>
        <p>Email: <a href="mailto:hindumathi04@gmail.com">hindumathi04@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/hindumathi-t">linkedin.com/in/hindumathi-t</a></p>
        <p>GitHub: <a href="https://github.com/yourgithub">github.com/yourgithub</a></p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Hindumathi T | Built with React
      </footer>
    </div>
  );
}

export default App;
