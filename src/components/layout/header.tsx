"use client";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Heart, Search, ShoppingCart, User } from "lucide-react";

import { Layout } from ".";
import { Menu } from "../svg";
import MenuMobile from "../ui/menu-mobile/menu-mobile";

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

  const toggleMenu = () => {
    console.log("clicked");
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <nav className="relative">
      <Layout className="flex items-center justify-between px-4 py-_30 lg:px-14 ">
        <div className="flex items-center gap-2">
          <div className="md:hidden" onClick={toggleMenu}>
            <Menu />
          </div>
          <Link href="/" className="flex items-center">
            <div className="w-_50 relative h-_30">
              <Image
                src="/images/logo.png"
                alt="logo"
                fill
                sizes="(max-width: 768px) 50px, (max-width: 1200px) 50px, 50px"
              />
            </div>
            <h2 className="gap-1 font-montserrat text-xl font-bold md:text-2xl lg:text-_34">
              Furniro
            </h2>
          </Link>
        </div>

        <div className="hidden transition duration-500 ease-in md:flex md:gap-10 lg:gap-12">
          {links.map((link, key) => (
            <Link
              href={link.path}
              key={key}
              className="font-poppins text-base font-medium hover:text-muted-foreground"
            >
              {link.name}
            </Link>
          ))}
        </div>

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
              <link.Icon width={20} height={20} />
            </Link>
          ))}
        </div>
      </Layout>
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}

export default Header;
