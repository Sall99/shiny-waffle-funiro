import Image from "next/image";
import Link from "next/link";
import { Heart, Search, ShoppingCart, User } from "lucide-react";

import { Layout } from ".";

const links = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const iconLinks = [
  { Icon: User, path: "" },
  { Icon: Search, path: "/search" },
  { Icon: Heart, path: "/favoris" },
  { Icon: ShoppingCart, path: "/cart" },
];

function Header() {
  return (
    <nav>
      <Layout className="py-_30 flex items-center justify-between px-4 lg:px-14 ">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" width={50} height={30} alt="logo" />
          <h2 className="lg:text-_34 font-montserrat gap-1 text-xl font-bold md:text-2xl">
            Furniro
          </h2>
        </Link>

        <div className="lg:gap-_75 hidden transition duration-500 ease-in md:flex md:gap-10">
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
    </nav>
  );
}

export default Header;
