"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "@/components/CartProvider";
import Product360Viewer from "@/components/Product360Viewer";
import { PRODUCTS as CATALOG_PRODUCTS } from "@/lib/products";

const ALLOCATION_LABELS = {
  all: "All Allocations",
  "in-stock": "Current Production",
  vault: "Limited Vault Drop",
  archived: "Archived / Sold",
};

const ARCHETYPE_CATEGORIES = [
  { value: "low-top", label: "Low-Tops" },
  { value: "high-top", label: "High-Tops" },
  { value: "slip-on", label: "Slip-On Shoes" },
  { value: "boot", label: "Field Boots" },
  { value: "runner", label: "Running Shoes" },
  { value: "trail-running", label: "Trail Running Shoes" },
  { value: "basketball", label: "Basketball Shoes" },
  { value: "lifestyle-sneaker", label: "Lifestyle Sneakers" },
  { value: "training", label: "Training Shoes" },
];
function ProductCard({ product, onAdd }) {
  const { isWishlisted, toggleWishlist } = useCart();
  const [viewerOpen, setViewerOpen] = useState(false);
  const wished = isWishlisted(product.id);

  return (
    <>
      <article
        className="group relative bg-surface-container-low rounded-DEFAULT overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-surface-container flex flex-col justify-between"
        data-cat={product.category}
        data-price={product.price}
      >
        <div className="p-space-md">
          <div className="flex items-start justify-between gap-2 z-10 relative">
            <span
              className={`font-label-caps text-label-caps px-space-xs py-1 rounded-DEFAULT ${product.badgeClass}`}
            >
              {product.badge}
            </span>
            <div className="flex items-center gap-1">
              <button
                aria-label={
                  wished ? "Remove from wishlist" : "Add to wishlist"
                }
                aria-pressed={wished}
                className={`flex items-center gap-1 bg-surface-container-lowest/80 backdrop-blur p-1.5 rounded-DEFAULT transition-colors ${
                  wished
                    ? "text-primary-container"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                onClick={() => toggleWishlist(product.id)}
                title={wished ? "Remove from wishlist" : "Save to wishlist"}
                type="button"
              >
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={
                    wished ? { fontVariationSettings: "'FILL' 1" } : undefined
                  }
                >
                  favorite
                </span>
              </button>
              <button
                className="flex items-center gap-1 bg-surface-container-lowest/80 backdrop-blur px-2 py-1 rounded-DEFAULT text-on-surface-variant hover:text-primary transition-colors text-[10px] font-label-mono-detail"
                onClick={() => setViewerOpen(true)}
                title="Open 360 degree view"
                type="button"
              >
                <span className="material-symbols-outlined text-[14px]">
                  view_in_ar
                </span>
                <span>360°</span>
              </button>
            </div>
          </div>
        <div className="relative w-full h-64 my-space-sm flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/40 to-transparent pointer-events-none"></div>
          <img
            alt={product.title}
            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out"
            src={product.img}
          />
        </div>
        <div className="flex items-center gap-1.5 mb-space-xs">
          {product.colors.map((color, index) => (
            <span
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${color.className}`}
            ></span>
          ))}
          <span className="font-label-mono-detail text-[10px] text-on-surface-variant ml-1">
            {product.schemes}
          </span>
        </div>
        <div className="mb-space-sm">
          <div className="font-label-mono-detail text-[11px] text-on-surface-variant">
            {product.serial}
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary tracking-tight">
            <Link
              className="hover:text-primary-container transition-colors"
              href={`/product/${product.id}`}
            >
              {product.title}
            </Link>
          </h3>
          <p className="font-label-mono-detail text-label-mono-detail text-primary-container mt-1 font-semibold">
            ${product.price.toLocaleString()} USD
          </p>
        </div>
      </div>
      <div className="p-space-md pt-0 mt-auto flex items-center gap-space-xs">
        <button
          className="quick-add flex-1 bg-primary-container hover:bg-secondary-fixed text-on-primary-container font-headline-sm text-[12px] uppercase py-space-sm rounded-DEFAULT flex items-center justify-center gap-1 transition-transform active:scale-95 shadow-sm"
          onClick={(event) => {
            event.preventDefault();
            onAdd(product);
          }}
        >
          <span className="material-symbols-outlined text-[16px]">
            add_shopping_cart
          </span>
          <span>{product.action}</span>
        </button>
        <Link
          className="px-space-md py-space-sm bg-surface-container-high hover:bg-surface-bright text-on-surface text-label-mono-detail font-label-mono-detail uppercase rounded-DEFAULT flex items-center justify-center transition-colors"
          href={`/product/${product.id}`}
          title="View Technical Spec"
        >
          <span className="material-symbols-outlined text-[16px]">
            visibility
          </span>
        </Link>
      </div>
      </article>
      {viewerOpen && (
        <Product360Viewer
          product={product}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </>
  );
}

