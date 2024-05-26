import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface HomeHeroSectionProps {
  title: string;
}

export function HeroSection({ title }: HomeHeroSectionProps) {
  return (
    <div className="bg-hero-pattern h-_316 flex w-full items-center justify-center bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center">
        <div className="relative h-_30 w-_50">
          <Image
            src="/images/logo.png"
            alt="logo"
            fill
            sizes="(max-width: 768px) 50px, (max-width: 1200px) 50px, 50px"
          />
        </div>

        <h2 className="mt-4 font-poppins text-4xl font-semibold">{title}</h2>

        <div className="mt-2 flex gap-4">
          <p className="flex items-center gap-2 font-semibold">
            <span>Home</span> <ChevronRight size={20} />
          </p>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
