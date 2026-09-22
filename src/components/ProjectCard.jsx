import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

export default function ProjectCard({ project, index }) {
  const accentStyle = {
    '--card-accent': `linear-gradient(135deg, ${project.accent}, ${project.accent}88)`,
  };

  return (
    <motion.div
      className="glass-card project-card"
      style={accentStyle}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      layout
    >
      {/* Top row */}
      <div className="project-card-top">
        <span className="project-number">#{String(project.id).padStart(2, '0')}</span>
        {project.url && project.url !== '#' ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-icon"
            aria-label={`Visit ${project.title}`}
          >
            <FiExternalLink size={15} />
          </a>
        ) : (
          <div className="project-link-icon" style={{ opacity: 0.3 }}>
            <FiExternalLink size={15} />
          </div>
        )}
      </div>

      {/* Title block */}
      <div>
        <div className="project-subtitle">{project.subtitle}</div>
        <h3 className="project-title">{project.title}</h3>
      </div>

      {/* Role badge */}
      <span className="project-role">{project.role}</span>

      {/* Description */}
      <p className="project-description">{project.description}</p>

      {/* Tech stack */}
      {project.stack && project.stack.length > 0 && (
        <div className="project-stack">
          {project.stack.map((tech) => (
            <span key={tech} className="stack-chip">{tech}</span>
          ))}
        </div>
      )}

      {/* Footer actions */}
      <div className="project-footer">
        {project.url && project.url !== '#' && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action"
          >
            <FiExternalLink size={12} />
            View Project
          </a>
        )}
        {project.secondaryUrl && (
          <a
            href={project.secondaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action"
          >
            <FiExternalLink size={12} />
            {project.secondaryLabel || 'View more'}
          </a>
        )}
      </div>
    </motion.div>
  );
}
