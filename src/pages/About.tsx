import { about } from "../data/site";
export default function About() {
  return (
    <div className="wrap page">
      <h1>About Me</h1>
      <p className="lede narrow">{about.intro}</p>
      <h2 className="section-title">{about.capabilitiesTitle}</h2>
      <ol className="caps">
        {about.capabilities.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
      </ol>
    </div>
  );
}
