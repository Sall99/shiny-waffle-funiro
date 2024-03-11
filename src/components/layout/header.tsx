"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, Search, ShoppingCart, User } from "lucide-react";

import { Layout } from ".";
import { Menu } from "../svg";
import MenuMobile from "../ui/menu-mobile/menu-mobile";
import { useState } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const iconLinks = [
  { Icon: User, path: "/account" },
  { Icon: Search, path: "/search" },
  { Icon: Heart, path: "/favoris" },
  { Icon: ShoppingCart, path: "/cart" },
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
            <Image src="/images/logo.png" width={50} height={30} alt="logo" />
            <h2 className="gap-1 font-montserrat text-xl font-bold md:text-2xl lg:text-_34">
              Furniro
            </h2>
          </Link>
        </div>

        <div className="hidden transition duration-500 ease-in md:flex md:gap-10 lg:gap-_75">
          {links.map((link, key) => (
            <Link
              href={link.path}
              key={key}
              className="font-poppins hover:text-muted-foreground"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-6 md:gap-11">
          {iconLinks.map((link, key) => (
            <Link
              href={link.path}
              key={key}
              className="font-poppins hover:text-muted-foreground"
            >
              <link.Icon width={22} height={22} />
            </Link>
          ))}
        </div>
      </Layout>
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}

export default Header;