export default function ShopPage() {
  const { addItem } = useCart();
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(1200);
  const [sort, setSort] = useState("featured");
  const [selectedSize, setSelectedSize] = useState(41);
  const [allocation, setAllocation] = useState("all");
  const [selectedCategories, setSelectedCategories] = useState(
    ARCHETYPE_CATEGORIES.map((category) => category.value),
  );
  const [toast, setToast] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    const filtered = CATALOG_PRODUCTS.filter((product) => {
      const matchesSearch =
        !query ||
        product.title.toLowerCase().includes(query) ||
        product.serial.toLowerCase().includes(query) ||
        product.category.includes(query);
      return (
        matchesSearch &&
        product.price <= maxPrice &&
        (allocation === "all" || product.allocation === allocation) &&
        selectedCategories.includes(product.category)
      );
    });

    if (sort === "price-desc") {
      return [...filtered].sort((a, b) => b.price - a.price);
    }
    if (sort === "price-asc") {
      return [...filtered].sort((a, b) => a.price - b.price);
    }
    if (sort === "newest") {
      return [...filtered].reverse();
    }
    return filtered;
  }, [search, maxPrice, sort, allocation, selectedCategories]);

  const pageCount = Math.max(1, Math.ceil(visibleProducts.length / pageSize));
  const pageProducts = visibleProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, pageCount));
  }, [pageCount]);

  const resetMatrix = () => {
    setSearch("");
    setMaxPrice(1200);
    setSort("featured");
    setSelectedSize(41);
    setAllocation("all");
    setSelectedCategories(ARCHETYPE_CATEGORIES.map((category) => category.value));
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full max-w-[1440px] mx-auto px-gutter py-space-lg">
        <div className="absolute top-12 left-1/3 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
          <div>
            <div className="flex items-center gap-space-xs mb-space-xs">
              <span className="w-1.5 h-1.5 bg-primary-container rounded-full animate-ping"></span>
              <span className="font-label-mono-detail text-label-mono-detail text-on-surface-variant uppercase tracking-wider">
                Archive Catalogue // SS-25 Drop Protocol
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight">
              Technical Footwear
            </h1>
          </div>
          <div className="flex items-center gap-space-sm">
            <span className="font-label-mono-detail text-label-mono-detail text-on-surface-variant">
              DISPLAY MODE
            </span>
            <div className="flex items-center bg-surface-container p-1 rounded-DEFAULT">
              <button
                aria-label="3 Column Grid"
                className={`p-1 rounded shadow-sm ${
                  view === "grid"
                    ? "bg-surface-container-high text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                onClick={() => setView("grid")}
              >
                <span className="material-symbols-outlined text-[18px]">
                  grid_view
                </span>
              </button>
              <button
                aria-label="Compact Grid"
                className={`p-1 rounded ${
                  view === "dense"
                    ? "bg-surface-container-high text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                onClick={() => setView("dense")}
              >
                <span className="material-symbols-outlined text-[18px]">
                  view_column_2
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low rounded-DEFAULT p-space-md mb-space-lg shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
            <div className="flex flex-col sm:flex-row sm:items-center gap-space-md flex-1">
              <div className="relative min-w-[260px] max-w-sm">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
                  search
                </span>
                <input
                  className="w-full bg-surface-container-lowest text-on-surface pl-10 pr-space-md py-space-sm font-label-mono-detail text-label-mono-detail rounded-DEFAULT outline-none focus:bg-surface-container transition-colors placeholder:text-on-surface-variant/40"
                  placeholder="Filter silhouette or archetype..."
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
              <div className="flex items-center gap-space-xs flex-wrap">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  Quick Spec:
                </span>
                <button
                  className="spec-tag px-space-sm py-1 bg-surface-container hover:bg-surface-container-high text-on-surface text-label-mono-detail font-label-mono-detail rounded-DEFAULT transition-colors"
                  onClick={() => setSearch("CarbonSole")}
                >
                  #CarbonSole
                </button>
                <button
                  className="spec-tag px-space-sm py-1 bg-surface-container hover:bg-surface-container-high text-on-surface text-label-mono-detail font-label-mono-detail rounded-DEFAULT transition-colors"
                  onClick={() => setSearch("WaterproofMembrane")}
                >
                  #WaterproofMembrane
                </button>
                <button
                  className="spec-tag px-space-sm py-1 bg-surface-container hover:bg-surface-container-high text-primary-container text-label-mono-detail font-label-mono-detail rounded-DEFAULT transition-colors"
                  onClick={() => setSearch("VoltGreen")}
                >
                  #VoltGreen
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-space-lg">
              <div className="font-label-mono-detail text-label-mono-detail text-on-surface-variant">
                <span className="font-bold text-primary">
                  {visibleProducts.length}
                </span>{" "}
                STYLES INDEXED
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  Sort:
                </span>
                <select
                  className="bg-surface-container text-on-surface font-label-mono-detail text-label-mono-detail px-space-sm py-space-xs rounded-DEFAULT outline-none cursor-pointer hover:bg-surface-container-high transition-colors"
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                >
                  <option value="featured">Featured Allocation</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="newest">Newest Releases</option>
                  <option value="rarity">Collector Rarity Index</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-space-xs pt-space-sm mt-space-sm">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
              Applied Parameters:
            </span>
            <span className="inline-flex items-center gap-1 bg-surface-container-high px-space-sm py-0.5 rounded-DEFAULT font-label-mono-detail text-label-mono-detail text-on-surface">
              Category: All Silhouettes
              <button
                aria-label="Remove filter"
                className="hover:text-error transition-colors"
                onClick={() => setSearch("")}
              >
                ×
              </button>
            </span>
            <span className="inline-flex items-center gap-1 bg-surface-container-high px-space-sm py-0.5 rounded-DEFAULT font-label-mono-detail text-label-mono-detail text-primary-container">
              Drop: {ALLOCATION_LABELS[allocation]}
              <button
                aria-label="Remove filter"
                className="hover:text-error transition-colors"
                onClick={() => setAllocation("all")}
              >
                ×
              </button>
            </span>
            <button
              className="font-label-mono-detail text-label-mono-detail text-on-surface-variant hover:text-primary transition-colors underline ml-space-xs"
              onClick={resetMatrix}
            >
              Reset Matrix
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          <aside className="lg:col-span-3 sticky top-24 space-y-space-lg bg-surface-container-lowest p-space-lg rounded-DEFAULT shadow-md">
            <div className="flex items-center justify-between pb-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary-container text-[20px]">
                  tune
                </span>
                <span className="font-headline-sm text-headline-sm text-primary uppercase">
                  Matrix Filters
                </span>
              </div>
              <span className="font-label-mono-detail text-label-mono-detail text-on-surface-variant">
                SYS_REV: 04
              </span>
            </div>

            <div className="space-y-space-xs">
              <label className="block font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                Archetype Category
              </label>
              <div className="space-y-1">
                {ARCHETYPE_CATEGORIES.map((category) => {
                  const checked = selectedCategories.includes(category.value);
                  const count = CATALOG_PRODUCTS.filter(
                    (product) => product.category === category.value,
                  ).length;
                  return (
                    <label
                      className={`flex items-center justify-between p-2 rounded-DEFAULT cursor-pointer hover:bg-surface-container-high transition-colors ${checked ? "bg-surface-container" : "bg-surface-container-low"}`}
                      key={category.value}
                    >
                      <span className={`flex items-center gap-2 font-body-sm text-body-sm ${checked ? "text-primary" : "text-on-surface"}`}>
                        <input
                          checked={checked}
                          className="accent-primary-container w-4 h-4 rounded-DEFAULT cursor-pointer"
                          onChange={() => {
                            setSelectedCategories((current) =>
                              checked
                                ? current.filter((value) => value !== category.value)
                                : [...current, category.value],
                            );
                            setCurrentPage(1);
                          }}
                          type="checkbox"
                        />
                        {category.label}
                      </span>
                      <span className="font-label-mono-detail text-label-mono-detail text-on-surface-variant">
                        {String(count).padStart(2, "0")}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="space-y-space-xs">
              <div className="flex items-center justify-between">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                  Sizing Spec (EU)
                </label>
                <span className="font-label-mono-detail text-[10px] text-primary-container">
                  ARCHIVAL FIT
                </span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {[39, 40, 41, 42, 43, 44, 45].map((size) => (
                  <button
                    key={size}
                    className={`size-btn py-2 text-center rounded-DEFAULT font-label-mono-detail text-label-mono-detail transition-all ${
                      selectedSize === size
                        ? "bg-primary-container text-on-primary-container font-bold shadow-sm"
                        : "bg-surface-container text-on-surface hover:bg-primary-container hover:text-on-primary-container"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
                <button
                  className="size-btn py-2 text-center rounded-DEFAULT bg-surface-container/40 text-on-surface-variant/40 font-label-mono-detail text-label-mono-detail cursor-not-allowed line-through"
                  disabled
                  title="Sold Out in Region"
                >
                  46
                </button>
              </div>
            </div>

            <div className="space-y-space-xs">
              <div className="flex items-center justify-between">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                  Price Band
                </label>
                <span className="font-label-mono-detail text-label-mono-detail text-primary-container">
                  $300 - ${maxPrice.toLocaleString()}
                </span>
              </div>
              <input
                className="w-full accent-primary-container bg-surface-container cursor-pointer"
                max="1200"
                min="300"
                step="50"
                type="range"
                value={maxPrice}
                onChange={(event) => setMaxPrice(Number(event.target.value))}
              />
              <div className="flex justify-between font-label-mono-detail text-[10px] text-on-surface-variant">
                <span>$300 (ENTRY)</span>
                <span>$1,200 (BESPOKE)</span>
              </div>
            </div>

            <div className="space-y-space-xs pt-space-xs">
              <label className="block font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                Allocation Status
              </label>
              <div className="space-y-1.5 font-body-sm text-body-sm">
                <button
                  aria-pressed={allocation === "all"}
                  className={`w-full text-left flex items-center gap-2 cursor-pointer transition-colors ${allocation === "all" ? "text-primary-container font-medium" : "text-on-surface"}`}
                  onClick={() => setAllocation("all")}
                  type="button"
                >
                  <span aria-hidden="true" className={`w-4 h-4 rounded-full border flex items-center justify-center ${allocation === "all" ? "border-primary-container" : "border-on-surface-variant"}`}><span className={allocation === "all" ? "w-2 h-2 rounded-full bg-primary-container" : ""} /></span>
                  <span>All Allocations</span>
                </button>
                <button
                  aria-pressed={allocation === "in-stock"}
                  className={`w-full text-left flex items-center gap-2 cursor-pointer transition-colors ${
                    allocation === "in-stock"
                      ? "text-primary-container font-medium"
                      : "text-on-surface"
                  }`}
                  onClick={() => setAllocation("in-stock")}
                  type="button"
                >
                  <span aria-hidden="true" className={`w-4 h-4 rounded-full border flex items-center justify-center ${allocation === "in-stock" ? "border-primary-container" : "border-on-surface-variant"}`}><span className={allocation === "in-stock" ? "w-2 h-2 rounded-full bg-primary-container" : ""} /></span>
                  <span>Current Production (In Stock)</span>
                </button>
                <button
                  aria-pressed={allocation === "vault"}
                  className={`w-full text-left flex items-center gap-2 cursor-pointer transition-colors ${
                    allocation === "vault"
                      ? "text-primary-container font-medium"
                      : "text-on-surface"
                  }`}
                  onClick={() => setAllocation("vault")}
                  type="button"
                >
                  <span aria-hidden="true" className={`w-4 h-4 rounded-full border flex items-center justify-center ${allocation === "vault" ? "border-primary-container" : "border-on-surface-variant"}`}><span className={allocation === "vault" ? "w-2 h-2 rounded-full bg-primary-container" : ""} /></span>
                  <span>Limited Priority Drop (Vault)</span>
                </button>
                <button
                  aria-pressed={allocation === "archived"}
                  className={`w-full text-left flex items-center gap-2 cursor-pointer transition-colors ${
                    allocation === "archived"
                      ? "text-primary-container font-medium"
                      : "text-on-surface-variant"
                  }`}
                  onClick={() => setAllocation("archived")}
                  type="button"
                >
                  <span aria-hidden="true" className={`w-4 h-4 rounded-full border flex items-center justify-center ${allocation === "archived" ? "border-primary-container" : "border-on-surface-variant"}`}><span className={allocation === "archived" ? "w-2 h-2 rounded-full bg-primary-container" : ""} /></span>
                  <span>Archived / Sold Allocation</span>
                </button>
              </div>
            </div>

            <div className="p-space-sm bg-surface-container rounded-DEFAULT">
              <div className="flex items-center gap-space-xs text-primary-container font-label-mono-detail text-[11px] mb-1">
                <span className="material-symbols-outlined text-[14px]">
                  verified_user
                </span>
                <span>HARDWARE SECURED</span>
              </div>
              <p className="font-label-mono-detail text-[10px] text-on-surface-variant leading-relaxed">
                Every silhouette contains an encrypted NFC cryptographic tag
                embedded within the carbon fiber shank.
              </p>
            </div>
          </aside>

          <section className="lg:col-span-9">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-space-lg ${
                view === "dense" ? "xl:grid-cols-4" : "xl:grid-cols-3"
              }`}
            >
              {pageProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAdd={(item) => {
                    addItem(item, String(selectedSize));
                    setToast(
                      `${item.title} (EU ${selectedSize}) mapped to personal dispatch ledger.`
                    );
                  }}
                />
              ))}
            </div>

            {visibleProducts.length === 0 && (
              <div className="bg-surface-container-low rounded-DEFAULT p-space-xl text-center">
                <span className="material-symbols-outlined text-[40px] text-on-surface-variant">
                  search_off
                </span>
                <h3 className="font-headline-md text-headline-md uppercase text-primary mt-space-sm">
                  No matching silhouettes
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  Adjust your filter parameters or reset the matrix.
                </p>
                <button
                  className="mt-space-md bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase px-space-lg py-space-sm rounded-DEFAULT"
                  onClick={resetMatrix}
                >
                  Reset Matrix
                </button>
              </div>
            )}

            <div className="mt-space-2xl p-space-lg bg-surface-container-lowest rounded-DEFAULT flex flex-col sm:flex-row items-center justify-between gap-space-md shadow-md">
              <div className="flex items-center gap-space-sm font-label-mono-detail text-label-mono-detail text-on-surface-variant">
                <span>INDEX PAGE {String(currentPage).padStart(2, "0")} OF {String(pageCount).padStart(2, "0")}</span>
                <span className="text-primary-container">•</span>
                <span>SHOWING {pageProducts.length} OF {visibleProducts.length} ITEMS</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  aria-label="Previous page"
                  className={`px-space-md py-space-xs bg-surface-container text-on-surface-variant hover:text-primary rounded-DEFAULT font-label-mono-detail text-label-mono-detail transition-colors ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}`}
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                  type="button"
                >
                  PREV
                </button>
                {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
                  <button
                    aria-current={currentPage === page ? "page" : undefined}
                    className={`px-space-md py-space-xs rounded-DEFAULT font-label-mono-detail text-label-mono-detail transition-colors ${currentPage === page ? "bg-primary-container text-on-primary-container font-bold" : "bg-surface-container hover:bg-surface-container-high text-on-surface"}`}
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    type="button"
                  >
                    {String(page).padStart(2, "0")}
                  </button>
                ))}
                <button
                  aria-label="Next page"
                  className={`px-space-md py-space-xs bg-surface-container hover:bg-surface-container-high text-primary rounded-DEFAULT font-label-mono-detail text-label-mono-detail transition-colors ${currentPage === pageCount ? "cursor-not-allowed opacity-50" : ""}`}
                  disabled={currentPage === pageCount}
                  onClick={() => setCurrentPage((page) => Math.min(pageCount, page + 1))}
                  type="button"
                >
                  NEXT
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div
        className={`fixed bottom-8 right-8 z-50 transform transition-all duration-300 pointer-events-none bg-surface-container-highest text-on-surface px-space-lg py-space-md rounded-DEFAULT shadow-2xl flex items-center gap-space-md ${
          toast ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"
        }`}
      >
        <span className="material-symbols-outlined text-primary-container text-[24px]">
          check_circle
        </span>
        <div>
          <div className="font-headline-sm text-[14px] text-primary uppercase">
            Silhouetted Allocated
          </div>
          <div className="font-label-mono-detail text-label-mono-detail text-on-surface-variant">
            {toast || "Added to tactical acquisition cart."}
          </div>
        </div>
      </div>
    </div>
  );
}
