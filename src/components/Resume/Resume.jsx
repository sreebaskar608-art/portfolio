import React from 'react';
import './Resume.css';

export default function Resume() {
  const timelineData = [
  

    {
      id: 'LOG_01',
      date: '2024 - 2028',
      type: 'EDUCATION',
      role: 'B.E. in Computer Science AND ENGINEERING',
      company: 'RAJALAKSHMI ENGINEERING COLLEGE',
      description: 'Focused on software engineering principles, database architectures, network design, and artificial intelligence models. Graduated with honors, presenting a thesis on distributed systems.'
    },
    {
      id: 'LOG_02',
      date: '2024-NTERNSHIP',
      type: 'INTERN',
      role: 'FULLSTACK  DEVELOPMENT INTERN',
      company: 'Gen lab',
      description: 'Completed a one-month Full Stack Development internship, gaining hands-on experience in building responsive web applications, writing clean code, and collaborating on real-world development tasks.Completed a one-month Full Stack Development internship, gaining hands-on experience in building responsive web applications, writing clean code, and collaborating on real-world development tasks'
    }
    ];


  return (
    <section id="resume" className="cyber-resume">
      <div className="resume-container">
        
        {/* Header */}
        <div className="section-header-wrap">
          <div className="sub-title-cyber">[ SYS_HISTORY_LOG ]</div>
          <h2 className="cyber-title">Professional-Log</h2>
        </div>

        {/* Timeline Log Grid */}
        <div className="timeline-wrap">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-row">
              <div className="timeline-side-info">
                <div className="log-badge cyber-brackets">{item.id}</div>
                <div className="log-date">{item.date}</div>
                <div className="log-type-tag">{item.type}</div>
              </div>

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
                <div className="box-deco-element">LINK-SECURE</div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Resume Call-to-action */}
        <div className="resume-download-banner cyber-corner-box">
          <div className="banner-details">
            <h3 className="banner-title">RESUME</h3>
            <p className="banner-text">Driven Computer Science student with a passion for technology, innovation, and continuous learning.</p>
          </div>
          <a href="#" className="cyber-btn" onClick={(e) => {
            e.preventDefault();
            alert("SYSTEM NOTIFICATION: PDF Manifest generated. Downloading simulated portfolio data...");
          }}>
            <span>↓resume.PDF</span>
          </a>
        </div>

      </div>
    </section>
  );
}
