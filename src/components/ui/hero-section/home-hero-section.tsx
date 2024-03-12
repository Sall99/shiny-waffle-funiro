import React from "react";
import { Button } from "..";

export function HomeHeroSection() {
  return (
    <section className="h-_716 w-full bg-home-hero-pattern bg-cover bg-center bg-no-repeat">
      <div className="flex h-full w-full items-center justify-end px-4 md:pr-14">
        <div className="h-_443 w-_643 bg-orange-100 px-10 pt-16">
          <p className="mb-2 text-base font-normal">New arrival</p>
          <p className="text-3xl font-bold text-orange-500 md:text-5xl">
            Discover Our <br /> New Collection
          </p>
          <p className="mt-2 text-base font-normal">
            Indulge in luxury and style with our curated selection of products.
            Explore a world of elegance and functionality.
          </p>
          <Button
            label="Buy Now"
            className="mt-11 px-16 py-6 font-bold uppercase text-accent"
          />
        </div>
      </div>
    </section>
  );
}
