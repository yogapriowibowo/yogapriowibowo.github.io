export const CV_URL = "https://drive.google.com/file/d/15-kblMaz8jSRwXLjs14ST47CVeq1C_S2/view?usp=sharing";

export const person = {
  name: "Yoga Priowibowo",
  title: "Unity & C# Game Developer",
  location: "Jakarta, Indonesia",
  summary:
    "Unity & C# Game Developer with 7+ years of experience building mobile games and interactive software. Experienced across the full development lifecycle, from prototyping to release, with a strong emphasis on clean, structured, modular, and maintainable code. Focused on building reliable game systems that are easy to understand, extend, debug, and maintain within production environments.",
};

// Source: contact.rtf
export const contact = {
  email: "yoga.priowibowo@gmail.com",
  phone: "+6285117723800",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yogapriowibowo/" },
    { label: "Fiverr", url: "https://www.fiverr.com/yoga_priowibowo" },
    { label: "Upwork", url: "https://www.upwork.com/freelancers/~0197b0ce3e7655ffb2?mp_source=share" },
    { label: "Projects.co.id", url: "https://projects.co.id/public/browse_users/view/92d853/yogapriowibowo" },
  ],
};

// Source: about_me.rtf
export const about = {
  intro: person.summary,
  capabilitiesTitle: "Core Capabilities & Technical Expertise",
  capabilities: [
    ["Rapid Development & Prototyping", "Fast-paced game development tailored for rapid prototyping, feature validation, and market research, particularly within the hyper-casual mobile game genre."],
    ["Legacy Code & Reverse Engineering", "Proficient in analyzing legacy codebases and seamlessly integrating new features without disrupting core application architecture."],
    ["Modular SDK Architecture", "Designing and building modular, decoupled SDKs for enhanced code reusability and seamless implementation across multiple projects."],
    ["Backend API Integration", "Bridging server-side APIs with Unity to facilitate dynamic data handling, online synchronization, and robust client-server communication."],
    ["Asset & Performance Optimization", "Managing and optimizing game assets to strictly control build sizes and ensure smooth runtime performance across target devices."],
    ["UI/UX Implementation", "Translating designer mockups and UI/UX wireframes into responsive, polished, and intuitive in-game user interfaces."],
    ["Algorithm & Game Logic Translation", "Converting game design documents (GDD), complex algorithms, and gameplay logic into clean, structured C# code."],
    ["Scalable Combat Systems", "Architecting clean, maintainable, and scalable combat systems engineered for easy extension and gameplay balancing."],
    ["Ad Monetization & Smart Ads Logic", "Integrating ad mediation platforms (such as LevelPlay) and standalone networks (AdMob, Pangle, Meta), alongside smart ad delivery logic to optimize revenue while protecting player experience."],
    ["Hardware & Physical Machine Integration", "Integrating machine SDKs into Unity interface applications, connecting physical devices such as EDC terminals, cash payment machines, self-ordering kiosks, and receipt printers."],
    ["Virtual Reality & Simulation", "Developing immersive VR games and interactive applications tailored for multi-industry solutions, including industrial, medical, and engineering simulations."],
  ] as [string, string][],
};
