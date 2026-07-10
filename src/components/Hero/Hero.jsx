import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroImage from '../../assets/hero.jpeg';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [glitchActive, setGlitchActive] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const roles = [
    'SYSTEM ARCHITECT',
    'FULL STACK OPERATIVE',
    'CYBERNETIC INTERFACE DESIGNER',
    'CREATIVE TECHNOLOGIST'
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Wait before delete
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex(prev => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  // Periodic random diagnostics glitch trigger
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Clear URL hash on load and keep page at top
  useEffect(() => {
    try {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
    } catch (e) {
      // ignore
    }

    try {
      if (window.location && window.location.hash) {
        const newUrl = window.location.pathname + window.location.search;
        window.history.replaceState(null, '', newUrl);
      }
    } catch (e) {
      // ignore
    }

    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch (e) {
      // ignore
    }
  }, []);

  return (
    <section id="hero" className="cyber-hero">
      <div className="hero-grid-container">
        
        {/* Left Side: Diagnostics and Details */}
        <div className="hero-info cyber-corner-box">
          <div className="system-tag">INITIALIZING NEURAL LINK... [OK]</div>
          
          <h1 className="hero-title">
            <span className="last-name glitch-text" data-text="BASKAR">BASKAR</span>
          </h1>

          <div className="role-typing-container">
            <span className="terminal-symbol">&gt;</span>{' '}
            <span className="typing-text">{typedText}</span>
            <span className="cursor-blink">_</span>
          </div>

          <p className="hero-description">
            Computer Science student with a builder mindset.Transforming concepts into real-world applications.Skilled in Python, HTML, CSS, and modern web tools. jDriven by curiosity, innovation, and continuous growth.
          </p>
          <div className="hero-cta-group">
            <a href="#projects" className="cyber-btn secondary-btn">
              <span>View Builds</span>
            </a>  
          </div>
          <div className="diagnostics-panel">
            <div className={`diag-header ${glitchActive ? 'glitch-flicker' : ''}`}>
              <span>[SYSTEM_LOG_v2.0]</span>
              <span className="pulse-text">ACTIVE_LINK</span>
            </div>
            <div className="diag-grid">
              <div className="diag-line">
                <span className="diag-label">LATENCY:</span>
                <span className="diag-value">14ms</span>
              </div>
              <div className="diag-line">
                <span className="diag-label">MEM_LOAD:</span>
                <span className="diag-value">100%</span>
              </div>
              <div className="diag-line">
                <span className="diag-label">LOC:</span>
                <span className="diag-value">41.8781° N, 87.6298° W</span>
              </div>
              <div className="diag-line"><div className="3">`</div>
                <span className="diag-label">INTEGRITY:</span>
                <span className="diag-value safe">SECURE (100%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Identity Core / Scanning Portal (Avatar) */}
        <div className="identity-portal-container">
          <div className="portal-bracket-box">
            <div className="portal-scanning-area">
              <div className="laser-scanner"></div>
              <div className="grid-overlay"></div>
              
              {/* Target crosshairs */}
              <div className="crosshair ch-tl">+</div>
              <div className="crosshair ch-tr">+</div>
              <div className="crosshair ch-bl">+</div>
              <div className="crosshair ch-br">+</div>
              
              {/* Dynamic stats overlay */}
              <div className="portal-data-overlay top-left-data">
                <span>SYS_INIT: OK</span>
                <span>BIOMETRICS: DETECTED</span>
              </div>
              
              <div className="portal-data-overlay bottom-right-data">
                <span>RNG: 0.9924</span>
                <span>FACIAL_RECOG: STABLE</span>
              </div>

              {/* Avatar Image Rendering */}
              {!imageError ? (
                <img 
                  className="avatar-image" 
                  src={heroImage} 
                  alt="Operative Avatar" 
                  onError={() => setImageError(true)} 
                />
              ) : (
                /* Sleek Custom Vector Wireframe Mesh Face if no avatar.jpg is uploaded */
                <svg className="avatar-fallback-svg" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="35" r="18" stroke="#ffffff" strokeWidth="0.75" strokeDasharray="3 3" />
                  <path d="M50 17 V53" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                  <path d="M32 35 H68" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                  {/* Face outline mesh */}
                  <path d="M50 12 C28 12 28 45 32 55 C36 65 42 75 50 82 C58 75 64 65 68 55 C72 45 72 12 50 12 Z" stroke="#ffffff" strokeWidth="1" />
                  {/* Eyes line grid */}
                  <path d="M36 40 L45 42 M55 42 L64 40" stroke="#ffffff" strokeWidth="1" />
                  <path d="M50 42 L50 60 L45 62 L50 63 L55 62 Z" stroke="#ffffff" strokeWidth="0.75" />
                  {/* Mouth grid */}
                  <path d="M42 68 C45 71 55 71 58 68" stroke="#ffffff" strokeWidth="0.75" />
                  <path d="M38 68 H62" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                  {/* Cyber mesh connections */}
                  <line x1="50" y1="12" x2="50" y2="35" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                  <line x1="32" y1="35" x2="50" y2="35" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                  <line x1="68" y1="35" x2="50" y2="35" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                  <line x1="32" y1="55" x2="45" y2="62" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                  <line x1="68" y1="55" x2="55" y2="62" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                  <circle cx="50" cy="35" r="2" fill="#ffffff" />
                  <circle cx="40" cy="41" r="1.5" fill="#ffffff" />
                  <circle cx="60" cy="41" r="1.5" fill="#ffffff" />
                </svg>
              )}

              {/* Upload Info Indicator */}
              <div className="upload-indicator-tip">
                <span>PICTURE</span>
              </div>
            </div>
            
            <div className="portal-caption">
              <span className="dot online"></span> SYSTEM IDENTIFICATION UNIT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
