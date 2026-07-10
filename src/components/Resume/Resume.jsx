import React from 'react';
import './Resume.css';

export default function Resume() {
  const timelineData = [
    {
      id: 'LOG_01',
      date: '2024 - PRESENT',
      type: 'EXPERIENCE',
      role: 'Lead Frontend Developer',
      company: 'CyberSolutions Corp',
      description: 'Architecting high-fidelity, responsive user interfaces and modern React architectures. Optimizing performance bottlenecks, reducing bundle size by 35%, and establishing styling guide structures for a team of 6 engineers.'
    },
    {
      id: 'LOG_02',
      date: '2022 - 2024',
      type: 'EXPERIENCE',
      role: 'Full Stack Engineer',
      company: 'NeoTech Systems',
      description: 'Developed and maintained robust web portals using Node.js, React, and PostgreSQL. Spearheaded the migration of legacy projects into modern Vite setups, and integrated third-party REST services.'
    },
    {
      id: 'LOG_03',
      date: '2020 - 2022',
      type: 'EXPERIENCE',
      role: 'Junior Frontend Developer',
      company: 'WebMatrix Solutions',
      description: 'Collaborated in building custom e-commerce engines, internal CMS interfaces, and dashboard visualization widgets. Developed pixel-perfect responsive pages matching Figma UI wireframes.'
    },
    {
      id: 'LOG_04',
      date: '2016 - 2020',
      type: 'EDUCATION',
      role: 'B.S. in Computer Science',
      company: 'Cybernetic Institute of Technology',
      description: 'Focused on software engineering principles, database architectures, network design, and artificial intelligence models. Graduated with honors, presenting a thesis on distributed systems.'
    }
  ];

  return (
    <section id="resume" className="cyber-resume">
      <div className="resume-container">
        
        {/* Header */}
        <div className="section-header-wrap">
          <div className="sub-title-cyber">[ SYS_HISTORY_LOG ]</div>
          <h2 className="cyber-title">Professional Log</h2>
        </div>

        {/* Timeline Log Grid */}
        <div className="timeline-wrap">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-row">
              {/* Timeline Left: Log info & timestamp */}
              <div className="timeline-side-info">
                <div className="log-badge cyber-brackets">{item.id}</div>
                <div className="log-date">{item.date}</div>
                <div className="log-type-tag">{item.type}</div>
              </div>

              {/* Timeline Connector Line */}
              <div className="timeline-spine">
                <div className="spine-dot"></div>
                <div className="spine-line"></div>
              </div>

              {/* Timeline Right: Main Content Box */}
              <div className="timeline-content cyber-corner-box">
                <div className="content-header">
                  <h3 className="timeline-role">{item.role}</h3>
                  <span className="timeline-company">{item.company}</span>
                </div>
                <p className="timeline-desc">{item.description}</p>
                <div className="box-deco-element">LINK_SECURE</div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Resume Call-to-action */}
        <div className="resume-download-banner cyber-corner-box">
          <div className="banner-details">
            <h3 className="banner-title">REQUEST_FULL_MANIFEST</h3>
            <p className="banner-text">Export a highly structured PDF containing comprehensive project history and educational records.</p>
          </div>
          <a href="#" className="cyber-btn" onClick={(e) => {
            e.preventDefault();
            alert("SYSTEM NOTIFICATION: PDF Manifest generated. Downloading simulated portfolio data...");
          }}>
            <span>↓ DOWNLOAD_MANIFEST.PDF</span>
          </a>
        </div>

      </div>
    </section>
  );
}
