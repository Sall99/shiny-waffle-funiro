"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { FiUser } from "react-icons/fi";
import { RiContactsBook2Line } from "react-icons/ri";
import { PiGift } from "react-icons/pi";
import { useTranslations } from "next-intl";
import { IconType } from "react-icons/lib";
import { ChevronsLeft, ChevronsRight, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useMediaQuery } from "react-responsive";

import { TabName } from "@/types";

interface Link {
  name: TabName;
  link: string;
  Icon: IconType;
}

const links: Link[] = [
  { name: "accountInformation", link: "/account-information", Icon: FiUser },
  { name: "addressBook", link: "/address-book", Icon: RiContactsBook2Line },
  { name: "myOrders", link: "/orders", Icon: PiGift },
];

interface Props {
  activeTab: TabName;
  setActiveTab: (name: TabName) => void;
}

export const AccountBart = ({ setActiveTab }: Props) => {
  const t = useTranslations("AccountBart");
  const [collapsed, setCollapsed] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  const toggleCollapse = () => {
    if (!isTabletOrMobile) {
      setCollapsed(!collapsed);
    }
  };

  useEffect(() => {
    if (isTabletOrMobile) {
      setCollapsed(true);
    }
  }, [isTabletOrMobile]);

  return (
    <div
      className={clsx(
        "relative border border-gray-300 pt-10 transition-all duration-300",
        collapsed ? "w-14 sm:w-20" : "sm:w-80",
      )}
    >
      <div
        className={clsx(
          "absolute -right-6 top-0 cursor-pointer",
          isTabletOrMobile ? "hidden" : "block",
        )}
        onClick={toggleCollapse}
      >
        {collapsed ? (
          <ChevronsRight color="#B88E2F" />
        ) : (
          <ChevronsLeft color="#B88E2F" />
        )}
      </div>
      <h2
        className={clsx(
          "mb-4 text-center font-semibold transition-opacity duration-300",
          collapsed ? "opacity-0" : "opacity-100",
        )}
      >
        {t("accountDashboard")}
      </h2>
      <div className="flex h-[calc(100%-76px)] w-full flex-col justify-between">
        <ul>
          {links.map(({ name, Icon }, id) => (
            <li
              key={id}
              className="tab mb-4 bg-orange-300 py-4 text-xs font-semibold hover:cursor-pointer hover:bg-orange-200"
            >
              <p
                className="flex items-center justify-center gap-2 sm:px-8"
                onClick={() => setActiveTab(name)}
              >
                <span>
                  <Icon color="#B88E2F" size={24} />
                </span>

                <span
                  className={clsx(
                    "transition-opacity duration-300",
                    collapsed ? "invisible opacity-0" : "visible opacity-100",
                  )}
                  style={{ transitionDelay: collapsed ? "0ms" : "300ms" }}
                >
                  {!collapsed && t(name)}
                </span>
              </p>
            </li>
          ))}
        </ul>
        <p
          className="flex items-center justify-center gap-2"
          onClick={() => signOut()}
        >
          <LogOut color="#B88E2F" />
          <span
            className={`text-xs font-semibold uppercase hover:cursor-pointer ${
              collapsed ? "hidden" : "inline"
            }`}
          >
            {t("signout")}
          </span>
        </p>
      </div>
    </div>
  );
};
