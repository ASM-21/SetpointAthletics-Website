'use client';
import { useState } from 'react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <span
          className="eyebrow"
          style={{ color: 'oklch(0.62 0.005 250)', display: 'block', marginBottom: '24px' }}
        >
          04 &nbsp;//&nbsp; Get in touch
        </span>
        <h2>Every preventable injury we stop is a&nbsp;career&nbsp;saved.</h2>
        <p className="lede">
          If you&apos;re a coach, athletic trainer, athlete, or investor curious about what we&apos;re
          building — leave your email or send us a note.
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="you@program.edu" required aria-label="Email" />
          <button type="submit">
            Follow along <span aria-hidden="true">→</span>
          </button>
        </form>
        <div className="signup-help">
          {submitted ? "Thanks. We'll be in touch." : 'No spam. Updates roughly monthly.'}
        </div>

        <div className="contact-rows">
          <div>
            <h4>Direct</h4>
            <a href="mailto:setpointathletics@gmail.com">setpointathletics@gmail.com</a>
          </div>
          <div>
            <h4>Founders</h4>
            <p>Andrew Morrissey &amp; Derek Crocker</p>
          </div>
        </div>
      </div>
    </section>
  );
};
