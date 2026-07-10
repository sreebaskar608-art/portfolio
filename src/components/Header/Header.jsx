import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [uptime, setUptime] = useState(0);
  const [systemIp, setSystemIp] = useState('192.168.84.101');

  useEffect(() => {
    // Simulated IP and running uptime
    const ips = ['172.21.300.9', '192.168.88.254', '10.0.1.55', '84.21.90.11'];
    setSystemIp(ips[Math.floor(Math.random() * ips.length)]);

    const interval = setInterval(() => {
      setUptime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatUptime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <header className="cyber-header">
      <div className="header-grid">
        {/* System Diagnostics / Brand */}
        <div className="system-branding">
          <div className="cyber-brand">
            <span className="blink-fast">[</span> CORE_OPERATIVE <span className="blink-fast">]</span>
          </div>
          <div className="system-stats">
            <div className="stat-item">
              <span className="label">IP_ADDR:</span>
              <span className="value">{systemIp}</span>
            </div>
            <div className="stat-item">
              <span className="label">UPTIME:</span>
              <span className="value">{formatUptime(uptime)}</span>
            </div>
            <div className="stat-item hide-mobile">
              <span className="label">STATUS:</span>
              <span className="value online"><span className="status-dot"></span> SECURE</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`header-nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#hero" onClick={() => setMenuOpen(false)}>
            <span className="nav-num">01.</span>HOME
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            <span className="nav-num">02.</span>SKILLS
          </a>
          <a href="#resume" onClick={() => setMenuOpen(false)}>
            <span className="nav-num">03.</span>LOGS
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            <span className="nav-num">04.</span>PROJECTS
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            <span className="nav-num">05.</span>UPLINK
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`menu-toggle-btn ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </div>
    </header>
  );
}
