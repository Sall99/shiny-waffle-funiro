"use client";
import React from "react";
import useSWR from "swr";

import { getOrders } from "@/actions";
import { Layout, OrdersCard } from "@/components";
import { Order } from "@prisma/client";
import { OrderWithItems } from "@/types";

const Orders = () => {
  const { error, data, isLoading } = useSWR(["Orders"], getOrders, {
    revalidateOnFocus: false,
  });

  console.log("data", data);

  return (
    <Layout className="px-5 pb-20 pt-10 lg:pb-40">
      <h2 className="mb-8 text-xl font-semibold">My orders</h2>
      <div className="flex flex-col gap-8">
        {data?.orders &&
          data.orders.map(
            ({ id, status, total, createdAt, items }: OrderWithItems) => (
              <OrdersCard
                key={id}
                id={id}
                status={status}
                total={total}
                items={items}
                createdAt={createdAt}
              />
            ),
          )}
      </div>
    </Layout>
  );
};

export default Orders;
