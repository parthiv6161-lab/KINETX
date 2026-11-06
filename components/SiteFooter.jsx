import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

const ARCHIVE_LINKS = [
  { label: "All Drops", href: "/shop" },
  { label: "K-01 Prototype", href: "/product-details" },
  { label: "Cart Spec", href: "/cart" },
  { label: "Priority Checkout", href: "/checkout" },
  { label: "Private Inquiries", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface mt-space-3xl">
      <div className="max-w-[1440px] mx-auto px-gutter py-space-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl pb-space-2xl">
          <div className="lg:col-span-4 space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-lg text-headline-lg tracking-tighter text-primary uppercase">
                KINETIX
              </span>
              <span className="font-label-caps text-label-caps text-primary-container px-space-xs py-0.5 bg-surface-container-high rounded">
                LABS
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Hyper-engineered aesthetic footwear crafted with razor-sharp
              architectural ergonomics. Synthesizing technical streetwear
              culture with bespoke luxury performance.
            </p>
            <div className="pt-space-sm">
              <div className="font-label-mono-detail text-label-mono-detail uppercase text-on-surface-variant">
                Operational Studio // Milano - Tokyo - NYC
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-space-md">
            <div className="font-label-caps text-label-caps tracking-widest text-primary uppercase">
              Direct Concierge
            </div>
            <div className="space-y-space-sm font-label-mono-detail text-label-mono-detail">
              <div className="flex items-center gap-space-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px] text-primary-container">
                  call
                </span>
                <a
                  className="hover:text-primary transition-colors"
                  href="tel:8891404847"
                >
                  +1 (889) 140-4847
                </a>
              </div>
              <div className="flex items-center gap-space-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px] text-primary-container">
                  chat
                </span>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://wa.me/8891404847"
                  rel="noopener"
                  target="_blank"
                >
                  WhatsApp Concierge (24/7)
                </a>
              </div>
              <div className="flex items-center gap-space-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px] text-primary-container">
                  mail
                </span>
                <a
                  className="hover:text-primary transition-colors"
                  href="mailto:parthiv6161@gmail.com"
                >
                  parthiv6161@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-space-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px] text-primary-container">
                  alternate_email
                </span>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://instagram.com/parthllv"
                  rel="noopener"
                  target="_blank"
                >
                  @parthllv
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-space-md">
            <div className="font-label-caps text-label-caps tracking-widest text-primary uppercase">
              Archival Navigation
            </div>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              {ARCHIVE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    className="hover:text-primary transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-space-md">
            <div className="font-label-caps text-label-caps tracking-widest text-primary uppercase">
              Transmission Dispatch
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Subscribe for zero-hour drop notifications and cryptographic
              allocation passes.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="pt-space-xl flex flex-col md:flex-row items-center justify-between gap-space-md font-label-mono-detail text-label-mono-detail text-on-surface-variant">
          <div className="flex items-center gap-space-sm">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span>ALL SYSTEMS NOMINAL — KINETIX ARCHIVE © 2025</span>
          </div>
          <div className="flex items-center gap-space-lg text-[11px]">
            <a className="hover:text-primary transition-colors" href="#">
              TERMS OF ALLOCATION
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              VAULT PROTOCOL
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              AUTHENTICITY VERIFICATION
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
