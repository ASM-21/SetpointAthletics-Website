export const Hero = () => (
  <section id="top" className="hero">
    <div className="container hero-grid">
      <div>
        <div className="eyebrow-row">
          <span className="eyebrow-dot" aria-hidden="true" />
          <span className="eyebrow">Setpoint Athletics &nbsp;//&nbsp; Purdue Engineering</span>
        </div>
        <h1>
          Smart insoles that&nbsp;catch&nbsp;volleyball injuries{' '}
          <em>before they happen.</em>
        </h1>
        <p className="lede">
          Volleyball players take 100+ jumps a practice and almost none of that load is measured.
          We&nbsp;build the wearable that does — bilateral force, landing quality, and fatigue, in
          real&nbsp;time.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#contact">
            Talk to the team <span className="arrow">→</span>
          </a>
          <a className="btn btn-ghost" href="#how">
            See how it works
          </a>
        </div>
      </div>

      <div className="data-card" aria-hidden="true">
        <div className="data-header">
          <span>
            <span className="pulse" />
            LIVE — PRACTICE 04 / SET 03
          </span>
          <span className="session">14:32</span>
        </div>
        <div className="data-row">
          <span className="data-label" style={{ margin: 0 }}>Jump count</span>
          <span className="val">
            187<span className="unit">/240 cap</span>
          </span>
        </div>
        <div className="data-row">
          <span className="data-label" style={{ margin: 0 }}>Peak landing force</span>
          <span className="val">
            4.2<span className="unit">× BW</span>
          </span>
        </div>
        <div className="data-row">
          <span className="data-label" style={{ margin: 0 }}>L / R asymmetry</span>
          <span className="val" style={{ color: 'var(--accent)' }}>
            15%<span className="unit">over thr.</span>
          </span>
        </div>
        <div style={{ padding: '12px 0 4px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '10px',
              color: 'var(--ink-3)',
              letterSpacing: '0.08em',
            }}
          >
            <span>L 54%</span>
            <span>R 46%</span>
          </div>
          <div className="asym-bar">
            <div className="fill-l" />
            <div className="fill-r" />
          </div>
        </div>
        <div
          className="data-row"
          style={{
            borderTop: '1px solid var(--rule)',
            borderBottom: 'none',
            marginTop: '6px',
            paddingTop: '14px',
          }}
        >
          <span className="data-label" style={{ margin: 0, color: 'var(--accent)' }}>
            ⌥ ALERT
          </span>
          <span className="val" style={{ fontSize: '13px' }}>
            Pull #7 — 5 min
          </span>
        </div>
      </div>
    </div>
  </section>
);
