import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiUpwork, SiStackoverflow, SiWhatsapp } from 'react-icons/si';
import { profile } from '../data/profile';

const links = [
  {
    label: 'WhatsApp',
    icon: <SiWhatsapp size={24} />,
    url: profile.social.whatsapp,
    color: '#25d366',
    bg: 'rgba(37,211,102,0.1)',
  },
  {
    label: 'Email',
    icon: <FiMail size={24} />,
    url: `mailto:${profile.email}`,
    color: '#ea4335',
    bg: 'rgba(234,67,53,0.1)',
  },
  {
    label: 'GitHub',
    icon: <FiGithub size={24} />,
    url: profile.social.github,
    color: '#e2e8f0',
    bg: 'rgba(226,232,240,0.1)',
  },
  {
    label: 'Upwork',
    icon: <SiUpwork size={24} />,
    url: profile.social.upwork,
    color: '#14a800',
    bg: 'rgba(20,168,0,0.1)',
  },
  {
    label: 'LinkedIn',
    icon: <FiLinkedin size={24} />,
    url: profile.social.linkedin,
    color: '#0a66c2',
    bg: 'rgba(10,102,194,0.12)',
  },
  {
    label: 'Stack Overflow',
    icon: <SiStackoverflow size={24} />,
    url: profile.social.stackoverflow,
    color: '#f48024',
    bg: 'rgba(244,128,36,0.1)',
  },
];

export default function Connect() {
  return (
    <section className="connect" id="connect">
      <div className="container">
        <div className="connect-inner">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ justifyContent: 'center' }}
          >
            Get In Touch
          </motion.span>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let&apos;s Work Together
          </motion.h2>

          <motion.p
            className="section-subtitle"
            style={{ margin: '0 auto' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I&apos;m open to freelance projects, full-time opportunities, and exciting
            collaborations. Find me on any of the platforms below.
          </motion.p>

          <div className="connect-cards">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="connect-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
              >
                <div
                  className="connect-card-icon"
                  style={{ background: link.bg, color: link.color }}
                >
                  {link.icon}
                </div>
                <span className="connect-card-label">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
