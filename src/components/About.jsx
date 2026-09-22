import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const highlights = [
  {
    icon: '🚀',
    color: 'rgba(201,168,108,0.16)',
    title: 'Enterprise Applications',
    desc: 'Strategy management, construction platforms, and large-scale web applications.',
  },
  {
    icon: '⛓️',
    color: 'rgba(122,146,184,0.16)',
    title: 'Blockchain & Web3',
    desc: 'Masternode dashboards, tokenization interfaces, DeFi platforms, and crypto wallets.',
  },
  {
    icon: '🛍️',
    color: 'rgba(154,175,120,0.16)',
    title: 'Shopify & E-Commerce',
    desc: 'Custom public & private Shopify apps, Liquid themes, Hydrogen storefronts, and AI-powered content automation.',
  },
  {
    icon: '🤖',
    color: 'rgba(139,157,201,0.16)',
    title: 'Agentic AI',
    desc: 'Claude & Gemini-powered agent pipelines for content, e-commerce automation, and multi-step AI workflows.',
  },
  {
    icon: '📱',
    color: 'rgba(143,168,160,0.16)',
    title: 'Mobile Development',
    desc: 'Published Flutter and React Native apps on the App Store and Google Play.',
  },
  {
    icon: '🎨',
    color: 'rgba(107,155,138,0.16)',
    title: 'UI/UX Excellence',
    desc: 'Responsive, performant interfaces with a focus on intuitive user experiences.',
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left: text */}
          <motion.div
            className="about-text"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span className="section-label" variants={fadeUp} custom={0}>
              About Me
            </motion.span>
            <motion.h2 className="section-title" variants={fadeUp} custom={1}>
              Building Digital Products That Matter
            </motion.h2>
            <motion.p variants={fadeUp} custom={2}>
              I am {profile.name}, a {profile.headline} with
              hands-on experience building enterprise web applications, blockchain platforms,
              Shopify e-commerce solutions, and cross-platform mobile apps.
            </motion.p>
            <motion.p variants={fadeUp} custom={3}>
              I build and publish custom Shopify apps (both public and private), develop
              AI-powered storefronts using Claude, and design agentic AI workflows for
              content creation, automation, and multi-step task orchestration.
            </motion.p>
            <motion.p variants={fadeUp} custom={4}>
              My technical expertise includes React.js, Node.js, TypeScript, Vue.js,
              Flutter, React Native, Shopify Liquid/Hydrogen, Claude AI, and Gemini API.
              I focus on maintainable, responsive applications with intuitive UIs and
              reliable end-to-end integration.
            </motion.p>
          </motion.div>

          {/* Right: highlights */}
          <div className="about-highlights">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="glass-card highlight-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="highlight-icon"
                  style={{ background: h.color }}
                >
                  {h.icon}
                </div>
                <div className="highlight-content">
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
