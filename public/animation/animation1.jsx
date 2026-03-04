import { Inter } from "next/font/google";
import gsap from "gsap";

export const inter = Inter({ subsets: ["latin"] });

// Animates every stroke path in each word component sequentially,
// character by character, using strokeDashoffset (no paid plugin needed).
// All paths use pathLength="1" so dashoffset 1→0 = fully drawn.
export function buildWordsTL() {
  // Hide all strokes first. .pen-stroke class is on every <path> in bgwords.jsx.
  // pathLength="1" means strokeDasharray:1 / strokeDashoffset:1 = one full-length dash hidden.
  gsap.set(".pen-stroke", {
    strokeDasharray: "1",
    strokeDashoffset: "1",
  });

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  // ── WRITE ──────────────────────────────────────────────────────────────────
  tl.to("#write-W-1", { strokeDashoffset: 0, duration: 0.3 })
    .to("#write-W-2", { strokeDashoffset: 0, duration: 0.2 }, "-=0.08")
    .to("#write-W-3", { strokeDashoffset: 0, duration: 0.3 }, "-=0.08")
    .to("#write-W-4", { strokeDashoffset: 0, duration: 0.2 }, "-=0.08")
    .to("#write-r-1", { strokeDashoffset: 0, duration: 0.2 })
    .to("#write-r-2", { strokeDashoffset: 0, duration: 0.15 }, "-=0.08")
    .to("#write-i-1", { strokeDashoffset: 0, duration: 0.2 })
    .to("#write-i-2", { strokeDashoffset: 0, duration: 0.1 }, "-=0.08")
    .to("#write-t-1", { strokeDashoffset: 0, duration: 0.2 })
    .to("#write-t-2", { strokeDashoffset: 0, duration: 0.12 }, "-=0.08")
    .to("#write-e",   { strokeDashoffset: 0, duration: 0.28 })

    // ── CREATE ────────────────────────────────────────────────────────────────
    .to("#create-C",   { strokeDashoffset: 0, duration: 0.35 }, "+=0.25")
    .to("#create-r-1", { strokeDashoffset: 0, duration: 0.2 })
    .to("#create-r-2", { strokeDashoffset: 0, duration: 0.15 }, "-=0.08")
    .to("#create-e-1", { strokeDashoffset: 0, duration: 0.25 })
    .to("#create-a",   { strokeDashoffset: 0, duration: 0.28 })
    .to("#create-t-1", { strokeDashoffset: 0, duration: 0.2 })
    .to("#create-t-2", { strokeDashoffset: 0, duration: 0.12 }, "-=0.08")
    .to("#create-e-2", { strokeDashoffset: 0, duration: 0.25 })

    // ── DRAFT ─────────────────────────────────────────────────────────────────
    .to("#draft-D-1",  { strokeDashoffset: 0, duration: 0.25 }, "+=0.25")
    .to("#draft-D-2",  { strokeDashoffset: 0, duration: 0.35 }, "-=0.1")
    .to("#draft-r-1",  { strokeDashoffset: 0, duration: 0.2 })
    .to("#draft-r-2",  { strokeDashoffset: 0, duration: 0.15 }, "-=0.08")
    .to("#draft-a",    { strokeDashoffset: 0, duration: 0.28 })
    .to("#draft-f-1",  { strokeDashoffset: 0, duration: 0.22 })
    .to("#draft-f-2",  { strokeDashoffset: 0, duration: 0.12 }, "-=0.08")
    .to("#draft-t-1",  { strokeDashoffset: 0, duration: 0.2 })
    .to("#draft-t-2",  { strokeDashoffset: 0, duration: 0.12 }, "-=0.08")

    // ── RESEARCH ──────────────────────────────────────────────────────────────
    .to("#research-R-1", { strokeDashoffset: 0, duration: 0.25 }, "+=0.25")
    .to("#research-R-2", { strokeDashoffset: 0, duration: 0.3 },  "-=0.08")
    .to("#research-R-3", { strokeDashoffset: 0, duration: 0.2 })
    .to("#research-e-1", { strokeDashoffset: 0, duration: 0.25 })
    .to("#research-s",   { strokeDashoffset: 0, duration: 0.3 })
    .to("#research-e-2", { strokeDashoffset: 0, duration: 0.25 })
    .to("#research-a",   { strokeDashoffset: 0, duration: 0.28 })
    .to("#research-r-1", { strokeDashoffset: 0, duration: 0.2 })
    .to("#research-r-2", { strokeDashoffset: 0, duration: 0.15 }, "-=0.08")
    .to("#research-c",   { strokeDashoffset: 0, duration: 0.25 })
    .to("#research-h-1", { strokeDashoffset: 0, duration: 0.25 })
    .to("#research-h-2", { strokeDashoffset: 0, duration: 0.2 }, "-=0.08")

    // ── STORY ─────────────────────────────────────────────────────────────────
    .to("#story-S",   { strokeDashoffset: 0, duration: 0.35 }, "+=0.25")
    .to("#story-t-1", { strokeDashoffset: 0, duration: 0.2 })
    .to("#story-t-2", { strokeDashoffset: 0, duration: 0.12 }, "-=0.08")
    .to("#story-o",   { strokeDashoffset: 0, duration: 0.3 })
    .to("#story-r-1", { strokeDashoffset: 0, duration: 0.2 })
    .to("#story-r-2", { strokeDashoffset: 0, duration: 0.15 }, "-=0.08")
    .to("#story-y-1", { strokeDashoffset: 0, duration: 0.2 })
    .to("#story-y-2", { strokeDashoffset: 0, duration: 0.25 })

    // ── IDEAS ─────────────────────────────────────────────────────────────────
    .to("#ideas-I-1", { strokeDashoffset: 0, duration: 0.15 }, "+=0.25")
    .to("#ideas-I-2", { strokeDashoffset: 0, duration: 0.25 })
    .to("#ideas-I-3", { strokeDashoffset: 0, duration: 0.15 })
    .to("#ideas-d-1", { strokeDashoffset: 0, duration: 0.25 })
    .to("#ideas-d-2", { strokeDashoffset: 0, duration: 0.3 }, "-=0.1")
    .to("#ideas-e",   { strokeDashoffset: 0, duration: 0.28 })
    .to("#ideas-a",   { strokeDashoffset: 0, duration: 0.28 })
    .to("#ideas-s",   { strokeDashoffset: 0, duration: 0.3 })

    // ── EDIT ─────────────────────────────────────────────────────────────────────────────
    .to("#edit-E-1", { strokeDashoffset: 0, duration: 0.2 }, "+=0.2")
    .to("#edit-E-2", { strokeDashoffset: 0, duration: 0.15 })
    .to("#edit-E-3", { strokeDashoffset: 0, duration: 0.15 })
    .to("#edit-E-4", { strokeDashoffset: 0, duration: 0.15 })
    .to("#edit-d-1", { strokeDashoffset: 0, duration: 0.2 })
    .to("#edit-d-2", { strokeDashoffset: 0, duration: 0.28 }, "-=0.1")
    .to("#edit-i-1", { strokeDashoffset: 0, duration: 0.15 })
    .to("#edit-i-2", { strokeDashoffset: 0, duration: 0.1 }, "-=0.05")
    .to("#edit-t-1", { strokeDashoffset: 0, duration: 0.2 })
    .to("#edit-t-2", { strokeDashoffset: 0, duration: 0.12 }, "-=0.08")

    // ── BLOG ─────────────────────────────────────────────────────────────────────────────
    .to("#blog-B-1", { strokeDashoffset: 0, duration: 0.2 }, "+=0.2")
    .to("#blog-B-2", { strokeDashoffset: 0, duration: 0.25 })
    .to("#blog-B-3", { strokeDashoffset: 0, duration: 0.25 })
    .to("#blog-l",   { strokeDashoffset: 0, duration: 0.2 })
    .to("#blog-o",   { strokeDashoffset: 0, duration: 0.3 })
    .to("#blog-g-1", { strokeDashoffset: 0, duration: 0.25 })
    .to("#blog-g-2", { strokeDashoffset: 0, duration: 0.3 })

    // ── COPY ─────────────────────────────────────────────────────────────────────────────
    .to("#copy-C",   { strokeDashoffset: 0, duration: 0.35 }, "+=0.2")
    .to("#copy-o",   { strokeDashoffset: 0, duration: 0.3 })
    .to("#copy-p-1", { strokeDashoffset: 0, duration: 0.25 })
    .to("#copy-p-2", { strokeDashoffset: 0, duration: 0.28 }, "-=0.1")
    .to("#copy-y-1", { strokeDashoffset: 0, duration: 0.2 })
    .to("#copy-y-2", { strokeDashoffset: 0, duration: 0.28 })

    // ── NOTE ─────────────────────────────────────────────────────────────────────────────
    .to("#note-N-1", { strokeDashoffset: 0, duration: 0.25 }, "+=0.2")
    .to("#note-N-2", { strokeDashoffset: 0, duration: 0.3 })
    .to("#note-N-3", { strokeDashoffset: 0, duration: 0.25 })
    .to("#note-o",   { strokeDashoffset: 0, duration: 0.3 })
    .to("#note-t-1", { strokeDashoffset: 0, duration: 0.2 })
    .to("#note-t-2", { strokeDashoffset: 0, duration: 0.12 }, "-=0.08")
    .to("#note-e",   { strokeDashoffset: 0, duration: 0.28 })

    // ── TONE ─────────────────────────────────────────────────────────────────────────────
    .to("#tone-T-1", { strokeDashoffset: 0, duration: 0.2 }, "+=0.2")
    .to("#tone-T-2", { strokeDashoffset: 0, duration: 0.15 }, "-=0.08")
    .to("#tone-o",   { strokeDashoffset: 0, duration: 0.3 })
    .to("#tone-n-1", { strokeDashoffset: 0, duration: 0.2 })
    .to("#tone-n-2", { strokeDashoffset: 0, duration: 0.2 }, "-=0.08")
    .to("#tone-e",   { strokeDashoffset: 0, duration: 0.28 });

  return tl;
}

export default buildWordsTL;

