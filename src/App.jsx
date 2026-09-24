import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  const skills = {
    programming: ["Python", "Java", "C"],
    web: ["HTML", "CSS", "JavaScript"],
    databases: ["SQL", "MongoDB"],
    tools: ["Git", "GitHub", "Visual Studio Code"],
    core: [
      "Data Structures and Algorithms",
      "Operating Systems",
      "Computer Networks",
    ],
  };

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      college: "Pragati Engineering College",
      score: "CGPA: 8.92",
      year: "2023 — 2027",
    },
    {
      degree: "Intermediate — MPC",
      college: "Sri Chaitanya Junior College",
      score: "Percentage: 97%",
      year: "2021 — 2023",
    },
    {
      degree: "SSC",
      college: "Sri Chaitanya School",
      score: "Percentage: 98%",
      year: "2021",
    },
  ];

  const internships = [
    {
      number: "01",
      title: "ServiceNow Virtual Internship",
      company: "ServiceNow",
      duration: "MAR 2025 — JUN 2025",
      description:
        "Completed a virtual internship focused on gaining practical exposure to enterprise technology and professional software development practices.",
    },
    {
      number: "02",
      title: "Cisco Virtual Internship",
      company: "Cisco",
      duration: "MAR 2026 — JUN 2026",
      description:
        "Completed a virtual internship with practical exposure to industry-oriented technologies and professional development practices.",
    },
  ];

  const projects = [
    {
      number: "01",
      title: "E-Commerce Website",
      description:
        "Developed a fully responsive e-Commerce platform that features user authentication, product catalog browsing, and cart functionality. Integrated secure payment flow, search and filtering, and dynamic product management to enhance user experience and streamline online shopping.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "SQL",
        "Node.js",
      ],
      github:
        "https://github.com/23A31A0520/E-Commerce-Website",
    },
    {
      number: "02",
      title: "Smart Code Review Assistant",
      description:
        "Developed an AI-powered code review assistant using Java, React, and OpenAI API that analyzes source code, identifies bugs, and security issues, improving code quality and maintainability.",
      technologies: [
        "Java",
        "React",
        "MySQL",
        "OpenAI API",
      ],
      github: "https://github.com/23A31A0520",
    },
  ];

  const certifications = [
    {
      number: "01",
      title: "Microsoft Certified: Fabric Data Engineer Associate",
      organization: "Microsoft",
      code: "DP-700",
    },
    {
      number: "02",
      title: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services",
      code: "AWS Certification",
    },
    {
      number: "03",
      title: "AWS Certified AI Practitioner",
      organization: "Amazon Web Services",
      code: "AWS Certification",
    },
    {
      number: "04",
      title: "AWS Certified Developer — Associate",
      organization: "Amazon Web Services",
      code: "AWS Certification",
    },
    {
      number: "05",
      title: "AWS Certified Solutions Architect — Associate",
      organization: "Amazon Web Services",
      code: "AWS Certification",
    },
    {
      number: "06",
      title: "SAP Certified — Back-End Developer — ABAP Cloud",
      organization: "SAP",
      code: "SAP Certification",
    },
    {
      number: "07",
      title: "Salesforce Agentforce Specialist Certification",
      organization: "Salesforce",
      code: "Salesforce Certification",
    },
  ];

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-container">

          <div
            className="logo"
            onClick={() => scrollToSection("home")}
          >
            H<span>.</span>
          </div>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <button onClick={() => scrollToSection("home")}>
              Home
            </button>

            <button onClick={() => scrollToSection("about")}>
              About
            </button>

            <button onClick={() => scrollToSection("education")}>
              Education
            </button>

            <button onClick={() => scrollToSection("skills")}>
              Skills
            </button>

            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>

            <button onClick={() => scrollToSection("experience")}>
              Experience
            </button>

            <button onClick={() => scrollToSection("certifications")}>
              Certifications
            </button>

            <button onClick={() => scrollToSection("publication")}>
              Publication
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section id="home" className="hero">
        <div className="hero-container">

          <div className="hero-content">

            <p className="eyebrow">
              COMPUTER SCIENCE & ENGINEERING
            </p>

            <h1>
              Hi, I'm{" "}
              <span>Harshitha</span>
            </h1>

            <h2>
              I build software that solves real problems.
            </h2>

            <p className="hero-description">
              Computer Science and Engineering student with strong
              skills in Python, SQL, and Data Structures. Passionate
              about learning new technologies and building practical
              software solutions.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </button>

            </div>

          </div>


          <div className="hero-card">

            <div className="code-window">

              <div className="code-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="code-file">
                  profile.py
                </span>
              </div>

              <div className="code-body">

                <p>
                  <span className="code-purple">
                    class
                  </span>{" "}
                  <span className="code-white">
                    Harshitha
                  </span>
                  :
                </p>

                <p className="indent">
                  <span className="code-purple">
                    role
                  </span>{" "}
                  ={" "}
                  <span className="code-green">
                    "CSE Student"
                  </span>
                </p>

                <p className="indent">
                  <span className="code-purple">
                    cgpa
                  </span>{" "}
                  ={" "}
                  <span className="code-orange">
                    8.92
                  </span>
                </p>

                <p className="indent">
                  <span className="code-purple">
                    languages
                  </span>{" "}
                  = [
                  <span className="code-green">
                    "Python"
                  </span>
                  ,{" "}
                  <span className="code-green">
                    "Java"
                  </span>
                  ,{" "}
                  <span className="code-green">
                    "C"
                  </span>
                  ]
                </p>

                <p className="indent">
                  <span className="code-purple">
                    leetcode
                  </span>{" "}
                  ={" "}
                  <span className="code-orange">
                    300
                  </span>
                  +
                </p>

                <p className="indent">
                  <span className="code-purple">
                    hackerrank
                  </span>{" "}
                  ={" "}
                  <span className="code-green">
                    "5-star"
                  </span>
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="section about-section">

        <div className="section-container">

          <div className="section-heading">

            <span>01</span>

            <h2>About Me</h2>

          </div>

          <div className="about-grid">

            <div className="about-text">

              <p>
                I am a Computer Science and Engineering student
                with strong skills in Python, SQL, and Data
                Structures.
              </p>

              <p>
                I am a detail-oriented and hardworking student
                seeking an entry-level opportunity to apply
                academic knowledge, develop practical skills,
                and contribute to the growth of an organization.
              </p>

              <p>
                I enjoy solving programming problems, learning
                new technologies, and developing projects that
                provide practical solutions to real-world
                problems.
              </p>

            </div>

            <div className="about-stats">

              <div className="stat-card">
                <strong>8.92</strong>
                <span>CGPA</span>
              </div>

              <div className="stat-card">
                <strong>300+</strong>
                <span>LeetCode Problems</span>
              </div>

              <div className="stat-card">
                <strong>5★</strong>
                <span>HackerRank</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section id="education" className="section education-section">

        <div className="section-container">

          <div className="section-heading">

            <span>02</span>

            <h2>Education</h2>

          </div>

          <div className="timeline">

            {education.map((item, index) => (

              <div className="timeline-item" key={index}>

                <div className="timeline-number">
                  0{index + 1}
                </div>

                <div className="timeline-content">

                  <div className="timeline-date">
                    {item.year}
                  </div>

                  <h3>{item.degree}</h3>

                  <h4>{item.college}</h4>

                  <p>{item.score}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="section skills-section">

        <div className="section-container">

          <div className="section-heading">

            <span>03</span>

            <h2>Skills</h2>

          </div>

          <div className="skills-grid">

            <div className="skill-card">

              <h3>Programming Languages</h3>

              <div className="skill-tags">

                {skills.programming.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}

              </div>

            </div>


            <div className="skill-card">

              <h3>Web Development</h3>

              <div className="skill-tags">

                {skills.web.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}

              </div>

            </div>


            <div className="skill-card">

              <h3>Databases</h3>

              <div className="skill-tags">

                {skills.databases.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}

              </div>

            </div>


            <div className="skill-card">

              <h3>Tools</h3>

              <div className="skill-tags">

                {skills.tools.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}

              </div>

            </div>


            <div className="skill-card skill-card-wide">

              <h3>Core CS Skills</h3>

              <div className="skill-tags">

                {skills.core.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section projects-section">

        <div className="section-container">

          <div className="section-heading">

            <span>04</span>

            <h2>Projects</h2>

          </div>


          <div className="projects-grid">

            {projects.map((project) => (

              <article
                className="project-card"
                key={project.number}
              >

                <div className="project-top">

                  <span className="project-number">
                    {project.number}
                  </span>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                  >
                    GitHub ↗
                  </a>

                </div>


                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>


                <div className="project-technologies">

                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="section experience-section">

        <div className="section-container">

          <div className="section-heading">

            <span>05</span>

            <h2>Work Experience</h2>

          </div>


          <div className="experience-list">

            {internships.map((internship) => (

              <div
                className="experience-card"
                key={internship.number}
              >

                <div className="experience-number">
                  {internship.number}
                </div>


                <div className="experience-content">

                  <div className="experience-date">
                    {internship.duration}
                  </div>

                  <h3>
                    {internship.title}
                  </h3>

                  <h4>
                    {internship.company}
                  </h4>

                  <p>
                    {internship.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CERTIFICATIONS ================= */}

      <section
        id="certifications"
        className="section certifications-section"
      >

        <div className="section-container">

          <div className="section-heading">

            <span>06</span>

            <h2>Certifications</h2>

          </div>


          <div className="certifications-grid">

            {certifications.map((certificate) => (

              <div
                className="certificate-card"
                key={certificate.number}
              >

                <div className="certificate-top">

                  <span className="certificate-number">
                    {certificate.number}
                  </span>

                  <div className="certificate-icon">
                    ✓
                  </div>

                </div>


                <h3>
                  {certificate.title}
                </h3>


                <p className="certificate-organization">
                  {certificate.organization}
                </p>


                <p>
                  {certificate.code}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= PUBLICATION ================= */}

      <section
        id="publication"
        className="section publication-section"
      >

        <div className="section-container">

          <div className="section-heading">

            <span>07</span>

            <h2>Publication</h2>

          </div>


          <div className="publication-card">

            <div className="publication-icon">
              📄
            </div>


            <div className="publication-content">

              <span className="publication-label">
                RESEARCH PAPER • 2025
              </span>

              <h3>
                Energy-efficient Artificial Intelligence
                through Neuromorphic Architectures
              </h3>

              <p className="publication-journal">
                Journal of Innovations in Data Science
                and Big Data Management
              </p>

              <p>
                Published a research paper exploring
                energy-efficient Artificial Intelligence
                through neuromorphic architectures and
                their potential for developing more
                energy-efficient AI systems.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ACHIEVEMENTS ================= */}

      <section id="achievements" className="section achievements-section">

        <div className="section-container">

          <div className="section-heading">

            <span>08</span>

            <h2>Achievements</h2>

          </div>


          <div className="achievements-grid">

            <div className="achievement-card">

              <div className="achievement-icon">
                &lt;/&gt;
              </div>

              <h3>300+ LeetCode</h3>

              <p>
                Solved 300+ programming problems on
                LeetCode.
              </p>

            </div>


            <div className="achievement-card">

              <div className="achievement-icon">
                ★
              </div>

              <h3>5-Star HackerRank</h3>

              <p>
                Achieved a 5-star rating on HackerRank.
              </p>

            </div>


            <div className="achievement-card">

              <div className="achievement-icon">
                📄
              </div>

              <h3>Research Publication</h3>

              <p>
                Published research on Energy-efficient
                Artificial Intelligence through
                Neuromorphic Architectures in 2025.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="section contact-section">

        <div className="section-container">

          <div className="contact-content">

            <p className="eyebrow">
              LET'S CONNECT
            </p>

            <h2>
              Have an opportunity or
              <span> project in mind?</span>
            </h2>

            <p>
              I am open to entry-level opportunities,
              internships, and projects where I can
              apply my technical skills and continue
              learning.
            </p>


            <div className="contact-buttons">

              <a
                href="mailto:harshithanagalapalli@example.com"
                className="primary-button"
              >
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/nagalapalli-harshitha-371318322"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/23A31A0520"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                GitHub ↗
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-logo">
            H<span>.</span>
          </div>

          <p>
            © 2026 Harshitha Nagalapalli. Built with React.
          </p>

          <button
            onClick={() => scrollToSection("home")}
            className="back-to-top"
          >
            Back to top ↑
          </button>

        </div>

      </footer>

    </div>
  );
}

export default App;