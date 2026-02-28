import { useRef, useState } from 'react';
import { useReveal, useSkillPanel } from '../../hooks/index.js';
import { ALL_SKILLS } from '../../data/index.js';

const FILTERS = ['All', 'Engineering & CAD', 'Programming & Web/App', 'PCB & Hardware'];

// Real CDN icon URLs
const ICON_URLS = {
  'AutoCAD':       'https://img.icons8.com/color/96/autodesk-autocad.png',
  'Fusion 360':    'https://img.icons8.com/color/96/autodesk-fusion-360.png',
  'C++':           'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'C':             'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  'Python':        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'MATLAB':        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
  'JavaScript':    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'React':         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'React Native':  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'HTML5':         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS3':          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'React Context': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
};

function InitialsBadge({ name, color }) {
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div style={{
      width: 52, height: 52, borderRadius: 12,
      background: color + '20',
      border: '1.5px solid ' + color + '50',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 14, color: color, flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

function SkillIcon({ name, color }) {
  const url = ICON_URLS[name];
  if (url) {
    return (
      <img src={url} alt={name} width={52} height={52}
        style={{ borderRadius: 10, objectFit: 'contain', background: 'rgba(255,255,255,0.05)', padding: 7, flexShrink: 0 }}
        onError={e => { e.currentTarget.style.display='none'; }} />
    );
  }
  return <InitialsBadge name={name} color={color} />;
}

function updateSkillPanel(skill) {
  window.dispatchEvent(new CustomEvent('skillhover', { detail: skill }));
}

export default function AboutSection() {
  const sectionRef = useRef(null);
  const skillsRef  = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  useReveal(sectionRef);
  useSkillPanel(skillsRef);

  const filtered = Object.entries(ALL_SKILLS).filter(
    ([cat]) => activeFilter === 'All' || activeFilter === cat
  );

  return (
    <section id="about" ref={sectionRef} aria-label="About me">
      <div className="section-wrap">

        <div className="reveal" style={{ marginBottom: 64 }}>
          <div className="label" style={{ marginBottom: 14 }}>About</div>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="reveal grid-2" style={{ gap: 40, marginBottom: 96 }}>
          <div className="glass" style={{ padding: '40px 44px' }}>
            <p style={{ fontSize: 15, lineHeight: 2.0, color: 'var(--text)', marginBottom: 22 }}>
              I'm a mechatronics engineering student driven by the integration of mechanical systems, electronics, and intelligent software. I thrive building things that cross traditional engineering disciplines such as autonomous machines, embedded controllers, and full-stack tools that solve real problems.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.95, color: 'var(--text-mid)', marginBottom: 22 }}>
              My work spans precision CAD modeling and PCB layout to full-stack web apps and closed-loop control systems. I own the full product lifecycle, from concept through prototyping, testing, and deployment.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.95, color: 'var(--text-mid)' }}>
              Outside the lab I explore competitive robotics, open-source hardware, and game design. Welcome to my portfolio.
            </p>
          </div>

          <div className="glass" style={{ padding: '40px 44px' }}>
            <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 16, color: 'var(--text)', marginBottom: 28, letterSpacing: '-0.01em' }}>
              Core Strengths
            </div>
            {[
              { label: 'Mechanical Design & CAD',     sub: 'SolidWorks · Onshape · Fusion 360' },
              { label: 'Embedded Systems & Firmware', sub: 'C / C++ · STM32 · ROS' },
              { label: 'PCB Design & Electronics',    sub: 'KiCad · Mixed-signal · 4-layer' },
              { label: 'Web & Mobile Development',    sub: 'React · React Native · REST APIs' },
              { label: '3D Printing & Fabrication',   sub: 'FDM · Calibration · End-to-end' },
            ].map(({ label, sub }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid var(--border)' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--cyan)', marginTop: 8, flexShrink: 0, opacity: 0.6 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text)', marginBottom: 3 }}>{label}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-dim)' }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Tools */}
        <div ref={skillsRef}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <div className="label" style={{ marginBottom: 16 }}>Skills & Tools</div>
            <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: 32 }}>
              Programming & Web/App Development
            </h2>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {FILTERS.map((f) => (
                <button key={f} onClick={() => setActiveFilter(f)} aria-pressed={activeFilter === f}
                  style={{
                    padding: '8px 20px', borderRadius: 100,
                    border: '1px solid ' + (activeFilter === f ? 'rgba(77,201,255,0.45)' : 'var(--border)'),
                    background: activeFilter === f ? 'rgba(77,201,255,0.08)' : 'transparent',
                    color: activeFilter === f ? 'var(--text)' : 'var(--text-dim)',
                    fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em',
                    cursor: 'pointer', transition: 'var(--transition)', textTransform: 'uppercase',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {filtered.map(([category, skills]) => (
            <div key={category} className="reveal" style={{ marginBottom: 52 }}>
              <div style={{
                fontFamily: 'var(--font-head)', fontSize: 13, fontWeight: 700,
                color: 'var(--text-mid)', letterSpacing: '0.08em', textTransform: 'uppercase',
                marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid var(--border)',
              }}>
                {category}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 12 }}>
                {skills.map(({ name, color, level }) => (
                  <div
                    key={name}
                    className="glass"
                    onMouseEnter={() => updateSkillPanel({ name, color, level, category, desc: name })}
                    onMouseLeave={() => updateSkillPanel(null)}
                    onMouseOver={e => { e.currentTarget.style.borderColor = color + '44'; e.currentTarget.style.background = color + '08'; }}
                    onMouseOut={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.background = ''; }}
                    style={{
                      padding: '22px 16px', borderRadius: 12,
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 13,
                      cursor: 'default', transition: 'var(--transition)', textAlign: 'center',
                    }}
                    aria-label={name}
                  >
                    <SkillIcon name={name} color={color} />
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text)', lineHeight: 1.4 }}>
                      {name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
