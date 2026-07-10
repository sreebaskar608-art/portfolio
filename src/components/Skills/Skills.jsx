import React, { useState } from 'react';
import './Skills.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'ALL_MODULES' },
    { id: 'languages', label: 'LANGUAGES' },
    { id: 'frameworks', label: 'FRAMEWORKS' },
    { id: 'database', label: 'DATABASES' },
    { id: 'tools', label: 'TOOLS' }
  ];

  const skillsData = [
    { name: 'Python', level: 85, category: 'languages', code: 'PY-100' },
    { name: 'HTML5', level: 95, category: 'languages', code: 'HT-101' },
    { name: 'CSS3 / Modern Layouts', level: 90, category: 'languages', code: 'CS-102' },
    { name: 'JavaScript (ES6+)', level: 90, category: 'languages', code: 'JS-103' },
    
    { name: 'React', level: 95, category: 'frameworks', code: 'RE-201' },
    { name: 'Express.js', level: 80, category: 'frameworks', code: 'EX-202' },
    { name: 'Vite / React Ecosystem', level: 90, category: 'frameworks', code: 'VT-203' },
    
    { name: 'MySQL', level: 70, category: 'database', code: 'MQ-301' },

    { name: 'Figma', level: 100, category: 'tools', code: 'FG-401' },
    { name: 'Canva', level: 75, category: 'tools', code: 'CV-402' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  // Generate cyber blocks progress representation: e.g. [██████░░░░]
  const renderCyberBlocks = (level) => {
    const totalBlocks = 10;
    const filledBlocks = Math.round((level / 100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;
    return (
      <span className="cyber-blocks">
        <span className="filled">{'█'.repeat(filledBlocks)}</span>
        <span className="empty">{'░'.repeat(emptyBlocks)}</span>
      </span>
    );
  };

  return (
    <section id="skills" className="cyber-skills">
      <div className="skills-container">
        
        {/* Section Header */}
        <div className="section-header-wrap">
          <div className="sub-title-cyber">[ SYS_INFRASTRUCTURE ]</div>
          <h2 className="cyber-title">Subsystem Skills</h2>
        </div>

        {/* Category Selector Tabs */}
        <div className="skills-categories">
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="tab-marker">&gt;</span> {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card cyber-corner-box">
              <div className="skill-meta">
                <span className="skill-code">{skill.code}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              
              <div className="progress-bar-wrap">
                {/* Visual percentage slider */}
                <div className="real-progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                {/* Text blocks progress slider */}
                <div className="text-progress-blocks">
                  {renderCyberBlocks(skill.level)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom system check stat */}
        <div className="system-footer-status">
          <div className="status-label">SYS_CHECK:</div>
          <div className="status-readout">ALL_COMPONENTS_FUNCTIONING_AT_PEAK_CAPACITY</div>
        </div>

      </div>
    </section>
  );
}
