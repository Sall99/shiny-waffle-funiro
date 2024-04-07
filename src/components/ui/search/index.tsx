"use client";
import React from "react";
import { SearchModal } from "./modal";
import { Button } from "../button";
import { Recent } from "./recent";
import { QuickAccess } from "./quick-access";

interface SearchProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Search({ isOpen, setIsOpen }: SearchProps) {
  return (
    <SearchModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form>
        <div className="relative">
          <input
            type="search"
            className="w-full border-2 border-orange-500 py-2 pl-5 placeholder:text-sm focus:outline-none"
            placeholder="Search products, categories..."
          />
          <Button
            label="Search"
            className="absolute bottom-2 right-5 h-7 w-20"
          />
        </div>
      </form>
      <div className="mt-4 flex gap-4 pt-8">
        <Recent />
        <QuickAccess />
      </div>
    </SearchModal>
  );
}
