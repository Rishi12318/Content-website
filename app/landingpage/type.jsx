"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const LABELS = [
  "Student",
  "Literature Writer",
  "Professionals",
  "Researchers",
  "Others",
];

const STUDENT_WORDS = [
  "Assignments",
  "Essays",
  "Research",
  "Notes",
  "Projects",
  "Summaries",
];

const STUDENT_IMGS = [
  "https://i.pinimg.com/736x/8e/e9/43/8ee94355e58321efc4b9cb8d7617df1a.jpg",
  "https://i.pinimg.com/736x/a2/c2/1e/a2c21ea5caa4c4bc84518fbf6b1d6652.jpg",
  "https://i.pinimg.com/736x/78/a3/cc/78a3cc8d98984eee111b930a75d74c76.jpg",
];

const PROFESSIONAL_WORDS = [
  "Reports",
  "Proposals",
  "Emails",
  "Presentations",
  "Briefs",
  "Content",
];

const PROFESSIONAL_IMGS = [
  "https://i.pinimg.com/736x/31/61/0b/31610b52042d254bf6b001da99d6b4c7.jpg",
  "https://i.pinimg.com/736x/1f/27/61/1f2761ea18cb8dd57d161530607311d8.jpg",
  "https://i.pinimg.com/736x/e9/20/bd/e920bdd68c5138a655566e5fe50d0c23.jpg",
  "https://i.pinimg.com/736x/60/6b/df/606bdfe5033218704b864ddeddf3cc65.jpg",
];

const LITERATURE_WORDS = [
  "Fantasy",
  "Mystery",
  "Romance",
  "Creative Ideas",
  "Storytelling",
  "Characters",
];

const LITERATURE_IMGS = [
  "https://i.pinimg.com/736x/26/24/2d/26242d1864990859d199f96dee58eeaf.jpg",
  "https://i.pinimg.com/736x/b6/10/f0/b610f00829c41f584cda2005f4790fac.jpg",
  "https://i.pinimg.com/736x/e9/aa/44/e9aa44ca38057aa1d086f7a761fb7a86.jpg",
];

const RESEARCHER_WORDS = [
  "Papers",
  "Citations",
  "Abstracts",
  "Analysis",
  "Methodology",
  "Literature Review",
];

const RESEARCHER_IMGS = [
  "https://i.pinimg.com/736x/f1/0c/09/f10c09a4267acf2dec3673618db2e858.jpg",
  "https://i.pinimg.com/736x/6f/3c/01/6f3c019b1eaa8a8fccb3a8ce401070cf.jpg",
  "https://i.pinimg.com/736x/f1/16/eb/f116eb418157031dd9eec3a6f3a56196.jpg",
];

const OTHERS_WORDS = [
  "Blogging",
  "Journaling",
  "Scripts",
  "Social Media",
  "Content",
  "Ideas",
];

const OTHERS_IMGS = [
  "https://i.pinimg.com/736x/8c/56/74/8c5674f6e90bf343c4a32442c7f41e4d.jpg",
  "https://i.pinimg.com/736x/38/f5/9c/38f59c1ff73a5468280c29cd0a26ff4a.jpg",
  "https://i.pinimg.com/736x/3a/d5/db/3ad5db67a9e3dcbf83776f555c42b1ee.jpg",
];

