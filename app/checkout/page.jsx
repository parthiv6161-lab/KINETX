"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

const WHATSAPP_NUMBER = "918891404847";

export default function CheckoutPage() {
  const { items, count, subtotal } = useCart();

  const orderText = `KINETIX // ORDER REQUEST

SPECIMEN MANIFEST:
${
  items.length > 0
    ? items
        .map(
          (item) =>
            `${item.qty}x ${item.title} (EU ${item.size}) — $${item.price * item.qty}`
        )
        .join("\n")
    : "No items attached."
}
Total: $${subtotal.toFixed(2)} USD

Please confirm availability and delivery details.`;

  const whatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    orderText
  )}`;

  return (
    <div className="flex flex-col w-full relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-surface-bright/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-[1100px] mx-auto px-gutter w-full pb-space-3xl">
        <div className="pt-space-xl pb-space-lg flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <div className="flex items-center gap-space-xs font-label-mono-detail text-label-mono-detail text-on-surface-variant uppercase tracking-widest pb-space-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container inline-block animate-ping"></span>
              <span>Direct Dispatch // No Forms Required</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg tracking-tighter uppercase text-primary">
              Acquisition Terminal
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-space-xs">
              Review your specimen manifest and proceed straight to WhatsApp.
              Your order details are pre-filled — a concierge agent will confirm
              delivery.
            </p>
          </div>
          <Link
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest flex items-center gap-1"
            href="/cart"
          >
            <span className="material-symbols-outlined text-[16px]">
              arrow_back
            </span>
            View Cart Manifest
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-start">
          <div className="bg-surface-container rounded p-space-lg">
            <h2 className="font-headline-md text-headline-md tracking-tight uppercase text-primary pb-space-md border-b border-outline-variant/30">
              Specimen Manifest{" "}
              <span className="text-on-surface-variant font-body-sm text-body-sm tracking-normal">
                ({count} items)
              </span>
            </h2>

            {items.length > 0 ? (
              <div className="flex flex-col gap-space-md pt-space-md">
                {items.map((item) => (
                  <div key={item.key} className="flex items-center gap-space-md">
                    <div className="w-16 h-16 bg-surface-container-lowest rounded shrink-0 flex items-center justify-center p-1">
                      <img
                        alt={item.alt}
                        className="w-full h-full object-contain"
                        src={item.img}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-headline-sm text-[14px] text-primary uppercase truncate">
                        {item.title}
                      </p>
                      <p className="font-label-mono-detail text-[11px] text-on-surface-variant">
                        EU {item.size} • QTY {item.qty}
                      </p>
                    </div>
                    <span className="font-label-mono-detail text-[13px] text-primary shrink-0">
                      ${(item.price * item.qty).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-space-xl text-center">
                <span className="material-symbols-outlined text-[40px] text-on-surface-variant">
                  remove_shopping_cart
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                  No specimens attached. Add a silhouette before checkout.
                </p>
                <Link
                  className="inline-block mt-space-md bg-primary-container text-on-primary-container px-space-lg py-space-sm rounded font-label-caps text-label-caps uppercase tracking-wider"
                  href="/shop"
                >
                  Explore Archive
                </Link>
              </div>
            )}

            <div className="border-t border-outline-variant/30 mt-space-md pt-space-md space-y-space-sm font-body-sm text-body-sm">
              <div className="flex items-center justify-between text-on-surface-variant">
                <span>Subtotal</span>
                <span className="font-label-mono-detail text-on-surface">
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
                <span>Import Duties</span>
                <span className="font-label-mono-detail text-on-surface">
                  Included
                </span>
              </div>
            </div>

            <div className="flex items-baseline justify-between bg-surface-container-lowest/60 -mx-space-lg px-space-lg py-space-md mt-space-md">
              <span className="font-headline-sm text-headline-sm text-primary uppercase tracking-tight">
                Total
              </span>
              <div className="text-right">
                <span className="font-headline-lg text-headline-lg text-primary-container tracking-tighter block drop-shadow-[0_0_12px_rgba(195,244,0,0.35)]">
                  ${subtotal.toFixed(2)}
                </span>
                <span className="font-label-mono-detail text-[10px] text-on-surface-variant uppercase">
                  USD
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-space-md">
            <div className="bg-surface-container rounded p-space-lg text-center">
              <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-primary-container text-[32px]">
                  chat
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tight mt-space-md">
                Proceed to Checkout
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mx-auto mt-space-xs">
                No address forms. Tap below and your complete order opens
                directly in WhatsApp, ready to send to the Kinetix concierge.
              </p>

              {items.length > 0 ? (
                <a
                  className="mt-space-lg w-full bg-primary-container hover:bg-secondary-fixed text-on-primary-container py-space-md px-space-lg rounded font-headline-sm text-[14px] uppercase tracking-wider flex items-center justify-center gap-space-sm transition-all shadow-[0_0_24px_rgba(195,244,0,0.25)] hover:shadow-[0_0_32px_rgba(195,244,0,0.45)]"
                  href={whatsAppUrl}
                  rel="noopener"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    send
                  </span>
                  Send Order via WhatsApp
                </a>
              ) : (
                <Link
                  className="mt-space-lg w-full bg-primary-container hover:bg-secondary-fixed text-on-primary-container py-space-md px-space-lg rounded font-headline-sm text-[14px] uppercase tracking-wider flex items-center justify-center gap-space-sm transition-all"
                  href="/shop"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    add_shopping_cart
                  </span>
                  Add Specimens
                </Link>
              )}

              <div className="mt-space-md text-center">
                <span className="font-label-mono-detail text-[10px] text-on-surface-variant uppercase tracking-widest flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[12px] text-primary-container">
                    shield
                  </span>
                  Opens WhatsApp with order details pre-filled
                </span>
              </div>
            </div>

            <div className="bg-surface-container-low rounded p-space-md flex items-center gap-space-md">
              <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary-container text-[24px]">
                  support_agent
                </span>
              </div>
              <div>
                <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-wider block">
                  Need a live human?
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">
                  A dedicated agent is standing by to complete your allocation.
                </p>
                <a
                  className="font-label-mono-detail text-label-mono-detail text-primary-container hover:underline block mt-0.5"
                  href="tel:8891404847"
                >
                  +91 88914 04847 — Direct Hotline
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
