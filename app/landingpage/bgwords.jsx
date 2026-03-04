// bgwords.jsx
// Individual handwriting-style SVG word components.
// Each <path> represents one pen stroke, uses pathLength="1" so GSAP can
// animate strokeDashoffset from 1→0 without knowing the real path length.

// Visual style only — dashoffset is set/animated exclusively by GSAP
const PEN = {
  fill: "none",
  stroke: "#000",
  strokeWidth: "3",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// ─── Write ───────────────────────────────────────────────────────────────────
export function WordWrite({ style }) {
  return (
    <svg viewBox="0 0 130 72" width="130" height="72" style={style} overflow="visible" aria-hidden>
      {/* W – 4 strokes */}
      <path id="write-W-1" pathLength="1" className="pen-stroke" style={PEN} d="M2,8 C4,28 8,46 12,55" />
      <path id="write-W-2" pathLength="1" className="pen-stroke" style={PEN} d="M12,55 C16,62 20,36 22,22" />
      <path id="write-W-3" pathLength="1" className="pen-stroke" style={PEN} d="M22,22 C24,38 28,50 32,56" />
      <path id="write-W-4" pathLength="1" className="pen-stroke" style={PEN} d="M32,56 C36,62 42,30 46,6" />
      {/* r */}
      <path id="write-r-1" pathLength="1" className="pen-stroke" style={PEN} d="M53,30 L53,57" />
      <path id="write-r-2" pathLength="1" className="pen-stroke" style={PEN} d="M53,38 Q58,22 68,32" />
      {/* i */}
      <path id="write-i-1" pathLength="1" className="pen-stroke" style={PEN} d="M75,30 L75,57" />
      <path id="write-i-2" pathLength="1" className="pen-stroke" style={PEN} d="M74,20 Q76,16 78,20" />
      {/* t */}
      <path id="write-t-1" pathLength="1" className="pen-stroke" style={PEN} d="M87,10 L87,59" />
      <path id="write-t-2" pathLength="1" className="pen-stroke" style={PEN} d="M80,37 L96,37" />
      {/* e */}
      <path id="write-e"   pathLength="1" className="pen-stroke" style={PEN} d="M111,41 L101,41 Q99,25 111,25 Q119,25 119,39 Q117,57 105,57" />
    </svg>
  );
}

// ─── Create ──────────────────────────────────────────────────────────────────
export function WordCreate({ style }) {
  return (
    <svg viewBox="0 0 165 72" width="165" height="72" style={style} overflow="visible" aria-hidden>
      {/* C */}
      <path id="create-C"   pathLength="1" className="pen-stroke" style={PEN} d="M38,20 Q26,12 16,26 Q7,40 18,54 Q28,64 42,56" />
      {/* r */}
      <path id="create-r-1" pathLength="1" className="pen-stroke" style={PEN} d="M50,30 L50,57" />
      <path id="create-r-2" pathLength="1" className="pen-stroke" style={PEN} d="M50,38 Q54,22 66,32" />
      {/* e */}
      <path id="create-e-1" pathLength="1" className="pen-stroke" style={PEN} d="M82,41 L72,41 Q70,25 82,25 Q90,25 90,39 Q88,57 76,57" />
      {/* a */}
      <path id="create-a"   pathLength="1" className="pen-stroke" style={PEN} d="M108,25 Q97,18 93,32 Q89,48 100,55 Q108,59 110,47 L110,59" />
      {/* t */}
      <path id="create-t-1" pathLength="1" className="pen-stroke" style={PEN} d="M120,10 L120,61" />
      <path id="create-t-2" pathLength="1" className="pen-stroke" style={PEN} d="M113,37 L130,37" />
      {/* e */}
      <path id="create-e-2" pathLength="1" className="pen-stroke" style={PEN} d="M148,41 L138,41 Q136,25 148,25 Q156,25 156,39 Q154,57 142,57" />
    </svg>
  );
}

// ─── Draft ───────────────────────────────────────────────────────────────────
export function WordDraft({ style }) {
  return (
    <svg viewBox="0 0 140 72" width="140" height="72" style={style} overflow="visible" aria-hidden>
      {/* D */}
      <path id="draft-D-1"  pathLength="1" className="pen-stroke" style={PEN} d="M4,8 L4,62" />
      <path id="draft-D-2"  pathLength="1" className="pen-stroke" style={PEN} d="M4,8 Q30,8 32,22 Q36,36 32,50 Q28,64 4,62" />
      {/* r */}
      <path id="draft-r-1"  pathLength="1" className="pen-stroke" style={PEN} d="M40,30 L40,58" />
      <path id="draft-r-2"  pathLength="1" className="pen-stroke" style={PEN} d="M40,38 Q44,22 56,32" />
      {/* a */}
      <path id="draft-a"    pathLength="1" className="pen-stroke" style={PEN} d="M73,25 Q62,18 58,32 Q54,48 65,55 Q73,59 75,47 L75,59" />
      {/* f */}
      <path id="draft-f-1"  pathLength="1" className="pen-stroke" style={PEN} d="M96,6 Q98,0 104,2 Q108,4 106,12 L102,62" />
      <path id="draft-f-2"  pathLength="1" className="pen-stroke" style={PEN} d="M94,33 L112,33" />
      {/* t */}
      <path id="draft-t-1"  pathLength="1" className="pen-stroke" style={PEN} d="M122,10 L122,62" />
      <path id="draft-t-2"  pathLength="1" className="pen-stroke" style={PEN} d="M115,38 L132,38" />
    </svg>
  );
}

// ─── Research ─────────────────────────────────────────────────────────────────
export function WordResearch({ style }) {
  return (
    <svg viewBox="0 0 210 72" width="210" height="72" style={style} overflow="visible" aria-hidden>
      {/* R */}
      <path id="research-R-1" pathLength="1" className="pen-stroke" style={PEN} d="M4,8 L4,62" />
      <path id="research-R-2" pathLength="1" className="pen-stroke" style={PEN} d="M4,8 Q26,8 28,22 Q28,36 4,36" />
      <path id="research-R-3" pathLength="1" className="pen-stroke" style={PEN} d="M16,36 L30,62" />
      {/* e */}
      <path id="research-e-1" pathLength="1" className="pen-stroke" style={PEN} d="M50,41 L40,41 Q38,25 50,25 Q58,25 58,39 Q56,57 44,57" />
      {/* s */}
      <path id="research-s"   pathLength="1" className="pen-stroke" style={PEN} d="M74,25 Q64,20 64,32 Q64,43 75,43 Q86,43 86,54 Q86,63 70,60" />
      {/* e */}
      <path id="research-e-2" pathLength="1" className="pen-stroke" style={PEN} d="M102,41 L92,41 Q90,25 102,25 Q110,25 110,39 Q108,57 96,57" />
      {/* a */}
      <path id="research-a"   pathLength="1" className="pen-stroke" style={PEN} d="M128,25 Q117,18 113,32 Q109,48 120,55 Q128,59 130,47 L130,59" />
      {/* r */}
      <path id="research-r-1" pathLength="1" className="pen-stroke" style={PEN} d="M138,30 L138,58" />
      <path id="research-r-2" pathLength="1" className="pen-stroke" style={PEN} d="M138,38 Q142,22 154,32" />
      {/* c */}
      <path id="research-c"   pathLength="1" className="pen-stroke" style={PEN} d="M172,25 Q160,18 156,32 Q152,48 162,56 Q170,62 178,53" />
      {/* h */}
      <path id="research-h-1" pathLength="1" className="pen-stroke" style={PEN} d="M184,6 L184,60" />
      <path id="research-h-2" pathLength="1" className="pen-stroke" style={PEN} d="M184,38 Q190,24 200,30 L200,60" />
    </svg>
  );
}

// ─── Story ────────────────────────────────────────────────────────────────────
export function WordStory({ style }) {
  return (
    <svg viewBox="0 0 140 82" width="140" height="82" style={style} overflow="visible" aria-hidden>
      {/* S */}
      <path id="story-S"   pathLength="1" className="pen-stroke" style={PEN} d="M34,18 Q24,12 14,22 Q6,32 20,40 Q32,46 30,56 Q28,66 12,63" />
      {/* t */}
      <path id="story-t-1" pathLength="1" className="pen-stroke" style={PEN} d="M42,10 L42,62" />
      <path id="story-t-2" pathLength="1" className="pen-stroke" style={PEN} d="M35,35 L52,35" />
      {/* o */}
      <path id="story-o"   pathLength="1" className="pen-stroke" style={PEN} d="M72,25 Q60,20 56,34 Q52,50 62,57 Q70,62 74,51 Q78,38 72,25" />
      {/* r */}
      <path id="story-r-1" pathLength="1" className="pen-stroke" style={PEN} d="M84,30 L84,58" />
      <path id="story-r-2" pathLength="1" className="pen-stroke" style={PEN} d="M84,38 Q88,22 100,32" />
      {/* y */}
      <path id="story-y-1" pathLength="1" className="pen-stroke" style={PEN} d="M106,28 L116,55" />
      <path id="story-y-2" pathLength="1" className="pen-stroke" style={PEN} d="M128,28 L116,55 L110,74" />
    </svg>
  );
}

// ─── Ideas ────────────────────────────────────────────────────────────────────
export function WordIdeas({ style }) {
  return (
    <svg viewBox="0 0 140 72" width="140" height="72" style={style} overflow="visible" aria-hidden>
      {/* I */}
      <path id="ideas-I-1" pathLength="1" className="pen-stroke" style={PEN} d="M8,8 L22,8" />
      <path id="ideas-I-2" pathLength="1" className="pen-stroke" style={PEN} d="M15,8 L15,62" />
      <path id="ideas-I-3" pathLength="1" className="pen-stroke" style={PEN} d="M8,62 L22,62" />
      {/* d */}
      <path id="ideas-d-1" pathLength="1" className="pen-stroke" style={PEN} d="M46,6 L46,60" />
      <path id="ideas-d-2" pathLength="1" className="pen-stroke" style={PEN} d="M46,26 Q38,18 32,30 Q26,46 34,55 Q42,62 46,50" />
      {/* e */}
      <path id="ideas-e"   pathLength="1" className="pen-stroke" style={PEN} d="M68,41 L58,41 Q56,25 68,25 Q76,25 76,39 Q74,57 62,57" />
      {/* a */}
      <path id="ideas-a"   pathLength="1" className="pen-stroke" style={PEN} d="M96,25 Q85,18 81,32 Q77,48 88,55 Q96,59 98,47 L98,59" />
      {/* s */}
      <path id="ideas-s"   pathLength="1" className="pen-stroke" style={PEN} d="M116,25 Q106,20 106,32 Q106,43 117,43 Q128,43 128,54 Q128,63 112,60" />
    </svg>
  );
}

// ─── Edit ──────────────────────────────────────────────────────────────────────────────
export function WordEdit({ style }) {
  return (
    <svg viewBox="0 0 88 72" width="88" height="72" style={style} overflow="visible" aria-hidden>
      {/* E */}
      <path id="edit-E-1" pathLength="1" className="pen-stroke" style={PEN} d="M4,8 L4,62" />
      <path id="edit-E-2" pathLength="1" className="pen-stroke" style={PEN} d="M4,8 L26,8" />
      <path id="edit-E-3" pathLength="1" className="pen-stroke" style={PEN} d="M4,35 L22,35" />
      <path id="edit-E-4" pathLength="1" className="pen-stroke" style={PEN} d="M4,62 L26,62" />
      {/* d */}
      <path id="edit-d-1" pathLength="1" className="pen-stroke" style={PEN} d="M46,6 L46,60" />
      <path id="edit-d-2" pathLength="1" className="pen-stroke" style={PEN} d="M46,26 Q38,18 32,30 Q26,46 34,55 Q42,62 46,50" />
      {/* i */}
      <path id="edit-i-1" pathLength="1" className="pen-stroke" style={PEN} d="M56,30 L56,58" />
      <path id="edit-i-2" pathLength="1" className="pen-stroke" style={PEN} d="M55,20 Q57,16 59,20" />
      {/* t */}
      <path id="edit-t-1" pathLength="1" className="pen-stroke" style={PEN} d="M70,10 L70,59" />
      <path id="edit-t-2" pathLength="1" className="pen-stroke" style={PEN} d="M63,37 L79,37" />
    </svg>
  );
}

// ─── Blog ───────────────────────────────────────────────────────────────────────────────
export function WordBlog({ style }) {
  return (
    <svg viewBox="0 0 110 82" width="110" height="82" style={style} overflow="visible" aria-hidden>
      {/* B */}
      <path id="blog-B-1" pathLength="1" className="pen-stroke" style={PEN} d="M4,8 L4,62" />
      <path id="blog-B-2" pathLength="1" className="pen-stroke" style={PEN} d="M4,8 Q22,8 22,20 Q22,33 4,33" />
      <path id="blog-B-3" pathLength="1" className="pen-stroke" style={PEN} d="M4,33 Q24,33 24,47 Q24,62 4,62" />
      {/* l */}
      <path id="blog-l"   pathLength="1" className="pen-stroke" style={PEN} d="M32,6 L32,62" />
      {/* o */}
      <path id="blog-o"   pathLength="1" className="pen-stroke" style={PEN} d="M56,25 Q44,20 40,34 Q36,50 46,57 Q54,62 58,51 Q62,38 56,25" />
      {/* g */}
      <path id="blog-g-1" pathLength="1" className="pen-stroke" style={PEN} d="M84,25 Q72,20 68,34 Q64,50 74,57 Q82,62 86,50" />
      <path id="blog-g-2" pathLength="1" className="pen-stroke" style={PEN} d="M86,30 L86,50 Q86,72 70,72" />
    </svg>
  );
}

// ─── Copy ───────────────────────────────────────────────────────────────────────────────
export function WordCopy({ style }) {
  return (
    <svg viewBox="0 0 136 82" width="136" height="82" style={style} overflow="visible" aria-hidden>
      {/* C */}
      <path id="copy-C"   pathLength="1" className="pen-stroke" style={PEN} d="M36,20 Q24,12 14,26 Q5,40 16,54 Q26,64 40,56" />
      {/* o */}
      <path id="copy-o"   pathLength="1" className="pen-stroke" style={PEN} d="M60,25 Q48,20 44,34 Q40,50 50,57 Q58,62 62,51 Q66,38 60,25" />
      {/* p */}
      <path id="copy-p-1" pathLength="1" className="pen-stroke" style={PEN} d="M76,30 L76,72" />
      <path id="copy-p-2" pathLength="1" className="pen-stroke" style={PEN} d="M76,30 Q88,22 90,36 Q90,52 76,52" />
      {/* y */}
      <path id="copy-y-1" pathLength="1" className="pen-stroke" style={PEN} d="M102,28 L112,55" />
      <path id="copy-y-2" pathLength="1" className="pen-stroke" style={PEN} d="M124,28 L112,55 L106,74" />
    </svg>
  );
}

// ─── Note ───────────────────────────────────────────────────────────────────────────────
export function WordNote({ style }) {
  return (
    <svg viewBox="0 0 116 72" width="116" height="72" style={style} overflow="visible" aria-hidden>
      {/* N */}
      <path id="note-N-1" pathLength="1" className="pen-stroke" style={PEN} d="M4,62 L4,8" />
      <path id="note-N-2" pathLength="1" className="pen-stroke" style={PEN} d="M4,8 L28,62" />
      <path id="note-N-3" pathLength="1" className="pen-stroke" style={PEN} d="M28,62 L28,8" />
      {/* o */}
      <path id="note-o"   pathLength="1" className="pen-stroke" style={PEN} d="M50,25 Q38,20 34,34 Q30,50 40,57 Q48,62 52,51 Q56,38 50,25" />
      {/* t */}
      <path id="note-t-1" pathLength="1" className="pen-stroke" style={PEN} d="M66,10 L66,59" />
      <path id="note-t-2" pathLength="1" className="pen-stroke" style={PEN} d="M59,37 L75,37" />
      {/* e */}
      <path id="note-e"   pathLength="1" className="pen-stroke" style={PEN} d="M100,41 L90,41 Q88,25 100,25 Q108,25 108,39 Q106,57 94,57" />
    </svg>
  );
}

// ─── Tone ───────────────────────────────────────────────────────────────────────────────
export function WordTone({ style }) {
  return (
    <svg viewBox="0 0 120 72" width="120" height="72" style={style} overflow="visible" aria-hidden>
      {/* T */}
      <path id="tone-T-1" pathLength="1" className="pen-stroke" style={PEN} d="M16,8 L16,62" />
      <path id="tone-T-2" pathLength="1" className="pen-stroke" style={PEN} d="M2,8 L32,8" />
      {/* o */}
      <path id="tone-o"   pathLength="1" className="pen-stroke" style={PEN} d="M52,25 Q40,20 36,34 Q32,50 42,57 Q50,62 54,51 Q58,38 52,25" />
      {/* n */}
      <path id="tone-n-1" pathLength="1" className="pen-stroke" style={PEN} d="M66,30 L66,58" />
      <path id="tone-n-2" pathLength="1" className="pen-stroke" style={PEN} d="M66,38 Q72,24 82,30 L82,58" />
      {/* e */}
      <path id="tone-e"   pathLength="1" className="pen-stroke" style={PEN} d="M108,41 L98,41 Q96,25 108,25 Q116,25 116,39 Q114,57 102,57" />
    </svg>
  );
}