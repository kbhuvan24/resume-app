import { useRef, useState, useEffect } from 'react';
import './Certifications.css';

function useIntersection(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
}

const certs = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    icon: '☁️',
    color: '#ff9900',
    verified: true,
  },
  {
    name: 'MTA: Python',
    issuer: 'Microsoft',
    icon: '🐍',
    color: '#00a4ef',
    verified: true,
  },
  {
    name: 'MTA: Microsoft Technology Associate',
    issuer: 'Microsoft',
    icon: '🪟',
    color: '#00a4ef',
    verified: true,
  },
  {
    name: 'Google Cloud Ready Facilitator',
    issuer: 'Google Cloud',
    icon: '🌐',
    color: '#4285f4',
    verified: true,
    year: '2021',
  },
  {
    name: 'Create IoT Solutions – Microsoft Azure',
    issuer: 'Coursera / Microsoft',
    icon: '📡',
    color: '#0078d4',
    verified: true,
  },
  {
    name: 'Introduction to Generative AI',
    issuer: 'Coursera / Google',
    icon: '🤖',
    color: '#00ff88',
    verified: true,
  },
];

const education = [
  {
    degree: 'B.Tech — Electronic Communications Engineering',
    institution: 'Aditya Educational Institutions',
    year: '2022',
    icon: '🎓',
  },
  {
    degree: 'Intermediate (12th Grade)',
    institution: 'Tirumala Educational Institutions',
    year: '2018',
    icon: '📚',
  },
  {
    degree: 'SSC (10th Grade)',
    institution: 'BVM EM High School',
    year: '2016',
    icon: '🏫',
  },
];

const extracurriculars = [
  { text: 'Secretary — JCI Rajamahendravaram Startups (2024)', icon: '🏆' },
  { text: 'Member — Google Developer Groups, GDG Cloud Bangalore', icon: '👥' },
  { text: 'NCC — National Cadet Corps, secured "A" Certificate (2016)', icon: '🎖️' },
];

export default function Certifications() {
  const sectionRef = useRef(null);
  const visible = useIntersection(sectionRef);

  return (
    <section id="certifications" className="section certs" ref={sectionRef}>
      <div className={`section__inner ${visible ? 'section__inner--visible' : ''}`}>
        <div className="section__header">
          <span className="section__tag">// CREDENTIALS</span>
          <h2 className="section__title">Certs & <span className="section__title-accent">Education</span></h2>
        </div>

        <div className="certs__grid-main">
          <div>
            <div className="certs__sub-title">
              <span className="section__tag">// CERTIFICATIONS</span>
            </div>
            <div className="certs__cards">
              {certs.map((c, i) => (
                <div
                  key={c.name}
                  className="cert-card"
                  style={{ '--cert-color': c.color, '--delay': `${i * 0.08}s` }}
                >
                  <span className="cert-card__icon">{c.icon}</span>
                  <div className="cert-card__info">
                    <div className="cert-card__name">{c.name}</div>
                    <div className="cert-card__issuer">{c.issuer}{c.year ? ` · ${c.year}` : ''}</div>
                  </div>
                  {c.verified && (
                    <span className="cert-card__badge">✓</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="certs__sub-title">
              <span className="section__tag">// EDUCATION</span>
            </div>
            <div className="edu__list">
              {education.map((e, i) => (
                <div key={e.degree} className="edu__item" style={{ '--delay': `${i * 0.1}s` }}>
                  <div className="edu__icon">{e.icon}</div>
                  <div className="edu__content">
                    <div className="edu__degree">{e.degree}</div>
                    <div className="edu__institution">{e.institution}</div>
                    <div className="edu__year">{e.year}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="certs__sub-title" style={{ marginTop: '2rem' }}>
              <span className="section__tag">// LEADERSHIP & COMMUNITY</span>
            </div>
            <div className="extra__list">
              {extracurriculars.map((e, i) => (
                <div key={i} className="extra__item" style={{ '--delay': `${i * 0.1}s` }}>
                  <span className="extra__icon">{e.icon}</span>
                  <span className="extra__text">{e.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
