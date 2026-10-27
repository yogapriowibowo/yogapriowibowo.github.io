import { useState } from "react";
import type { Img } from "../data/types";
const EXTS = ["webp", "jpg", "png"];

/** Loads public/images/<file>.(webp|jpg|png); shows a labelled placeholder until the file exists. */
export default function ImageSlot({ img, eager = false }: { img: Img; eager?: boolean }) {
  const [i, setI] = useState(0);
  if (i >= EXTS.length) {
    return (
      <div className="slot ph" role="img" aria-label={`Placeholder: ${img.guide}`}>
        <code>{img.file}</code>
        <span>{img.guide}</span>
      </div>
    );
  }
  return (
    <div className="slot">
      <img src={`${import.meta.env.BASE_URL}images/${img.file}.${EXTS[i]}`} alt={img.guide}
        loading={eager ? "eager" : "lazy"} decoding="async" onError={() => setI(i + 1)} />
    </div>
  );
}
