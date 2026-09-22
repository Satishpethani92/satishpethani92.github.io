import { profile } from '../data/profile';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {year} <span>{profile.name}</span> · {profile.tagline} ·
          Built with React &amp; ❤️
        </p>
      </div>
    </footer>
  );
}
