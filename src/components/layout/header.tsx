"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Heart, Search, ShoppingCart, User } from "lucide-react";

import { Layout } from ".";
import { Menu } from "../svg";
import MenuMobile from "../ui/menu-mobile/menu-mobile";
import { LocalSwitcher } from "@/components";

const links = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const iconLinks = [
  { Icon: User, path: "/account", hidde: false },
  { Icon: Search, path: "/search", hidde: false },
  { Icon: Heart, path: "/favoris", hidde: true },
  { Icon: ShoppingCart, path: "/cart", hidde: false },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={clsx(
        "transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-white fixed left-0 right-0 top-0 z-50 bg-white-100 shadow"
          : "relative",
      )}
    >
      <Layout className="flex items-center justify-between px-4 py-_30 lg:px-14 ">
        <div className="flex items-center gap-2">
          <div className="md:hidden" onClick={toggleMenu}>
            <Menu />
          </div>
          <Link href="/" className="flex items-center">
            <div className="relative h-_30 w-_50">
              <Image
                src="/images/logo.png"
                alt="logo"
                fill
                sizes="(max-width: 768px) 50px, (max-width: 1200px) 50px, 50px"
              />
            </div>
            <h2 className="gap-1 font-montserrat text-xl font-bold md:text-2xl lg:text-2xl">
              Furniro
            </h2>
          </Link>
        </div>

        <div className="hidden transition duration-500 ease-in md:flex md:gap-10 lg:gap-12">
          {links.map((link, key) => (
            <Link
              href={link.path}
              key={key}
              className="font-poppins text-base font-semibold hover:text-muted-foreground"
            >
              {/* {t(link.name)} */}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6 md:gap-8">
          <LocalSwitcher />
          <div className="flex gap-6 md:gap-8">
            {iconLinks.map((link, key) => (
              <Link
                href={link.path}
                key={key}
                className={clsx(
                  "font-poppins hover:text-muted-foreground",
                  link.hidde ? "hidden md:block" : "",
                )}
              >
                <link.Icon width={18} height={18} />
              </Link>
            ))}
          </div>
        </div>
      </Layout>
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}

export default Header;
