import React from 'react';
import './Projects.css';

export default function Projects() {
  const projectsData = [
    {
      id: 'PROJECT_01',
      title: 'AetherNet Engine',
      subtitle: 'DECENTRALIZED CHAT CORE',
      tech: ['React', 'WebSockets', 'Node.js', 'Express'],
      description: 'A high-throughput decentralized message relay built for low-latency node-to-node telemetry transmission. Features encrypted data payloads and real-time network latency maps.',
      link: '#',
      source: '#'
    },
    {
      id: 'PROJECT_02',
      title: 'DarkCore Console',
      subtitle: 'DIAGNOSTIC TELEMETRY UNIT',
      tech: ['React', 'D3.js', 'CSS Grid', 'RxJS'],
      description: 'System resource diagnostic terminal dashboard presenting dynamic charts, socket-stream feeds, and threat tracking data. Fully customized B&W UI with glassmorphism panels.',
      link: '#',
      source: '#'
    },
    {
      id: 'PROJECT_03',
      title: 'Spectral Vault',
      subtitle: 'ENCRYPTED DATA STORE',
      tech: ['React', 'WebCrypto API', 'IndexDB'],
      description: 'Client-side zero-knowledge password and document vault utilizing AES-GCM 256 encryption. Features biometric authentication simulations and sandboxed key storage modules.',
      link: '#',
      source: '#'
    },
    {
      id: 'PROJECT_04',
      title: 'Vector Grid',
      subtitle: 'NEURAL NET VISUALIZER',
      tech: ['React', 'Vite', 'Three.js', 'GLSL'],
      description: 'A hardware-accelerated 3D vector grid visualizer demonstrating interactive machine learning nodes and pathway rendering. Renders thousands of points at 60 FPS.',
      link: '#',
      source: '#'
    }
  ];

  return (
    <section id="projects" className="cyber-projects">
      <div className="projects-container">
        
        {/* Header */}
        <div className="section-header-wrap">
          <div className="sub-title-cyber">[ SYS_COMPILED_BUILDS ]</div>
          <h2 className="cyber-title">Active Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card cyber-corner-box">
              
              {/* Card Scan Effect Overlay */}
              <div className="project-hover-overlay"></div>
              
              {/* Top Meta info */}
              <div className="project-header">
                <span className="project-id">{project.id}</span>
                <span className="project-status">BUILT_STABLE</span>
              </div>

              {/* Title & Subtitle */}
              <div className="project-title-wrap">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-subtitle">{project.subtitle}</span>
              </div>

              {/* Description */}
              <p className="project-desc">{project.description}</p>

              {/* Tech Stack Badges */}
              <div className="project-tech">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-badge">{t}</span>
                ))}
              </div>

              {/* Action Links */}
              <div className="project-links">
                <a href={project.link} className="project-link-btn cyber-brackets" onClick={(e) => {
                  e.preventDefault();
                  alert(`Accessing simulated live deploy for ${project.title}`);
                }}>
                  LIVE_PREVIEW
                </a>
                <a href={project.source} className="project-link-btn cyber-brackets" onClick={(e) => {
                  e.preventDefault();
                  alert(`Accessing source repository for ${project.title}`);
                }}>
                  SOURCE_MANIFEST
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
