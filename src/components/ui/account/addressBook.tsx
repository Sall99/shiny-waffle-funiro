"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../input";
import { addressBookFormValues } from "@/types";
import { addressBookSchema } from "@/constants/validation";
import { Button } from "../button";
import {
  createAddressBook,
  getAddressBook,
  updateUserAddressBook,
} from "@/actions";
import toast from "react-hot-toast";

export const AddressBook = () => {
  const t = useTranslations("AddressBook");
  const [isLoading, setIsLoading] = useState(false);
  const [userAddressBookData, setAddressBookData] =
    useState<addressBookFormValues | null>(null);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<addressBookFormValues>({
    resolver: yupResolver(addressBookSchema),
  });

  useEffect(() => {
    setIsLoading(true);
    getAddressBook()
      .then((result) => {
        const address = result.data[0];
        if (address) {
          setAddressBookData(address);
          Object.keys(address).forEach((key) => {
            setValue(key as keyof addressBookFormValues, address[key]);
          });
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setValue]);

  const onSubmit: SubmitHandler<addressBookFormValues> = (values) => {
    setIsLoading(true);

    if (userAddressBookData) {
      updateUserAddressBook(values)
        .then(() => {
          toast.success(t("addressBookUpdated"));
        })
        .catch(() => {
          toast.error(t("error"));
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      createAddressBook(values)
        .then(() => {
          toast.success(t("addressBookCreated"));
        })
        .catch(() => {
          toast.error(t("error"));
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="w-full pt-10">
      <h2 className="mb-4 font-semibold">{t("addressBook")}</h2>
      <div className="border border-gray-300 p-16">
        <form
          className="flex w-96 flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-between gap-8">
            <Input
              name="fname"
              type="text"
              placeholder=""
              label
              labelText={t("firstName")}
              border
              register={register}
              errors={errors}
            />
            <Input
              name="lname"
              type="text"
              placeholder=""
              label
              labelText={t("lastName")}
              border
              register={register}
              errors={errors}
            />
          </div>
          <div className="flex flex-col gap-8">
            <Input
              name="companyName"
              type="text"
              placeholder=""
              label
              labelText={t("companyName")}
              border
              register={register}
              errors={errors}
            />
            <Input
              name="countryRegion"
              type="text"
              placeholder=""
              label
              labelText={t("Country/Region")}
              border
              register={register}
              errors={errors}
            />
            <Input
              name="street"
              type="text"
              placeholder=""
              label
              labelText={t("streetAddress")}
              border
              register={register}
              errors={errors}
            />
            <Input
              name="townCity"
              type="text"
              placeholder=""
              label
              labelText={t("Town/City")}
              border
              register={register}
              errors={errors}
            />
            <Input
              name="province"
              type="text"
              placeholder=""
              label
              labelText={t("Province")}
              border
              register={register}
              errors={errors}
            />
            <Input
              name="zipCode"
              type="text"
              placeholder=""
              label
              labelText={t("zipCode")}
              border
              register={register}
              errors={errors}
            />
            <Input
              name="phone"
              type="text"
              placeholder=""
              label
              labelText={t("Phone")}
              border
              register={register}
              errors={errors}
            />
            <Input
              name="email"
              type="text"
              placeholder=""
              label
              labelText={t("emailAddress")}
              border
              register={register}
              errors={errors}
            />
            <Input
              name="additionalInfo"
              type="text"
              placeholder=""
              label
              labelText={t("additionalInformation")}
              border
              register={register}
              errors={errors}
            />

            <Button
              className="mt-10 h-10 w-44 text-left text-sm font-bold uppercase"
              type="submit"
              variant="primary"
              label={userAddressBookData ? t("update") : t("saveChanges")}
              loading={isLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
