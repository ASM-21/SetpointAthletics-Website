import { Nav } from '../components/Nav.jsx';
import { Hero } from '../components/Hero.jsx';
import { Features } from '../components/Features.jsx';
import { Updates } from '../components/Updates.jsx';
import { Contact } from '../components/Contact.jsx';
import { Footer } from '../components/Footer.jsx';

const features = {
  heading: "What we're building",
  body: "Smart insoles that capture the biomechanics of volleyball — jumps, landings, and lateral cuts — then turn that data into training feedback athletes can actually use.",
  items: [
    {
      title: 'The problem',
      description:
        'Volleyball players log thousands of jumps a season, but almost none of that load, symmetry, or landing quality gets measured.',
    },
    {
      title: 'Our approach',
      description:
        "Lightweight pressure and inertial sensors embedded in an insole you forget you're wearing, paired with an app that summarizes each session.",
    },
    {
      title: 'What you get',
      description:
        'Jump counts, landing symmetry, and fatigue trends — per practice, per match, per season. Clear signal, not dashboards of noise.',
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Hero
          eyebrow="Setpoint Athletics"
          heading="Smart insoles built for volleyball."
          body="We're building wearables that measure how volleyball players jump, land, and move — so training adapts to what their bodies actually do."
          primaryCta={{ url: '#contact', label: 'Get in touch' }}
          secondaryCta={{ url: '#updates', label: 'See updates' }}
        />
        <Features {...features} />
        <Updates />
        <Contact
          email="hello@setpointathletics.com"
          heading="Want to follow along?"
          body="We're early. If you're a coach, athlete, trainer, or investor curious about what we're building, send us a note."
        />
      </main>
      <Footer />
    </>
  );
}
