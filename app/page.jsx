"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [secondsLeft, setSecondsLeft] = useState(14 * 3600 + 28 * 60 + 42);
  const [soundOn, setSoundOn] = useState(true);
  const [pressed, setPressed] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((value) => (value > 0 ? value - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = String(Math.floor(secondsLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");

  const flash = (key) => {
    setPressed(key);
    setTimeout(() => setPressed(null), 150);
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest -mt-20 pt-28 pb-space-3xl min-h-[942px] flex flex-col justify-between">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[340px] bg-primary-container/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-gutter w-full mb-space-lg">
          <div className="flex flex-wrap items-center justify-between gap-space-md py-space-xs text-on-surface-variant font-label-mono-detail text-label-mono-detail">
            <div className="flex items-center gap-space-sm">
              <span className="w-1.5 h-1.5 bg-primary-container rounded-full animate-ping"></span>
              <span className="text-on-surface uppercase tracking-widest">
                LIVE DROP SEQUENCE // PROTOCOL 004
              </span>
            </div>
            <div className="flex items-center gap-space-lg">
              <span className="hidden sm:inline">ARCHIVE ID: KTX-2025-V4</span>
              <span className="text-primary-container">
                GLOBAL ALLOCATION: 300 PAIRS ONLY
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-gutter w-full grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
          <div className="lg:col-span-6 flex flex-col space-y-space-lg">
            <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 bg-surface-container rounded-DEFAULT shadow-[0_0_24px_-4px_rgba(195,244,0,0.35)]">
              <span
                className="material-symbols-outlined text-[14px] text-primary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                bolt
              </span>
              <span className="font-label-caps text-label-caps uppercase text-primary-container tracking-widest">
                FALL/WINTER EXPERIMENTAL LAB
              </span>
            </div>
            <div className="space-y-space-xs">
              <p className="font-label-mono-detail text-label-mono-detail text-on-surface-variant uppercase tracking-widest">
                KINETIX MONOGRAPH // SERIATION IV
              </p>
              <h1 className="font-display-xl text-display-xl tracking-tighter text-primary uppercase leading-none">
                AURA OF <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-on-surface to-primary-container">
                  KINETICS
                </span>
              </h1>
              <div className="flex items-center gap-space-sm pt-space-xs">
                <span className="font-headline-sm text-headline-sm text-primary-container font-mono">
                  // DROP 004
                </span>
                <span className="h-px w-24 bg-surface-container-high"></span>
                <span className="font-label-mono-detail text-label-mono-detail text-on-surface-variant uppercase">
                  EDITION STRICTE
                </span>
              </div>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Architectural biomechanics fused with high-density Italian
              calfskin and twin-strut carbon chassis. Engineered for
              ultra-velocity propulsion and high-fashion dominance.
            </p>

            <div className="pt-space-md space-y-space-lg">
              <div className="p-space-md bg-surface-container-low rounded-DEFAULT flex items-center justify-between gap-space-md max-w-lg shadow-sm">
                <div className="flex flex-col">
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-wider">
                    ALLOCATION WINDOW OPENS IN
                  </span>
                  <span className="font-label-mono-detail text-label-mono-detail text-primary-container uppercase">
                    TIER 1 VIP WHITELIST ACCESS
                  </span>
                </div>
                <div className="flex items-center gap-space-md font-mono">
                  <div className="text-center">
                    <span className="font-headline-md text-headline-md text-primary font-bold">
                      {hours}
                    </span>
                    <span className="block font-label-mono-detail text-[10px] text-on-surface-variant uppercase">
                      HRS
                    </span>
                  </div>
                  <span className="text-primary-container font-headline-md text-headline-md">
                    :
                  </span>
                  <div className="text-center">
                    <span className="font-headline-md text-headline-md text-primary font-bold">
                      {minutes}
                    </span>
                    <span className="block font-label-mono-detail text-[10px] text-on-surface-variant uppercase">
                      MIN
                    </span>
                  </div>
                  <span className="text-primary-container font-headline-md text-headline-md">
                    :
                  </span>
                  <div className="text-center">
                    <span className="font-headline-md text-headline-md text-primary-container font-bold">
                      {seconds}
                    </span>
                    <span className="block font-label-mono-detail text-[10px] text-on-surface-variant uppercase">
                      SEC
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-space-md">
                <Link
                  href="/shop"
                  className="px-space-xl py-space-md bg-primary-container hover:bg-secondary-fixed text-on-primary-container font-headline-sm text-headline-sm uppercase rounded-DEFAULT transition-all duration-300 shadow-[0_0_32px_rgba(195,244,0,0.35)] hover:shadow-[0_0_48px_rgba(195,244,0,0.6)] active:scale-95 flex items-center gap-space-sm group"
                >
                  <span>Explore Drop</span>
                  <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1">
                    north_east
                  </span>
                </Link>
                <Link
                  href="/product/k01-aerodyne"
                  className="px-space-xl py-space-md bg-surface-container-high hover:bg-surface-bright text-primary font-headline-sm text-headline-sm uppercase rounded-DEFAULT transition-all duration-300 hover:shadow-[0_0_24px_rgba(255,255,255,0.15)] active:scale-95 flex items-center gap-space-sm group"
                >
                  <span>Lookbook 2025</span>
                  <span className="material-symbols-outlined text-[20px] text-on-surface-variant transition-colors group-hover:text-primary">
                    visibility
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex items-center justify-center -mt-6 lg:mt-0">
            <div className="relative w-full aspect-square max-w-[580px] flex items-center justify-center">
              <svg
                className="absolute inset-0 w-full h-full text-surface-container animate-[spin_60s_linear_infinite]"
                fill="none"
                viewBox="0 0 400 400"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="195"
                  stroke="currentColor"
                  strokeDasharray="8 6"
                  strokeWidth="1"
                ></circle>
                <circle
                  cx="200"
                  cy="200"
                  r="140"
                  stroke="currentColor"
                  strokeDasharray="4 8"
                  strokeWidth="0.75"
                ></circle>
                <circle
                  cx="200"
                  cy="200"
                  r="80"
                  stroke="currentColor"
                  strokeWidth="0.5"
                ></circle>
              </svg>

              <div className="absolute -left-4 top-16 z-20 bg-surface-container/90 backdrop-blur-md p-space-sm rounded-DEFAULT shadow-xl hidden sm:flex flex-col gap-0.5">
                <span className="font-label-caps text-label-caps text-primary-container uppercase">
                  CHASSIS WEIGHT
                </span>
                <span className="font-headline-sm text-headline-sm text-primary">
                  312 GRAMS
                </span>
                <span className="font-label-mono-detail text-[10px] text-on-surface-variant">
                  FULL TORSION LOCK
                </span>
              </div>

              <div className="absolute -right-2 bottom-20 z-20 bg-surface-container/90 backdrop-blur-md p-space-sm rounded-DEFAULT shadow-xl hidden sm:flex flex-col gap-0.5">
                <span className="font-label-caps text-label-caps text-primary uppercase">
                  KINETIC ENERGY RETURN
                </span>
                <span className="font-headline-sm text-headline-sm text-primary-container">
                  88.4% RETENTION
                </span>
                <span className="font-label-mono-detail text-[10px] text-on-surface-variant">
                  ISO 9001 TEST PROTOCOL
                </span>
              </div>

              <div className="relative z-10 w-[92%] h-[92%] rounded-xl overflow-hidden bg-surface-container-high shadow-2xl flex items-center justify-center group">
                <img
                  alt="Kinetix Aura 004 Prototype"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuFX-BadSklTN1D3VtKFxYi-_h89-GTe2RrzOWVZ6FI7s44ABtp0Ls8OMsFe8W2kj6iUwALm48IL8_x6q61X0B5IWkyVOsTW7yVbMLDuQr5-SjcAcG04kbNIec0NOxBRBfuKd6eKnpQJ195Smrp0nRrkTWZiHBuA3rRIzvwIGkdVLbeqayFl3kCa8kvN_2LTvd8h3yeyjz9fHxqj4ZZpZ1Tn9LKNZ9OpcpxFd4NVxI"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="font-label-caps text-label-caps uppercase text-primary-container">
                      PROTOTYPE K-04 / BLACK-VOLT
                    </span>
                    <p className="font-headline-md text-headline-md text-primary tracking-tight uppercase">
                      PHANTOM ARCHITECT
                    </p>
                  </div>
                  <span className="font-headline-md text-headline-md text-primary font-bold">
                    $780 USD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-gutter w-full mt-space-2xl pt-space-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md py-space-sm">
            <div className="flex flex-col">
              <span className="font-label-mono-detail text-label-mono-detail text-on-surface-variant uppercase">
                AERODYNAMIC DRAG
              </span>
              <span className="font-headline-md text-headline-md text-primary">
                0.18 Cd
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-mono-detail text-label-mono-detail text-on-surface-variant uppercase">
                OUTSOLE DENSITY
              </span>
              <span className="font-headline-md text-headline-md text-primary">
                54 SHORE A
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-mono-detail text-label-mono-detail text-on-surface-variant uppercase">
                COMPOSITE CORE
              </span>
              <span className="font-headline-md text-headline-md text-primary-container">
                T-700 3K CARBON
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-mono-detail text-label-mono-detail text-on-surface-variant uppercase">
                LIMITED RUN
              </span>
              <span className="font-headline-md text-headline-md text-primary">
                SERIALIZED 1/300
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="w-full py-space-3xl bg-surface relative">
        <div className="max-w-[1440px] mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
            <div>
              <div className="flex items-center gap-space-xs mb-space-xs">
                <span className="font-label-mono-detail text-label-mono-detail text-primary-container font-mono">
                  [SECTION 02]
                </span>
                <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">
                  CATALOGUE DIVISION
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-primary">
                ARCHITECTURAL SILHOUETTES
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Explore specialized platforms categorized by mechanical velocity,
              formal deconstruction, and limited archive releases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-md">
            <Link
              href="/shop"
              className="lg:col-span-7 group relative h-[440px] rounded-xl overflow-hidden bg-surface-container-high transition-all duration-500 hover:shadow-[0_0_30px_rgba(195,244,0,0.2)]"
            >
              <img
                alt="Aero Runner Silhouette"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5cP2zEMccwpAm5YAFB52iLuHczXzdYDNPLeq61mXHQsEANpXBHPo1nUD8QSNzl3p-R6NUdBY_0Q85PoosfQvyyQIrXyelvluRswe9szpNDVj0dUHB3b3g6RI_bgoqZ4bjn_res6LH6RxNn2u_Sl1on69Z8AshaDy46vYmayvMj_J7zxi4xUALDhzj3iNRpyD3Yl-Wk-k_qbQ5CtClIvwV3wKp_-0mUUoGbXStcxA1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="font-label-caps text-label-caps text-primary-container bg-surface-container-lowest/80 px-space-sm py-1 rounded backdrop-blur-md uppercase tracking-wider">
                  SYSTEM 01 // VELOCITY
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="space-y-1">
                  <h3 className="font-headline-md text-headline-md uppercase text-primary tracking-tight">
                    AERO RUNNER
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Kinetic rebound chambers engineered for urban
                    hyper-mobility.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/shop"
              className="lg:col-span-5 group relative h-[440px] rounded-xl overflow-hidden bg-surface-container-high transition-all duration-500 hover:shadow-[0_0_30px_rgba(195,244,0,0.2)]"
            >
              <img
                alt="Cyber Derby Silhouette"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLDP8Au-sF8zbM7ZgNHOvIXflF0Zo_CGiE0Zn9qZJwmAK6_r1Mm-N7sI1ZnIeAqYRGQDWCVPY-ANXBfM6P7BU_Ov2jamXOsMpPmuiTpggPvNeK_Ia3jQH4qzENPjJ-oqe73-bkKa4EKU-m4tFnt3pLgoEyXtxNg0HlNAUumG7rj0LNBWZSqRiaIKUqc4bGLczBm9j-2aY1be9IJXOZj9YpecmAHOXjE02C6ah5TQzV"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="font-label-caps text-label-caps text-on-surface bg-surface-container-lowest/80 px-space-sm py-1 rounded backdrop-blur-md uppercase tracking-wider">
                  SYSTEM 02 // FORMAL HYBRID
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="space-y-1">
                  <h3 className="font-headline-md text-headline-md uppercase text-primary tracking-tight">
                    CYBER DERBY
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Tailored sartorial form meeting brutalist technical
                    traction.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/shop"
              className="lg:col-span-5 group relative h-[400px] rounded-xl overflow-hidden bg-surface-container-high transition-all duration-500 hover:shadow-[0_0_30px_rgba(195,244,0,0.2)]"
            >
              <img
                alt="High Top Trainers Silhouette"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKAgN4heKNeuYEGCeLXDllge48ZjN6A0DfVTc-MtPEttZHA0wDUqHolUzQWOLkgJQKth4Xoffwm9zrwdztC0xm0MyB0uR9w735Gf_ewSh2iY8y7W3NHZOTRj2Oz-RLu6HlWf-Gwmew5Xxc9LZFk2Io8VgLwVLuXVciDSJ2M4toww0XRKQ43MAp1Y8zw5TnlE-daOrZf0e2hJcD5L3MeZHBpe-TvhrFZfxhhRmwhU2G"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="font-label-caps text-label-caps text-on-surface bg-surface-container-lowest/80 px-space-sm py-1 rounded backdrop-blur-md uppercase tracking-wider">
                  SYSTEM 03 // EXOSKELETON
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="space-y-1">
                  <h3 className="font-headline-md text-headline-md uppercase text-primary tracking-tight">
                    HIGH TOP TRAINERS
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Ankle lockdown architecture reinforced by carbon struts.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/shop"
              className="lg:col-span-7 group relative h-[400px] rounded-xl overflow-hidden bg-surface-container-high transition-all duration-500 hover:shadow-[0_0_30px_rgba(195,244,0,0.2)]"
            >
              <img
                alt="Limited Editions Silhouette"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEgCoUabHc-RO9eOBpODQrbIQbZmsMoi-JyspZd5L-9YJqiXf_2025nG81_D_BqR1cm43omxBLL8d4nUZqhEFQlS_Jl0wERg23v1WM3u23GW1CnSA6_XaSwVjiYJztYfFQiFV2An7DCUE6R7VeJb0iLpOmeVVDmQNl5FARGlbH6BiAxlI1XanRpf9aaErgic_PedWrovVWSU55KVUY161DJehmY6t9LqGfHCLh24oJ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="font-label-caps text-label-caps text-on-primary-container bg-primary-container px-space-sm py-1 rounded uppercase tracking-wider font-bold">
                  LIMITED VAULT
                </span>
                <span className="font-label-mono-detail text-[10px] text-primary bg-surface-container-lowest/80 px-2 py-1 rounded backdrop-blur-md">
                  RESTRICTED ALLOCATIONS
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="space-y-1">
                  <h3 className="font-headline-md text-headline-md uppercase text-primary tracking-tight">
                    LIMITED EDITIONS
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Archival concept samples and micro-batch artisan
                    collaborations.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS & DROPS */}
      <section className="w-full py-space-3xl bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-gutter">
          <div className="flex items-center justify-between mb-space-2xl">
            <div>
              <div className="flex items-center gap-space-xs mb-space-xs">
                <span className="w-2 h-2 bg-primary-container rounded-full"></span>
                <span className="font-label-caps text-label-caps text-primary-container tracking-widest uppercase">
                  DISPATCH ROSTER
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-primary">
                FEATURED DROPS
              </h2>
            </div>
            <div className="flex items-center gap-space-sm">
              <button
                aria-label="Previous Slide"
                className={`w-12 h-12 rounded-DEFAULT bg-surface-container hover:bg-surface-container-high text-primary flex items-center justify-center transition-colors ${
                  pressed === "prev" ? "scale-90" : ""
                }`}
                onClick={() => flash("prev")}
              >
                <span className="material-symbols-outlined text-[20px]">
                  west
                </span>
              </button>
              <button
                aria-label="Next Slide"
                className={`w-12 h-12 rounded-DEFAULT bg-surface-container hover:bg-surface-container-high text-primary flex items-center justify-center transition-colors ${
                  pressed === "next" ? "scale-90" : ""
                }`}
                onClick={() => flash("next")}
              >
                <span className="material-symbols-outlined text-[20px]">
                  east
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {/* CARD 1 */}
            <div className="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_24px_-4px_rgba(195,244,0,0.25)]">
              <div className="relative h-80 w-full overflow-hidden bg-surface-container-high flex items-center justify-center">
                <span className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase rounded">
                  DROP 004 SPEC
                </span>
                <span className="absolute top-4 right-4 z-10 font-label-mono-detail text-[11px] text-on-surface-variant bg-surface-container-lowest/80 px-2 py-0.5 rounded backdrop-blur">
                  STOCK: 14 PAIRS
                </span>
                <img
                  alt="Kinetix Phantom-X Volt"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqymhTrNittfDEEn-zSHxfuLvLfBLUq9wH3UA5gTRwSvbRYpM24HyWNKqynkYIxxELHUdjU7iCY-nUbkM_wIqZX0EWae-SunV8ExW9cIJ3A48b0N_QfDC7YaUhx9OZPAClolu15VrwOIyTU-Jt2HudVmynGMZCllYNL9JjH64s-vqe_4voMD392ZXVf3D1VoG9p55s9v3qFH9tnSsIByURUQVdBDa2--8WIDHDQlKK"
                />
                <div className="absolute inset-x-4 bottom-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Link
                    href="/checkout"
                    className="w-full py-space-sm bg-primary-container hover:bg-secondary-fixed text-on-primary-container font-headline-sm text-headline-sm uppercase rounded shadow-lg flex items-center justify-center gap-space-sm"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      keyboard_double_arrow_left
                    </span>
                    <span>Quick Allocate • $480</span>
                  </Link>
                </div>
              </div>
              <div className="p-space-lg flex flex-col flex-1 justify-between space-y-space-md">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-label-mono-detail text-label-mono-detail text-on-surface-variant uppercase">
                      SERIES // 01-RUNNER
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      $480 USD
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md uppercase text-primary tracking-tight">
                    Kinetix Phantom-X Volt
                  </h3>
                </div>
                <div className="space-y-space-sm pt-space-xs">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 bg-surface-container text-on-surface text-[11px] font-label-mono-detail rounded">
                      Italian Calfskin
                    </span>
                    <span className="px-2 py-0.5 bg-surface-container text-primary-container text-[11px] font-label-mono-detail rounded">
                      Carbon-Fiber Plate
                    </span>
                    <span className="px-2 py-0.5 bg-surface-container text-on-surface text-[11px] font-label-mono-detail rounded">
                      Vibram Kinetic Outsole
                    </span>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-on-surface-variant font-label-mono-detail text-[11px]">
                    <span>LAST SIZES: US 9, 10, 10.5, 11</span>
                    <Link
                      className="text-primary hover:text-primary-container transition-colors uppercase font-bold"
                      href="/product/kinetix-phantom-x-volt"
                    >
                      Specs →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_24px_-4px_rgba(195,244,0,0.25)]">
              <div className="relative h-80 w-full overflow-hidden bg-surface-container-high flex items-center justify-center">
                <span className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-surface-container-highest text-primary font-label-caps text-label-caps uppercase rounded">
                  ARCHIVAL ALLOCATION
                </span>
                <span className="absolute top-4 right-4 z-10 font-label-mono-detail text-[11px] text-on-surface-variant bg-surface-container-lowest/80 px-2 py-0.5 rounded backdrop-blur">
                  STOCK: 08 PAIRS
                </span>
                <img
                  alt="Vanguard Carbon Sneaker"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhL_HdCE5mCTmgejQTbZzzIIF6MvkVSlfI8TGRZWWZUlh3xXgZAghWmHt5c6kt6jc-RcljuCkcJ_UHqczyW6SmGZyG6BqPonozqstf7mzEGqFPOX6vf6WpHuxN5pDTNP2zHfx1onoxjFE2Tnio8iCe5RjQACYTd0zAMG81prWwUMknVPmCOvzqYbGRUpnMCC_XV7WV8OYkT9ToB4C5xuAGPzFqj4glkVOcWBGcU7xU"
                />
                <div className="absolute inset-x-4 bottom-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Link
                    href="/checkout"
                    className="w-full py-space-sm bg-primary-container hover:bg-secondary-fixed text-on-primary-container font-headline-sm text-headline-sm uppercase rounded shadow-lg flex items-center justify-center gap-space-sm"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      keyboard_double_arrow_left
                    </span>
                    <span>Quick Allocate • $620</span>
                  </Link>
                </div>
              </div>
              <div className="p-space-lg flex flex-col flex-1 justify-between space-y-space-md">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-label-mono-detail text-label-mono-detail text-on-surface-variant uppercase">
                      SERIES // 02-TRAINER
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      $620 USD
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md uppercase text-primary tracking-tight">
                    Vanguard Carbon
                  </h3>
                </div>
                <div className="space-y-space-sm pt-space-xs">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 bg-surface-container text-on-surface text-[11px] font-label-mono-detail rounded">
                      Hydrophobic Nubuck
                    </span>
                    <span className="px-2 py-0.5 bg-surface-container text-primary-container text-[11px] font-label-mono-detail rounded">
                      Titanium Eyelets
                    </span>
                    <span className="px-2 py-0.5 bg-surface-container text-on-surface text-[11px] font-label-mono-detail rounded">
                      Vibram Megagrip
                    </span>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-on-surface-variant font-label-mono-detail text-[11px]">
                    <span>LAST SIZES: US 8.5, 9.5, 11</span>
                    <Link
                      className="text-primary hover:text-primary-container transition-colors uppercase font-bold"
                      href="/product/vanguard-carbon"
                    >
                      Specs →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_24px_-4px_rgba(195,244,0,0.25)]">
              <div className="relative h-80 w-full overflow-hidden bg-surface-container-high flex items-center justify-center">
                <span className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-surface-container-highest text-primary-container font-label-caps text-label-caps uppercase rounded font-bold">
                  DEADSTOCK RARITY
                </span>
                <span className="absolute top-4 right-4 z-10 font-label-mono-detail text-[11px] text-on-surface-variant bg-surface-container-lowest/80 px-2 py-0.5 rounded backdrop-blur">
                  STOCK: 03 PAIRS
                </span>
                <img
                  alt="Apex Monolith Luxury Footwear"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQlV9-ymHTkiri8dlTNQsf09gZN4iGJRcp09zLprTR-gdLkkw8ayp7PtZywSVjEGPU_YLwxfUYMlMXfNgLrV-Ig2_4ly8A7VXFD1tm7K1keHu28M7osX4LTWBkbs4rZRM50nmSfuV8h8snX8UN3HycWR2r9oKjK6j3XsxbXnI2tVgj9dRZZdRfnvBt9yPtBoXPTcXrCvwW1V3LrcEMFIoqB9wYWyYgYQo_kitVqJ_i"
                />
                <div className="absolute inset-x-4 bottom-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Link
                    href="/checkout"
                    className="w-full py-space-sm bg-primary-container hover:bg-secondary-fixed text-on-primary-container font-headline-sm text-headline-sm uppercase rounded shadow-lg flex items-center justify-center gap-space-sm"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      keyboard_double_arrow_left
                    </span>
                    <span>Quick Allocate • $750</span>
                  </Link>
                </div>
              </div>
              <div className="p-space-lg flex flex-col flex-1 justify-between space-y-space-md">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-label-mono-detail text-label-mono-detail text-on-surface-variant uppercase">
                      SERIES // 03-MONOLITH
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      $750 USD
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md uppercase text-primary tracking-tight">
                    Apex Monolith
                  </h3>
                </div>
                <div className="space-y-space-sm pt-space-xs">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 bg-surface-container text-on-surface text-[11px] font-label-mono-detail rounded">
                      Vachetta Lining
                    </span>
                    <span className="px-2 py-0.5 bg-surface-container text-primary-container text-[11px] font-label-mono-detail rounded">
                      Monolithic EVA Mold
                    </span>
                    <span className="px-2 py-0.5 bg-surface-container text-on-surface text-[11px] font-label-mono-detail rounded">
                      Artisan Finished
                    </span>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-on-surface-variant font-label-mono-detail text-[11px]">
                    <span>LAST SIZES: US 10, 11</span>
                    <Link
                      className="text-primary hover:text-primary-container transition-colors uppercase font-bold"
                      href="/product/apex-monolith"
                    >
                      Specs →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="w-full py-space-3xl bg-surface">
        <div className="max-w-[1440px] mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
            <div>
              <div className="flex items-center gap-space-xs mb-space-xs">
                <span className="material-symbols-outlined text-[16px] text-primary-container">
                  verified
                </span>
                <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">
                  HALL OF ICONS
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-primary">
                TOP RATED ARCHIVES
              </h2>
            </div>
            <div className="flex items-center gap-space-sm">
              <span className="font-label-mono-detail text-label-mono-detail text-on-surface-variant">
                AVERAGE CLIENT VERIFICATION:
              </span>
              <span className="font-headline-sm text-headline-sm text-primary-container font-bold">
                4.98 / 5.0 ★
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Item 1 */}
            <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-md group flex flex-col justify-between">
              <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-surface-container-high">
                <span className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-surface-container-lowest/80 backdrop-blur text-primary-container font-label-mono-detail text-[10px] rounded">
                  EDITION #042/500
                </span>
                <img
                  alt="Stratum Ghost Runner"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0kZ991bUfWGeX3nUGYJNa-Wfn4EdF2oAU5LhJZZmFB0xx23DBI-sttbMuOYxdI2a-UybvXZJq4Sj5YA7WGZU7BLisc8GgsIk26h7evTi4x3kInCLTU3RgwmdMeEC16PfrK0PIk3l17IaXeZz0NnLMm-hdVhpjraufRMaeNC7G5N67X2hTdxG03kvUMUqQaDKNZDDLq_-ZtQyQrnv0LTSp78biLzSUxwzdECwkuS4U"
                />
              </div>
              <div className="space-y-space-xs">
                <div className="flex items-center justify-between text-label-mono-detail">
                  <span className="font-label-mono-detail text-primary-container">
                    5.0 ★★★★★ (48)
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">
                    $510
                  </span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary uppercase">
                  Stratum Ghost
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Ultra-light triple-density knit composite with anatomical
                  support.
                </p>
              </div>
              <button className="w-full py-space-xs bg-surface-container hover:bg-primary-container hover:text-on-primary-container text-primary font-label-caps text-label-caps uppercase rounded transition-colors">
                Inspect Prototype
              </button>
            </div>

            {/* Item 2 */}
            <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-md group flex flex-col justify-between">
              <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-surface-container-high">
                <span className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-surface-container-lowest/80 backdrop-blur text-primary-container font-label-mono-detail text-[10px] rounded">
                  EDITION #189/300
                </span>
                <img
                  alt="Kyoto Cyber High"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8b0rkRJukQ8PyV9aClIzIpdq2o67CyGZgAnW9PqYwVx5nePhfWKfftQmkRLVS9b_s9s9kADo30KmT001xvsGgSs586Hn8MmXcABHWeyM55VbtVhM9UN1msYI9vBsH2d-SicJFjEjrqOSQ5aFwuq7HzJShchcY15_f-dzSRuDR-iBHUNMpGteUqAavpkLeoverWfS-WtUdt008VbVSq8xl-X3mbg3oCl6v8EfIEeBV"
                />
              </div>
              <div className="space-y-space-xs">
                <div className="flex items-center justify-between text-label-mono-detail">
                  <span className="font-label-mono-detail text-primary-container">
                    4.9 ★★★★★ (62)
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">
                    $640
                  </span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary uppercase">
                  Kyoto Cyber High
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Japanese ballistic nylon chassis with magnetic Fidlock
                  fastener.
                </p>
              </div>
              <button className="w-full py-space-xs bg-surface-container hover:bg-primary-container hover:text-on-primary-container text-primary font-label-caps text-label-caps uppercase rounded transition-colors">
                Inspect Prototype
              </button>
            </div>

            {/* Item 3 */}
            <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-md group flex flex-col justify-between">
              <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-surface-container-high">
                <span className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-surface-container-lowest/80 backdrop-blur text-primary-container font-label-mono-detail text-[10px] rounded">
                  EDITION #088/250
                </span>
                <img
                  alt="Vortex Zero"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8YBQWEspC_lacXqzOvpPEZ3qzNY8heTrRkHjovxAO6_hagFEPqBoG01bEtpp6OPcDhiu-w4a85AN-v9wKJYeGni36WN0PZOX7F_zm-FjnHCQoavVHfxxgx-k08lew1t1lHbs-T3nIxnwWO760vlviJkCwr-2iESiNeXw2G-rCafU40-JBgUUy0Ly1ntiBUYawGZgTbhJ6QgrwfZaa33rjyzLWGKbKCaTue0YLB4FC"
                />
              </div>
              <div className="space-y-space-xs">
                <div className="flex items-center justify-between text-label-mono-detail">
                  <span className="font-label-mono-detail text-primary-container">
                    5.0 ★★★★★ (34)
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">
                    $590
                  </span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary uppercase">
                  Vortex Zero
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Seamless thermo-molded leather upper with internal kinetic
                  cage.
                </p>
              </div>
              <button className="w-full py-space-xs bg-surface-container hover:bg-primary-container hover:text-on-primary-container text-primary font-label-caps text-label-caps uppercase rounded transition-colors">
                Inspect Prototype
              </button>
            </div>

            {/* Item 4 */}
            <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-md group flex flex-col justify-between">
              <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-surface-container-high">
                <span className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-surface-container-lowest/80 backdrop-blur text-primary-container font-label-mono-detail text-[10px] rounded">
                  EDITION #304/400
                </span>
                <img
                  alt="Pulse Monogram"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvCPD8kXz0sLlEvH3kUja2A0UGd0pdgUwCfg_UdWNCfZZL2xVFPLdt4YKiYU8p3ShRE18DYT4Xu_HEC8ocWcCd5AZnqvY_RT9Khp_SupsjcEQytcK_VcH65XFqnph8zW7N7dDCByAN_DrZ28T9Ind3Df_MaW0XdkrbaIGu-4LsGR_3D1zpv5LtUU1ZCB4x0dzffg8yfByFs67gLfqZ3E0gBmoxzZ4_T77TPlDUN5qE"
                />
              </div>
              <div className="space-y-space-xs">
                <div className="flex items-center justify-between text-label-mono-detail">
                  <span className="font-label-mono-detail text-primary-container">
                    4.9 ★★★★★ (71)
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">
                    $495
                  </span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary uppercase">
                  Pulse Monogram
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Dynamic tension lacing system with laser-engraved serial
                  collar.
                </p>
              </div>
              <button className="w-full py-space-xs bg-surface-container hover:bg-primary-container hover:text-on-primary-container text-primary font-label-caps text-label-caps uppercase rounded transition-colors">
                Inspect Prototype
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND ETHOS */}
      <section className="w-full py-space-3xl bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-container/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-gutter relative z-10">
          <div className="p-space-xl md:p-space-3xl bg-surface-container-low rounded-2xl relative overflow-hidden shadow-2xl">
            <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none font-display-xl text-[240px] font-black uppercase text-primary select-none leading-none">
              KTX
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
              <div className="lg:col-span-8 space-y-space-lg">
                <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container rounded-DEFAULT">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest">
                    PHILOSOPHY MANIFESTO
                  </span>
                </div>
                <h2 className="font-display-xl-mobile md:font-headline-lg text-display-xl-mobile md:text-headline-lg uppercase text-primary tracking-tighter leading-none">
                  REENGINEERED LUXURY. <br />
                  <span className="text-primary-container">
                    ZERO COMPROMISE.
                  </span>
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  We reject conventional fashion cycles. Every Kinetix
                  silhouette is calculated on aerodynamic benches, handcrafted
                  by third-generation Tuscan artisans, and bound by
                  cryptographic serial numbers. Performance is not a stylistic
                  motif — it is our structural truth.
                </p>
                <div className="pt-space-md flex flex-wrap items-center gap-space-md">
                  <button
                    className="flex items-center gap-space-sm px-space-md py-space-sm bg-surface-container hover:bg-surface-bright rounded-DEFAULT transition-all group"
                    onClick={() => setSoundOn((value) => !value)}
                  >
                    <span
                      className={`material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform ${
                        soundOn
                          ? "text-primary-container"
                          : "text-on-surface-variant"
                      }`}
                    >
                      {soundOn ? "volume_up" : "volume_off"}
                    </span>
                    <span className="font-label-mono-detail text-label-mono-detail text-primary uppercase">
                      KINETIC ACOUSTICS: {soundOn ? "ON" : "MUTED"}
                    </span>
                  </button>
                  <button className="flex items-center gap-space-sm px-space-md py-space-sm bg-surface-container hover:bg-surface-bright rounded-DEFAULT transition-all group">
                    <span className="material-symbols-outlined text-[18px] text-primary-container group-hover:rotate-45 transition-transform">
                      view_in_ar
                    </span>
                    <span className="font-label-mono-detail text-label-mono-detail text-primary uppercase">
                      3D CAD INSPECTION
                    </span>
                  </button>
                  <button className="flex items-center gap-space-sm px-space-md py-space-sm bg-surface-container hover:bg-surface-bright rounded-DEFAULT transition-all group">
                    <span className="material-symbols-outlined text-[18px] text-primary-container">
                      fingerprint
                    </span>
                    <span className="font-label-mono-detail text-label-mono-detail text-primary uppercase">
                      NFC PROVENANCE CHIP
                    </span>
                  </button>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-space-lg bg-surface-container rounded-xl shadow-inner text-center space-y-space-md">
                <div className="w-20 h-20 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-[40px]">
                    architecture
                  </span>
                </div>
                <div>
                  <span className="font-label-caps text-label-caps uppercase text-primary-container">
                    ISO LAB PERFORMANCE
                  </span>
                  <h4 className="font-headline-md text-headline-md text-primary uppercase mt-1">
                    3.2M KINETIC CYCLES
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mt-1">
                    Zero structural delamination observed across 1,000
                    continuous hours of high-impact testing.
                  </p>
                </div>
                <Link
                  className="font-label-caps text-label-caps text-primary hover:text-primary-container transition-colors uppercase underline tracking-widest pt-space-xs"
                  href="/product/velocity-mach3"
                >
                  View Lab Whitepaper
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
