import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="cyber-footer">
      <div className="footer-wrap">
        <div className="footer-deco-line"></div>
        <div className="footer-grid">
          <div className="footer-branding">
            <span className="brand-name">OPERATIVE BASKAR</span>
            <span className="brand-sub">IDENTITY_MANIFEST_v2.0</span>
          </div>
          
          <div className="footer-meta">
            <span>LOC: SECURE_RELAY_NODE</span>
            <span>SYSTEM: REACT_VITE_SPA</span>
          </div>

          <div className="footer-back-to-top">
            <a href="#hero" className="cyber-brackets scroll-top-link">
              ▲ BACK_TO_ORIGIN
            </a>
          </div>
        </div>
        <div className="copyright-bar">
          <span>&copy; {new Date().getFullYear()} CORE_SYS. ALL TRADEMARKS REGISTERED. UNLOCK SYSTEM FOR FULL CLEARANCE.</span>
        </div>
      </div>
    </footer>
  );
}
