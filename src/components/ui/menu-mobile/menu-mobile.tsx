"use client";
import React, { useEffect } from "react";
import { ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

interface MenuMobileProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const links = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const linksUser = [
  { title: "Account", imageSrc: "Account.png", path: "/account" },
  { title: "Help", imageSrc: "Help.png", path: "/help" },
  { title: "Newsletter", imageSrc: "Newsletter.png", path: "/newsletter" },
];

export default function MenuMobile({ isOpen, setIsOpen }: MenuMobileProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={clsx(
        "absolute inset-0 transition-transform duration-500 ease-in-out md:hidden",
        isOpen ? "translate-x-0" : "-translate-x-_1000",
      )}
    >
      <div className="relative">
        <div className="absolute z-30 h-screen w-80 bg-accent px-4">
          <div className="flex h-14 flex-col items-end justify-end">
            <X onClick={() => setIsOpen(false)} />
          </div>
          <div className="pt-6">
            <ul>
              {links.map(({ name, path }, index) => (
                <li key={index} className="h-12">
                  <Link
                    href={path}
                    className="flex items-center justify-between font-semibold"
                  >
                    <span>{name}</span>
                    <ChevronRight width={24} height={24} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 flex h-11 items-center justify-center gap-3 border border-s-accent-foreground">
            <Image src="/images/Pin.png" alt="map-in" width={16} height={16} />
            <p>Store location</p>
          </div>

          <div className="mt-6">
            <ul>
              {linksUser.map(({ title, imageSrc, path }, index) => (
                <li key={index} className="h-10">
                  <Link href={path} className="flex items-center gap-2">
                    <Image
                      src={`/images/${imageSrc}`}
                      alt={title}
                      width={16}
                      height={16}
                    />
                    <p>{title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={clsx(
            "fixed left-0 top-0 z-20  h-screen w-screen",
            isOpen ? "block backdrop-blur-sm" : "hidden",
          )}
          onClick={() => setIsOpen(false)}
        ></div>
      </div>
    </div>
  );
}
