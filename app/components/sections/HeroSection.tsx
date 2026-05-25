"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const APPS = [
  {
    id: 1,
    name: "HYPERTASK",
    category: "PRODUCTIVITY",
    badge: "HOT",
    desc: "AI-POWERED PROJECT MANAGEMENT FOR MODERN TEAMS ON HYPERCHAIN",
    color: "#ff4500",
    bgColor: "#1a0800",
    waveColor: "#cc3300",
    visualBg: "linear-gradient(135deg,#ff4500,#cc2200)",
  },
  {
    id: 2,
    name: "HYPERPAY",
    category: "FINANCE",
    badge: "HOT",
    desc: "INTEGRATED DIGITAL PAYMENTS FOR INDONESIAN SMES ON HYPERCHAIN",
    color: "#00ff88",
    bgColor: "#001a0d",
    waveColor: "#009944",
    visualBg: "linear-gradient(135deg,#00cc66,#006633)",
  },
  {
    id: 3,
    name: "HYPERLEARN",
    category: "EDUCATION",
    badge: "NEW",
    desc: "ADAPTIVE LEARNING PLATFORM WITH AI CURRICULUM ON HYPERCHAIN",
    color: "#4488ff",
    bgColor: "#000d1a",
    waveColor: "#2255aa",
    visualBg: "linear-gradient(135deg,#3366ff,#1133aa)",
  },
  {
    id: 4,
    name: "HYPERHEALTH",
    category: "HEALTHCARE",
    badge: "SOON",
    desc: "DIGITAL HEALTH ECOSYSTEM CONNECTING PATIENTS AND DOCTORS",
    color: "#ff44aa",
    bgColor: "#1a0011",
    waveColor: "#aa2266",
    visualBg: "linear-gradient(135deg,#cc3388,#881155)",
  },
  {
    id: 5,
    name: "HYPERSTORE",
    category: "E-COMMERCE",
    badge: "HOT",
    desc: "MARKETPLACE WITH INTELLIGENT LOGISTICS INTEGRATION",
    color: "#ffaa00",
    bgColor: "#1a1000",
    waveColor: "#aa6600",
    visualBg: "linear-gradient(135deg,#ffaa00,#cc7700)",
  },
];

const NAV_LINKS = ["PRODUCTS", "ECOSYSTEM", "TEAM", "JOIN"];

function WavyLines({ color }: { color: string }) {
  const horizontalPaths = [
    "M-200,320 C200,120 600,520 900,220 S1400,420 1700,320",
    "M-200,355 C200,155 600,555 900,255 S1400,455 1700,355",
    "M-200,390 C200,190 600,590 900,290 S1400,490 1700,390",
    "M-200,425 C200,225 600,625 900,325 S1400,525 1700,425",
    "M-200,460 C200,260 600,660 900,360 S1400,560 1700,460",
    "M-200,495 C200,295 600,695 900,395 S1400,595 1700,495",
    "M-200,530 C200,330 600,730 900,430 S1400,630 1700,530",
    "M-200,565 C200,365 600,765 900,465 S1400,665 1700,565",
  ];
  const verticalPaths = [
    "M120,-80 C170,220 100,520 140,820",
    "M300,-80 C350,220 280,520 320,820",
    "M480,-80 C530,220 460,520 500,820",
    "M660,-80 C710,220 640,520 680,820",
    "M840,-80 C890,220 820,520 860,820",
    "M1020,-80 C1070,220 1000,520 1040,820",
    "M1200,-80 C1250,220 1180,520 1220,820",
    "M1380,-80 C1430,220 1360,520 1400,820",
  ];
  const allPaths = [...horizontalPaths, ...verticalPaths];
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      {allPaths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth="1.2"
          opacity={Math.max(0.04, 0.32 - i * 0.012)}
        />
      ))}
    </svg>
  );
}

