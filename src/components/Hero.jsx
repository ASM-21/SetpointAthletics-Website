import { Button } from './Button.jsx';

export const Hero = ({ eyebrow, heading, body, primaryCta, secondaryCta }) => {
  return (
    <section id="top" className="px-6 pt-28 pb-20 sm:px-12 sm:pt-36 sm:pb-28">
      <div className="max-w-4xl mx-auto text-center">
        {eyebrow && (
          <p className="mb-5 text-sm font-semibold tracking-widest uppercase text-amber-600">
            {eyebrow}
          </p>
        )}
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl">
          {heading}
        </h1>
        {body && (
          <p className="mx-auto mb-10 text-lg text-slate-600 sm:text-xl max-w-2xl">
            {body}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {primaryCta && <Button {...primaryCta} />}
          {secondaryCta && <Button theme="outline" {...secondaryCta} />}
        </div>
      </div>
    </section>
  );
};
