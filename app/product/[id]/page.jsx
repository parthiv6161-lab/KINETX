"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/components/CartProvider";
import Product360Viewer from "@/components/Product360Viewer";
import { CONVERSION, PRODUCTS, SIZES, getProduct } from "@/lib/products";

function Accordion({ id, icon, title, open, onToggle, children }) {
  return (
    <div className="rounded bg-surface-container overflow-hidden">
      <button
        className="w-full p-space-md flex items-center justify-between text-left text-primary font-headline-sm text-[15px] uppercase"
        onClick={() => onToggle(id)}
        type="button"
      >
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-primary-container text-[20px]">
            {icon}
          </span>
          <span>{title}</span>
        </div>
        <span
          className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </button>
      {open && (
        <div className="px-space-md pb-space-md pt-0 font-body-sm text-body-sm text-on-surface-variant space-y-2">
          {children}
        </div>
      )}
    </div>
  );
}

function getColorImages(option, product) {
  const images = option?.images?.filter(Boolean) || [];
  if (images.length) return images;
  return [option?.image || product?.img].filter(Boolean);
}

export default function ProductPage() {
  const params = useParams();
  const { addItem, isWishlisted, toggleWishlist } = useCart();
  const product = getProduct(params.id);
  const initialColorOption = product?.colorOptions?.[0];
  const [viewerOpen, setViewerOpen] = useState(false);
  const [unit, setUnit] = useState("EU");
  const [selectedSize, setSelectedSize] = useState("43");
  const [colorway, setColorway] = useState(initialColorOption?.name || "");
  const [imageIndex, setImageIndex] = useState(0);
  const [mainImageZoomed, setMainImageZoomed] = useState(false);
  const [displayedImage, setDisplayedImage] = useState(
    getColorImages(initialColorOption, product)[0] || "",
  );
  const [imageVisible, setImageVisible] = useState(true);
  const [openAccordions, setOpenAccordions] = useState({
    materials: true,
    sole: true,
    nfc: false,
    shipping: false,
  });
  const [bagState, setBagState] = useState("idle");

  const activeColorOption =
    product?.colorOptions?.find((option) => option.name === colorway) ||
    product?.colorOptions?.[0];
  const colorImages = getColorImages(activeColorOption, product);
  const activeImage = colorImages[imageIndex] || colorImages[0] || "";
  const hasGallery = colorImages.length > 1;

  useEffect(() => {
    const first = product?.colorOptions?.[0];
    setColorway(first?.name || "");
    setImageIndex(0);
    setMainImageZoomed(false);
    setDisplayedImage(getColorImages(first, product)[0] || "");
    setImageVisible(true);
  }, [product?.id]);

  useEffect(() => {
    if (!product) return;
    product.colorOptions.forEach((option) => {
      getColorImages(option, product).forEach((src) => {
        const preload = new Image();
        preload.src = src;
      });
    });
  }, [product]);

  useEffect(() => {
    if (!activeImage) return;
    if (activeImage === displayedImage) {
      setImageVisible(true);
      return;
    }

    let cancelled = false;
    let started = false;
    let timer;
    const nextImage = new Image();

    const swap = () => {
      if (cancelled || started) return;
      started = true;
      setImageVisible(false);
      timer = setTimeout(() => {
        if (cancelled) return;
        setDisplayedImage(activeImage);
        requestAnimationFrame(() => {
          if (!cancelled) setImageVisible(true);
        });
      }, 140);
    };

    nextImage.onload = swap;
    nextImage.onerror = swap;
    nextImage.src = activeImage;
    if (nextImage.complete) swap();

    return () => {
      cancelled = true;
      clearTimeout(timer);
      nextImage.onload = null;
      nextImage.onerror = null;
    };
  }, [activeImage, displayedImage]);

  if (!product) {
    return (
      <div className="max-w-[1440px] mx-auto px-gutter py-space-3xl text-center">
        <span className="material-symbols-outlined text-[48px] text-on-surface-variant">
          inventory_2
        </span>
        <h1 className="font-headline-lg text-headline-lg text-primary uppercase mt-space-md">
          Specimen Not Found
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
          This silhouette is not registered in the archive.
        </p>
        <Link
          className="inline-block mt-space-lg bg-primary-container text-on-primary-container px-space-xl py-space-sm font-headline-sm text-[13px] uppercase rounded"
          href="/shop"
        >
          Return to Archive
        </Link>
      </div>
    );
  }

  const selectedSizeData = SIZES.find((size) => size.eu === selectedSize);
  const stockCount = selectedSizeData ? selectedSizeData.count : 0;
  const displaySize = CONVERSION[unit][selectedSize] || selectedSize;
  const monthly = (product.price / 4).toFixed(0);
  const related = PRODUCTS.filter((item) => item.id !== product.id).slice(0, 3);
  const wished = isWishlisted(product.id);
  const hasColorImages =
    Boolean(activeColorOption?.image) ||
    Boolean(activeColorOption?.images?.length);
  const colorFilter =
    !hasColorImages &&
    activeColorOption?.filter &&
    activeColorOption.filter !== "none"
      ? `${activeColorOption.filter} `
      : "";
  const imageFilter = `${colorFilter}drop-shadow(0 25px 35px rgba(0,0,0,0.85))`;
  const galleryViewLabels = [
    "LATERAL SIDE",
    "FRONT THREE-QUARTER",
    "REAR / HEEL",
    "TOP VIEW",
  ];
  const currentViewLabel = hasGallery
    ? galleryViewLabels[imageIndex] || `VIEW ${imageIndex + 1}`
    : "LATERAL ARCHITECTURE";

  const selectColorway = (name) => {
    setColorway(name);
    setImageIndex(0);
    setMainImageZoomed(false);
  };

  const selectGalleryImage = (index) => {
    setImageIndex(index);
    setMainImageZoomed(false);
  };

  const toggleAccordion = (key) => {
    setOpenAccordions((current) => ({ ...current, [key]: !current[key] }));
  };

  const addToBag = () => {
    if (bagState !== "idle") return;
    setBagState("allocating");
    addItem(product, selectedSize);
    setTimeout(() => {
      setBagState("added");
      setTimeout(() => setBagState("idle"), 2200);
    }, 500);
  };

  const bagButtonClass =
    bagState === "allocating"
      ? "bg-white text-black"
      : bagState === "added"
        ? "bg-secondary-container text-on-secondary-container"
        : "bg-primary-container text-on-primary-container hover:bg-secondary-fixed";

  return (
    <div className="flex flex-col w-full">
      <div className="w-full bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto px-gutter py-space-sm flex items-center justify-between font-label-mono-detail text-label-mono-detail text-on-surface-variant">
          <div className="flex items-center gap-space-sm">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
            <span className="text-primary font-bold uppercase tracking-wider">
              ALLOCATION WINDOW ACTIVE
            </span>
            <span className="text-on-surface-variant/40">/</span>
            <span>SECURITY PROTOCOL: SHA-256 ENCRYPTED</span>
          </div>
          <div className="hidden lg:flex items-center gap-space-md">
            <span>EDITION: {product.serial}</span>
            <span className="text-on-surface-variant/40">|</span>
            <span className="text-primary-container font-medium">
              CONCIERGE HOTLINE LIVE
            </span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-gutter py-space-md">
        <nav className="flex items-center gap-space-xs font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
          <Link className="hover:text-primary transition-colors" href="/shop">
            Shop
          </Link>
          <span>/</span>
          <Link className="hover:text-primary transition-colors" href="/shop">
            Footwear Architecture
          </Link>
          <span>/</span>
          <span className="capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-primary-container">{product.title}</span>
        </nav>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-gutter pb-space-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="relative bg-surface-container-low rounded-lg overflow-hidden group shadow-xl">
              <div className="absolute top-space-md left-space-md z-10 flex flex-col gap-space-xs">
                <span className="bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase px-space-sm py-1 rounded shadow-md tracking-wider">
                  {product.badge}
                </span>
                <span className="bg-surface-container-highest/80 backdrop-blur-md text-primary font-label-mono-detail text-label-mono-detail px-space-sm py-0.5 rounded uppercase">
                  {product.serial}
                </span>
              </div>
              <button
                className="absolute top-space-md right-space-md z-10 flex items-center gap-space-xs bg-surface-container-lowest/80 backdrop-blur-md px-space-sm py-1 rounded text-on-surface-variant hover:text-primary transition-colors font-label-mono-detail text-label-mono-detail"
                onClick={() => setViewerOpen(true)}
                type="button"
              >
                <span className="material-symbols-outlined text-[16px] text-primary-container">
                  zoom_in
                </span>
                <span>INSPECT 360° MICRO-TEXTURE</span>
              </button>
              <div className="w-full h-[520px] md:h-[620px] flex items-center justify-center p-space-lg relative bg-radial from-surface-container via-surface-container-low to-surface-container-lowest overflow-hidden">
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
                <button
                  aria-label={
                    hasGallery
                      ? `Zoom ${product.title} ${colorway} ${currentViewLabel}`
                      : `${product.title} ${colorway}`
                  }
                  className="w-full h-full flex items-center justify-center bg-transparent"
                  onClick={() => {
                    if (hasGallery) {
                      setMainImageZoomed((value) => !value);
                    }
                  }}
                  type="button"
                >
                  <img
                    alt={`${product.alt} — ${colorway}${
                      hasGallery ? ` — ${currentViewLabel}` : ""
                    }`}
                    className={`w-full h-full object-contain transition-all duration-500 transform ${
                      mainImageZoomed
                        ? "scale-110 cursor-zoom-out"
                        : `group-hover:scale-105 ${
                            hasGallery ? "cursor-zoom-in" : ""
                          }`
                    }`}
                    src={displayedImage || product.img}
                    style={{
                      filter: imageFilter,
                      opacity: imageVisible ? 1 : 0,
                      transition: "filter 300ms ease, opacity 300ms ease",
                    }}
                  />
                </button>
                <div className="absolute bottom-space-md left-space-md right-space-md flex items-center justify-between text-on-surface-variant font-label-mono-detail text-label-mono-detail pointer-events-none">
                  <span className="bg-surface-container-lowest/70 backdrop-blur-md px-space-sm py-1 rounded">
                    FRAME SPEC: 48mm DYNAMIC LENS
                  </span>
                  <span className="bg-surface-container-lowest/70 backdrop-blur-md px-space-sm py-1 rounded text-primary-container">
                    ANGLE 0{hasGallery ? imageIndex + 1 : 1} //{" "}
                    {currentViewLabel}
                  </span>
                </div>
              </div>
              {hasGallery && (
                <div className="border-t border-outline-variant/30 bg-surface-container-lowest/50 px-space-md py-space-sm">
                  <div className="flex items-center justify-between gap-space-sm pb-space-sm">
                    <span className="font-label-mono-detail text-label-mono-detail text-on-surface-variant uppercase">
                      GALLERY //{" "}
                      <span className="text-primary-container">{colorway}</span>
                    </span>
                    <span className="font-label-mono-detail text-label-mono-detail text-on-surface-variant">
                      0{imageIndex + 1} / 0{colorImages.length}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-space-sm">
                    {colorImages.map((src, index) => {
                      const isActive = index === imageIndex;
                      return (
                        <button
                          key={src}
                          aria-label={`View ${index + 1}: ${
                            galleryViewLabels[index] || "Product view"
                          }`}
                          aria-pressed={isActive}
                          className={`group/thumb relative aspect-[16/9] overflow-hidden rounded bg-surface-container-lowest transition-all duration-300 ${
                            isActive
                              ? "ring-2 ring-primary-container opacity-100"
                              : "ring-1 ring-outline-variant/40 opacity-60 hover:opacity-100"
                          }`}
                          onClick={() => selectGalleryImage(index)}
                          type="button"
                        >
                          <img
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                            src={src}
                          />
                          <span
                            className={`absolute bottom-1 left-1 rounded px-1.5 py-0.5 font-label-mono-detail text-[10px] uppercase ${
                              isActive
                                ? "bg-primary-container text-on-primary-container"
                                : "bg-surface-container-lowest/80 text-on-surface-variant"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-surface-container-low rounded-lg p-space-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md shadow-md">
              <div className="flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shadow-inner">
                  <span className="material-symbols-outlined text-[28px]">
                    token
                  </span>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-primary uppercase">
                    CRYPTO-PHYSICAL AUTHENTICITY
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    Embedded NFC microchip in tongue for digital ownership
                    &amp; origin lineage.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-space-lg lg:sticky lg:top-24">
            <div className="bg-surface-container-low rounded-lg p-space-xl flex flex-col gap-space-md shadow-xl">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 bg-surface-container-highest px-2.5 py-1 rounded text-primary-container font-label-mono-detail text-label-mono-detail uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                  EDITION // {product.badge}
                </span>
                <div className="flex items-center gap-space-sm">
                  <span className="font-label-mono-detail text-label-mono-detail text-on-surface-variant uppercase">
                    {product.serial}
                  </span>
                  <button
                    aria-label={
                      wished ? "Remove from wishlist" : "Add to wishlist"
                    }
                    aria-pressed={wished}
                    className={`flex items-center justify-center w-8 h-8 rounded transition-colors ${
                      wished
                        ? "bg-primary-container/15 text-primary-container"
                        : "bg-surface-container text-on-surface-variant hover:text-primary"
                    }`}
                    onClick={() => toggleWishlist(product.id)}
                    title={
                      wished ? "Remove from wishlist" : "Save to wishlist"
                    }
                    type="button"
                  >
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={
                        wished
                          ? { fontVariationSettings: "'FILL' 1" }
                          : undefined
                      }
                    >
                      favorite
                    </span>
                  </button>
                </div>
              </div>
              <div>
                <h1 className="font-display-xl-mobile lg:font-headline-lg lg:text-headline-lg text-primary uppercase tracking-tight leading-none">
                  {product.title}
                </h1>
                <p className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-widest mt-1">
                  {product.subtitle}
                </p>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {product.description}
              </p>
              <div className="flex flex-col gap-space-xs py-space-xs">
                <div className="flex items-baseline gap-space-sm">
                  <span className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
                    ${product.price.toLocaleString()}
                  </span>
                  <span className="font-label-mono-detail text-label-mono-detail text-on-surface-variant uppercase">
                    USD (TAX INCLUDED)
                  </span>
                </div>
                <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant bg-surface-container px-space-sm py-1.5 rounded">
                  <span className="material-symbols-outlined text-primary-container text-[18px]">
                    payments
                  </span>
                  <span>
                    or 4 interest-free installments of{" "}
                    <strong className="text-primary font-semibold">
                      ${monthly} USD
                    </strong>{" "}
                    with
                  </span>
                  <span className="bg-surface-container-highest text-primary font-bold px-1.5 py-0.5 rounded text-[11px] tracking-wide uppercase">
                    Klarna.
                  </span>
                </div>
              </div>

              <div className="space-y-space-sm pt-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">
                    COLORWAY ARCHIVE:{" "}
                    <span className="text-primary font-bold">{colorway}</span>
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-space-sm">
                  {product.colorOptions.map((option) => {
                    const isActive = colorway === option.name;
                    return (
                      <button
                        key={option.name}
                        aria-pressed={isActive}
                        className={`flex items-center gap-space-xs px-space-sm py-2 rounded font-label-mono-detail text-label-mono-detail transition-all ${
                          isActive
                            ? "bg-surface-container-highest text-primary shadow-md ring-2 ring-primary-container"
                            : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
                        }`}
                        onClick={() => setColorway(option.name)}
                        type="button"
                      >
                        <span
                          className={`w-4 h-4 rounded-full flex-shrink-0 ${option.swatch}`}
                        ></span>
                        <span className={isActive ? "font-bold" : ""}>
                          {option.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-space-sm pt-space-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">
                      SELECT SIZE
                    </span>
                    <div className="flex items-center bg-surface-container p-0.5 rounded text-[11px] font-label-mono-detail">
                      {["EU", "US", "UK"].map((unitOption) => (
                        <button
                          key={unitOption}
                          className={`px-2 py-0.5 rounded ${
                            unit === unitOption
                              ? "bg-surface-container-highest text-primary font-bold"
                              : "text-on-surface-variant hover:text-primary"
                          }`}
                          onClick={() => setUnit(unitOption)}
                          type="button"
                        >
                          {unitOption}
                        </button>
                      ))}
                    </div>
                  </div>
                  <span className="font-label-mono-detail text-[10px] text-on-surface-variant uppercase">
                    REAL-TIME TELEMETRY
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {SIZES.map((size) => {
                    const soldOut = size.count === 0;
                    const isActive = selectedSize === size.eu;
                    if (soldOut) {
                      return (
                        <button
                          key={size.eu}
                          className="size-tile opacity-40 cursor-not-allowed flex flex-col items-center justify-center p-2 rounded bg-surface-container-lowest text-on-surface-variant relative overflow-hidden"
                          disabled
                          type="button"
                        >
                          <span className="size-val font-headline-sm text-headline-sm line-through">
                            {CONVERSION[unit][size.eu]}
                          </span>
                          <span className="font-label-mono-detail text-[10px] text-error font-medium">
                            DEPLETED
                          </span>
                        </button>
                      );
                    }
                    return (
                      <button
                        key={size.eu}
                        className={`size-tile flex flex-col items-center justify-center p-2 rounded transition-all ${
                          isActive
                            ? "bg-surface-container-highest text-primary ring-2 ring-primary-container shadow-md"
                            : "bg-surface-container hover:bg-surface-container-high text-on-surface"
                        }`}
                        onClick={() => setSelectedSize(size.eu)}
                        type="button"
                      >
                        <span
                          className={`size-val font-headline-sm text-headline-sm ${
                            isActive ? "text-primary font-bold" : ""
                          }`}
                        >
                          {CONVERSION[unit][size.eu]}
                        </span>
                        <span
                          className={`font-label-mono-detail text-[10px] ${
                            size.count <= 3
                              ? "text-secondary font-bold"
                              : "text-on-surface-variant"
                          }`}
                        >
                          {size.count <= 3
                            ? `${size.count} REMAINING`
                            : "IN STOCK"}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between bg-surface-container p-space-sm rounded">
                  <div className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      inventory_2
                    </span>
                    <span>
                      {stockCount <= 3 ? (
                        <>
                          Only{" "}
                          <strong className="text-primary-container font-bold">
                            {stockCount} pairs left
                          </strong>{" "}
                          in {unit} {displaySize} allocation
                        </>
                      ) : (
                        <>
                          <strong className="text-primary font-bold">
                            Standard stock available
                          </strong>{" "}
                          in {unit} {displaySize}
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-space-sm pt-space-sm">
                <button
                  className={`w-full font-headline-sm text-headline-sm uppercase py-space-md px-space-lg rounded font-bold tracking-tight transition-all duration-300 shadow-[0_0_24px_rgba(195,244,0,0.35)] hover:shadow-[0_0_32px_rgba(195,244,0,0.6)] active:scale-[0.99] flex items-center justify-center gap-space-sm ${bagButtonClass}`}
                  onClick={addToBag}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[24px]">
                    shopping_bag
                  </span>
                  <span>
                    {bagState === "allocating"
                      ? "ALLOCATING UNIT TO BAG..."
                      : bagState === "added"
                        ? "✓ ADDED TO ARCHIVE BAG"
                        : `ADD TO SHOPPING BAG // $${product.price.toLocaleString()}`}
                  </span>
                </button>
                <Link
                  className="w-full bg-surface-container-highest hover:bg-surface-bright text-primary font-headline-sm text-headline-sm uppercase py-space-md px-space-lg rounded font-bold tracking-tight transition-all active:scale-[0.99] flex items-center justify-center gap-space-sm shadow-md"
                  href="/cart"
                >
                  <span className="material-symbols-outlined text-[20px] text-primary-container">
                    shopping_bag
                  </span>
                  <span>VIEW CART MANIFEST</span>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-space-sm pt-space-xs font-label-mono-detail text-label-mono-detail text-on-surface-variant">
                <div className="flex items-center gap-space-xs bg-surface-container p-space-xs rounded">
                  <span className="material-symbols-outlined text-[16px] text-primary-container">
                    local_shipping
                  </span>
                  <span>FREE EXPEDITED WORLDWIDE</span>
                </div>
                <div className="flex items-center gap-space-xs bg-surface-container p-space-xs rounded">
                  <span className="material-symbols-outlined text-[16px] text-primary-container">
                    verified_user
                  </span>
                  <span>NFC CIPHER CERTIFIED</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-lg p-space-lg flex flex-col gap-space-sm shadow-md">
              <div className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider pb-space-xs">
                TECHNICAL ENGINEERING ARCHIVE
              </div>
              <div className="space-y-2">
                <Accordion
                  id="materials"
                  icon="layers"
                  title="SURFACE ARCHITECTURE & MATERIALS"
                  open={openAccordions.materials}
                  onToggle={toggleAccordion}
                >
                  <p>{product.description}</p>
                  <div className="grid grid-cols-2 gap-2 pt-1 font-label-mono-detail text-[11px]">
                    {product.materialSpecs.map((spec) => (
                      <div
                        key={spec}
                        className="bg-surface-container-highest p-1.5 rounded"
                      >
                        {spec}
                      </div>
                    ))}
                  </div>
                </Accordion>
                <Accordion
                  id="sole"
                  icon="speed"
                  title="SOLE ENGINEERING // KINETIC CUSHIONING"
                  open={openAccordions.sole}
                  onToggle={toggleAccordion}
                >
                  <p>
                    Equipped with the Kinetix supercritical nitrogen-infused foam
                    matrix and a carbon split-chassis plate for propulsion snap
                    under extreme torque.
                  </p>
                </Accordion>
                <Accordion
                  id="nfc"
                  icon="fingerprint"
                  title="CRYPTOGRAPHIC NFC VERIFICATION"
                  open={openAccordions.nfc}
                  onToggle={toggleAccordion}
                >
                  <p>
                    Every pair carries an uncloneable NFC tag molded into the
                    structure. Tap an NFC-enabled smartphone near the tongue to
                    access the Certificate of Authenticity and ownership ledger.
                  </p>
                </Accordion>
                <Accordion
                  id="shipping"
                  icon="public"
                  title="COMPLIMENTARY DISPATCH & SUSTAINABILITY"
                  open={openAccordions.shipping}
                  onToggle={toggleAccordion}
                >
                  <p>
                    Dispatched via priority air freight in vacuum-sealed archival
                    storage cases. 100% carbon-neutral fulfillment with signature
                    courier delivery.
                  </p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-gutter py-space-3xl flex flex-col gap-space-xl">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">
              ARCHIVAL PAIRINGS
            </span>
            <h3 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight mt-1">
              COMPLEMENTARY SILHOUETTES
            </h3>
          </div>
          <Link
            className="hidden md:flex items-center gap-space-xs font-label-caps text-label-caps text-on-surface hover:text-primary-container transition-colors uppercase"
            href="/shop"
          >
            <span>VIEW FULL ARCHIVE</span>
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {related.map((item) => (
            <Link
              key={item.id}
              className="bg-surface-container-low rounded-lg overflow-hidden flex flex-col group shadow-lg"
              href={`/product/${item.id}`}
            >
              <div className="relative w-full h-64 bg-surface-container flex items-center justify-center p-space-md overflow-hidden">
                <span className="absolute top-space-sm left-space-sm bg-surface-container-lowest/80 text-primary-container font-label-caps text-[10px] px-2 py-0.5 rounded">
                  {item.badge}
                </span>
                <img
                  alt={item.alt}
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300"
                  src={item.img}
                />
              </div>
              <div className="p-space-lg flex flex-col gap-space-xs">
                <div className="flex items-center justify-between font-label-mono-detail text-label-mono-detail text-on-surface-variant">
                  <span>{item.serial}</span>
                  <span className="text-primary font-bold">
                    ${item.price.toLocaleString()}
                  </span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary uppercase">
                  {item.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {viewerOpen && (
        <Product360Viewer
          product={product}
          image={activeImage}
          filter={activeColorOption?.image ? "none" : activeColorOption?.filter}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </div>
  );
}
