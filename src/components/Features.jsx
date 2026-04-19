export const Features = ({ heading, body, items }) => {
  return (
    <section id="product" className="px-6 py-20 sm:px-12 sm:py-28 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {heading}
          </h2>
          {body && (
            <p className="mx-auto max-w-2xl text-slate-600 sm:text-lg">{body}</p>
          )}
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {(items || []).map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl border border-slate-200"
            >
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
