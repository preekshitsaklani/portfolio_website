// src/components/About.js
import React from 'react';
import './About.css';

const About = ({ darkMode }) => {
  const skills = [
    { name: 'Python', level: 95, icon: '🐍' },
    { name: 'TensorFlow/Keras', level: 90, icon: '🧠' },
    { name: 'Scikit-learn', level: 88, icon: '📊' },
    { name: 'Neural Networks', level: 92, icon: '🔗' },
    { name: 'Data Analysis', level: 85, icon: '📈' },
    { name: 'Deep Learning', level: 87, icon: '🎯' }
  ];

  return (
    <section id="about" className={`about-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Passionate AI/ML Developer</h3>
              <p>
                I'm a dedicated machine learning engineer with a passion for creating intelligent 
                systems that solve real-world problems. With expertise in deep learning, natural 
                language processing, and computer vision, I transform complex data into actionable insights.
              </p>
              <p>
                My journey in AI/ML spans across various domains including medical image classification, 
                predictive analytics, and natural language understanding. I believe in the power of 
                data-driven solutions to make a positive impact on society.
              </p>
            </div>

            <div className="experience-stats">
              <div className="stat-item">
                <span className="stat-number">11+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">ML Algorithms Mastered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Passion for Innovation</span>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-specialties">
          <h3>Specializations</h3>
          <div className="specialties-grid">
            <div className="specialty-card">
              <div className="specialty-icon">🧠</div>
              <h4>Deep Learning</h4>
              <p>Neural networks, CNNs, and advanced architectures for complex pattern recognition</p>
            </div>
            <div className="specialty-card">
              <div className="specialty-icon">📊</div>
              <h4>Data Science</h4>
              <p>Statistical analysis, data visualization, and predictive modeling</p>
            </div>
            <div className="specialty-card">
              <div className="specialty-icon">🔍</div>
              <h4>Computer Vision</h4>
              <p>Image classification, medical imaging, and visual pattern recognition</p>
            </div>
            <div className="specialty-card">
              <div className="specialty-icon">💬</div>
              <h4>NLP</h4>
              <p>Text processing, sentiment analysis, and language model fine-tuning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
