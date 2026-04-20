import { useState, useRef, useEffect } from 'react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    company: 'JPMorgan Chase & Co.',
    logo: 'JPMC',
    logoColor: '#0066ff',
    role: 'Infrastructure Engineer',
    team: 'CTC PROD SRE Team',
    lob: 'Cybersecurity Technology Control (CTC)',
    duration: 'Feb 2026 – Present',
    location: 'Hyderabad, India',
    type: 'CURRENT',
    color: '#0066ff',
    highlights: [
      'Provide operational support for 67+ production applications across the CTC LoB, ensuring high availability and SLA compliance',
      'Serve as Production Support Owner — verifying and approving all production changes before deployment',
      'Act as SME for RADAR application, managing SLOs and SLAs to maintain service reliability',
      'Implement production changes for detect-pillar applications: CrowdStrike, Cortex, Splunk, and DLP',
      'Utilize Netcool for real-time alerting, Splunk for log analytics, and Dynatrace for APM monitoring',
      'Leverage AWS cloud infrastructure for application hosting, monitoring, and incident resolution',
      'Contribute to the AI/ML Chatbot Training Project, embedding AI capabilities into SRE workflows',
      'Building Serenity Dashboard — a comprehensive operational intelligence and observability platform',
      'Actively adopt AI tools in day-to-day SRE operations for runbook automation and anomaly detection',
    ],
    tools: ['Netcool', 'Splunk', 'Dynatrace', 'AWS', 'CrowdStrike', 'Cortex', 'DLP', 'RADAR', 'AI/ML', 'ServiceNow'],
  },
  {
    id: 2,
    company: 'Capgemini Engineering',
    logo: 'CAP',
    logoColor: '#00d4ff',
    role: 'Software Engineer – Development',
    team: 'IoT NGXT Platform',
    lob: 'Client: Morey Corporation',
    duration: 'Apr 2023 – Jan 2026',
    location: 'Bangalore, India',
    type: 'PREVIOUS',
    color: '#00d4ff',
    highlights: [
      'Debugged and improved the CAL (Cloud Abstraction Layer) application, optimizing performance and reducing critical bugs',
      'Set up AWS C++ SDK for CAL development, enhancing multi-cloud integration capabilities',
      'Developed web applications using AngularJS and deployed on AWS Amplify and EC2',
      'Created AWS Lambda functions to retrieve data from DynamoDB, exposing via API Gateway endpoints',
      'Configured device shadows in AWS IoT Core for seamless IoT device lifecycle management',
      'Generated and routed JSON reports to DynamoDB using Mosquitto broker and MQTT protocol',
      'Developed Python automation scripts for report generation, saving significant manual effort',
      'Configured CloudWatch dashboards with custom metrics for detailed monitoring and alerting',
    ],
    tools: ['AWS', 'Lambda', 'DynamoDB', 'IoT Core', 'AngularJS', 'Python', 'MQTT', 'Mosquitto', 'Docker', 'CI/CD'],
  },
  {
    id: 3,
    company: 'Capgemini Engineering',
    logo: 'CAP',
    logoColor: '#7b2fff',
    role: 'Software Engineer – Testing',
    team: 'IoT NGXT Platform',
    lob: 'Client: Morey Corporation',
    duration: 'Sept 2022 – Mar 2023',
    location: 'Bangalore, India',
    type: 'PREVIOUS',
    color: '#7b2fff',
    highlights: [
      'Analysed requirements and designed comprehensive test cases ensuring full coverage and accuracy',
      'Executed client-provided test cases continuously, maintaining high quality standards',
      'Triggered YOCTO builds and executed test cases on physical hardware devices',
      'Reported defects and collaborated with developers for timely resolution',
      'Generated detailed test result reports with insights into product performance',
      'Managed testing procedures across unit, integration, functional, and E2E test suites',
    ],
    tools: ['Robot Framework', 'YOCTO', 'Hardware Testing', 'JIRA', 'Test Design', 'E2E Testing'],
  },
];

function useIntersection(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
}

export default function Experience() {
  const [expanded, setExpanded] = useState(1);
  const sectionRef = useRef(null);
  const visible = useIntersection(sectionRef);

  return (
    <section id="experience" className="section experience" ref={sectionRef}>
      <div className={`section__inner ${visible ? 'section__inner--visible' : ''}`}>
        <div className="section__header">
          <span className="section__tag">// CAREER TIMELINE</span>
          <h2 className="section__title">Professional <span className="section__title-accent">Experience</span></h2>
        </div>

        <div className="timeline">
          <div className="timeline__line"></div>
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`timeline__item ${expanded === exp.id ? 'timeline__item--active' : ''}`}
              style={{ '--delay': `${idx * 0.15}s`, '--color': exp.color }}
              onClick={() => setExpanded(exp.id === expanded ? null : exp.id)}
            >
              <div className="timeline__dot">
                <div className="timeline__dot-inner"></div>
              </div>

              <div className="timeline__card">
                <div className="timeline__card-header">
                  <div className="timeline__card-left">
                    <div className="timeline__logo" style={{ background: `${exp.logoColor}22`, border: `1px solid ${exp.logoColor}44`, color: exp.logoColor }}>
                      {exp.logo}
                    </div>
                    <div>
                      <div className="timeline__company">{exp.company}</div>
                      <div className="timeline__role">{exp.role}</div>
                      <div className="timeline__meta">
                        <span>{exp.duration}</span>
                        <span className="timeline__dot-sep">·</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="timeline__card-right">
                    {exp.type === 'CURRENT' && (
                      <span className="timeline__badge timeline__badge--current">● CURRENT</span>
                    )}
                    <div className="timeline__team">{exp.team}</div>
                    <div className="timeline__lob">{exp.lob}</div>
                    <div className="timeline__chevron">{expanded === exp.id ? '▲' : '▼'}</div>
                  </div>
                </div>

                <div className={`timeline__card-body ${expanded === exp.id ? 'timeline__card-body--open' : ''}`}>
                  <ul className="timeline__highlights">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="timeline__highlight" style={{ animationDelay: `${i * 0.05}s` }}>
                        <span className="timeline__highlight-arrow">›</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="timeline__tools">
                    {exp.tools.map(t => (
                      <span key={t} className="timeline__tool" style={{ borderColor: `${exp.color}44`, color: exp.color }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
