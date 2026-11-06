"use client";

import { useEffect, useRef, useState } from "react";

export default function Product360Viewer({ product, onClose, filter = "none", image }) {
  const [angle, setAngle] = useState(-18);
  const [autoSpin, setAutoSpin] = useState(true);
  const drag = useRef({ active: false, startX: 0, startAngle: 0 });

  useEffect(() => {
    if (!autoSpin) return;
    const timer = setInterval(() => {
      setAngle((value) => (value + 1.5) % 360);
    }, 40);
    return () => clearInterval(timer);
  }, [autoSpin]);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handlePointerDown = (event) => {
    drag.current = { active: true, startX: event.clientX, startAngle: angle };
    setAutoSpin(false);
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!drag.current.active) return;
    const delta = event.clientX - drag.current.startX;
    setAngle((drag.current.startAngle + delta * 0.8 + 360) % 360);
  };

  const handlePointerUp = () => {
    drag.current.active = false;
  };

  return (
    <div
      className="fixed inset-0 z-[60] bg-surface-container-lowest/85 backdrop-blur-md flex items-center justify-center p-gutter"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${product.title} 360 degree view`}
    >
      <div
        className="bg-surface-container-low rounded-lg max-w-2xl w-full p-space-lg shadow-2xl relative overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-space-md">
          <div>
            <span className="font-label-caps text-label-caps uppercase text-primary-container tracking-widest">
              360° Inspection Chamber
            </span>
            <h3 className="font-headline-md text-headline-md text-primary uppercase tracking-tight mt-0.5">
              {product.title}
            </h3>
            <p className="font-label-mono-detail text-label-mono-detail text-on-surface-variant">
              {product.serial}
            </p>
          </div>
          <button
            aria-label="Close 360 view"
            className="text-on-surface-variant hover:text-primary transition-colors"
            onClick={onClose}
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        <div
          className="relative mt-space-md h-[360px] rounded bg-radial from-surface-container via-surface-container-low to-surface-container-lowest flex items-center justify-center overflow-hidden select-none cursor-grab active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{ touchAction: "none", perspective: "1200px" }}
        >
          <div className="absolute -right-16 -top-16 w-72 h-72 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
          <img
            alt={product.alt}
            className="w-[85%] h-[85%] object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] pointer-events-none"
            draggable={false}
            src={image || product.img}
            style={{ transform: `rotateY(${angle}deg)`, filter }}
          />
          <div className="absolute bottom-space-sm left-space-md right-space-md flex items-center justify-between font-label-mono-detail text-[10px] text-on-surface-variant pointer-events-none">
            <span className="bg-surface-container-lowest/70 backdrop-blur px-2 py-1 rounded">
              DRAG TO ROTATE
            </span>
            <span className="bg-surface-container-lowest/70 backdrop-blur px-2 py-1 rounded text-primary-container">
              {Math.round(angle)}°
            </span>
          </div>
        </div>

        <div className="mt-space-md flex flex-col sm:flex-row items-center gap-space-md">
          <input
            aria-label="Rotation angle"
            className="w-full accent-primary-container cursor-pointer"
            max="360"
            min="0"
            onChange={(event) => {
              setAutoSpin(false);
              setAngle(Number(event.target.value));
            }}
            type="range"
            value={Math.round(angle)}
          />
          <div className="flex items-center gap-space-sm shrink-0">
            <button
              className={`px-space-md py-space-xs rounded font-label-caps text-label-caps uppercase tracking-wider transition-colors ${
                autoSpin
                  ? "bg-primary-container text-on-primary-container"
                  : "bg-surface-container hover:bg-surface-container-high text-primary"
              }`}
              onClick={() => setAutoSpin((value) => !value)}
              type="button"
            >
              {autoSpin ? "Pause Spin" : "Auto Spin"}
            </button>
            <button
              className="px-space-md py-space-xs rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-caps text-label-caps uppercase tracking-wider transition-colors"
              onClick={() => setAngle(-18)}
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
