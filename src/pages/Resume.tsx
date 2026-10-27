import { person } from "../data/site";
import { experience, skills, education, certificate } from "../data/resume";
import CvButton from "../components/CvButton";

export default function Resume() {
  return (
    <div className="wrap page">
      <div className="page-head"><h1>Resume</h1><CvButton /></div>
      <section><h2 className="section-title">Professional summary</h2><p className="lede narrow">{person.summary}</p></section>
      <section>
        <h2 className="section-title">Work experience</h2>
        {experience.map(e => (
          <article className="job" key={e.role + e.period}>
            <div className="job-meta"><span>{e.period}</span><span>{e.place}</span></div>
            <div>
              <h3>{e.role}{e.org && <> · <span className="org">{e.org}</span></>}</h3>
              <ul className="list">{e.points.map(p => <li key={p}>{p}</li>)}</ul>
            </div>
          </article>
        ))}
      </section>
      <section>
        <h2 className="section-title">Skills</h2>
        <div className="cols">
          {Object.entries(skills).map(([k, v]) => (
            <div key={k}><h3>{k}</h3><ul className="list">{v.map(s => <li key={s}>{s}</li>)}</ul></div>
          ))}
        </div>
      </section>
      <section className="cols">
        <div><h2 className="section-title">Education</h2><p><strong>{education.school}</strong><br />{education.field} · {education.period}</p></div>
        <div><h2 className="section-title">Certificate</h2><p><strong>{certificate.name}</strong><br /><span className="mono">Credential ID: {certificate.id}</span></p></div>
      </section>
    </div>
  );
}
