"use client";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import boyAnimation from "../../public/animation/boy.json";
import roboAnimation from "../../public/animation/robo.json";
import robo1Animation from "../../public/animation/robo1.json";

const BG_QUESTIONS = [
  { text: "Tired of work?",  top: "12%",    left: "5%",    rotate: "-8deg",  size: "2rem"   },
  { text: "Out of ideas?",   top: "28%",    right: "4%",   rotate: "6deg",   size: "1.7rem" },
  { text: "Pending work?",   bottom: "28%", left: "3%",    rotate: "5deg",   size: "1.9rem" },
  { text: "Deadline?",       bottom: "12%", right: "5%",   rotate: "-7deg",  size: "2.2rem" },
];

export default function CommunicationSection() {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);
  // stage: "boy" → "robo" → "robo1"
  const [stage, setStage] = useState("boy");

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = 1 - rect.bottom / (viewH + rect.height);
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
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
      }}
    >
      {/* Parallax background */}
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
          minHeight: "130%",
          minWidth: "130%",
          width: "auto",
          height: "auto",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.42)",
          zIndex: 1,
        }}
      />

      {/* All 4 questions visible in bg simultaneously — fade out when robo appears */}
      {BG_QUESTIONS.map((item, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
            zIndex: 2,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontStyle: "italic",
            fontSize: item.size,
            color: "#fff",
            transform: `rotate(${item.rotate})`,
            opacity: stage === "boy" ? 1 : 0,
            transition: "opacity 0.8s ease",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            userSelect: "none",
            textShadow: "0 2px 18px rgba(0,0,0,0.75), 0 0px 4px rgba(0,0,0,0.9)",
          }}
        >
          {item.text}
        </span>
      ))}

      {/* Robo phrase — fades in when robo animation starts */}
      <span
        style={{
          position: "absolute",
          bottom: "30%",
          left: "4%",
          zIndex: 2,
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
          fontStyle: "italic",
          fontSize: "clamp(1.3rem, 2.2vw, 2rem)",
          color: "#fff",
          opacity: stage === "robo" ? 1 : 0,
          transform: stage === "robo" ? "rotate(-4deg) translateY(0)" : "rotate(-4deg) translateY(14px)",
          transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
          whiteSpace: "normal",
          maxWidth: "280px",
          lineHeight: 1.25,
          pointerEvents: "none",
          userSelect: "none",
          textShadow: "0 2px 20px rgba(0,0,0,0.75), 0 0px 4px rgba(0,0,0,0.9)",
        }}
      >
        Our AI bot is here<br />to help you out!!!
      </span>

      {/* Robo1 phrase — fades in during third animation */}
      <span
        style={{
          position: "absolute",
          bottom: "30%",
          right: "5%",
          zIndex: 2,
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
          fontStyle: "italic",
          fontSize: "clamp(1.3rem, 2.2vw, 2rem)",
          color: "#fff",
          opacity: stage === "robo1" ? 1 : 0,
          transform: stage === "robo1" ? "rotate(4deg) translateY(0)" : "rotate(4deg) translateY(14px)",
          transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
          whiteSpace: "normal",
          maxWidth: "280px",
          lineHeight: 1.25,
          textAlign: "right",
          pointerEvents: "none",
          userSelect: "none",
          textShadow: "0 2px 20px rgba(0,0,0,0.75), 0 0px 4px rgba(0,0,0,0.9)",
        }}
      >
        with keyword or content<br />get your work done
      </span>

      {/* Single white box — boy → robo → robo1, each plays once */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "420px",
          maxWidth: "88vw",
          height: "520px",
          background: "#E9E4FF",
          borderRadius: "24px",
          overflow: "hidden",
          border: "3px solid #ffffff",
          boxShadow: "0 24px 64px rgba(0,0,0,0.28), 0 0 0 3px #ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {stage === "boy" ? (
          <Lottie
            key="boy"
            animationData={boyAnimation}
            loop={false}
            autoplay
            onComplete={() => setStage("robo")}
            style={{ width: "100%", height: "100%" }}
          />
        ) : stage === "robo" ? (
          <Lottie
            key="robo"
            animationData={roboAnimation}
            loop={false}
            autoplay
            onComplete={() => setStage("robo1")}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <Lottie
            key="robo1"
            animationData={robo1Animation}
            loop={false}
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>
    </section>
  );
}
