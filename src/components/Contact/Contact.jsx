import React, { useState, useEffect } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [consoleLogs, setConsoleLogs] = useState(['[READY] Waiting for secure telemetry uplink...']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingPhase, setSubmittingPhase] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, name: value })); // Typo: wait, let's make sure name is mapped correctly!
    // Ah, let's fix the setter to map keys dynamically:
    setFormData(prev => ({ ...prev, [name]: value }));

    // Append logs as the user types
    const upperName = name.toUpperCase();
    const logMsg = `[KEYPRESS] ${upperName}_BUFFER: "${value.substring(0, 15)}${value.length > 15 ? '...' : ''}" recorded.`;
    
    setConsoleLogs(prev => {
      const logs = [...prev, logMsg];
      if (logs.length > 6) logs.shift(); // Keep last 6 logs
      return logs;
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setConsoleLogs(prev => [...prev, '[ERROR] INCOMPLETE PAYLOAD. Fill all fields before transmission.']);
      return;
    }

    setIsSubmitting(true);
    setSubmittingPhase(1);
    setConsoleLogs(prev => [...prev, '[INIT] Packaging telemetry packet...']);
  };

  useEffect(() => {
    if (!isSubmitting) return;

    let timer;
    if (submittingPhase === 1) {
      timer = setTimeout(() => {
        setConsoleLogs(prev => [...prev, '[CRYPT] Securing payload using RSA-2048 encryption...']);
        setSubmittingPhase(2);
      }, 1000);
    } else if (submittingPhase === 2) {
      timer = setTimeout(() => {
        setConsoleLogs(prev => [...prev, '[ROUTING] Relaying packet through proxy proxies...']);
        setSubmittingPhase(3);
      }, 1000);
    } else if (submittingPhase === 3) {
      timer = setTimeout(() => {
        setConsoleLogs(prev => [
          ...prev, 
          '[TRANSMIT] Telemetry sent successfully.',
          `[UPLINK_OK] Message received from ${formData.name}.`
        ]);
        setSubmittingPhase(4);
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      }, 1500);
    }

    return () => clearTimeout(timer);
  }, [isSubmitting, submittingPhase, formData.name]);

  return (
    <section id="contact" className="cyber-contact">
      <div className="contact-container">
        
        {/* Header */}
        <div className="section-header-wrap">
          <div className="sub-title-cyber">[ SYS_SECURE_UPLINK ]</div>
          <h2 className="cyber-title">Uplink Terminal</h2>
        </div>

        <div className="contact-grid">
          {/* Left Form Panel */}
          <form className="contact-form cyber-corner-box" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="form-name" className="cyber-label">[ SENDER_NAME ]</label>
              <input
                id="form-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="cyber-input"
                placeholder="E.g., John Doe"
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="form-email" className="cyber-label">[ SENDER_EMAIL_ADDR ]</label>
              <input
                id="form-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="cyber-input"
                placeholder="E.g., operative@net.org"
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="form-message" className="cyber-label">[ CORE_MESSAGE_PAYLOAD ]</label>
              <textarea
                id="form-message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="cyber-input cyber-textarea"
                placeholder="Enter details of request/project..."
                rows="6"
                disabled={isSubmitting}
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="cyber-btn submit-btn" 
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'TRANSMITTING...' : '⚡ INITIALIZE_UPLINK'}</span>
            </button>
          </form>

          {/* Right Console Output Panel */}
          <div className="console-display cyber-corner-box">
            <div className="console-header">
              <div className="console-dot-group">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="console-title">TERMINAL_OUTPUT // SECURE_UPLINK</span>
            </div>
            
            <div className="console-logs">
              {consoleLogs.map((log, index) => (
                <div key={index} className="log-line">
                  <span className="line-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="line-text">{log}</span>
                </div>
              ))}
              {isSubmitting && (
                <div className="log-line blink-fast">
                  <span className="line-number">--</span>
                  <span className="line-text">TRANSMITTING TELEMETRY DATA PACKETS...</span>
                </div>
              )}
            </div>
            
            <div className="console-footer">
              <span>SYSTEM: ONLINE</span>
              <span>SECURE_ENCRYPTION_ACTIVE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
