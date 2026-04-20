import { useRef, useEffect, useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    id: 'sre',
    title: 'SRE & Operations',
    icon: '⚡',
    color: '#00d4ff',
    skills: [
      { name: 'Splunk (Log Analytics)', level: 88 },
      { name: 'Dynatrace (APM)', level: 85 },
      { name: 'Netcool (Alerting)', level: 82 },
      { name: 'Incident Management', level: 90 },
      { name: 'SLO/SLA Management', level: 85 },
      { name: 'Production Change Mgmt', level: 88 },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Platforms',
    icon: '☁️',
    color: '#0066ff',
    skills: [
      { name: 'AWS (EC2, S3, Lambda, IoT Core, DynamoDB, CloudWatch, VPC, API Gateway, Amplify)', level: 88 },
      { name: 'Google Cloud Platform (GCP)', level: 72 },
      { name: 'Microsoft Azure (IoT Solutions)', level: 70 },
    ],
  },
  {
    id: 'security',
    title: 'Cybersecurity Tools',
    icon: '🔐',
    color: '#ff6b35',
    skills: [
      { name: 'CrowdStrike (EDR)', level: 80 },
      { name: 'Cortex (XDR)', level: 75 },
      { name: 'DLP (Data Loss Prevention)', level: 78 },
      { name: 'AWS Security Best Practices', level: 82 },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Infrastructure',
    icon: '🔧',
    color: '#7b2fff',
    skills: [
      { name: 'Docker & Kubernetes', level: 80 },
      { name: 'GitLab / Git / CI-CD', level: 85 },
      { name: 'Jenkins', level: 75 },
      { name: 'Linux (Ubuntu LTS)', level: 88 },
      { name: 'Windows Administration', level: 85 },
      { name: 'Shell Scripting / PowerShell', level: 78 },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Emerging Tech',
    icon: '🤖',
    color: '#00ff88',
    skills: [
      { name: 'AI/ML Chatbot Training', level: 75 },
      { name: 'Generative AI Tools (daily usage)', level: 82 },
      { name: 'AI-Augmented SRE Operations', level: 80 },
      { name: 'Serenity Dashboard (Building)', level: 70 },
      { name: 'Prompt Engineering', level: 78 },
    ],
  },
  {
    id: 'dev',
    title: 'Development',
    icon: '💻',
    color: '#00d4ff',
    skills: [
      { name: 'Python', level: 83 },
      { name: 'Angular / HTML / CSS / JS', level: 76 },
      { name: 'C++', level: 70 },
      { name: 'REST APIs', level: 82 },
      { name: 'MQTT / Mosquitto', level: 78 },
    ],
  },
  {
    id: 'iot',
    title: 'IoT & Embedded',
    icon: '📡',
    color: '#ff6b35',
    skills: [
      { name: 'AWS IoT Core', level: 82 },
      { name: 'Arduino / Raspberry Pi', level: 75 },
      { name: 'Sensors & Actuators', level: 72 },
      { name: 'CAL (Cloud Abstraction Layer)', level: 80 },
    ],
  },
];

const techTags = [
  'AWS', 'GCP', 'Azure', 'Splunk', 'Dynatrace', 'Netcool', 'CrowdStrike',
  'Cortex', 'DLP', 'Python', 'Docker', 'Kubernetes', 'GitLab', 'CI/CD',
  'Linux', 'MQTT', 'AngularJS', 'Lambda', 'DynamoDB', 'IoT Core',
  'CloudWatch', 'API Gateway', 'Jenkins', 'Robot Framework', 'ServiceNow',
  'JIRA', 'C++', 'Shell Scripting', 'PowerShell', 'REST APIs',
  'AI/ML', 'GenAI', 'YOCTO', 'Mosquitto', 'Arduino', 'Raspberry Pi',
];

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{
            width: animate ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: animate ? `0 0 10px ${color}55` : 'none',
          }}
        ></div>
      </div>
    </div>
  );
}

function useIntersection(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('sre');
  const sectionRef = useRef(null);
  const visible = useIntersection(sectionRef);
  const active = skillCategories.find(c => c.id === activeTab);

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className={`section__inner ${visible ? 'section__inner--visible' : ''}`}>
        <div className="section__header">
          <span className="section__tag">// TECHNICAL ARSENAL</span>
          <h2 className="section__title">Skills & <span className="section__title-accent">Expertise</span></h2>
        </div>

        <div className="skills__tabs">
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              className={`skills__tab ${activeTab === cat.id ? 'skills__tab--active' : ''}`}
              style={{ '--tab-color': cat.color }}
              onClick={() => setActiveTab(cat.id)}
            >
              <span>{cat.icon}</span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {active && (
          <div className="skills__panel" key={activeTab}>
            <div className="skills__panel-header" style={{ '--panel-color': active.color }}>
              <span className="skills__panel-icon">{active.icon}</span>
              <span className="skills__panel-title">{active.title}</span>
            </div>
            <div className="skills__bars">
              {active.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={active.color}
                  animate={visible}
                />
              ))}
            </div>
          </div>
        )}

        <div className="skills__tags-section">
          <div className="skills__tags-label">
            <span className="section__tag">// FULL TECH STACK</span>
          </div>
          <div className="skills__tags">
            {techTags.map((tag, i) => (
              <span
                key={tag}
                className="skills__tag"
                style={{ animationDelay: `${i * 0.03}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
