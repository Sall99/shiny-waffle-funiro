"use client";
import React, { useState } from "react";
import {
  AccountOrders,
  AddressBook,
  Layout,
  UserInformation,
} from "@/components";
import { AccountBart } from "@/components/ui/account/bart";
import { TabName } from "@/types";

const tabComponents: Record<TabName, React.ReactNode> = {
  accountInformation: <UserInformation />,
  addressBook: <AddressBook />,
  myOrders: <AccountOrders />,
};

export default function Account() {
  const [activeTab, setActiveTab] = useState<TabName>("accountInformation");

  return (
    <Layout>
      <div className="mb-28 mt-16 flex w-full gap-4 px-4 sm:gap-9 lg:px-14">
        <AccountBart activeTab={activeTab} setActiveTab={setActiveTab} />
        {tabComponents[activeTab]}
      </div>
    </Layout>
  );
}
