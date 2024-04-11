"use client";
import React from "react";
import { RotateCw, X } from "lucide-react";

export function Recent() {
  return (
    <div className="search w-80">
      <div>
        <h2 className="w-80 text-sm font-medium">Recent searches</h2>
        <ul className="mt-4">
          <li className="mb-6 flex justify-between">
            <span className="flex items-center gap-4 text-xs">
              <RotateCw size={18} />
              <span>adidas trainers</span>
            </span>
            <X size={18} />
          </li>
          <li className="mb-6 flex justify-between">
            <span className="flex items-center gap-4 text-xs">
              <RotateCw size={18} />
              <span>adidas trainers</span>
            </span>
            <X size={18} />
          </li>
          <li className="mb-6 flex justify-between">
            <span className="flex items-center gap-4 text-xs">
              <RotateCw size={18} />
              <span>adidas trainers</span>
            </span>
            <X size={18} />
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-sm font-medium">Popular Searches</h2>
        <ul className="mt-4 grid grid-cols-3 gap-4">
          <li className="bg-gray-100 px-2 py-2 text-xs">low sneakers</li>
          <li className="bg-gray-100 px-2 py-2 text-xs">low sneakers</li>
          <li className="bg-gray-100 px-2 py-2 text-xs">low sneakers</li>
          <li className="bg-gray-100 px-2 py-2 text-xs">low sneakers</li>
        </ul>
      </div>
    </div>
  );
}
