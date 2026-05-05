export const HowItWorks = () => (
  <section id="how" className="block" style={{ background: 'var(--paper-2)' }}>
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">02 &nbsp;//&nbsp; How it works</span>
        <h2>Sensor → signal → intervention. In&nbsp;real&nbsp;time.</h2>
        <p>
          An insole the athlete forgets they&apos;re wearing, paired with a courtside dashboard.
          Trainers see fatigue and asymmetry as it builds — and act before something breaks.
        </p>
      </div>

      <div className="how-grid">
        <div className="how-step">
          <div className="how-illust">
            <svg
              viewBox="0 0 80 60"
              width="100%"
              height="100%"
              preserveAspectRatio="xMinYMax meet"
              aria-hidden="true"
            >
              <rect x="6" y="8" width="68" height="44" rx="22" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="22" cy="20" r="2.5" fill="oklch(0.58 0.18 25)" />
              <circle cx="38" cy="22" r="2.5" fill="oklch(0.58 0.18 25)" />
              <circle cx="54" cy="20" r="2.5" fill="oklch(0.58 0.18 25)" />
              <circle cx="46" cy="42" r="2.5" fill="oklch(0.58 0.18 25)" />
            </svg>
          </div>
          <div className="num">01 — CAPTURE</div>
          <h3>Force sensors at heel, ball, and toe.</h3>
          <p>
            FSR pressure sensors plus a 6-axis IMU sample at 100 Hz, per foot. We measure ground
            reaction forces directly, where injuries actually originate.
          </p>
        </div>

        <div className="how-step">
          <div className="how-illust">
            <svg
              viewBox="0 0 80 60"
              width="100%"
              height="100%"
              preserveAspectRatio="xMinYMax meet"
              aria-hidden="true"
            >
              <path
                d="M4 50 L14 50 L18 30 L24 42 L30 12 L36 50 L46 50 L52 24 L60 50 L76 50"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
                strokeLinejoin="round"
              />
              <path
                d="M30 12 L30 50"
                stroke="oklch(0.58 0.18 25)"
                strokeWidth="1"
                strokeDasharray="2 3"
              />
            </svg>
          </div>
          <div className="num">02 — DETECT</div>
          <h3>On-device jump detection.</h3>
          <p>
            Each takeoff and landing is segmented in real time. Peak force, dwell, and L/R balance
            are computed before the next play starts.
          </p>
        </div>

        <div className="how-step">
          <div className="how-illust">
            <svg
              viewBox="0 0 80 60"
              width="100%"
              height="100%"
              preserveAspectRatio="xMinYMax meet"
              aria-hidden="true"
            >
              <rect x="10" y="14" width="22" height="38" stroke="currentColor" strokeWidth="1" fill="none" />
              <rect x="38" y="22" width="22" height="30" stroke="currentColor" strokeWidth="1" fill="none" />
              <rect x="14" y="22" width="14" height="6" fill="currentColor" opacity="0.18" />
              <rect x="14" y="32" width="14" height="6" fill="currentColor" opacity="0.18" />
              <rect x="14" y="42" width="14" height="6" fill="currentColor" opacity="0.18" />
              <rect x="42" y="30" width="14" height="6" fill="oklch(0.58 0.18 25)" opacity="0.5" />
              <rect x="42" y="40" width="14" height="6" fill="oklch(0.58 0.18 25)" />
            </svg>
          </div>
          <div className="num">03 — DASHBOARD</div>
          <h3>Trainer sees risk live.</h3>
          <p>
            BLE to a courtside hub. Per-athlete load, asymmetry, and threshold breaches surface on
            a single screen — no app to babysit.
          </p>
        </div>

        <div className="how-step">
          <div className="how-illust">
            <svg
              viewBox="0 0 80 60"
              width="100%"
              height="100%"
              preserveAspectRatio="xMinYMax meet"
              aria-hidden="true"
            >
              <circle cx="40" cy="30" r="22" stroke="currentColor" strokeWidth="1" fill="none" />
              <path d="M40 30 L40 12" stroke="oklch(0.58 0.18 25)" strokeWidth="2" />
              <path d="M40 30 L54 30" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="40" cy="30" r="2.2" fill="oklch(0.58 0.18 25)" />
            </svg>
          </div>
          <div className="num">04 — INTERVENE</div>
          <h3>Pull the right player at the right time.</h3>
          <p>
            &ldquo;Player 7 — left leg compensating 15%. Pull for 5.&rdquo; The intervention
            happens during practice, when it can still prevent the injury.
          </p>
        </div>
      </div>
    </div>
  </section>
);
