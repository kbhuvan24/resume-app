import { useRef, useState, useEffect } from 'react';
import './About.css';

function useIntersection(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
}

const highlights = [
  { icon: '🏦', title: 'JPMorgan Chase', sub: 'Infrastructure Engineer · CTC PROD SRE', color: '#0066ff' },
  { icon: '🛡️', title: 'Cybersecurity', sub: 'CrowdStrike · Cortex · Splunk · DLP', color: '#ff6b35' },
  { icon: '🤖', title: 'AI-Augmented', sub: 'ML Chatbot Training · AI in Daily SRE', color: '#00ff88' },
  { icon: '☁️', title: 'Multi-Cloud', sub: 'AWS · GCP · Azure Certified', color: '#00d4ff' },
  { icon: '📡', title: 'IoT Expert', sub: 'Device Mgmt · MQTT · Cloud Abstraction', color: '#7b2fff' },
  { icon: '📊', title: 'Observability', sub: 'Splunk · Dynatrace · CloudWatch · Netcool', color: '#00d4ff' },
];

export default function About() {
  const sectionRef = useRef(null);
  const visible = useIntersection(sectionRef);

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className={`section__inner ${visible ? 'section__inner--visible' : ''}`}>
        <div className="section__header">
          <span className="section__tag">// WHO I AM</span>
          <h2 className="section__title">Engineer <span className="section__title-accent">Profile</span></h2>
        </div>

        <div className="about__grid">
          <div className="about__bio">
            <div className="about__terminal">
              <div className="about__terminal-bar">
                <span className="about__terminal-dot" style={{ background: '#ff5f57' }}></span>
                <span className="about__terminal-dot" style={{ background: '#febc2e' }}></span>
                <span className="about__terminal-dot" style={{ background: '#28c840' }}></span>
                <span className="about__terminal-title">bhuvan@jpmc:~$</span>
              </div>
              <div className="about__terminal-body">
                <div className="about__terminal-line">
                  <span className="about__terminal-prompt">$</span>
                  <span className="about__terminal-cmd"> whoami</span>
                </div>
                <p className="about__terminal-output">
                  Infrastructure Engineer at JPMorgan Chase &amp; Co, specializing in{' '}
                  <span className="about__term-highlight">Site Reliability Engineering</span> within the{' '}
                  <span className="about__term-highlight">Cybersecurity Technology Control (CTC)</span> LoB.
                </p>
                <div className="about__terminal-line">
                  <span className="about__terminal-prompt">$</span>
                  <span className="about__terminal-cmd"> cat mission.txt</span>
                </div>
                <p className="about__terminal-output">
                  Operational guardian for{' '}
                  <span className="about__term-highlight">67+ production applications</span>,
                  driving uptime and intelligent automation through{' '}
                  <span className="about__term-highlight">AI-augmented SRE practices</span>.
                  Building the <span className="about__term-highlight">Serenity Dashboard</span> for next-gen operational intelligence.
                </p>
                <div className="about__terminal-line">
                  <span className="about__terminal-prompt">$</span>
                  <span className="about__terminal-cmd"> ls expertise/</span>
                </div>
                <p className="about__terminal-output">
                  Cloud Infrastructure · IoT · DevOps · Cybersecurity · SRE · AI/ML · Production Operations
                </p>
                <div className="about__terminal-line">
                  <span className="about__terminal-prompt">$</span>
                  <span className="about__terminal-cursor">█</span>
                </div>
              </div>
            </div>

            <div className="about__extra-info">
              <div className="about__info-item">
                <span className="about__info-label">Location</span>
                <span className="about__info-value">Hyderabad, India</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Email</span>
                <a href="mailto:bhuvanteja24@gmail.com" className="about__info-link">bhuvanteja24@gmail.com</a>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Phone</span>
                <span className="about__info-value">+91 9492676220</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Community</span>
                <span className="about__info-value">GDG Cloud Bangalore</span>
              </div>
            </div>
          </div>

          <div className="about__highlights">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="about__highlight-card"
                style={{ '--card-color': h.color }}
              >
                <span className="about__highlight-icon">{h.icon}</span>
                <div>
                  <div className="about__highlight-title">{h.title}</div>
                  <div className="about__highlight-sub">{h.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
