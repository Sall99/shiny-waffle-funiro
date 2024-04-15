"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";

interface TabsProps {
  tabs: { [key: string]: React.ReactNode };
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Tabs({ tabs }: TabsProps) {
  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="bg-blue-900/20 flex justify-center space-x-1 rounded-xl p-1">
          {Object.keys(tabs).map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                classNames(
                  "w-48 py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-blue-400 ring-offset-2 focus:outline-none",
                  selected ? "" : "text-gray-500",
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-9">
          {Object.values(tabs).map((content, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "bg-white rounded-xl p-3",
                "ring-white/60 ring-offset-blue-400 ring-offset-2 focus:outline-none",
              )}
            >
              {content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
