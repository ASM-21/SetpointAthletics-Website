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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
