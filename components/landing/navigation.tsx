"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#features", label: "Features" },
    { href: "/matches", label: "Matches" },
    { href: "/news", label: "News" },
    { href: "/#about", label: "About" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-900/95 backdrop-blur-lg shadow-lg border-b border-neutral-800"
          : "bg-black/50 backdrop-blur-sm border-b border-neutral-800/50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
              <Image
                src="/web-app-manifest-192x192.png"
                alt="Afrigoals Logo"
                width={48}
                height={48}
                className="w-12 h-12 relative z-10 transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-white">
                AFRIGOALS
              </span>
              <span className="text-xs text-neutral-400 font-medium tracking-wider">
                AFRICAN FOOTBALL
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-5 py-2.5 text-sm font-semibold text-neutral-300 hover:text-white rounded-lg transition-all duration-200 group"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-neutral-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              onClick={() => router.push("/admin")}
              className="text-neutral-300 hover:text-white hover:bg-neutral-800 font-semibold px-6"
            >
              Sign In
            </Button>
            <Button
              onClick={() => router.push("/admin")}
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-2.5 shadow-lg transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-neutral-300 hover:bg-neutral-800 hover:text-white rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 sm:px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 space-y-2 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={() => {
                  router.push("/admin");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full"
              >
                Sign In
              </Button>
              <Button
                onClick={() => {
                  router.push("/admin");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-primary-600 hover:bg-primary-700"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
