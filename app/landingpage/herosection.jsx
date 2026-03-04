"use client";
import { useEffect } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import writingBlue from "../../public/writing-blue.json";
import gsap from "gsap";
import { buildWordsTL } from "../../public/animation/animation1";
import {
  WordWrite,
  WordCreate,
  WordDraft,
  WordResearch,
  WordStory,
  WordIdeas,
  WordEdit,
  WordBlog,
  WordCopy,
  WordNote,
  WordTone,
} from "./bgwords";

// Wrapper id → word component mapping (for float animation targets)
const WORD_WRAPPERS = [
  "word-wrap-write",
  "word-wrap-create",
  "word-wrap-draft",
  "word-wrap-research",
  "word-wrap-story",
  "word-wrap-ideas",
  "word-wrap-edit",
  "word-wrap-blog",
  "word-wrap-copy",
  "word-wrap-note",
  "word-wrap-tone",
];

export default function HeroSection() {
  useEffect(() => {
    // ── Heading typewriter (from heading.jsx logic) ──────────────────────────
    const headingEl = document.getElementById("abun-heading");
    if (headingEl) {
      headingEl.textContent = "";
      const letters = "Abun".split("");
      let i = 0;
      const type = () => {
        if (i < letters.length) {
          headingEl.textContent += letters[i];
          i++;
          setTimeout(type, 150);
        }
      };
      type();
    }

    const tl = buildWordsTL();
    tl.timeScale(2.2);

    // Gentle float on each word wrapper after strokes are drawn
    tl.then(() => {
      WORD_WRAPPERS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        gsap.to(el, {
          y: 9,
          duration: 2.8 + i * 0.25,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.18,
        });
      });
    });

    return () => tl.kill();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        @font-face {
          font-family: 'Evelyn';
          src: url('/fonts/Evelyn.woff2') format('woff2'),
               url('/fonts/Evelyn.woff') format('woff'),
               url('/fonts/Evelyn.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        .btn-primary {
          background: #000;
          color: #fff;
          border: 1.5px solid #000;
          padding: 13px 30px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: -0.01em;
          transition: opacity 0.18s ease, transform 0.18s ease;
        }
        .btn-primary:hover { opacity: 0.82; transform: translateY(-2px); }
        .btn-secondary {
          background: transparent;
          color: #000;
          border: 1.5px solid #000;
          padding: 13px 30px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: -0.01em;
          transition: background 0.18s ease, color 0.18s ease, transform 0.18s ease;
        }
        .btn-secondary:hover {
          background: #000;
          color: #fff;
          transform: translateY(-2px);
        }
      `}</style>

      <main
        style={{
          position: "relative",
          minHeight: "100vh",
          backgroundColor: "#E9E4FF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px",
          overflow: "hidden",
          fontFamily:
            "'Inter', 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        {/* ── Torn paper — A: top-right, B: bottom-center-left ── */}

        {/* A — top-right */}
        <div style={{
          position: "absolute",
          top: 0,
          right: "8%",
          width: "300px",
          height: "380px",
          zIndex: 0,
          opacity: 0.14,
          pointerEvents: "none",
          mixBlendMode: "multiply",
          overflow: "hidden",
          transform: "rotate(4deg)",
        }}>
          <Image src="/images/torn-paper.jpg" alt="" aria-hidden fill style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>

        {/* B — bottom-center-left */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: "22%",
          width: "300px",
          height: "380px",
          zIndex: 0,
          opacity: 0.14,
          pointerEvents: "none",
          mixBlendMode: "multiply",
          overflow: "hidden",
          transform: "rotate(-5deg)",
        }}>
          <Image src="/images/torn-paper.jpg" alt="" aria-hidden fill style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>

        {/* ── Abstract blurred corner shapes ── */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "320px",
            height: "320px",
            background: "#000",
            borderRadius: "50%",
            opacity: 0.06,
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "360px",
            height: "360px",
            background: "#000",
            borderRadius: "50%",
            opacity: 0.05,
            filter: "blur(90px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "-60px",
            width: "180px",
            height: "500px",
            background: "#000",
            borderRadius: "50%",
            opacity: 0.04,
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        {/* ── Per-stroke handwriting words — positioned at corners/edges ── */}

        {/* top-left */}
        <div
          id="word-wrap-write"
          style={{
            position: "absolute",
            top: "6%",
            left: "3%",
            transform: "rotate(-12deg)",
            opacity: 0.18,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <WordWrite />
        </div>

        {/* top-right */}
        <div
          id="word-wrap-create"
          style={{
            position: "absolute",
            top: "5%",
            right: "3%",
            transform: "rotate(8deg)",
            opacity: 0.18,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <WordCreate />
        </div>

        {/* left mid */}
        <div
          id="word-wrap-draft"
          style={{
            position: "absolute",
            top: "42%",
            left: "-1%",
            transform: "rotate(-15deg)",
            opacity: 0.18,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <WordDraft />
        </div>

        {/* right mid */}
        <div
          id="word-wrap-research"
          style={{
            position: "absolute",
            top: "38%",
            right: "1%",
            transform: "rotate(10deg)",
            opacity: 0.18,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <WordResearch />
        </div>

        {/* bottom-left */}
        <div
          id="word-wrap-story"
          style={{
            position: "absolute",
            bottom: "7%",
            left: "4%",
            transform: "rotate(8deg)",
            opacity: 0.18,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <WordStory />
        </div>

        {/* bottom-right */}
        <div
          id="word-wrap-ideas"
          style={{
            position: "absolute",
            bottom: "6%",
            right: "3%",
            transform: "rotate(-10deg)",
            opacity: 0.18,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <WordIdeas />
        </div>

        {/* top-center-left */}
        <div
          id="word-wrap-edit"
          style={{
            position: "absolute",
            top: "3%",
            left: "28%",
            transform: "rotate(5deg)",
            opacity: 0.15,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <WordEdit />
        </div>

        {/* right upper-mid (between Create and Research) */}
        <div
          id="word-wrap-blog"
          style={{
            position: "absolute",
            top: "22%",
            right: "5%",
            transform: "rotate(-8deg)",
            opacity: 0.15,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <WordBlog />
        </div>

        {/* bottom-center */}
        <div
          id="word-wrap-copy"
          style={{
            position: "absolute",
            bottom: "10%",
            left: "37%",
            transform: "rotate(4deg)",
            opacity: 0.15,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <WordCopy />
        </div>

        {/* left lower-mid (below Draft) */}
        <div
          id="word-wrap-note"
          style={{
            position: "absolute",
            top: "65%",
            left: "2%",
            transform: "rotate(12deg)",
            opacity: 0.15,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <WordNote />
        </div>

        {/* right lower-mid (below Research) */}
        <div
          id="word-wrap-tone"
          style={{
            position: "absolute",
            bottom: "26%",
            right: "4%",
            transform: "rotate(-12deg)",
            opacity: 0.15,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <WordTone />
        </div>

        {/* ── Main content ── */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            maxWidth: "780px",
            width: "100%",
          }}
        >
          {/* Eyebrow label */}
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#000",
              opacity: 0.4,
              marginBottom: "36px",
            }}
          >
            AI-Powered Writing Platform
          </p>

          {/* Brand name */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "8px",
              position: "relative",
            }}
          >
            {/* Lottie — left of heading */}
            <div
              style={{
                position: "absolute",
                right: "calc(100% - 115px)",
                top: "50%",
                transform: "translateY(-50%)",
                width: "200px",
                height: "200px",
                pointerEvents: "none",
                zIndex: 0,
                filter: "hue-rotate(42deg) saturate(0.3) brightness(1.85)",
              }}
            >
              <Lottie animationData={writingBlue} loop autoplay />
            </div>
            <h1
              id="abun-heading"
              style={{
                fontSize: "clamp(80px, 13vw, 130px)",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: 1,
                letterSpacing: "0.01em",
                color: "#000",
                margin: 0,
                fontFamily: "'Evelyn', 'Great Vibes', cursive",
              }}
            >
              Abun
            </h1>
          </div>

          {/* Subtitle */}
          <h2
            style={{
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontWeight: 500,
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              color: "#000",
              opacity: 0.7,
              margin: "0 0 24px 0",
              fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
            }}
          >
            AI Content Writer
          </h2>

          {/* Divider */}
          <div
            style={{
              width: "40px",
              height: "2px",
              background: "#000",
              opacity: 0.15,
              margin: "0 auto 28px",
            }}
          />

          {/* Description */}
          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              fontWeight: 400,
              lineHeight: 1.75,
              color: "#000",
              opacity: 0.55,
              maxWidth: "520px",
              margin: "0 auto 48px",
            }}
          >
            From literature to research, assignments to business copy — Abun
            creates intelligent, high-quality content.
          </p>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Explore Solutions</button>
          </div>
        </div>
      </main>
    </>
  );
}