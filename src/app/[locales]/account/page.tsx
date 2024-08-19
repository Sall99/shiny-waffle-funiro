"use client";
import React, { useState } from "react";
import { AddressBook, Layout, UserInformation } from "@/components";
import { AccountBart } from "@/components/ui/account/bart";
import { TabName } from "@/types";

const tabComponents: Record<TabName, React.ReactNode> = {
  accountInformation: <UserInformation />,
  addressBook: <AddressBook />,
  // To fix
  myOrders: <UserInformation />,
};

export default function Account() {
  const [activeTab, setActiveTab] = useState<TabName>("accountInformation");

  return (
    <Layout>
      <div className="mb-28 mt-16 flex w-full gap-9">
        <AccountBart activeTab={activeTab} setActiveTab={setActiveTab} />
        {tabComponents[activeTab]}
      </div>
    </Layout>
  );
}
