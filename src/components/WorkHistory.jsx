import { motion } from 'framer-motion';
import { workHistory } from '../data/workHistory';

export default function WorkHistory() {
  return (
    <section className="work-history" id="experience">
      <div className="container">
        {/* Header */}
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Work History
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Over 12 years of professional software development experience across mobile,
          web, blockchain, and enterprise applications.
        </motion.p>

        {/* Timeline */}
        <div className="timeline">
          {workHistory.map((job, i) => (
            <motion.div
              key={job.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Left: connector */}
              <div className="timeline-connector">
                <div
                  className="timeline-dot"
                  style={{ background: job.color, boxShadow: `0 0 16px ${job.color}60` }}
                >
                  <span>{job.icon}</span>
                </div>
                {i < workHistory.length - 1 && (
                  <div
                    className="timeline-line"
                    style={{ background: `linear-gradient(to bottom, ${job.color}60, transparent)` }}
                  />
                )}
              </div>

              {/* Right: card */}
              <motion.div
                className="glass-card timeline-card"
                whileHover={{ y: -3, scale: 1.005 }}
                transition={{ duration: 0.25 }}
              >
                {/* Top row */}
                <div className="timeline-card-header">
                  <div className="timeline-meta">
                    <div className="timeline-title-row">
                      <h3 className="timeline-role">{job.role}</h3>
                      {job.current && (
                        <span className="timeline-current-badge">Current</span>
                      )}
                    </div>
                    <div className="timeline-company">{job.company}</div>
                    <div className="timeline-details">
                      <span className="timeline-type">{job.type}</span>
                      <span className="timeline-separator">·</span>
                      <span className="timeline-period">{job.period}</span>
                      <span className="timeline-separator">·</span>
                      <span
                        className="timeline-duration"
                        style={{ color: job.color }}
                      >
                        {job.duration}
                      </span>
                    </div>
                    <div className="timeline-location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {job.location}
                    </div>
                  </div>
                  <div
                    className="timeline-accent-bar"
                    style={{ background: `linear-gradient(135deg, ${job.color}, ${job.color}55)` }}
                  />
                </div>

                {/* Description */}
                <p className="timeline-description">{job.description}</p>

                {/* Highlights */}
                <ul className="timeline-highlights">
                  {job.highlights.map((hl, hi) => (
                    <motion.li
                      key={hi}
                      className="timeline-highlight-item"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.15 + hi * 0.08 }}
                    >
                      <span
                        className="timeline-bullet"
                        style={{ background: job.color }}
                      />
                      {hl}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
