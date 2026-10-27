import { contact } from "../data/site";
export default function Contact() {
  const rows: [string, string, string][] = [
    ["Email", contact.email, `mailto:${contact.email}`],
    ["Phone", contact.phone, `tel:${contact.phone}`],
    ...contact.links.map(l => [l.label, l.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\?.*$/, ""), l.url] as [string, string, string]),
  ];
  return (
    <div className="wrap page">
      <h1>Contact</h1>
      <p className="lede narrow">Get in touch by email or phone, or find me on the profiles below.</p>
      <ul className="contact">
        {rows.map(([label, text, href]) => (
          <li key={label}>
            <span>{label}</span>
            <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
