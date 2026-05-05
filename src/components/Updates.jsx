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
  if (updates.length === 0) return null;
  return (
    <section id="updates" className="block">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">05 &nbsp;//&nbsp; Updates</span>
          <h2>A running log of progress.</h2>
        </div>
        <div className="updates-list">
          {updates.map((u) => (
            <div key={u.slug} className="update-item">
              <div className="meta">{formatDate(u.date)}</div>
              <div>
                <h3>{u.title}</h3>
                <div style={{ color: 'var(--ink-2)', fontSize: '15px', maxWidth: '600px' }}>
                  <Markdown options={{ forceBlock: true }}>{u.body}</Markdown>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
