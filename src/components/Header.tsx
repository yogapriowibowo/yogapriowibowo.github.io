import { person } from "../data/site";
const NAV = [["portfolio", "Portfolio"], ["resume", "Resume"], ["about", "About Me"], ["contact", "Contact"]];
export default function Header({ current }: { current: string }) {
  return (
    <header className="site-header">
      <div className="wrap bar">
        <a className="brand" href="#/portfolio">{person.name}</a>
        <nav aria-label="Primary">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#/${id}`} aria-current={current === id ? "page" : undefined}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
