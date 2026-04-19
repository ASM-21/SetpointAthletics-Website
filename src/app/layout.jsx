import '../../styles/globals.css';

export const metadata = {
  title: 'Setpoint Athletics — Smart insoles for volleyball',
  description:
    'Setpoint Athletics builds smart insoles that measure how volleyball players jump, land, and move.',
  openGraph: {
    title: 'Setpoint Athletics',
    description: 'Smart insoles built for volleyball.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
