import { useEffect, useState } from "react";

import Particles from "./particles.jsx";

export default function BackgroundParticles() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(localStorage.getItem("theme") || "dark");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const currentParticleColors =
    theme === "dark"
      ? ["#ffffff", "#60a5fa", "#a78bfa"]
      : ["#4f46e5", "#3b82f6", "#6366f1"];

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <Particles
        key={theme}
        theme={theme}
        particleColors={currentParticleColors}
        particleCount={120}
        particleBaseSize={120}
      />
    </div>
  );
}
