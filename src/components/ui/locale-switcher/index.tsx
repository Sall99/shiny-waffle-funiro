"use client";
import { Fragment, useState, useTransition } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const locales = [{ name: "en" }, { name: "fr" }];

export function LocalSwitcher() {
  const [selected, setSelected] = useState(locales[0]);

  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (selectedLocal: string) => {
    startTransition(() => {
      router.replace(`/${selectedLocal}`);
    });
  };

  return (
    <div className="w-20">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="bg-white focus-visible:border-indigo-500 focus-visible:ring-white/75 focus-visible:ring-offset-orange-300 relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:text-sm">
            <span className="block truncate">{localActive}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="text-gray-400 h-5 w-5"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="bg-white ring-black/5 absolute mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-orange-500 focus:outline-none sm:text-sm">
              {locales.map((locale, localeIdx) => (
                <Listbox.Option
                  key={localeIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 hover:cursor-pointer ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={locale}
                  onClick={() => onSelectChange(locale.name)}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {locale.name}
                      </span>
                      {localActive === locale.name ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <CheckIcon className="h-4 w-4" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
