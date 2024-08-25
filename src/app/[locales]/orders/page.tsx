"use client";
import React from "react";
import useSWR from "swr";

import { getOrders } from "@/actions";
import { Layout } from "@/components";

const Orders = () => {
  const { error, data, isLoading } = useSWR(["Orders"], getOrders, {
    revalidateOnFocus: false,
  });

  console.log("data", data);

  return <Layout className="px-5 pb-20 pt-10 lg:pb-40">Orders</Layout>;
};

export default Orders;
