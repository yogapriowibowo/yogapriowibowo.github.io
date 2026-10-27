import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import ProjectPage from "./pages/ProjectPage";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";

/** Minimal hash router: #/portfolio, #/portfolio/<slug>, #/resume, #/about, #/contact */
function useRoute(): string[] {
  const read = () => location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const onChange = () => { setRoute(read()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

export default function App() {
  const [page = "portfolio", slug] = useRoute();
  let view = <Portfolio />;
  if (page === "portfolio" && slug) view = <ProjectPage slug={slug} />;
  else if (page === "resume") view = <Resume />;
  else if (page === "about") view = <About />;
  else if (page === "contact") view = <Contact />;
  return (
    <>
      <Header current={page} />
      <main id="main">{view}</main>
      <Footer />
    </>
  );
}
