"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/components/CartProvider";

const PROMO_CODES = {
  "KTX-VIP-15": { percent: 15, message: "15% Archival VIP Allocation Verified & Applied." },
  ARCHIVE15: { percent: 15, message: "15% Archival VIP Allocation Verified & Applied." },
  VOLT10: { percent: 10, message: "10% Lab Protocol Token Applied." },
};

function CartItem({ item, onQuantity, onRemove, onGift }) {
  return (
    <div className="group relative bg-surface-container rounded p-space-lg transition-all duration-300 hover:bg-surface-container-high">
      <div className="flex flex-col sm:flex-row gap-space-lg items-start">
        <Link
          className="relative w-full sm:w-44 h-44 bg-surface-container-lowest rounded overflow-hidden shrink-0 flex items-center justify-center p-space-sm"
          href={`/product/${item.productId}`}
        >
          <span className="absolute top-2 left-2 z-10 font-label-caps text-[9px] uppercase px-1.5 py-0.5 font-bold rounded-DEFAULT bg-primary-container text-on-primary-container">
            {item.category ? item.category.replace("-", " ") : "Specimen"}
          </span>
          <img
            alt={item.alt}
            className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
            src={item.img}
          />
        </Link>
        <div className="flex-1 w-full flex flex-col justify-between min-w-0">
          <div className="flex items-start justify-between gap-space-md">
            <div>
              <div className="flex items-center gap-space-xs font-label-mono-detail text-label-mono-detail text-on-surface-variant">
                <span>{item.serial}</span>
                <span>•</span>
                <span className="text-primary-container">IN ALLOCATION</span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-primary uppercase tracking-tight mt-0.5">
                <Link href={`/product/${item.productId}`} className="hover:text-primary-container transition-colors">
                  {item.title}
                </Link>
              </h2>
              <div className="flex flex-wrap gap-x-space-md gap-y-space-xs mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <span>
                  Size:{" "}
                  <strong className="text-on-surface font-normal">
                    EU {item.size}
                  </strong>
                </span>
                <span>
                  Quantity:{" "}
                  <strong className="text-on-surface font-normal">{item.qty}</strong>
                </span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="font-headline-sm text-headline-sm text-primary tracking-tight">
                ${(item.price * item.qty).toFixed(2)}
              </div>
              <span className="font-label-mono-detail text-[11px] text-on-surface-variant block mt-0.5">
                ${item.price.toFixed(2)} / Unit
              </span>
            </div>
          </div>
          <div className="mt-space-lg pt-space-md bg-surface-container-lowest/40 rounded p-space-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-lg">
              <div className="flex items-center bg-surface-container-lowest rounded p-0.5">
                <button
                  aria-label="Decrease quantity"
                  className="w-8 h-8 flex items-center justify-center text-on-surface hover:text-primary-container hover:bg-surface-variant rounded transition-colors"
                  onClick={() => onQuantity(item.key, -1)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    remove
                  </span>
                </button>
                <span className="px-space-md font-label-mono-detail text-label-mono-detail text-on-surface font-bold">
                  {item.qty}
                </span>
                <button
                  aria-label="Increase quantity"
                  className="w-8 h-8 flex items-center justify-center text-on-surface hover:text-primary-container hover:bg-surface-variant rounded transition-colors"
                  onClick={() => onQuantity(item.key, 1)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    add
                  </span>
                </button>
              </div>
              <button
                className="flex items-center gap-1 font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-error transition-colors"
                onClick={() => onRemove(item.key)}
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">
                  delete
                </span>
                <span>Deallocate</span>
              </button>
            </div>
            <label className="flex items-center gap-space-sm cursor-pointer select-none">
              <input
                checked={item.gift}
                onChange={(event) => onGift(item.key, event.target.checked)}
                className="accent-primary-container w-4 h-4 rounded cursor-pointer"
                type="checkbox"
              />
              <span className="font-label-mono-detail text-label-mono-detail text-on-surface-variant">
                Archival Gift Box (Complimentary)
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CartPage() {
  const { items, count, subtotal, updateQuantity, removeItem, toggleGift } =
    useCart();
  const [promoInput, setPromoInput] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState("");
  const [promoError, setPromoError] = useState(false);
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 58);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((value) => (value > 0 ? value - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const discountAmount = (subtotal * discountPercent) / 100;
  const grandTotal = Math.max(0, subtotal - discountAmount);
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  const applyPromo = (event) => {
    event.preventDefault();
    const code = promoInput.trim().toUpperCase();
    if (!code) return;
    const promo = PROMO_CODES[code];
    if (promo) {
      setDiscountPercent(promo.percent);
      setPromoMessage(promo.message);
      setPromoError(false);
    } else {
      setDiscountPercent(0);
      setPromoMessage("Unrecognized allocation key. Verify checksum.");
      setPromoError(true);
    }
  };

  const whatsAppMessage = `Hello Kinetix Concierge, I would like to place an order for:\n${items
    .map(
      (item) =>
        `${item.qty}x ${item.title} (EU ${item.size}) - $${item.price * item.qty}`
    )
    .join("\n")}\nTotal: $${grandTotal.toFixed(2)} USD\nCart Spec #KTX-${grandTotal.toFixed(0)}`;

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden pb-space-3xl">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 right-10 w-[420px] h-[420px] bg-surface-bright/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-[1440px] mx-auto px-gutter w-full">
          <div className="pt-space-xl pb-space-lg flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <div className="flex items-center gap-space-xs font-label-mono-detail text-label-mono-detail text-on-surface-variant uppercase tracking-widest pb-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container inline-block animate-ping"></span>
                <span>Allocated Reservation // Active Session</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg tracking-tighter uppercase text-primary">
                Cart Specimen Manifest{" "}
                <span className="text-on-surface-variant font-body-lg text-body-lg tracking-normal">
                  ([{items.length}] Entities)
                </span>
              </h1>
            </div>
            <div className="flex items-center gap-space-md">
              <div className="bg-surface-container-low px-space-md py-space-xs rounded flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-[18px] text-primary-container">
                  timer
                </span>
                <span className="font-label-mono-detail text-label-mono-detail text-on-surface uppercase">
                  Inventory Reserved:{" "}
                  <span className="text-primary font-bold">
                    {minutes}:{seconds}
                  </span>
                </span>
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <div className="bg-surface-container-low p-space-md rounded flex items-center justify-between text-on-surface">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary-container text-[20px]">
                    verified
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface">
                    Zero-drop batch allocation verified. All items ship in
                    nitrogen-sealed protective containers with stamped
                    authenticity credentials.
                  </p>
                </div>
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant shrink-0 hidden sm:inline">
                  Priority Tier 1
                </span>
              </div>

              {items.length > 0 ? (
                <div className="flex flex-col gap-space-md">
                  {items.map((item) => (
                    <CartItem
                      key={item.key}
                      item={item}
                      onQuantity={updateQuantity}
                      onRemove={removeItem}
                      onGift={toggleGift}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-surface-container rounded p-space-xl text-center">
                  <span className="material-symbols-outlined text-[48px] text-on-surface-variant">
                    remove_shopping_cart
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary uppercase mt-space-md">
                    Specimen Vault Empty
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mt-space-xs">
                    Your allocated reservation session has no active specimens
                    attached. Add a silhouette from the archive to begin.
                  </p>
                  <Link
                    href="/shop"
                    className="inline-block mt-space-lg bg-primary-container text-on-primary-container px-space-xl py-space-sm font-headline-sm text-[13px] uppercase rounded"
                  >
                    Explore Archive
                  </Link>
                </div>
              )}

              <div className="mt-space-md bg-surface-container-lowest rounded p-space-lg grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                <div className="flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-container">
                      lock
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-[15px] uppercase text-primary">
                      Cryptographic Vault
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      End-to-end 256-bit encrypted checkout and zero plain-text
                      storage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-container">
                      autorenew
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-[15px] uppercase text-primary">
                      14-Day Concierge Return
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Unworn condition exchange or full restitution arranged via
                      home pickup.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-container">
                      verified_user
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-[15px] uppercase text-primary">
                      Certificate of Pedigree
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Physical NFC-implanted authentication card tied to the
                      master registry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 sticky top-24 flex flex-col gap-space-md">
              <div className="bg-surface-container rounded p-space-lg relative overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between pb-space-md">
                  <h2 className="font-headline-md text-headline-md tracking-tight uppercase text-primary">
                    Order Summary
                  </h2>
                  <span className="font-label-mono-detail text-[11px] text-primary-container bg-surface-container-lowest px-2 py-0.5 rounded uppercase">
                    Verified Spec
                  </span>
                </div>
                <div className="space-y-space-sm pt-space-xs pb-space-md font-body-sm text-body-sm">
                  <div className="flex items-center justify-between text-on-surface-variant">
                    <span>Subtotal ({count} items)</span>
                    <span className="font-label-mono-detail text-on-surface text-[14px]">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant">
                    <span>Global Express Courier</span>
                    <span className="font-label-mono-detail text-primary-container uppercase text-[12px] font-bold">
                      Complimentary
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant">
                    <span>Import Duties &amp; VAT</span>
                    <span className="font-label-mono-detail text-on-surface text-[14px]">
                      Calculated Next
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant">
                    <span>Luxury Archival Packaging</span>
                    <span className="font-label-mono-detail text-primary-container uppercase text-[12px] font-bold">
                      $0.00
                    </span>
                  </div>
                  {discountPercent > 0 && (
                    <div className="flex items-center justify-between text-primary-container">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          sell
                        </span>
                        <span>Promotional Allocation</span>
                      </span>
                      <span className="font-label-mono-detail font-bold">
                        -${discountAmount.toFixed(2)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="py-space-md">
                  <label
                    className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-space-xs"
                    htmlFor="promoInput"
                  >
                    Archival VIP Access Code / Voucher
                  </label>
                  <form className="flex gap-space-xs" onSubmit={applyPromo}>
                    <div className="relative flex-1">
                      <input
                        className="w-full bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/40 px-space-md py-space-sm rounded font-label-mono-detail text-label-mono-detail outline-none focus:ring-1 focus:ring-primary-container uppercase"
                        id="promoInput"
                        placeholder="e.g. KTX-VIP-15"
                        type="text"
                        value={promoInput}
                        onChange={(event) => setPromoInput(event.target.value)}
                      />
                    </div>
                    <button
                      className="bg-surface-bright hover:bg-surface-variant text-primary px-space-md py-space-sm rounded font-label-caps text-label-caps uppercase tracking-wider transition-colors shrink-0"
                      type="submit"
                    >
                      Apply
                    </button>
                  </form>
                  {promoMessage && (
                    <p
                      className={`font-label-mono-detail text-[11px] mt-1 ${
                        promoError ? "text-error" : "text-primary-container"
                      }`}
                    >
                      {promoMessage}
                    </p>
                  )}
                </div>

                <div className="pt-space-md pb-space-lg flex items-baseline justify-between bg-surface-container-lowest/60 -mx-space-lg px-space-lg">
                  <div>
                    <span className="font-headline-sm text-headline-sm text-primary uppercase tracking-tight block">
                      Grand Total
                    </span>
                    <span className="font-label-mono-detail text-[11px] text-on-surface-variant">
                      Taxes calculated upon territory confirmation
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-headline-lg text-headline-lg text-primary-container tracking-tighter block drop-shadow-[0_0_12px_rgba(195,244,0,0.35)]">
                      ${grandTotal.toFixed(2)}
                    </span>
                    <span className="font-label-mono-detail text-[10px] text-on-surface-variant block uppercase">
                      USD • ALL SETTLEMENTS FINAL
                    </span>
                  </div>
                </div>

                <div className="mt-space-lg flex flex-col gap-space-sm">
                  {items.length > 0 ? (
                    <>
                      <a
                        className="w-full bg-primary-container hover:bg-secondary-fixed text-on-primary-container py-space-md px-space-lg rounded font-headline-sm text-[14px] uppercase tracking-wider flex items-center justify-center gap-space-sm transition-all shadow-[0_0_24px_rgba(195,244,0,0.25)] hover:shadow-[0_0_32px_rgba(195,244,0,0.45)] group"
                        href={`https://wa.me/918891404847?text=${encodeURIComponent(
                          whatsAppMessage
                        )}`}
                        rel="noopener"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">
                          chat
                        </span>
                        <span>Proceed to WhatsApp Direct Concierge</span>
                      </a>
                      <Link
                        className="w-full bg-surface-bright hover:bg-surface-variant text-primary py-space-md px-space-lg rounded font-headline-sm text-[14px] uppercase tracking-wider flex items-center justify-center gap-space-sm transition-colors"
                        href="/checkout"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          arrow_forward
                        </span>
                        <span>Proceed to Checkout</span>
                      </Link>
                    </>
                  ) : (
                    <Link
                      className="w-full bg-primary-container hover:bg-secondary-fixed text-on-primary-container py-space-md px-space-lg rounded font-headline-sm text-[14px] uppercase tracking-wider flex items-center justify-center gap-space-sm transition-all"
                      href="/shop"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        add_shopping_cart
                      </span>
                      <span>Add Specimens</span>
                    </Link>
                  )}
                  <div className="text-center pt-space-xs">
                    <span className="font-label-mono-detail text-[10px] text-on-surface-variant uppercase tracking-widest flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-[12px] text-primary-container">
                        shield
                      </span>
                      Protected by 3D-Secure 2.0 &amp; Apple Pay Ready
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-low rounded p-space-md flex items-center gap-space-md">
                <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary-container text-[24px]">
                    contact_support
                  </span>
                </div>
                <div>
                  <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-wider block">
                    Have sizing uncertainty?
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">
                    Consult our Tokyo-Milano master fitting atelier via instant
                    live session.
                  </p>
                  <a
                    className="font-label-mono-detail text-label-mono-detail text-primary-container hover:underline block mt-0.5"
                    href="tel:8891404847"
                  >
                    +1 (889) 140-4847 — Direct Hotline
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
