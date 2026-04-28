import { useRef, useState, useEffect } from 'react';
import './Contact.css';

function useIntersection(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
}

const contactLinks = [
  {
    label: 'Email',
    value: 'bhuvanteja24@gmail.com',
    href: 'mailto:bhuvanteja24@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    color: '#00d4ff',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/bhuvan-teja',
    href: 'https://www.linkedin.com/in/bhuvan-teja',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    color: '#0077b5',
  },
  {
    label: 'GitHub',
    value: 'github.com/kbhuvan24',
    href: 'https://github.com/kbhuvan24',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
    color: '#e8f4f8',
  },
  {
    label: 'Phone',
    value: '+91 9492676220',
    href: 'tel:+919492676220',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.38 2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.88a16 16 0 0 0 6 6l.88-.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    color: '#00ff88',
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const visible = useIntersection(sectionRef);

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className={`section__inner contact__inner ${visible ? 'section__inner--visible' : ''}`}>
        <div className="section__header">
          <span className="section__tag">// LET'S CONNECT</span>
          <h2 className="section__title">Get In <span className="section__title-accent">Touch</span></h2>
        </div>

        <div className="contact__grid">
          <div className="contact__message">
            <div className="contact__message-card">
              <div className="contact__message-glow"></div>
              <h3 className="contact__message-title">Open to Opportunities</h3>
              <p className="contact__message-text">
                Whether you're looking to discuss cutting-edge cloud infrastructure,
                SRE best practices, AI-driven operations, or exciting new opportunities —
                I'm always open to meaningful conversations.
              </p>
              <div className="contact__status">
                <span className="contact__status-dot"></span>
                <span>Currently at JPMorgan Chase · Hyderabad, India</span>
              </div>
              <div className="contact__tags">
                {['SRE', 'Cloud', 'DevOps', 'AI/ML', 'IoT', 'Cybersecurity'].map(t => (
                  <span key={t} className="contact__tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="contact__links">
            {contactLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="contact__link-card"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{ '--link-color': link.color, '--delay': `${i * 0.1}s` }}
              >
                <div className="contact__link-icon" style={{ color: link.color }}>
                  {link.icon}
                </div>
                <div className="contact__link-info">
                  <div className="contact__link-label">{link.label}</div>
                  <div className="contact__link-value">{link.value}</div>
                </div>
                <span className="contact__link-arrow">→</span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact__footer">
          <div className="contact__footer-line"></div>
          <div className="contact__footer-text">
            <span className="contact__footer-name">Bhuvan Teja Kotti</span>
            <span className="contact__footer-sep">·</span>
            <span>Infrastructure Engineer · CTC PROD SRE</span>
            <span className="contact__footer-sep">·</span>
            <span>JPMorgan Chase & Co.</span>
          </div>
          <div className="contact__footer-copy">
            Built with React · Designed with purpose · Powered by passion
          </div>
        </div>
      </div>
    </section>
  );
}