export default function HeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [locked, setLocked] = useState(false);

  const go = useCallback(
    (idx: number) => {
      if (locked) return;
      setLocked(true);
      setActiveIdx(idx);
      setTimeout(() => setLocked(false), 700);
    },
    [locked]
  );

  const prev = useCallback(
    () => go((activeIdx - 1 + APPS.length) % APPS.length),
    [activeIdx, go]
  );
  const next = useCallback(
    () => go((activeIdx + 1) % APPS.length),
    [activeIdx, go]
  );

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const active = APPS[activeIdx];
  const leftApp = APPS[(activeIdx - 1 + APPS.length) % APPS.length];
  const rightApp = APPS[(activeIdx + 1) % APPS.length];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        height: "100svh",
        minHeight: "600px",
        background: "#000",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id + "-bg"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          style={{ position: "absolute", inset: 0 }}
        >
          <div style={{ position: "absolute", inset: 0, background: active.bgColor }} />
          <WavyLines color={active.waveColor} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse 70% 70% at 60% 50%, ${active.color}18, transparent)`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,0.82) 0%, transparent 28%, transparent 72%, rgba(0,0,0,0.82) 100%)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, transparent 30%, transparent 65%, rgba(0,0,0,0.55) 100%)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      <nav
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 40px",
        }}
      >
        <div
          style={{
            border: "2px solid rgba(255,255,255,0.85)",
            padding: "6px 14px",
            borderRadius: "4px",
          }}
        >
          <span
            style={{
              color: "#fff",
              fontWeight: 900,
              fontSize: "1rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            HYPERCHAIN
          </span>
        </div>

        <div style={{ display: "flex", gap: "36px" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.75)")}
            >
              {link}
            </a>
          ))}
        </div>

        <div style={{ width: "140px" }} />
      </nav>

      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: "1%",
          zIndex: 15,
          cursor: "pointer",
          translateY: "-50%",
        }}
        animate={{ scale: 0.7, rotateY: 15, opacity: 0.5 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        onClick={prev}
      >
        <div
          style={{
            width: "clamp(160px, 22vw, 280px)",
            height: "clamp(220px, 55vh, 440px)",
            borderRadius: "16px",
            overflow: "hidden",
            position: "relative",
            background: leftApp.bgColor,
            boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "70%",
                height: "38%",
                borderRadius: "16px",
                opacity: 0.6,
                background: leftApp.visualBg,
                boxShadow: `0 0 40px ${leftApp.color}60`,
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          right: "1%",
          zIndex: 15,
          cursor: "pointer",
          translateY: "-50%",
        }}
        animate={{ scale: 0.7, rotateY: -15, opacity: 0.5 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        onClick={next}
      >
        <div
          style={{
            width: "clamp(160px, 22vw, 280px)",
            height: "clamp(220px, 55vh, 440px)",
            borderRadius: "16px",
            overflow: "hidden",
            position: "relative",
            background: rightApp.bgColor,
            boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "70%",
                height: "38%",
                borderRadius: "16px",
                opacity: 0.6,
                background: rightApp.visualBg,
                boxShadow: `0 0 40px ${rightApp.color}60`,
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
            }}
          />
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id + "-card"}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            zIndex: 20,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "20px",
              width: "clamp(320px, 58vw, 820px)",
              height: "clamp(280px, 60vh, 520px)",
              background: `linear-gradient(135deg, ${active.bgColor} 0%, #050505 100%)`,
              boxShadow: `0 0 100px ${active.color}25, 0 40px 80px rgba(0,0,0,0.9)`,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ position: "relative", width: "52%", height: "52%" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: "-20%",
                    borderRadius: "50%",
                    filter: "blur(48px)",
                    opacity: 0.28,
                    background: active.color,
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: "24px",
                    background: active.visualBg,
                    boxShadow: `inset 0 2px 24px rgba(255,255,255,0.14), 0 0 60px ${active.color}50`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "72%",
                      height: "36%",
                      borderRadius: "16px",
                      background: "linear-gradient(135deg, rgba(255,255,255,0.28), rgba(255,255,255,0.05))",
                      boxShadow: "inset 0 1px 8px rgba(255,255,255,0.22)",
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "75%",
                background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.72) 50%, transparent 100%)",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "clamp(20px, 3vw, 36px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    color: "#fb923c",
                    letterSpacing: "0.06em",
                  }}
                >
                  {String.fromCodePoint(0x1F525)} {active.badge}
                </span>
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "3px 12px",
                    borderRadius: "999px",
                    border: `1px solid ${active.color}55`,
                    color: active.color,
                    background: `${active.color}14`,
                  }}
                >
                  {active.category}
                </span>
              </div>

              <h2
                style={{
                  color: "#fff",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 0.92,
                  letterSpacing: "-0.02em",
                  margin: "0 0 12px 0",
                  fontSize: "clamp(2rem, 5vw, 4.5rem)",
                }}
              >
                {active.name}
              </h2>

              <p
                style={{
                  color: "rgba(156,163,175,1)",
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  lineHeight: 1.6,
                  marginBottom: "24px",
                  maxWidth: "320px",
                }}
              >
                {active.desc}
              </p>

              <button
                onClick={() =>
                  document.querySelector("#bergabung")?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  padding: "12px 32px",
                  background: "#fff",
                  color: "#000",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s, transform 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#e5e7eb";
                  (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#fff";
                  (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
                }}
              >
                LAUNCH
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 30,
          display: "flex",
          gap: "12px",
          pointerEvents: "none",
          marginTop: "clamp(-160px, -18vh, -120px)",
        }}
      >
        <button
          onClick={prev}
          aria-label="Previous app"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "#2563eb",
            boxShadow: "0 0 20px #2563eb55",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontSize: "1.4rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.15s, box-shadow 0.15s",
            pointerEvents: "auto",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.12)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px #2563ebaa";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px #2563eb55";
          }}
        >
          &#8249;
        </button>
        <button
          onClick={next}
          aria-label="Next app"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "#2563eb",
            boxShadow: "0 0 20px #2563eb55",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontSize: "1.4rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.15s, box-shadow 0.15s",
            pointerEvents: "auto",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.12)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px #2563ebaa";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px #2563eb55";
          }}
        >
          &#8250;
        </button>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "32px",
          right: "32px",
          zIndex: 30,
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <button
          onClick={() =>
            document.querySelector("#ekosistem")?.scrollIntoView({ behavior: "smooth" })
          }
          style={{
            color: "#fff",
            fontSize: "0.65rem",
            fontWeight: 800,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            background: "none",
            border: "none",
            cursor: "pointer",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = "#fff")
          }
        >
          SEE ALL APPS &#9658;
        </button>

        <div style={{ display: "flex", gap: "8px" }}>
          {APPS.map((app, i) => (
            <button
              key={app.id}
              onClick={() => go(i)}
              aria-label={`Go to ${app.name}`}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                overflow: "hidden",
                border: `2px solid ${i === activeIdx ? active.color : "rgba(255,255,255,0.15)"}`,
                background: app.bgColor,
                cursor: "pointer",
                padding: 0,
                transition: "border-color 0.3s, transform 0.15s",
                transform: i === activeIdx ? "scale(1.1)" : "scale(1)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: app.visualBg,
                  opacity: 0.85,
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}