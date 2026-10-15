"use client";

import Link from "next/link";
import lottie, { type AnimationItem } from "lottie-web";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const iconRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const isOpenRef = useRef(isOpen);

  useEffect(() => {
    isOpenRef.current = isOpen;

    const animation = animationRef.current;
    if (!animation) return;

    animation.setDirection(isOpen ? 1 : -1);
    animation.goToAndPlay(isOpen ? 0 : animation.totalFrames - 1, true);
  }, [isOpen]);

  useEffect(() => {
    const container = iconRef.current;
    if (!container) return;

    let cancelled = false;

    async function loadIcon() {
      const response = await fetch("/icons/menu.json");
      if (!response.ok) return;

      const animationData = await response.json();
      if (cancelled || !iconRef.current) return;

      const animation = lottie.loadAnimation({
        container: iconRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData,
      });

      animationRef.current = animation;
      animation.goToAndStop(isOpenRef.current ? animation.totalFrames - 1 : 0, true);
    }

    loadIcon();

    return () => {
      cancelled = true;
      animationRef.current?.destroy();
      animationRef.current = null;
    };
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-slate-200"
        aria-label={isOpen ? "Cerrar navegación" : "Abrir navegación"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span ref={iconRef} className="block h-8 w-8" aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute right-0 mt-3 w-72 rounded-md border border-slate-200 bg-white p-4 shadow-xl"
        >
          <nav className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 hover:bg-slate-50 hover:text-[#061d49]"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4" onClick={closeMenu}>
            <ButtonLink href="https://forms.gle/Vnfj6W7BjM22G1hC7">Solicitar apoyo</ButtonLink>
          </div>
        </div>
      )}
    </div>
  );
}
