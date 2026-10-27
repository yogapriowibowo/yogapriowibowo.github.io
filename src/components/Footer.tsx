import { contact, person } from "../data/site";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>© {new Date().getFullYear()} {person.name}</span>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
    </footer>
  );
}
