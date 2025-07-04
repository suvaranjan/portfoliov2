"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface NavbarItem {
  id: string;
  title: string;
}

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [activeSection, setActiveSection] = React.useState("about");
  const navbarItems: NavbarItem[] = [
    { id: "about", title: "About" },
    { id: "work", title: "Work" },
    { id: "contact", title: "Contact" },
  ];

  // Scroll to section on button click
  const handleItemClick = (itemId: string) => {
    const el = document.getElementById(itemId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  React.useEffect(() => {
    const isMobile = window.innerWidth < 640;

    if (isMobile) {
      // Fallback: manual scroll listener
      const handleScroll = () => {
        let closestId = "";
        let minOffset = Infinity;

        navbarItems.forEach((item) => {
          const el = document.getElementById(item.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            const offset = Math.abs(rect.top - 80); // offset for navbar
            if (offset < minOffset) {
              minOffset = offset;
              closestId = item.id;
            }
          }
        });

        if (closestId) {
          setActiveSection(closestId);
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Run on mount

      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // Desktop: use IntersectionObserver
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );

      navbarItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.observe(el);
      });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div
      className={cn(
        "fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center gap-1 sm:gap-1 p-1",
          "bg-white/80 backdrop-blur-md border border-gray-200/50",
          "rounded-full shadow-lg shadow-black/5",
          "w-full sm:w-auto"
        )}
      >
        {navbarItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={cn(
                "relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                "min-w-[2.5rem] sm:min-w-0 flex items-center justify-center",
                isActive
                  ? "bg-gray-200 text-black shadow-md shadow-black/20"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              )}
            >
              <span className="sm:hidden">
                {isActive ? item.title : item.title.charAt(0)}
              </span>
              <span className="hidden sm:inline">{item.title}</span>
            </button>
          );
        })}

        <div className="w-px h-6 bg-gray-200 mx-1 sm:mx-2" />

        <button className="px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-b from-[#585858] to-[#1a1a1a] text-white shadow-inner shadow-black/30 hover:brightness-110 transition-all duration-200">
          <span className="hidden md:inline">Ask AI</span>
          <span className="inline md:hidden">AI</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
