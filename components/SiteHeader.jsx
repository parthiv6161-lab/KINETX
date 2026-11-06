"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/components/CartProvider";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Product Details", path: "/product-details" },
  { label: "Cart", path: "/cart" },
  { label: "Checkout", path: "/checkout" },
  { label: "Contact", path: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const { count, wishlistCount } = useCart();

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1440px] mx-auto px-gutter flex items-center justify-between gap-gutter">
        <div className="flex items-center gap-space-lg">
          <Link className="flex items-center gap-space-sm" href="/">
            <img
              alt="Kinetix Luxury Footwear Logo"
              className="h-9 w-9 object-contain"
              src="/kinetix-logo.svg"
            />
            <span className="flex flex-col leading-none">
              <span className="font-headline-md text-headline-md tracking-tight text-primary uppercase">
                KINETIX
              </span>
              <span className="font-label-caps text-[9px] tracking-[0.25em] text-on-surface-variant uppercase mt-0.5">
                Luxury Footwear
              </span>
            </span>
          </Link>
        </div>
        <nav className="hidden xl:flex items-center gap-space-md">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "px-space-sm py-space-xs tracking-widest transition-colors uppercase bg-primary-container text-on-primary-container font-headline-sm"
                    : "px-space-sm py-space-xs font-label-caps text-label-caps tracking-widest text-on-surface-variant hover:text-on-surface transition-colors uppercase"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-space-md">
          <div className="hidden md:flex items-center bg-surface-container-low px-space-md py-space-xs rounded-DEFAULT gap-space-sm">
            <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
              search
            </span>
            <input
              className="bg-transparent border-0 outline-none text-on-surface placeholder:text-on-surface-variant/40 font-label-mono-detail text-label-mono-detail w-36 lg:w-48"
              placeholder="SEARCH ARCHIVE..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-space-sm">
            <Link
              aria-label="Wishlist"
              className="relative p-space-xs text-on-surface-variant hover:text-on-surface transition-colors"
              href="/wishlist"
            >
              <span className="material-symbols-outlined">favorite</span>
              <span className="absolute top-0 right-0 bg-surface-container-highest text-tertiary font-label-caps text-[9px] px-1 py-0.5 rounded-full leading-none">
                {wishlistCount}
              </span>
            </Link>
            <Link
              aria-label="Shopping Bag"
              className="relative p-space-xs text-on-surface-variant hover:text-on-surface transition-colors"
              href="/cart"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              <span className="absolute top-0 right-0 bg-primary-container text-on-primary-container font-label-caps text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none shadow-[0_0_12px_rgba(195,244,0,0.4)]">
                {count}
              </span>
            </Link>
            <div className="pl-space-xs flex items-center">
              <Link aria-label="User Account" href="/contact">
                <img
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSlfZvYJJlN1GCbxzKxR2HEcR8gepgzc1c_rMsZg-7EmldjVpKlLuquGDGGCnTGNwHlVjNjCtRveDiHf5CD4t8x323yTH7bk-ndRiEb9QEzNWs_j7FIPf4uMmo_oWIgK_HvUB18AE84Xv6Iw4q6zYchYZ55PXgeuOcK5VF8Po9BAfMvE1J-UsUtz_hP6isexkYH6J0jX2zmVm6fH37rlgxMYLotCzVu4zCKAmqUWbo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
