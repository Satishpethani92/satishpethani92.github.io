import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Expertise
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Technical Skills
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A versatile technology stack spanning frontend, backend, mobile, Shopify,
          blockchain, and agentic AI.
        </motion.p>

        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              className="glass-card skill-group-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="skill-group-header">
                <div
                  className="skill-group-icon"
                  style={{ background: `${group.color}20` }}
                >
                  {group.icon}
                </div>
                <span className="skill-group-label">{group.label}</span>
              </div>
              <div className="skill-chips">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="skill-chip"
                    style={{
                      background: `${group.color}12`,
                      border: `1px solid ${group.color}30`,
                      color: group.color,
                    }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.04 }}
                    whileHover={{ scale: 1.08 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
