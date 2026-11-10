"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function StickyQuoteCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const quote = document.getElementById("quote");

    function update() {
      const nearTop = window.scrollY < 420;
      if (!quote) {
        setVisible(!nearTop && window.scrollY > 600);
        return;
      }
      const rect = quote.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.85 && rect.bottom > 80;
      setVisible(!inView && !nearTop);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-pine/15 bg-paper/95 p-3 backdrop-blur-sm md:hidden">
      <Link
        href="/#quote"
        className="flex w-full items-center justify-center rounded-sm bg-pine px-4 py-3 text-sm font-semibold text-ash shadow-sm hover:bg-canopy"
      >
        Get a quote
      </Link>
    </div>
  );
}
