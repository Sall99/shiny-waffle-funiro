"use client";
import React from "react";
import dayjs from "dayjs";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Button, Input } from "@/components";
import { useTranslations } from "next-intl";

const LINKS = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
] as const;

const HELP_LINKS = [
  { name: "PaymentOptions", path: "/payment-options" },
  { name: "Returns", path: "/returns-policies" },
  { name: "PrivacyPolicies", path: "/privacy-policies" },
] as const;

const SOCIAL_LINKS = {
  github: "https://github.com/Sall99",
  linkedin: "https://www.linkedin.com/in/sall99/",
} as const;

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = dayjs().year();

  const renderLinks = (links: typeof LINKS | typeof HELP_LINKS) => (
    <ul className="mt-14">
      {links.map(({ name, path }) => (
        <li key={path} className="mb-11 text-xs font-medium">
          <Link
            href={path}
            className="group/link relative block gap-1 overflow-hidden delay-75"
          >
            <span className="block tracking-[0.01em] transition-transform duration-500 group-hover/link:translate-y-[-100%]">
              {t(name)}
            </span>
            <span className="absolute left-0 block tracking-[0.01em] transition-transform duration-500 group-hover/link:translate-y-[-100%]">
              {t(name)}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="border-t border-gray-300 px-6 py-12 font-poppins md:px-_102 xl:pl-_102 xl:pr-52">
      <div className="flex flex-col justify-between border-b border-gray-300 pb-12 lg:h-_419 lg:flex-row lg:pb-0">
        <div>
          <h2 className="font-poppins font-bold">
            <Link
              href="/"
              className="group/link relative block gap-1 overflow-hidden delay-75"
            >
              <span className="block tracking-[0.01em] transition-transform duration-500 group-hover/link:translate-y-[-100%]">
                Furniro.
              </span>
              <span className="absolute left-0 block tracking-[0.01em] transition-transform duration-500 group-hover/link:translate-y-[-100%]">
                Furniro.
              </span>
            </Link>
          </h2>
          <p className="mt-14 text-sm text-gray-500">
            400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134
            USA
          </p>
        </div>
        <div className="lg:mt0 mt-12 flex justify-between md:gap-36 xl:gap-36">
          <div>
            <p className="text-sm text-gray-500">{t("Links")}</p>
            {renderLinks(LINKS)}
          </div>
          <div>
            <p className="text-sm text-gray-500">{t("Help")}</p>
            {renderLinks(HELP_LINKS)}
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">{t("Newstler")}</p>
          <div className="mt-14 flex items-center gap-4">
            <div className="w-52">
              <Input
                name="email"
                type="email"
                placeholder={t("newslterEmailPlaceholder")}
                classname="text-xs w-52 h-10"
              />
            </div>
            <Button
              variant="black"
              label={t("Subscribe")}
              className="h-10 text-xs font-medium uppercase"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 pt-9 text-sm">
        <p>
          <span className="underline">{currentYear}</span> &copy;{" "}
          {t("Copyright")}
        </p>
        <div className="flex gap-3">
          {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
            <Link
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              {name === "github" ? (
                <FaGithub fill="#B88E2F" />
              ) : (
                <FaLinkedinIn fill="#B88E2F" />
              )}
              <span className="sr-only">{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
