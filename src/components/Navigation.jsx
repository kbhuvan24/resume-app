import { useState, useEffect } from 'react';
import './Navigation.css';

const navItems = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'PROFILE' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'certifications', label: 'CERTS' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Navigation() {
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map(n => document.getElementById(n.id));
      let current = 'hero';
      sections.forEach(s => {
        if (s && window.scrollY >= s.offsetTop - 200) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__brand" onClick={() => scrollTo('hero')}>
        <span className="nav__brand-bracket">[</span>
        <span className="nav__brand-text">BTK</span>
        <span className="nav__brand-bracket">]</span>
      </div>
      <button className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </button>
      <ul className={`nav__list ${menuOpen ? 'nav__list--open' : ''}`}>
        {navItems.map(item => (
          <li key={item.id}>
            <button
              className={`nav__item ${active === item.id ? 'nav__item--active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
