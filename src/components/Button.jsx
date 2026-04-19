import Link from 'next/link';

const themeClassMap = {
  default:
    'border-amber-500 bg-amber-500 text-slate-900 hover:bg-amber-400 hover:border-amber-400',
  outline:
    'border-slate-300 bg-transparent text-slate-900 hover:border-slate-900',
};

export const Button = ({ url, label, theme }) => {
  return (
    <Link
      href={url}
      className={`py-3 px-6 inline-block border-2 font-semibold rounded-md transition-colors duration-200 ${
        themeClassMap[theme] ?? themeClassMap['default']
      }`}
    >
      {label}
    </Link>
  );
};
