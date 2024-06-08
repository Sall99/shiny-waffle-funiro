"use client";
import React, { useState } from "react";
import useSWR from "swr";

import { Button } from "../button";
import { Recent } from "./recent";
import { QuickAccess } from "./quick-access";
import { Result } from "./result";
import { NoResult } from "./no-result";
import { getSearch } from "@/actions";
import { Modal } from "@/components";
import { useTranslations } from "next-intl";

interface SearchProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Search({ isOpen, setIsOpen }: SearchProps) {
  const t = useTranslations("Search");
  const [search, setSearched] = useState("");
  const result = false;

  const { error, data, isLoading } = useSWR(
    search ? ["search", search] : null,
    () => getSearch(search),
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} variant="secondary">
      <form>
        <div className="relative">
          <input
            type="search"
            className="w-full border-2 border-orange-500 py-2 pl-5 placeholder:text-sm focus:outline-none"
            placeholder={t("placeholder")}
            onChange={(e) => setSearched(e.target.value)}
          />
          <Button
            label={t("search")}
            className="absolute bottom-2 right-5 h-7 w-20 capitalize"
          />
        </div>
      </form>
      <div className="mt-4 flex gap-4 pt-8">
        {search.length === 0 ? (
          <>
            <Recent />
            <QuickAccess />
          </>
        ) : (
          <>
            {data && data.length > 0 ? (
              <>
                <Recent />
                <Result data={data} isLoading={isLoading} />
              </>
            ) : (
              <NoResult search={search} />
            )}
          </>
        )}
      </div>
    </Modal>
  );
}
