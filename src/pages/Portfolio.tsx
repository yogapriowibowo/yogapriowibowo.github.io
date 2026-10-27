import { person } from "../data/site";
import { projects } from "../data/projects";
import ImageSlot from "../components/ImageSlot";
import CvButton from "../components/CvButton";

export default function Portfolio() {
  return (
    <>
      <section id="work" className="wrap" aria-labelledby="work-h">
        <h2 id="work-h" className="section-title">Selected work</h2>
        <div className="grid">
          {projects.map((p, n) => (
            <a key={p.slug} href={`#/portfolio/${p.slug}`}>
              <ImageSlot img={p.cover} eager={n < 2} />
              <div className="card-body">
                <h3>{p.title}</h3>
                <p>{p.subtitle}</p>
                <small>{p.meta.find(m => m.label === "Studio")?.value} · {p.meta.find(m => m.label === "Period")?.value}</small>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
