import fs from 'node:fs';
import path from 'node:path';
import Markdown from 'markdown-to-jsx';

const UPDATES_DIR = path.join(process.cwd(), 'content', 'updates');

const parseFrontmatter = (raw) => {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim().replace(/^['"]|['"]$/g, '');
    meta[key] = value;
  }
  return { meta, body: match[2] };
};

const loadUpdates = () => {
  if (!fs.existsSync(UPDATES_DIR)) return [];
  return fs
    .readdirSync(UPDATES_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(UPDATES_DIR, filename), 'utf8');
      const { meta, body } = parseFrontmatter(raw);
      return {
        slug: filename.replace(/\.md$/, ''),
        title: meta.title ?? filename,
        date: meta.date ?? '',
        body,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};

const formatDate = (iso) => {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const Updates = () => {
  const updates = loadUpdates();
  return (
    <section id="updates" className="px-6 py-20 sm:px-12 sm:py-28">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Updates
          </h2>
          <p className="text-slate-600 sm:text-lg">
            A running log of progress as we build.
          </p>
        </div>
        {updates.length === 0 ? (
          <p className="text-center text-slate-500">No updates yet.</p>
        ) : (
          <ol className="space-y-10">
            {updates.map((u) => (
              <li
                key={u.slug}
                className="pl-6 border-l-2 border-amber-400"
              >
                <div className="mb-1 text-sm font-medium uppercase tracking-wider text-slate-500">
                  {formatDate(u.date)}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {u.title}
                </h3>
                <div className="prose prose-slate max-w-none text-slate-700">
                  <Markdown options={{ forceBlock: true }}>{u.body}</Markdown>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
};
