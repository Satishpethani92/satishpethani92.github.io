import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, categories } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [active, setActive] = useState('all');

  const filtered =
    active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Work
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {projects.length} projects across enterprise applications, blockchain
            platforms, Shopify, AI workflows, and mobile commerce.
          </motion.p>

          {/* Filter Tabs */}
          <motion.div
            className="filter-tabs"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-tab ${active === cat.id ? 'active' : ''}`}
                onClick={() => setActive(cat.id)}
              >
                {cat.label}
                <span style={{ marginLeft: 6, opacity: 0.7 }}>
                  (
                  {cat.id === 'all'
                    ? projects.length
                    : projects.filter((p) => p.category === cat.id).length}
                  )
                </span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Project Grid */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
