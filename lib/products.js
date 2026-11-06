export const SIZES = [
  { eu: "40", count: 8 },
  { eu: "41", count: 5 },
  { eu: "42", count: 12 },
  { eu: "43", count: 3 },
  { eu: "44", count: 2 },
  { eu: "45", count: 6 },
  { eu: "46", count: 0 },
  { eu: "47", count: 4 },
];

export const CONVERSION = {
  EU: { 40: "40", 41: "41", 42: "42", 43: "43", 44: "44", 45: "45", 46: "46", 47: "47" },
  US: { 40: "7.5", 41: "8.0", 42: "8.5", 43: "9.5", 44: "10.0", 45: "11.0", 46: "11.5", 47: "12.5" },
  UK: { 40: "6.5", 41: "7.0", 42: "7.5", 43: "8.5", 44: "9.0", 45: "10.0", 46: "10.5", 47: "11.5" },
};

const BASE_PRODUCTS = [
  {
    id: "k01-aerodyne",
    title: "K-01 Aerodyne Low",
    serial: "SERIAL // KX-01-AERO",
    price: 890,
    category: "low-top",
    allocation: "in-stock",
    badge: "LIMITED DROP",
    badgeClass:
      "bg-primary-container text-on-primary-container font-bold tracking-wider",
    action: "Quick Add",
    schemes: "3 Schemes",
    subtitle: "Aerodynamic Low-Top Silhouette // Archive 01",
    description:
      "A featherweight low-top engineered with a ventilated monofilament shell and a kinetic carbon stabilizer. Built for city velocity without sacrificing atelier finish.",
    materialSpecs: [
      "UPPER: MONOFILAMENT TECH-MESH",
      "FRAME: AERO CARBON STABILIZER",
      "LINING: ANTI-MICROBIAL KNIT",
      "TOTAL MASS: 298G (SIZE 43)",
    ],
    colors: [
      { className: "bg-black ring-1 ring-primary-container" },
      { className: "bg-primary-container" },
      { className: "bg-[#353437]" },
    ],
    colorOptions: [
      {
        name: "OBSIDIAN / VOLT",
        label: "VOLT",
        image: "/products/k01-aerodyne-volt.jpg",
        swatch:
          "bg-gradient-to-tr from-surface-container-lowest via-surface-container-lowest to-primary-container",
      },
      {
        name: "CHALK WHITE",
        label: "CHALK",
        image: "/products/k01-aerodyne-chalk.jpg",
        swatch: "bg-[#f1ede2]",
      },
      {
        name: "TITANIUM BLACK",
        label: "TITANIUM",
        image: "/products/k01-aerodyne-titanium.jpg",
        swatch: "bg-surface-container-highest",
      },
    ],
    alt: "Editorial luxury low-top sneaker model K-01 Aerodyne on pure dark minimal stage.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwiVgJv8a--Y9goCBsFZFXHWvF4tScE081r3N-45RzXq6qGihWB4hOcCuI0-qbghX_lpMVQSNVOR0Ye3UwoeIV-nu1EmLfA2-0-EYDnlfQ_mDScTPIfaI_DFrtG5PyLPaQFkC_HcgcstzZ7-JWEEoaxYfa9ACT7GfkX3C2aUkrmV-zevJfRrPKlYtLUnsYziSEMuUTS4AoyKFtuO8H9eMEx-9pOPBZjhsPxRjhFK04",
  },
  {
    id: "exo-stride-800",
    title: "Exo-Stride 800 High",
    serial: "SERIAL // EXO-800-H",
    price: 1050,
    category: "high-top",
    allocation: "vault",
    badge: "PRE-ORDER // PROTO-B",
    badgeClass: "bg-surface-container-highest text-primary font-bold",
    action: "Pre-Order",
    schemes: "2 Schemes",
    subtitle: "Modular High-Top Chassis // Prototype B",
    description:
      "A modular high-top with magnetic hardware, a waterproof membrane, and a structural exoskeleton cage. Designed for extreme terrain and architectural presence.",
    materialSpecs: [
      "UPPER: HYDROPHOBIC TECH-LEATHER",
      "FRAME: MAGNETIC EXOSKELETON TPU",
      "LINING: WATERPROOF MEMBRANE",
      "TOTAL MASS: 412G (SIZE 43)",
    ],
    colors: [
      { className: "bg-[#131315] ring-1 ring-primary-container" },
      { className: "bg-[#e5e1e4]" },
      { className: "bg-[#353437]" },
    ],
    colorOptions: [
      {
        name: "OBSIDIAN / VOLT",
        label: "VOLT",
        swatch: "bg-surface-container-lowest",
        images: [
          "/images/products/exo-stride-800/volt/volt-01.webp",
          "/images/products/exo-stride-800/volt/volt-02.webp",
          "/images/products/exo-stride-800/volt/volt-03.webp",
          "/images/products/exo-stride-800/volt/volt-04.webp",
        ],
      },
      {
        name: "CHALK WHITE",
        label: "CHALK",
        swatch: "bg-[#e5e1e4]",
        images: [
          "/images/products/exo-stride-800/chalk/chalk-01.webp",
          "/images/products/exo-stride-800/chalk/chalk-02.webp",
          "/images/products/exo-stride-800/chalk/chalk-03.webp",
          "/images/products/exo-stride-800/chalk/chalk-04.webp",
        ],
      },
      {
        name: "TITANIUM BLACK",
        label: "TITANIUM",
        swatch: "bg-surface-container-highest",
        images: [
          "/images/products/exo-stride-800/titanium/titanium-01.webp",
          "/images/products/exo-stride-800/titanium/titanium-02.webp",
          "/images/products/exo-stride-800/titanium/titanium-03.webp",
          "/images/products/exo-stride-800/titanium/titanium-04.webp",
        ],
      },
    ],
    alt: "Editorial luxury high-top sneaker EXO-STRIDE 800 in stealth architectural studio setting.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmBLmJlqRcLrhWzZY0nSbW8nAm0qfGjvbhUhuf7_u-KjzhQeWtOPlLFtk_1Z_2YdFgb7MjgqyhS23wjwCBTuko2dK8gBxtyKcb92GaVD6SwZmL0GooR1fFit74nfSsaqQ11s-E_mBIA-3CS7wJ71wrMVlXuRG-ILPqYdzUGPvS6kLbtwRRhAYssrgvDqlyEhP41bXc_ZSW2s744KJzKDmdHU-lHuNB71plpiwCRITp",
  },
  {
    id: "vortex-slip",
    title: "Vortex Slip-Chassis",
    serial: "SERIAL // VTX-30-SLIP",
    price: 720,
    category: "slip-on",
    allocation: "in-stock",
    badge: "LIMITED DROP",
    badgeClass:
      "bg-primary-container text-on-primary-container font-bold tracking-wider",
    action: "Quick Add",
    schemes: "Mono Edition",
    subtitle: "Laceless Technical Slip-On // Mono Edition",
    description:
      "A laceless slip-on formed from a single technical membrane. The collapsible heel and vortex-channel outsole deliver effortless entry with kinetic recovery.",
    materialSpecs: [
      "UPPER: STRETCH TECHNICAL MEMBRANE",
      "FRAME: VORTEX CHANNEL OUTSOLE",
      "LINING: RECYCLED MICROFIBER",
      "TOTAL MASS: 264G (SIZE 43)",
    ],
    colors: [
      { className: "bg-black ring-1 ring-primary-container" },
      { className: "bg-[#353437]" },
    ],
    colorOptions: [
      { name: "OBSIDIAN / VOLT", label: "VOLT", filter: "none", swatch: "bg-surface-container-lowest" },
      { name: "TITANIUM BLACK", label: "TITANIUM", filter: "grayscale(1) brightness(0.5) contrast(1.2)", swatch: "bg-surface-container-highest" },
    ],
    alt: "Technical luxury laceless slip-on shoe K-VORTEX Stealth.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcPbJOdw1zbIZAQ1u1SnEVrFzj9bmwZZx9LaxTRyoXzvbNv2xxNa5--kxpDWpXfL-zigwL1L5BhEJb3CcILvKXLmFftVBWYPwciv6QBMlOS1InTmWY_EFSCpqJ7yjCJHB8SFRV8LkF-dI0JNc0lquRrq0cP2GZpqA0E9LRntRhBR_jsXcVpQgCopwkiGpEtm7QuAACDEDo3G0QHdv26-NJ-TqwAw-IQNeeDbdzDNxV",
  },
  {
    id: "terra-mach",
    title: "Terra Mach Tactical Boot",
    serial: "SERIAL // TR-SPEC-09",
    price: 1200,
    category: "boot",
    allocation: "archived",
    badge: "COLLECTOR 01/50",
    badgeClass:
      "bg-primary-container text-on-primary-container font-bold tracking-wider",
    action: "Quick Add",
    schemes: "Numbered Spec",
    subtitle: "All-Terrain Field Boot // Numbered Spec",
    description:
      "An avant-garde field boot with a reinforced composite toe, lugged kinetic outsole, and numbered collector plate. Built for brutal terrain and archival display.",
    materialSpecs: [
      "UPPER: BALLISTIC NUBUCK",
      "FRAME: COMPOSITE TOE + SHANK",
      "LINING: THERMAL GRAPHENE",
      "TOTAL MASS: 486G (SIZE 43)",
    ],
    colors: [
      { className: "bg-[#353437] ring-1 ring-primary-container" },
      { className: "bg-black" },
    ],
    colorOptions: [
      { name: "TITANIUM / VOLT", label: "TITANIUM", filter: "grayscale(1) brightness(1.2) contrast(1.1)", swatch: "bg-surface-container-highest" },
      { name: "OBSIDIAN", label: "OBSIDIAN", filter: "grayscale(1) brightness(0.35) contrast(1.25)", swatch: "bg-surface-container-lowest" },
    ],
    alt: "Avant-garde luxury all-terrain field boot TERRA-MACH Boot.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt5PrfdiZ0qB-iZ7F8tALTQrcjHU9b4VxB9CkOBrxBX6_b9EbfK9mMk8J2piUeScpUhiWguhwx-k0ogt2WBCTychOcnT1ROOQxKXAn9Ak8-EuTsMi3pK3tsIamjOTVzMGh5uH7Hr8hUYVtlN1U7hcK7AJUpr5UNNwmDyCSJR2uJP0zO5kUMzZ8X8zw9EuR465J_o9Mz_zkvpUmuMF7b7i3n0QsG0fHPajAeV7EjEC4",
  },
  {
    id: "velocity-mach3",
    title: "Velocity Mach-3 Runner",
    serial: "SERIAL // M3-VEL-04",
    price: 650,
    category: "runner",
    allocation: "in-stock",
    badge: "CONTINUOUS RUN",
    badgeClass: "bg-surface-container-highest text-primary font-bold",
    action: "Quick Add",
    schemes: "Volt Kinetic",
    subtitle: "Performance Marathon Runner // Volt Kinetic",
    description:
      "A supercritical nitrogen-infused marathon runner with an 82% energy return foam and 3K carbon propulsion plate. The fastest silhouette in the archive.",
    materialSpecs: [
      "UPPER: ENGINEERED PERFORMANCE KNIT",
      "FRAME: 3K CARBON PROPULSION PLATE",
      "LINING: ANTI-MICROBIAL GRAPHENE",
      "TOTAL MASS: 232G (SIZE 43)",
    ],
    colors: [
      { className: "bg-primary-container ring-1 ring-white" },
      { className: "bg-black" },
      { className: "bg-[#e5e1e4]" },
    ],
    colorOptions: [
      { name: "VOLT KINETIC", label: "VOLT", filter: "none", swatch: "bg-primary-container" },
      { name: "OBSIDIAN", label: "OBSIDIAN", filter: "grayscale(1) brightness(0.35) contrast(1.25)", swatch: "bg-surface-container-lowest" },
      { name: "CHALK WHITE", label: "CHALK", filter: "grayscale(1) invert(1) brightness(1.05) contrast(1.05)", swatch: "bg-[#e5e1e4]" },
    ],
    alt: "Hyper-engineered futuristic marathon performance runner K-VELOCITY Mach-3.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUCd9fLt0DO3kjQAnrKAVjk0IxbA8g5leuQEfaOxiPb2rri9ClDOdg85OzAluTYHGUTz9NXqAduMDvuw-J1m4-9T7nTJd2122v2uUK5uthnuVtmpkL6ObyFiWRCSPcyu4S0zX-L7M0gusw82Th8jjULp1VS40D4mAJSiqcIuMq6aPl9t4Uou0QvJ-XMO9cPPzib-K3fuj94_0nwzOEfBAZ1rKtzClQlbL0K23WVvbN",
  },
  {
    id: "orbit-subzero",
    title: "Orbit Sub-Zero Low",
    serial: "SERIAL // ORB-08-LOW",
    price: 940,
    category: "low-top",
    allocation: "vault",
    badge: "LIMITED DROP",
    badgeClass:
      "bg-primary-container text-on-primary-container font-bold tracking-wider",
    action: "Quick Add",
    schemes: "Full Titanium",
    subtitle: "Sub-Zero Low-Top // Full Titanium",
    description:
      "A sub-zero low-top clad in full titanium-finished panels with a thermal-reflective lining. Engineered for extreme cold and collector display.",
    materialSpecs: [
      "UPPER: TITANIUM-FINISH COMPOSITE",
      "FRAME: CRYO-FLEX TPU",
      "LINING: THERMAL REFLECTIVE",
      "TOTAL MASS: 322G (SIZE 43)",
    ],
    colors: [
      { className: "bg-[#131315] ring-1 ring-primary-container" },
      { className: "bg-[#353437]" },
    ],
    colorOptions: [
      { name: "FULL TITANIUM", label: "TITANIUM", filter: "grayscale(1) brightness(1.25) contrast(1.1)", swatch: "bg-surface-container-highest" },
      { name: "OBSIDIAN", label: "OBSIDIAN", filter: "grayscale(1) brightness(0.35) contrast(1.25)", swatch: "bg-surface-container-lowest" },
    ],
    alt: "High-end fashion sneaker K-ORBIT Low in stealth obsidian chrome.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO91cSWll1KPsPWaeruW8k4FqNjmjU5hnjHLwWwD3iGwZ6dDbpqkpCmWEJvpmRW6Z3a2YU-d0l0GECpBxrrSQIqO099vZzA_wD0EYVDrGBxdb6uBLwz_dHKqt49QLEF330wYg1pDZ8hQdT3Q7Gp36920jLyWuTOs1s73kgxjy_GdP2w8OCAkHEQE1yPhCzxTZl-Dlu6pIB4Le_OKAQQAmJJfumgJbr8wxf9Dzh3y-F",
  },
];

