import { useRef } from 'react';
import { useReveal } from '../../hooks/index.js';

const COURSES = [
  'Analysis of Electric Circuits', 'Programming for Mechatronics',
  'Engineering Graphical Communication', 'Materials Science Fundamentals', 'Computer Programming Fundamentals',
  'Statics and Mechanics of Materials', 'Introduction to Engineering Design', 'Communication in the Engineering Professions',
  'Dynamics & Kinematics', 'Manufacturing Fundamentals', 'Statistics',
];

export default function EducationSection() {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section id="education" ref={sectionRef} aria-label="Education">
      <div className="section-wrap">
        <div className="reveal" style={{ marginBottom: 60 }}>
          <div className="label" style={{ marginBottom: 14 }}>Education</div>
          <h2 className="section-title">Academic Background</h2>
        </div>

        {/* Main degree card */}
        <div className="reveal" style={{ marginBottom: 32 }}>
          <div className="glass" style={{
            padding: '52px 56px',
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 56,
            flexWrap: 'wrap',
            position: 'relative',
            overflow: 'hidden',
            borderColor: 'rgba(77,201,255,0.14)',
          }}>
            {/* Subtle glow accent */}
            <div
  style={{
    width: 130,
    height: 130,
    borderRadius: 18,
    border: '1.5px dashed rgba(77,201,255,0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    background: 'rgba(77,201,255,0.04)',
    overflow: 'hidden',
  }}
>
  <img
    src="/images/tmulogo.png"  // <-- change to your image path
    alt="Program logo"
    style={{
      width: '80%',
      height: '80%',
      objectFit: 'contain',
    }}
  />
</div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 260 }}>
              <div className="label" style={{ marginBottom: 10 }}>Bachelor of Engineering</div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(22px,3.5vw,38px)', fontWeight: 800, color: 'var(--text)', marginBottom: 10, letterSpacing: '-0.02em' }}>
                Mechatronics Engineering {/* PLACEHOLDER */}
              </h3>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-mid)', lineHeight: 2, marginBottom: 28 }}>
                <span style={{ color: 'var(--cyan)' }}>Toronto Metropolitan Univeristy</span> · Toronto, Ontario, Canada {/* PLACEHOLDER */}
                <br />
                Current Year: <span style={{ color: 'var(--text)' }}>2 of 4</span> {/* PLACEHOLDER */}
                &nbsp;·&nbsp;
                Expected Graduation: <span style={{ color: 'var(--text)' }}>April 2029</span> {/* PLACEHOLDER */}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {["METRocketry Design Team", 'TMAD RC^3 Competition', 'MARS Club Competition'].map(tag => ( /* PLACEHOLDER */
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            </div>

            {/* School logo — REPLACE with your actual school logo */}
            <div
  style={{
    width: 150,
    height: 150,
    borderRadius: 18,
    border: '1.5px dashed rgba(59,130,246,0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    background: 'rgba(59,130,246,0.04)',
    overflow: 'hidden',
  }}
>
  <img
    src="/images/tmu-logo-full-colour.png"   // <-- change to your file name
    style={{
      width: '85%',
      height: '85%',
      objectFit: 'contain',
    }}
  />
</div>
          </div>
        </div>

        {/* Relevant coursework */}
        <div className="reveal">
          <div className="label" style={{ marginBottom: 18 }}>Relevant Coursework</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 10 }}>
            {COURSES.map(course => (
              <div key={course} className="glass" style={{ padding: '13px 18px', borderRadius: 8, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-mid)' }}>
                <span style={{ color: 'rgba(77,201,255,0.45)', marginRight: 8 }}>—</span>{course}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
