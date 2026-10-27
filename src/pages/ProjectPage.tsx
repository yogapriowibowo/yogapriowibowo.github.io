import { useEffect } from "react";
import { projects } from "../data/projects";
import ImageSlot from "../components/ImageSlot";

export default function ProjectPage({ slug }: { slug: string }) {
  const i = projects.findIndex(p => p.slug === slug);
  const p = projects[i];
  useEffect(() => { document.title = p ? `${p.title} · Yoga Priowibowo` : "Yoga Priowibowo"; }, [p]);
  if (!p) return <div className="wrap page"><h1>Project not found</h1><a href="#/portfolio">← Back to portfolio</a></div>;
  const next = projects[(i + 1) % projects.length];
  return (
    <article className="wrap page project">
      <a className="back" href="#/portfolio">← All projects</a>
      <h1>{p.title}</h1>
      <p className="lede">{p.subtitle}</p>
      <ImageSlot img={p.cover} eager />
      <div className="project-top">
        <dl className="meta">
          {p.meta.map(m => <div key={m.label}><dt>{m.label}</dt><dd>{m.value}</dd></div>)}
        </dl>
        <div>
          {p.overview.map((t, n) => <p key={n}>{t}</p>)}
          {p.link && <a className="btn" href={p.link.url} target="_blank" rel="noopener noreferrer">{p.link.label} <span aria-hidden>↗</span></a>}
        </div>
      </div>
      <section>
        <h2 className="section-title">Responsibilities</h2>
        <ul className="list">{p.responsibilities.map(r => <li key={r}>{r}</li>)}</ul>
      </section>
      {p.blocks.map(b => (
        <section key={b.heading} className="block">
          <h2>{b.heading}</h2>
          {b.body?.map((t, n) => <p key={n}>{t}</p>)}
          {b.images && <div className={`shots n${b.images.length}`}>{b.images.map(im => <ImageSlot key={im.file} img={im} />)}</div>}
          {b.tech && <ul className="tags" aria-label="Technology">{b.tech.map(t => <li key={t}>{t}</li>)}</ul>}
          {b.lists?.map((l, n) => (
            <div key={n}>
              {l.title && <h3>{l.title}</h3>}
              <ul className="list">{l.items.map(it => <li key={it}>{it}</li>)}</ul>
            </div>
          ))}
        </section>
      ))}
      {p.review && (
        <section className="block">
          <h2>{p.review.heading}</h2>
          <ImageSlot img={p.review.image} />
        </section>
      )}
      <a className="next" href={`#/portfolio/${next.slug}`}><small>Next project</small>{next.title} →</a>
    </article>
  );
}
