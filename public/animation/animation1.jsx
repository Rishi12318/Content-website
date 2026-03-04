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

  // All pen strokes animate simultaneously — slower draw speed
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.to(".pen-stroke", { strokeDashoffset: 0, duration: 2.2 });

  return tl;
}

export default buildWordsTL;

