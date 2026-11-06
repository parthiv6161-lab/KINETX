"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { PRODUCTS } from "@/lib/products";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addItem } = useCart();
  const saved = PRODUCTS.filter((product) => wishlist.includes(product.id));

  return (
    <div className="flex flex-col w-full relative">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      <div className="max-w-[1440px] mx-auto px-gutter w-full pb-space-3xl">
        <div className="pt-space-xl pb-space-lg flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <div className="flex items-center gap-space-xs font-label-mono-detail text-label-mono-detail text-on-surface-variant uppercase tracking-widest pb-space-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container inline-block animate-ping"></span>
              <span>Personal Archive // Saved Specimens</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg tracking-tighter uppercase text-primary">
              Wishlist{" "}
              <span className="text-on-surface-variant font-body-lg text-body-lg tracking-normal">
                ([{saved.length}] Allocations)
              </span>
            </h1>
          </div>
          <Link
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest flex items-center gap-1"
            href="/shop"
          >
            <span className="material-symbols-outlined text-[16px]">
              arrow_back
            </span>
            Continue Archive Exploration
          </Link>
        </div>

        {saved.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-lg">
            {saved.map((product) => (
              <article
                key={product.id}
                className="group bg-surface-container-low rounded-DEFAULT overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:bg-surface-container"
              >
                <div className="relative h-64 bg-surface-container flex items-center justify-center p-space-md overflow-hidden">
                  <span className="absolute top-space-sm left-space-sm bg-primary-container text-on-primary-container font-label-caps text-[10px] px-2 py-0.5 rounded font-bold z-10">
                    {product.badge}
                  </span>
                  <button
                    aria-label="Remove from wishlist"
                    className="absolute top-space-sm right-space-sm z-10 w-8 h-8 rounded bg-surface-container-lowest/80 backdrop-blur text-primary-container flex items-center justify-center hover:bg-error hover:text-on-error transition-colors"
                    onClick={() => toggleWishlist(product.id)}
                    title="Remove from wishlist"
                    type="button"
                  >
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      favorite
                    </span>
                  </button>
                  <img
                    alt={product.alt}
                    className="w-full h-full object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300"
                    src={product.img}
                  />
                </div>
                <div className="p-space-lg flex flex-col gap-space-xs flex-1">
                  <div className="flex items-center justify-between font-label-mono-detail text-label-mono-detail text-on-surface-variant">
                    <span>{product.serial}</span>
                    <span className="text-primary font-bold">
                      ${product.price.toLocaleString()}
                    </span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-primary uppercase">
                    <Link
                      className="hover:text-primary-container transition-colors"
                      href={`/product/${product.id}`}
                    >
                      {product.title}
                    </Link>
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                    {product.subtitle}
                  </p>
                  <div className="mt-space-md flex items-center gap-space-xs">
                    <button
                      className="flex-1 bg-primary-container hover:bg-secondary-fixed text-on-primary-container font-headline-sm text-[12px] uppercase py-space-sm rounded-DEFAULT flex items-center justify-center gap-1 transition-transform active:scale-95"
                      onClick={() => addItem(product, "43")}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        add_shopping_cart
                      </span>
                      Quick Add // EU 43
                    </button>
                    <Link
                      className="px-space-md py-space-sm bg-surface-container-high hover:bg-surface-bright text-on-surface rounded-DEFAULT flex items-center justify-center transition-colors"
                      href={`/product/${product.id}`}
                      title="View Product"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        visibility
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-surface-container rounded p-space-xl text-center">
            <span className="material-symbols-outlined text-[48px] text-on-surface-variant">
              favorite_border
            </span>
            <h2 className="font-headline-md text-headline-md text-primary uppercase mt-space-md">
              No Saved Specimens
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mt-space-xs">
              Tap the heart icon on any silhouette to preserve it in your
              personal archive.
            </p>
            <Link
              className="inline-block mt-space-lg bg-primary-container text-on-primary-container px-space-xl py-space-sm font-headline-sm text-[13px] uppercase rounded"
              href="/shop"
            >
              Explore Archive
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
