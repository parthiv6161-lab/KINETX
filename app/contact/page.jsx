"use client";

import Link from "next/link";
import { useState } from "react";

const FAQS = [
  {
    question: "How do I determine my correct Kinetix size?",
    answer:
      "Our silhouettes run true to standard EU sizing. For a precision fit, consult the interactive size terminal on any product page, or message our concierge with your foot length in millimeters and preferred sock thickness. A master fitter will respond within two hours.",
  },
  {
    question: "What is the return and exchange protocol?",
    answer:
      "Unworn specimens may be returned within 14 days of receipt for a full restitution or exchange. Contact the concierge to schedule a complimentary home pickup. Original archival packaging and the NFC authentication card must be intact.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes. Global express courier delivery is complimentary on all orders. Import duties and taxes are calculated at territory confirmation and shown before settlement. Delivery typically lands in 3–7 business days.",
  },
  {
    question: "Are the limited editions restocked?",
    answer:
      "Archival drops are produced in fixed batches and are never restocked. Once a specimen is deallocated from the registry, it is permanently retired. Join the priority transmission list to receive early access allocations.",
  },
];

const COMMS = [
  {
    icon: "call",
    label: "Voice Line",
    value: "+91 88914 04847",
    sub: "Mon–Sat // 09:00–21:00 IST",
    href: "tel:8891404847",
  },
  {
    icon: "chat",
    label: "WhatsApp Concierge",
    value: "Instant Dispatch",
    sub: "Average response < 15 min",
    href: "https://wa.me/918891404847",
  },
  {
    icon: "mail",
    label: "Email Archive",
    value: "parthiv6161@gmail.com",
    sub: "Detailed enquiries & invoices",
    href: "mailto:parthiv6161@gmail.com",
  },
  {
    icon: "photo_camera",
    label: "Instagram",
    value: "@parthllv",
    sub: "Field notes & drop alerts",
    href: "https://instagram.com/parthllv",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Enquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("parthiv6161@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const inputClass =
    "w-full bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/40 px-space-md py-space-sm rounded font-body-sm text-body-sm outline-none focus:ring-1 focus:ring-primary-container transition-all";

  return (
    <div className="flex flex-col w-full relative">
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-surface-bright/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-[1440px] mx-auto px-gutter w-full pb-space-3xl">
        <div className="pt-space-xl pb-space-lg max-w-3xl">
          <div className="flex items-center gap-space-xs font-label-mono-detail text-label-mono-detail text-on-surface-variant uppercase tracking-widest pb-space-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container inline-block animate-ping"></span>
            <span>Atelier Comms // Channel Open</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg tracking-tighter uppercase text-primary">
            Establish Contact
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-space-xs">
            Speak directly with the Kinetix concierge — sizing counsel,
            allocation requests, order tracking, and archival authentication.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {COMMS.map((item) => (
            <a
              key={item.label}
              className="group bg-surface-container hover:bg-surface-container-high rounded p-space-lg transition-all duration-300 block"
              href={item.href}
              rel="noopener"
              target={item.href.startsWith("http") ? "_blank" : undefined}
            >
              <div className="w-12 h-12 rounded bg-surface-container-lowest flex items-center justify-center mb-space-md group-hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined text-primary-container group-hover:text-on-primary-container text-[24px] transition-colors">
                  {item.icon}
                </span>
              </div>
              <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-wider block">
                {item.label}
              </span>
              <span className="font-headline-sm text-[15px] text-primary block mt-1 break-words">
                {item.value}
              </span>
              <span className="font-label-mono-detail text-[11px] text-on-surface-variant block mt-0.5">
                {item.sub}
              </span>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start mt-space-xl">
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            <div className="bg-surface-container rounded p-space-lg">
              <div className="flex items-center gap-space-sm pb-space-md border-b border-outline-variant/30 mb-space-lg">
                <span className="w-7 h-7 rounded-full bg-primary-container text-on-primary-container font-label-mono-detail text-[12px] font-bold flex items-center justify-center">
                  01
                </span>
                <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tight">
                  Concierge Enquiry
                </h2>
              </div>

              {submitted ? (
                <div className="text-center py-space-xl">
                  <span className="material-symbols-outlined text-[48px] text-primary-container">
                    mark_email_read
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary uppercase mt-space-md">
                    DISPATCH RECORDED // TICKET #KNX-8891-V
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md mx-auto mt-space-xs">
                    Your transmission has entered the queue. A concierge agent
                    will respond to {form.email || "your email"} within one
                    business day.
                  </p>
                  <button
                    className="mt-space-lg bg-surface-bright hover:bg-surface-variant text-primary px-space-lg py-space-sm rounded font-label-caps text-label-caps uppercase tracking-wider transition-colors"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        subject: "General Enquiry",
                        message: "",
                      });
                    }}
                    type="button"
                  >
                    New Enquiry
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div>
                      <label
                        className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-space-xs"
                        htmlFor="name"
                      >
                        Full Name <span className="text-primary-container">*</span>
                      </label>
                      <input
                        className={inputClass}
                        id="name"
                        name="name"
                        onChange={updateField}
                        placeholder="Your name"
                        required
                        type="text"
                        value={form.name}
                      />
                    </div>
                    <div>
                      <label
                        className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-space-xs"
                        htmlFor="email"
                      >
                        Email <span className="text-primary-container">*</span>
                      </label>
                      <input
                        className={inputClass}
                        id="email"
                        name="email"
                        onChange={updateField}
                        placeholder="you@domain.com"
                        required
                        type="email"
                        value={form.email}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-space-xs"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <select
                      className={inputClass}
                      id="subject"
                      name="subject"
                      onChange={updateField}
                      value={form.subject}
                    >
                      <option>General Enquiry</option>
                      <option>Sizing &amp; Fit Counsel</option>
                      <option>Order Tracking</option>
                      <option>Returns &amp; Exchanges</option>
                      <option>Press &amp; Collaboration</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-space-xs"
                      htmlFor="message"
                    >
                      Transmission <span className="text-primary-container">*</span>
                    </label>
                    <textarea
                      className={inputClass}
                      id="message"
                      name="message"
                      onChange={updateField}
                      placeholder="Detail your enquiry..."
                      required
                      rows={5}
                      value={form.message}
                    ></textarea>
                  </div>
                  <button
                    className="w-full bg-primary-container hover:bg-secondary-fixed text-on-primary-container py-space-md px-space-lg rounded font-headline-sm text-[14px] uppercase tracking-wider flex items-center justify-center gap-space-sm transition-all shadow-[0_0_24px_rgba(195,244,0,0.25)] hover:shadow-[0_0_32px_rgba(195,244,0,0.45)]"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      send
                    </span>
                    Transmit Enquiry
                  </button>
                </form>
              )}
            </div>

            <div className="bg-surface-container rounded p-space-lg">
              <div className="flex items-center gap-space-sm pb-space-md border-b border-outline-variant/30 mb-space-lg">
                <span className="w-7 h-7 rounded-full bg-surface-bright text-primary font-label-mono-detail text-[12px] font-bold flex items-center justify-center">
                  02
                </span>
                <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tight">
                  Protocol FAQ
                </h2>
              </div>
              <div className="flex flex-col divide-y divide-outline-variant/20">
                {FAQS.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={faq.question}>
                      <button
                        className="w-full flex items-center justify-between gap-space-md py-space-md text-left"
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        type="button"
                      >
                        <span className="font-headline-sm text-[14px] text-primary uppercase">
                          {faq.question}
                        </span>
                        <span
                          className={`material-symbols-outlined text-[20px] text-on-surface-variant transition-transform duration-300 shrink-0 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          add
                        </span>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-60 pb-space-md" : "max-h-0"
                        }`}
                      >
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="bg-surface-container-low rounded overflow-hidden">
              <div className="relative h-48 bg-surface-container-lowest flex items-center justify-center">
                <img
                  alt="Kinetix Milano showroom interior"
                  className="w-full h-full object-cover opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyuqAZQoDWZbkfTF61u7yTlXxO5lPU2zNUVFvAOMBsKiKrGqglTvyYmxqOgqnNTjq_KBI83oGAJjkUpCy0ZKCjkX8aJKYv3AQlS48SW4fAbZ4023wqcXFAvA9vmF3QVqKmHvLu4rketEpuEcAiV7drPKCuGOMraL5g_pLKH2KLQRTQcpLn99jpwsKF_W-qgLVx85CiNZjiGWptbaTC9hFrlDKs-JaiQxBjw-wohnl6"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                <span className="absolute bottom-space-sm left-space-md font-label-caps text-label-caps uppercase text-primary-container tracking-wider">
                  Physical Atelier
                </span>
              </div>
              <div className="p-space-lg">
                <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tight">
                  Milano Showroom
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  Via della Spiga 21, 20121 Milano, Italy. Private appointments
                  only — reserve a fitting session through the concierge.
                </p>
                <div className="mt-space-md flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-sm font-label-mono-detail text-[12px] text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-primary-container">
                      schedule
                    </span>
                    Mon–Sat // 10:00–19:00 CET
                  </div>
                  <div className="flex items-center gap-space-sm font-label-mono-detail text-[12px] text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-primary-container">
                      location_on
                    </span>
                    Private entry, ring bell "KINETIX"
                  </div>
                </div>
                <a
                  className="mt-space-md inline-flex items-center gap-1 font-label-caps text-label-caps uppercase text-primary-container hover:text-primary transition-colors tracking-wider"
                  href="https://wa.me/918891404847"
                  rel="noopener"
                  target="_blank"
                >
                  Book Appointment
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-surface-container rounded p-space-lg">
              <h3 className="font-headline-sm text-headline-sm text-primary uppercase tracking-tight">
                Direct Archive Line
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                Prefer written correspondence? Copy our direct email address to
                your transmission client.
              </p>
              <div className="mt-space-md flex items-center gap-space-sm bg-surface-container-lowest rounded p-space-sm">
                <span className="material-symbols-outlined text-[18px] text-primary-container">
                  mail
                </span>
                <span className="font-label-mono-detail text-label-mono-detail text-on-surface flex-1 truncate">
                  parthiv6161@gmail.com
                </span>
                <button
                  className="font-label-caps text-label-caps uppercase text-primary-container hover:text-primary transition-colors tracking-wider shrink-0"
                  onClick={copyEmail}
                  type="button"
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>

            <div className="bg-surface-container-low rounded p-space-md flex items-center gap-space-md">
              <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary-container text-[24px]">
                  local_shipping
                </span>
              </div>
              <div>
                <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-wider block">
                  Track an allocation
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">
                  Have your order spec number ready for instant status.
                </p>
                <Link
                  className="font-label-mono-detail text-label-mono-detail text-primary-container hover:underline block mt-0.5"
                  href="/cart"
                >
                  View cart manifest
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
