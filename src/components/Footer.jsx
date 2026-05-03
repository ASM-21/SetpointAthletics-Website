export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 sm:px-12 py-8 border-t border-slate-200 text-sm text-slate-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-2 items-center justify-between">
        <span>&copy; {year} Setpoint Athletics. All rights reserved.</span>
        <span>Built in public.</span>
      </div>
    </footer>
  );
};
