import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi';
import { SiUpwork } from 'react-icons/si';
import { profile } from '../data/profile';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-layout">
          {/* LEFT: Text content */}
          <div className="hero-content">
            <motion.div
              className="hero-badge"
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate="show"
            >
              <span className="hero-badge-dot" />
              {profile.availability}
            </motion.div>

            <motion.h1
              className="hero-title"
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="show"
            >
              Hi, I&apos;m{' '}
              <span className="hero-name">{profile.name}</span>
            </motion.h1>

            <motion.div
              className="hero-roles"
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="show"
            >
              {profile.roles.map((role) => (
                <span key={role.label} className={`hero-role-chip ${role.chip}`}>
                  {role.label}
                </span>
              ))}
            </motion.div>

            <motion.p
              className="hero-description"
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="show"
            >
              {profile.heroDescription}
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate="show"
            >
              <a href="#projects" className="btn btn-primary">
                View My Work
                <FiExternalLink size={15} />
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FiGithub size={16} />
                GitHub
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FiLinkedin size={16} />
                LinkedIn
              </a>
              <a
                href={profile.social.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <SiUpwork size={15} />
                Upwork
              </a>
            </motion.div>

            <motion.div
              className="hero-stats"
              variants={fadeUp}
              custom={5}
              initial="hidden"
              animate="show"
            >
              {profile.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Photo */}
          <motion.div
            className="hero-photo-wrap"
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="hero-photo-ring hero-photo-ring-outer" />
            <div className="hero-photo-ring hero-photo-ring-inner" />
            <div className="hero-photo-container">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="hero-photo"
                loading="eager"
              />
              <div className="hero-photo-glow" />
            </div>
            {/* Floating badges */}
            <motion.div
              className="hero-float-badge hero-float-badge-tl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span>⚛️</span> React
            </motion.div>
            <motion.div
              className="hero-float-badge hero-float-badge-br"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <span>📱</span> Flutter
            </motion.div>
            <motion.div
              className="hero-float-badge hero-float-badge-tr"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <span>⛓️</span> Web3
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
