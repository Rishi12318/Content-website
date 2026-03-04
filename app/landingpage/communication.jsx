"use client";
import { useEffect, useRef } from "react";

export default function CommunicationSection() {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      // progress: 0 when section bottom enters viewport, 1 when section top leaves
      const progress =
        1 - (rect.bottom / (viewH + rect.height));
      // Shift image vertically: -8% to +8% range
      const shift = (progress - 0.5) * 16;
      imgRef.current.style.transform = `translate(-50%, calc(-50% + ${shift}%))`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Parallax background — wider than section so image scrolls as page scrolls */}
      <img
        ref={imgRef}
        src="https://i.pinimg.com/736x/33/a9/59/33a959eb8f361eb5af179cbd882139f4.jpg"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          /* Taller than section so parallax shift never shows gaps */
          minHeight: "130%",
          /* Wider than viewport so image overflows horizontally */
          minWidth: "130%",
          width: "auto",
          height: "auto",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.38)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "720px",
          width: "100%",
          padding: "80px 32px",
          textAlign: "center",
          color: "#fff",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.75,
            marginBottom: "20px",
          }}
        >
          Why Abun
        </p>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 58px)",
            fontWeight: 700,
            lineHeight: 1.15,
            margin: "0 0 24px",
            letterSpacing: "-0.01em",
          }}
        >
          Write less.<br />Communicate more.
        </h2>
        <p
          style={{
            fontSize: "clamp(15px, 1.8vw, 18px)",
            lineHeight: 1.75,
            opacity: 0.88,
            maxWidth: "520px",
            margin: "0 auto 40px",
          }}
        >
          Abun understands your voice and intent — turning rough ideas into
          polished, meaningful content in seconds.
        </p>
        <a
          href="#"
          style={{
            display: "inline-block",
            background: "#fff",
            color: "#111",
            fontWeight: 600,
            fontSize: "15px",
            padding: "14px 36px",
            borderRadius: "999px",
            textDecoration: "none",
            letterSpacing: "0.02em",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
