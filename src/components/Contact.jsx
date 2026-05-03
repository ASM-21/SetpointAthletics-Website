import { Button } from './Button.jsx';

export const Contact = ({ email, heading, body }) => {
  return (
    <section
      id="contact"
      className="px-6 py-20 sm:px-12 sm:py-28 bg-slate-900 text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {heading}
        </h2>
        {body && (
          <p className="mx-auto mb-10 max-w-xl text-slate-300 sm:text-lg">
            {body}
          </p>
        )}
        <Button url={`mailto:${email}`} label={email} />
      </div>
    </section>
  );
};
