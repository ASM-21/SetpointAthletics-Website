import Link from 'next/link';

export const Nav = () => (
  <nav className="top">
    <div className="container nav-row">
      <Link className="brand" href="#top">
        <svg className="brand-mark" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 21 L9 5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
          <path d="M21 21 L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
          <circle cx="12" cy="3.2" r="2.2" fill="oklch(0.58 0.18 25)" />
        </svg>
        <span>Setpoint Athletics</span>
      </Link>
      <div className="nav-links">
        <Link href="#problem">The problem</Link>
        <Link href="#how">How it works</Link>
        <Link href="#measure">What we measure</Link>
        <Link className="nav-cta" href="#contact">
          Get in touch <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  </nav>
);
