"use client";
import { useRef, useState } from "react";

const REVIEWS = [
  {
    name: "Sophia M.",
    role: "Content Writer",
    text: "Abun completely changed how I write. I go from blank page to polished draft in minutes. The AI understands my tone perfectly.",
    stars: 5,
  },
  {
    name: "Rahul K.",
    role: "Researcher",
    text: "I used to spend hours summarising papers. Now I just paste a keyword and Abun structures everything for me. Absolutely incredible.",
    stars: 5,
  },
  {
    name: "Emma L.",
    role: "Literature Student",
    text: "From character arcs to essay outlines, Abun handles it all. It's like having a co-author who never gets tired.",
    stars: 5,
  },
  {
    name: "Daniel P.",
    role: "Marketing Professional",
    text: "Deadlines used to stress me out. Now I hit them with time to spare. Abun is the productivity tool I didn't know I needed.",
    stars: 5,
  },
  {
    name: "Priya S.",
    role: "Blogger",
    text: "I've tried every writing tool out there. Nothing comes close to Abun. The content quality is just on another level.",
    stars: 5,
  },
  {
    name: "James W.",
    role: "Journalist",
    text: "Tight deadlines, multiple stories at once — Abun keeps me on top of it all. My editor keeps asking what changed. It's this.",
    stars: 5,
  },
  {
    name: "Aisha T.",
    role: "Novelist",
    text: "I was stuck on chapter 12 for weeks. One session with Abun and the whole plot unlocked. Game-changing for creative writers.",
    stars: 5,
  },
];

function Stars({ count }) {
  return (
    <div style={{ display: "flex", gap: "3px", marginBottom: "10px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? "#f5a623" : "#ddd"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };
  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  // touch
  const onTouchStart = (e) => {
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };
  const onTouchMove = (e) => {
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "80px 0",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://i.pinimg.com/736x/a8/9d/e8/a89de84f594d3e5ec62bebea51679676.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      {/* Light overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.72)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1000px",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "0.85rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#7c5cbf",
            marginBottom: "10px",
          }}
        >
          What people say
        </p>
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#1a1a2e",
            margin: "0 0 12px",
            lineHeight: 1.15,
          }}
        >
          Loved by writers everywhere
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.05rem",
            color: "#555",
            marginBottom: "52px",
            maxWidth: "520px",
            margin: "0 auto 52px",
          }}
        >
          Real reviews from real users who transformed their writing with Abun.
        </p>

        {/* Slider track */}
        <div
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          style={{
            display: "flex",
            gap: "24px",
            overflowX: "auto",
            scrollBehavior: "smooth",
            paddingBottom: "20px",
            cursor: isDragging ? "grabbing" : "grab",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            userSelect: "none",
          }}
        >
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              style={{
                minWidth: "240px",
                maxWidth: "240px",
                background: "#ffffff",
                borderRadius: "20px",
                padding: "28px 26px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                textAlign: "left",
                flexShrink: 0,
                border: "1px solid rgba(233,228,255,0.8)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(124,92,191,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.10)";
              }}
            >
              <Stars count={r.stars} />
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.95rem",
                  color: "#333",
                  lineHeight: 1.65,
                  marginBottom: "22px",
                  minHeight: "90px",
                }}
              >
                "{r.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #E9E4FF 0%, #b8a6f0 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#7c5cbf",
                    flexShrink: 0,
                  }}
                >
                  {r.name[0]}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.92rem",
                      color: "#1a1a2e",
                      margin: 0,
                    }}
                  >
                    {r.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.78rem",
                      color: "#888",
                      margin: 0,
                    }}
                  >
                    {r.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Drag hint */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.78rem",
            color: "#999",
            marginTop: "16px",
          }}
        >
          ← drag to explore →
        </p>
      </div>
    </section>
  );
}