const ADDITIONAL_PRODUCTS = [
  {
    id: "mach-nova-runner", title: "Mach Nova Runner", serial: "SERIAL // MN-VEL-05", price: 680,
    category: "runner", allocation: "in-stock", baseId: "velocity-mach3",
    img: "https://images.unsplash.com/photo-1786379582231-f4a593cacf2d?auto=format&fit=crop&w=1200&q=85",
    description: "A lightweight road runner with responsive cushioning, breathable engineered mesh, and a stabilizing heel frame.",
    materialSpecs: ["UPPER: ENGINEERED AIRFLOW MESH", "FRAME: ENERGY-RETURN FOAM PLATFORM", "LINING: QUICK-DRY TECH KNIT", "TOTAL MASS: 238G (SIZE 43)"],
  },
  {
    id: "carbon-tempo-runner", title: "Carbon Tempo Runner", serial: "SERIAL // CT-VEL-06", price: 710,
    category: "runner", allocation: "vault", baseId: "velocity-mach3",
    img: "https://images.unsplash.com/photo-1603631540071-832424f35a71?auto=format&fit=crop&w=1200&q=85",
    description: "A fast tempo trainer built around a full-length carbon plate, light cushioning, and a close-fitting race mesh upper.",
    materialSpecs: ["UPPER: MULTI-ZONE RACE MESH", "FRAME: FULL-LENGTH CARBON PLATE", "LINING: SEAMLESS PERFORMANCE KNIT", "TOTAL MASS: 226G (SIZE 43)"],
  },
  {
    id: "kinetix-phantom-x-volt", title: "Kinetix Phantom-X Volt", serial: "SERIAL // 01-PHANTOM-X", price: 480,
    category: "runner", allocation: "in-stock", baseId: "velocity-mach3",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqymhTrNittfDEEn-zSHxfuLvLfBLUq9wH3UA5gTRwSvbRYpM24HyWNKqynkYIxxELHUdjU7iCY-nUbkM_wIqZX0EWae-SunV8ExW9cIJ3A48b0N_QfDC7YaUhx9OZPAClolu15VrwOIyTU-Jt2HudVmynGMZCllYNL9JjH64s-vqe_4voMD392ZXVf3D1VoG9p55s9v3qFH9tnSsIByURUQVdBDa2--8WIDHDQlKK",
    description: "A responsive performance runner combining an Italian calfskin upper, carbon-fiber plate, and high-traction kinetic outsole.",
    materialSpecs: ["UPPER: ITALIAN CALFSKIN", "FRAME: CARBON-FIBER PLATE", "OUTSOLE: VIBRAM KINETIC COMPOUND", "SERIES: 01-RUNNER"],
  },
  {
    id: "titan-edge-high", title: "Titan Edge High", serial: "SERIAL // TE-09-HI", price: 1090,
    category: "basketball", allocation: "vault", baseId: "exo-stride-800",
    img: "https://images.unsplash.com/photo-1559924546-d56d49aa9243?auto=format&fit=crop&w=1200&q=85",
    description: "A court-ready high-top with padded ankle support, a reinforced toe, and a durable multidirectional outsole.",
    materialSpecs: ["UPPER: SUPPORTIVE TECH LEATHER", "FRAME: ANKLE LOCK COLLAR", "LINING: PADDED BREATHABLE MESH", "TOTAL MASS: 426G (SIZE 43)"],
  },
  {
    id: "kinetic-flow-slip", title: "Kinetic Flow Slip", serial: "SERIAL // KF-30-SLIP", price: 740,
    category: "slip-on", allocation: "in-stock", baseId: "vortex-slip",
    img: "https://images.unsplash.com/photo-1615979474401-8a6a344de5bd?auto=format&fit=crop&w=1200&q=85",
    description: "A streamlined slip-on with an adaptive stretch opening, soft leather upper, and flexible everyday outsole.",
    materialSpecs: ["UPPER: SOFT GRAIN LEATHER", "FRAME: FLEX GROOVE OUTSOLE", "LINING: ANTI-ODOR MICROFIBER", "TOTAL MASS: 278G (SIZE 43)"],
  },
  {
    id: "shadow-trek-pro", title: "Shadow Trek Pro", serial: "SERIAL // STP-07-TR", price: 980,
    category: "trail-running", allocation: "vault", baseId: "velocity-mach3",
    img: "https://images.unsplash.com/photo-1739138053507-0f312a938451?auto=format&fit=crop&w=1200&q=85",
    description: "A trail runner with a protective toe guard, grippy lug geometry, and weather-resistant upper for mixed terrain.",
    materialSpecs: ["UPPER: RIPSTOP TRAIL MESH", "FRAME: ROCK-PLATE STABILIZER", "LINING: WATER-RESISTANT MEMBRANE", "TOTAL MASS: 342G (SIZE 43)"],
  },
  {
    id: "apex-monolith", title: "Apex Monolith", serial: "SERIAL // 03-MONOLITH", price: 750,
    category: "lifestyle-sneaker", allocation: "archived", baseId: "orbit-subzero",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQlV9-ymHTkiri8dlTNQsf09gZN4iGJRcp09zLprTR-gdLkkw8ayp7PtZywSVjEGPU_YLwxfUYMlMXfNgLrV-Ig2_4ly8A7VXFD1tm7K1keHu28M7osX4LTWBkbs4rZRM50nmSfuV8h8snX8UN3HycWR2r9oKjK6j3XsxbXnI2tVgj9dRZZdRfnvBt9yPtBoXPTcXrCvwW1V3LrcEMFIoqB9wYWyYgYQo_kitVqJ_i",
    description: "An architectural lifestyle sneaker with a monolithic EVA mold, supple vachetta lining, and artisan-finished upper.",
    materialSpecs: ["LINING: VACHETTA LEATHER", "MIDSOLE: MONOLITHIC EVA MOLD", "FINISH: ARTISAN FINISHED", "SERIES: 03-MONOLITH"],
  },
  {
    id: "vanguard-carbon", title: "Vanguard Carbon", serial: "SERIAL // 02-VANGUARD", price: 620,
    category: "training", allocation: "in-stock", baseId: "exo-stride-800",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhL_HdCE5mCTmgejQTbZzzIIF6MvkVSlfI8TGRZWWZUlh3xXgZAghWmHt5c6kt6jc-RcljuCkcJ_UHqczyW6SmGZyG6BqPonozqstf7mzEGqFPOX6vf6WpHuxN5pDTNP2zHfx1onoxjFE2Tnio8iCe5RjQACYTd0zAMG81prWwUMknVPmCOvzqYbGRUpnMCC_XV7WV8OYkT9ToB4C5xuAGPzFqj4glkVOcWBGcU7xU",
    description: "A resilient training silhouette pairing hydrophobic nubuck with titanium eyelets and a Vibram Megagrip outsole.",
    materialSpecs: ["UPPER: HYDROPHOBIC NUBUCK", "HARDWARE: TITANIUM EYELETS", "OUTSOLE: VIBRAM MEGAGRIP", "SERIES: 02-TRAINER"],
  },
  {
    id: "carbon-ridge-boot", title: "Carbon Ridge Boot", serial: "SERIAL // CRB-12-FLD", price: 1180,
    category: "boot", allocation: "archived", baseId: "terra-mach",
    img: "https://images.unsplash.com/photo-1775400787711-fbe7793fb5d3?auto=format&fit=crop&w=1200&q=85",
    description: "A field boot combining a protective high-cut upper, reinforced toe, and rugged traction lugs for outdoor use.",
    materialSpecs: ["UPPER: WEATHER-SHIELD NUBUCK", "FRAME: CARBON-FLEX SHANK", "LINING: THERMAL PERFORMANCE KNIT", "TOTAL MASS: 468G (SIZE 43)"],
  },
].map((product) => {
  const base = BASE_PRODUCTS.find((item) => item.id === product.baseId);
  return {
    ...base,
    ...product,
    subtitle: `${product.title} // Technical Series`,
    colorOptions: [{ name: product.title.toUpperCase(), label: "CORE", image: product.img, swatch: "bg-primary-container" }],
    alt: `${product.title}, luxury ${product.category.replaceAll("-", " ")} footwear product photography.`,
  };
});
export const PRODUCTS = [...BASE_PRODUCTS, ...ADDITIONAL_PRODUCTS];

function assertUniqueCatalog(products) {
  for (const field of ["id", "title", "serial", "img"]) {
    const values = products.map((product) => product[field]);
    if (values.some((value) => !value) || new Set(values).size !== values.length) {
      throw new Error(`Product catalog must have unique, non-empty ${field} values.`);
    }
  }
}

assertUniqueCatalog(PRODUCTS);

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id === id);
}
