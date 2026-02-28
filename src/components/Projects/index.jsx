import { useRef, useState } from 'react';
import { useReveal } from '../../hooks/index.js';
import { PROJECTS } from '../../data/index.js';

// ── Project modal ─────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  const [imgOpen, setImgOpen] = useState(false);
  if (!project) return null;
  return (
    <div
      className="modal-backdrop open"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project details`}
      onClick={(e) => e.target.classList.contains('modal-backdrop') && onClose()}
      onKeyDown={(e) => e.key === 'Escape' && onClose()}
    >
      <div className="modal-inner">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32, gap: 16 }}>
          <div>
            <div className="label" style={{ marginBottom: 10, color: project.color }}>{project.subtitle}</div>
            <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 28, fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em' }}>{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: '1px solid var(--border)', color: 'var(--text-mid)', cursor: 'pointer', padding: '6px 14px', borderRadius: 6, fontFamily: 'var(--font-mono)', fontSize: 11, flexShrink: 0 }}
            aria-label="Close modal"
          >
            ESC ✕
          </button>
        </div>

        {/* Image placeholder */}
        <div
  style={{
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 28,
    cursor: 'zoom-in',
  }}
  onClick={() => setImgOpen(true)}
>
  <img
    src={project.image}
    alt={`${project.title} preview`}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    }}
  />
</div>

        <p style={{ color: 'var(--text-mid)', lineHeight: 1.85, fontSize: 14, marginBottom: 24 }}>{project.desc}</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
          <div>
            <div className="label" style={{ marginBottom: 10, color: project.color }}>Role</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text)' }}>{project.role}</div>
          </div>
          <div>
            <div className="label" style={{ marginBottom: 10 }}>Outcomes</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-mid)', lineHeight: 1.7 }}>{project.outcomes}</div>
          </div>
        </div>

        <div style={{ marginBottom: 32 }}>
          <div className="label" style={{ marginBottom: 12 }}>Tools & Technologies</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {project.tools.map(t => <span key={t} className="chip">{t}</span>)}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        
        </div>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        
        </div>

        {imgOpen && (
          <div
            onClick={() => setImgOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              cursor: 'zoom-out',
              padding: 24,
            }}
            role="dialog"
            aria-label="Expanded image view"
          >
            <img
              src={project.image}
              alt={`${project.title} full size`}
              style={{
                maxWidth: '50vw',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: 12,
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
}

// ── Projects section ──────────────────────────────────────
export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const [modal, setModal] = useState(null);
  useReveal(sectionRef);

  return (
    <section id="projects" ref={sectionRef} aria-label="Projects">
      <div className="section-wrap">
        <div className="reveal" style={{ marginBottom: 60 }}>
          <div className="label" style={{ marginBottom: 14 }}>Projects</div>
          <h2 className="section-title">Selected Work</h2>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 18 }}
          role="list"
        >
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="proj-card reveal"
              role="listitem"
              onClick={() => setModal(proj)}
              onKeyDown={(e) => e.key === 'Enter' && setModal(proj)}
              tabIndex={0}
              aria-label={`${proj.title} — click to view details`}
              style={{ gridColumn: proj.featured ? 'span 2' : 'span 1' }}
            >
              {proj.featured && (
                <div style={{
                  position: 'absolute', top: 16, right: 16,
                  fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em',
                  color: proj.color, border: `1px solid ${proj.color}50`,
                  padding: '3px 8px', borderRadius: 4,
                }}>
                  FEATURED
                </div>
              )}

              {/* Color accent bar */}
              <div style={{ width: 32, height: 3, borderRadius: 2, background: proj.color, marginBottom: 18, boxShadow: `0 0 10px ${proj.color}60` }} />

              <div style={{ fontFamily: 'var(--font-head)', fontSize: 17, fontWeight: 700, color: 'var(--text)', marginBottom: 6, letterSpacing: '-0.01em' }}>
                {proj.title}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: proj.color, marginBottom: 14, letterSpacing: '0.08em', opacity: 0.85 }}>
                {proj.subtitle}
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-mid)', lineHeight: 1.75, marginBottom: 20 }}>
                {proj.desc.slice(0, 130)}…
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
                {proj.tools.slice(0, 4).map(t => (
                  <span key={t} style={{
                    fontSize: 11, padding: '3px 8px', borderRadius: 4,
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                    color: 'var(--text-dim)', fontFamily: 'var(--font-mono)',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
    </section>
  );
}
