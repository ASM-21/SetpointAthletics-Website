import { Nav } from '../components/Nav.jsx';
import { Hero } from '../components/Hero.jsx';
import { Problem } from '../components/Features.jsx';
import { HowItWorks } from '../components/HowItWorks.jsx';
import { WhatWeMeasure } from '../components/WhatWeMeasure.jsx';
import { Updates } from '../components/Updates.jsx';
import { Contact } from '../components/Contact.jsx';
import { Footer } from '../components/Footer.jsx';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '64px' }}>
        <Hero />
        <Problem />
        <HowItWorks />
        <WhatWeMeasure />
        <Updates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
