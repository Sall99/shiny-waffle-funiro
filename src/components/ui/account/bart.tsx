import { TabName } from "@/types";
import { FiUser } from "react-icons/fi";
import { RiContactsBook2Line } from "react-icons/ri";
import { PiGift } from "react-icons/pi";
import { useTranslations } from "next-intl";
import React from "react";
import { IconType } from "react-icons/lib";
import { LogOut } from "lucide-react";

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
  return (
    <div className="w-_316 border border-gray-300 pt-10">
      <h2 className="mb-4 text-center font-semibold">
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
                className="flex items-center gap-2 px-8"
                onClick={() => setActiveTab(name)}
              >
                <Icon color="#B88E2F" size={24} />
                <span>{t(name)}</span>
              </p>
            </li>
          ))}
        </ul>
        <p className="flex items-center justify-center gap-2">
          <LogOut color="#B88E2F" />
          <span className="text-xs font-semibold uppercase hover:cursor-pointer">
            {t("signout")}
          </span>
        </p>
      </div>
    </div>
  );
};
