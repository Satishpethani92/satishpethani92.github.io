import { useEffect, useState } from 'react';
import { profile } from '../data/profile';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo" aria-label={`${profile.name} — Home`}>
          {profile.initials}
        </a>

        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#connect">Connect</a></li>
        </ul>

        <div className="navbar-cta">
          <a
            href={profile.social.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '9px 20px', fontSize: '0.82rem' }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
