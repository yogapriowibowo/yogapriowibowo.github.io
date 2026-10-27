import { CV_URL } from "../data/site";
export default function CvButton({ ghost = false }: { ghost?: boolean }) {
  return (
    <a className={ghost ? "btn ghost" : "btn"} href={CV_URL} target="_blank" rel="noopener noreferrer">
      Download CV <span aria-hidden>↗</span>
    </a>
  );
}
