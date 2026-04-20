import { useState, useEffect } from 'react';
import './Hero.css';

const roles = [
  'Infrastructure Engineer @ JPMorgan Chase',
  'SRE | Prod Support Specialist',
  'Cloud & DevOps Engineer',
  'IoT Solutions Architect',
  'AI-Augmented Engineer',
  'CTC PROD SRE Team Member',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        }, 45);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2200);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex(c => c - 1);
        }, 22);
        return () => clearTimeout(t);
      } else {
        setRoleIndex(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [charIndex, typing, roleIndex]);

  return (
    <section id="hero" className="hero">
      <div className={`hero__content ${visible ? 'hero__content--visible' : ''}`}>
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <div className="hero__name-block">
          <div className="hero__greeting">Hello, I'm</div>
          <h1 className="hero__name">
            <span className="hero__name-first">BHUVAN</span>
            <span className="hero__name-last"> TEJA KOTTI</span>
          </h1>
        </div>

        <div className="hero__role">
          <span className="hero__role-prefix">&gt; </span>
          <span className="hero__role-text">{displayText}</span>
          <span className="hero__cursor">|</span>
        </div>

        <p className="hero__tagline">
          Securing & scaling critical infrastructure at <span className="hero__highlight">JPMorgan Chase</span> ·
          CTC PROD SRE · AI-powered engineer driving reliability across <span className="hero__highlight">67+ production applications</span>
        </p>

        <div className="hero__stats">
          {[
            { val: '3+', label: 'Years Experience' },
            { val: '67+', label: 'Apps Supported' },
            { val: '3', label: 'Cloud Platforms' },
            { val: '5+', label: 'Certifications' },
          ].map((s, i) => (
            <div className="hero__stat" key={i} style={{ animationDelay: `${0.8 + i * 0.15}s` }}>
              <span className="hero__stat-val">{s.val}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="hero__actions">
          <a href="https://www.linkedin.com/in/bhuvan-teja" target="_blank" rel="noreferrer" className="hero__btn hero__btn--primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
          <a href="https://github.com/kbhuvanteja" target="_blank" rel="noreferrer" className="hero__btn hero__btn--secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub
          </a>
          <button className="hero__btn hero__btn--outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </button>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__orb hero__orb--3"></div>
        <div className="hero__tech-ring">
          {['AWS', 'GCP', 'Azure', 'Splunk', 'Dynatrace', 'Kubernetes', 'Python', 'Docker'].map((tech, i) => (
            <div key={tech} className="hero__tech-item" style={{ '--i': i, '--total': 8 }}>
              <span>{tech}</span>
            </div>
          ))}
          <div className="hero__ring-center">
            <div className="hero__ring-inner">SRE</div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>SCROLL</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
}
