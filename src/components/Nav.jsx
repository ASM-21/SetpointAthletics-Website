import Link from 'next/link';

const links = [
  { href: '#product', label: 'Product' },
  { href: '#updates', label: 'Updates' },
  { href: '#contact', label: 'Contact' },
];

export const Nav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 h-16 flex items-center justify-between">
        <Link href="#top" className="font-bold tracking-tight text-slate-900">
          Setpoint Athletics
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
