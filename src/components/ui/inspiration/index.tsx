"use client";
import React from "react";

import { Button } from "@/components";
import Products from "./products";

export function Inspiration() {
  return (
    <section className="mb-16 flex h-_586 justify-between bg-orange-200 py-11 pl-_102">
      <div className="flex h-full flex-col justify-center">
        <h2 className="text-lg font-bold capitalize">
          50+ Beautiful rooms <br /> inspiration
        </h2>
        <p className="mt-2 text-sm">
          Our designer already made a lot of beautiful <br /> prototipe of rooms
          that inspire you
        </p>
        <Button
          label="Explore"
          className="mt-6 h-_48 w-_176 text-base font-bold uppercase hover:bg-white-100"
          variant="primary"
        />
      </div>
      <div className="w-_876">
        <Products />
      </div>
    </section>
  );
}