export default function TypeSection() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [showStudent, setShowStudent] = useState(false);
  const [showProfessional, setShowProfessional] = useState(false);
  const [showLiterature, setShowLiterature] = useState(false);
  const [showResearcher, setShowResearcher] = useState(false);
  const [showOthers, setShowOthers] = useState(false);
  const [wordKey, setWordKey] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [proSlideIdx, setProSlideIdx] = useState(0);
  const [proZoomed, setProZoomed] = useState(false);
  const [litSlideIdx, setLitSlideIdx] = useState(0);
  const [litZoomed, setLitZoomed] = useState(false);
  const [resSlideIdx, setResSlideIdx] = useState(0);
  const [resZoomed, setResZoomed] = useState(false);
  const [othSlideIdx, setOthSlideIdx] = useState(0);
  const [othZoomed, setOthZoomed] = useState(false);
  const slideTimer = useRef(null);
  const proSlideTimer = useRef(null);
  const litSlideTimer = useRef(null);
  const resSlideTimer = useRef(null);
  const othSlideTimer = useRef(null);

  // Show/hide student & professional content
  useEffect(() => {
    if (index === 0) {
      const t = setTimeout(() => {
        setShowStudent(true);
        setShowProfessional(false);
        setShowLiterature(false);
        setShowResearcher(false);
        setShowOthers(false);
        setWordKey((k) => k + 1);
        setSlideIdx(0);
        setZoomed(false);
      }, 60);
      return () => clearTimeout(t);
    } else if (index === 1) {
      const t = setTimeout(() => {
        setShowLiterature(true);
        setShowStudent(false);
        setShowProfessional(false);
        setShowResearcher(false);
        setShowOthers(false);
        setWordKey((k) => k + 1);
        setLitSlideIdx(0);
        setLitZoomed(false);
      }, 60);
      return () => clearTimeout(t);
    } else if (index === 2) {
      const t = setTimeout(() => {
        setShowProfessional(true);
        setShowStudent(false);
        setShowLiterature(false);
        setShowResearcher(false);
        setShowOthers(false);
        setWordKey((k) => k + 1);
        setProSlideIdx(0);
        setProZoomed(false);
      }, 60);
      return () => clearTimeout(t);
    } else if (index === 3) {
      const t = setTimeout(() => {
        setShowResearcher(true);
        setShowStudent(false);
        setShowProfessional(false);
        setShowLiterature(false);
        setShowOthers(false);
        setWordKey((k) => k + 1);
        setResSlideIdx(0);
        setResZoomed(false);
      }, 60);
      return () => clearTimeout(t);
    } else if (index === 4) {
      const t = setTimeout(() => {
        setShowOthers(true);
        setShowStudent(false);
        setShowProfessional(false);
        setShowLiterature(false);
        setShowResearcher(false);
        setWordKey((k) => k + 1);
        setOthSlideIdx(0);
        setOthZoomed(false);
      }, 60);
      return () => clearTimeout(t);
    } else {
      const t1 = setTimeout(() => setShowStudent(false), 0);
      const t2 = setTimeout(() => setShowProfessional(false), 0);
      const t3 = setTimeout(() => setShowLiterature(false), 0);
      const t4 = setTimeout(() => setShowResearcher(false), 0);
      const t5 = setTimeout(() => setShowOthers(false), 0);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
    }
  }, [index]);

  // Student slideshow zoom cycle
  useEffect(() => {
    if (!showStudent) {
      clearInterval(slideTimer.current);
      return;
    }
    const resetZoom = setTimeout(() => setZoomed(false), 0);
    const zoomIn = setTimeout(() => setZoomed(true), 200);
    slideTimer.current = setInterval(() => {
      setZoomed(false);
      setTimeout(() => {
        setSlideIdx((p) => (p + 1) % STUDENT_IMGS.length);
        setTimeout(() => setZoomed(true), 200);
      }, 400);
    }, 3200);
    return () => {
      clearTimeout(resetZoom);
      clearTimeout(zoomIn);
      clearInterval(slideTimer.current);
    };
  }, [showStudent, slideIdx]);

  // Professional slideshow zoom cycle
  useEffect(() => {
    if (!showProfessional) {
      clearInterval(proSlideTimer.current);
      return;
    }
    const resetZoom = setTimeout(() => setProZoomed(false), 0);
    const zoomIn = setTimeout(() => setProZoomed(true), 200);
    proSlideTimer.current = setInterval(() => {
      setProZoomed(false);
      setTimeout(() => {
        setProSlideIdx((p) => (p + 1) % PROFESSIONAL_IMGS.length);
        setTimeout(() => setProZoomed(true), 200);
      }, 400);
    }, 3200);
    return () => {
      clearTimeout(resetZoom);
      clearTimeout(zoomIn);
      clearInterval(proSlideTimer.current);
    };
  }, [showProfessional, proSlideIdx]);

  // Literature slideshow zoom cycle
  useEffect(() => {
    if (!showLiterature) {
      clearInterval(litSlideTimer.current);
      return;
    }
    const resetZoom = setTimeout(() => setLitZoomed(false), 0);
    const zoomIn = setTimeout(() => setLitZoomed(true), 200);
    litSlideTimer.current = setInterval(() => {
      setLitZoomed(false);
      setTimeout(() => {
        setLitSlideIdx((p) => (p + 1) % LITERATURE_IMGS.length);
        setTimeout(() => setLitZoomed(true), 200);
      }, 400);
    }, 3200);
    return () => {
      clearTimeout(resetZoom);
      clearTimeout(zoomIn);
      clearInterval(litSlideTimer.current);
    };
  }, [showLiterature, litSlideIdx]);

  // Researcher slideshow zoom cycle
  useEffect(() => {
    if (!showResearcher) {
      clearInterval(resSlideTimer.current);
      return;
    }
    const resetZoom = setTimeout(() => setResZoomed(false), 0);
    const zoomIn = setTimeout(() => setResZoomed(true), 200);
    resSlideTimer.current = setInterval(() => {
      setResZoomed(false);
      setTimeout(() => {
        setResSlideIdx((p) => (p + 1) % RESEARCHER_IMGS.length);
        setTimeout(() => setResZoomed(true), 200);
      }, 400);
    }, 3200);
    return () => {
      clearTimeout(resetZoom);
      clearTimeout(zoomIn);
      clearInterval(resSlideTimer.current);
    };
  }, [showResearcher, resSlideIdx]);

  // Others slideshow zoom cycle
  useEffect(() => {
    if (!showOthers) {
      clearInterval(othSlideTimer.current);
      return;
    }
    const resetZoom = setTimeout(() => setOthZoomed(false), 0);
    const zoomIn = setTimeout(() => setOthZoomed(true), 200);
    othSlideTimer.current = setInterval(() => {
      setOthZoomed(false);
      setTimeout(() => {
        setOthSlideIdx((p) => (p + 1) % OTHERS_IMGS.length);
        setTimeout(() => setOthZoomed(true), 200);
      }, 400);
    }, 3200);
    return () => {
      clearTimeout(resetZoom);
      clearTimeout(zoomIn);
      clearInterval(othSlideTimer.current);
    };
  }, [showOthers, othSlideIdx]);

  const go = (dir) => {
    setFading(true);
    setTimeout(() => {
      setIndex((prev) => (prev + dir + LABELS.length) % LABELS.length);
      setFading(false);
    }, 180);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');

        @keyframes writeIn {
          0%   { clip-path: inset(0 100% 0 0); opacity: 0; }
          5%   { opacity: 1; }
          100% { clip-path: inset(0 0% 0 0); opacity: 1; }
        }
        .write-word {
          display: inline-block;
          clip-path: inset(0 100% 0 0);
          animation: writeIn 0.65s cubic-bezier(0.22,0.61,0.36,1) forwards;
          font-family: 'Caveat', cursive;
          font-size: clamp(20px, 2.6vw, 28px);
          font-weight: 700;
          color: #111;
          line-height: 1.5;
          text-shadow: none;
        }
        .write-underline {
          display: block;
          height: 2px;
          background: #333;
          border-radius: 2px;
          transform-origin: left;
          transform: scaleX(0);
          animation: scaleIn 0.4s ease forwards;
        }
        @keyframes scaleIn { to { transform: scaleX(1); } }

        .slide-img {
          transition: transform 3s ease-in-out, opacity 0.4s ease;
        }
        .slide-img.zoomed { transform: scale(1.12); }
        .slide-img.unzoomed { transform: scale(1); }

        @media (max-width: 700px) {
          .type-cols { flex-direction: column !important; }
          .type-right { height: 420px !important; }
        }
      `}</style>

      <section
        style={{
          background: "#E9E4FF",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "60px 24px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div
          className="type-cols"
          style={{
            maxWidth: "1000px",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            gap: "28px",
            flexWrap: "wrap",
            alignItems: "stretch",
          }}
        >
          {/* LEFT — white box: full slideshow */}
          <div
            className="type-left"
            style={{
              flex: "1 1 380px",
              background: "#FFFFFF",
              borderRadius: "20px",
              minHeight: "520px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {(showStudent || showProfessional || showLiterature || showResearcher || showOthers) && (() => {
              const imgs = showStudent ? STUDENT_IMGS : showProfessional ? PROFESSIONAL_IMGS : showLiterature ? LITERATURE_IMGS : showResearcher ? RESEARCHER_IMGS : OTHERS_IMGS;
              const idx = showStudent ? slideIdx : showProfessional ? proSlideIdx : showLiterature ? litSlideIdx : showResearcher ? resSlideIdx : othSlideIdx;
              const z = showStudent ? zoomed : showProfessional ? proZoomed : showLiterature ? litZoomed : showResearcher ? resZoomed : othZoomed;
              const setIdx = showStudent
                ? (i) => { setSlideIdx(i); setZoomed(false); }
                : showProfessional
                ? (i) => { setProSlideIdx(i); setProZoomed(false); }
                : showLiterature
                ? (i) => { setLitSlideIdx(i); setLitZoomed(false); }
                : showResearcher
                ? (i) => { setResSlideIdx(i); setResZoomed(false); }
                : (i) => { setOthSlideIdx(i); setOthZoomed(false); };
              return (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    overflow: "hidden",
                    borderRadius: "20px",
                  }}
                >
                  <Image
                    key={idx}
                    src={imgs[idx]}
                    alt={`Slide ${idx + 1}`}
                    fill
                    className={`slide-img ${z ? "zoomed" : "unzoomed"}`}
                    style={{ objectFit: "cover" }}
                    sizes="500px"
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      gap: "7px",
                      zIndex: 2,
                    }}
                  >
                    {imgs.map((_, i) => (
                      <span
                        key={i}
                        onClick={() => setIdx(i)}
                        style={{
                          width: i === idx ? "20px" : "8px",
                          height: "8px",
                          borderRadius: "999px",
                          background: i === idx ? "#fff" : "rgba(255,255,255,0.5)",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          display: "inline-block",
                        }}
                      />
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* RIGHT — image + button at top + animated words below button */}
          <div
            className="type-right"
            style={{
              flex: "1 1 380px",
              position: "relative",
              height: "520px",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            {/* Background image (static, no scroll) */}
            <Image
              src="/images/how-to-use.jpg"
              alt="Abun writing desk illustration"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 768px) 90vw, 50vw"
            />

            {/* Dark overlay so text is readable */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.08) 60%, transparent 100%)",
                zIndex: 1,
              }}
            />

            {/* Button — top center */}
            <div
              style={{
                position: "absolute",
                top: "24px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#7C6CF6",
                color: "#fff",
                borderRadius: "999px",
                padding: "12px 22px",
                boxShadow: "0 6px 24px rgba(124,108,246,0.5)",
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              <button
                onClick={() => go(-1)}
                style={{
                  background: "none", border: "none", color: "#fff",
                  cursor: "pointer", fontSize: "18px", lineHeight: 1,
                  padding: "0 2px", opacity: 0.85,
                }}
                aria-label="Previous"
              >
                &#8249;
              </button>
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  minWidth: "148px",
                  textAlign: "center",
                  opacity: fading ? 0 : 1,
                  transition: "opacity 0.18s ease",
                  letterSpacing: "0.01em",
                }}
              >
                {LABELS[index]}
              </span>
              <button
                onClick={() => go(1)}
                style={{
                  background: "none", border: "none", color: "#fff",
                  cursor: "pointer", fontSize: "18px", lineHeight: 1,
                  padding: "0 2px", opacity: 0.85,
                }}
                aria-label="Next"
              >
                &#8250;
              </button>
            </div>

            {/* Animated words on image — below button */}
            {(showStudent || showProfessional || showLiterature || showResearcher || showOthers) && (
              <div
                key={wordKey}
                style={{
                  position: "absolute",
                  top: "88px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  padding: "14px 28px 16px 28px",
                  background: "rgba(255,255,255,0.72)",
                  borderRadius: "14px",
                  backdropFilter: "blur(6px)",
                  whiteSpace: "nowrap",
                  minWidth: "180px",
                }}
              >
                {(showStudent ? STUDENT_WORDS : showProfessional ? PROFESSIONAL_WORDS : showLiterature ? LITERATURE_WORDS : showResearcher ? RESEARCHER_WORDS : OTHERS_WORDS).map((word, i) => (
                  <div key={word}>
                    <span
                      className="write-word"
                      style={{ animationDelay: `${i * 0.18}s` }}
                    >
                      {word}
                    </span>
                    <span
                      className="write-underline"
                      style={{ animationDelay: `${i * 0.18 + 0.6}s` }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
