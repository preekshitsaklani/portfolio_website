// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_k24p1qh'
  const EMAILJS_TEMPLATE_ID = 'portfolio_contact';
  const EMAILJS_PUBLIC_KEY = '0M_4rraJ5I7cEP19B';

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Preekshit Saklani',
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'preekshit.saklani2004@gmail.com',
      href: 'mailto:preekshit.saklani2004@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+918383051949',
      href: 'tel:+918383051949'
    }
  ];

  return (
    <section id="contact" className={`contact-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="contact-subtitle">
            Let's discuss your next AI/ML project or collaboration opportunity
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Let's Work Together</h3>
              <p>
                I'm always excited to work on challenging AI/ML projects and collaborate 
                with like-minded professionals. Whether you have a specific project in mind 
                or just want to discuss possibilities, I'd love to hear from you.
              </p>
            </div>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a 
                  key={index}
                  href={method.href}
                  className="contact-method"
                  target={method.href.startsWith('http') ? '_blank' : '_self'}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-info">
                    <h4>{method.title}</h4>
                    <p>{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="availability">
              <div className="availability-status">
                <div className="status-dot available"></div>
                <span>Available for new projects</span>
              </div>
              <p>Usually responds within 24 hours</p>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Project discussion, collaboration, etc."
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or what you'd like to discuss..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="send-icon">📤</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="submit-success">
                  <span className="success-icon">✅</span>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="submit-error">
                  <span className="error-icon">❌</span>
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
