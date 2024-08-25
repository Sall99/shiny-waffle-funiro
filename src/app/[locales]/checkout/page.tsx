"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import { Button, Feature, HeroSection, Input, Layout } from "@/components";
import { addressBookSchema } from "@/constants/validation";
import { clearCart, selectCart, selectCartItems } from "@/store";
import { truncateTitle } from "@/utils";
import { addressBookFormValues } from "@/types";
import {
  createAddressBook,
  getAddressBook,
  updateUserAddressBook,
  createOrderAction,
} from "@/actions";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const t = useTranslations("Checkout");
  const [isLoading, setIsLoading] = useState(false);
  const [userAddressBookData, setAddressBookData] =
    useState<addressBookFormValues | null>(null);

  const router = useRouter();
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const cart = useSelector(selectCart);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<addressBookFormValues>({
    resolver: yupResolver(addressBookSchema),
  });

  const loadAddressBook = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await getAddressBook();
      const address = result.data[0];
      if (address) {
        setAddressBookData(address);
        Object.keys(address).forEach((key) => {
          setValue(key as keyof addressBookFormValues, address[key]);
        });
      }
    } catch (error) {
      console.error("Failed to load address book:", error);
    } finally {
      setIsLoading(false);
    }
  }, [setValue]);

  useEffect(() => {
    loadAddressBook();
  }, [loadAddressBook]);

  const handleOrder = useCallback(
    async (addressBookId: string) => {
      try {
        setIsLoading(true);
        await createOrderAction({
          items: cart.items,
          total: cart.subTotal,
          addressBookId,
        });
        toast.success(t("orderSuccess"));
        dispatch(clearCart());
        router.push("/orders");
      } catch (error) {
        console.error("Failed to place order:", error);
        toast.error(t("orderError"));
      } finally {
        setIsLoading(false);
      }
    },
    [cart.items, cart.subTotal, t, dispatch, router],
  );

  const onSubmit = useCallback(
    async (values: addressBookFormValues) => {
      try {
        setIsLoading(true);
        if (userAddressBookData?.id) {
          await updateUserAddressBook(values);
          handleOrder(userAddressBookData.id);
        } else {
          const newAddress = await createAddressBook(values);

          handleOrder(newAddress.data.id);
        }
      } catch (error) {
        console.error("Error processing the form:", error);
        toast.error(t("error"));
      } finally {
        setIsLoading(false);
      }
    },
    [handleOrder, t, userAddressBookData],
  );

  const formFields = useMemo(
    () => [
      { name: "fname", label: t("firstName") },
      { name: "lname", label: t("lastName") },
      { name: "companyName", label: t("companyName") },
      { name: "countryRegion", label: t("Country/Region") },
      { name: "street", label: t("streetAddress") },
      { name: "townCity", label: t("Town/City") },
      { name: "province", label: t("Province") },
      { name: "zipCode", label: t("zipCode") },
      { name: "phone", label: t("Phone") },
      { name: "email", label: t("emailAddress") },
      { name: "additionalInfo", label: t("additionalInformation") },
    ],
    [t],
  );

  return (
    <section>
      <HeroSection title="Checkout" />
      <Layout className="mt-16 flex flex-col items-center justify-center gap-4 px-5 md:items-start md:px-0 lg:flex-row">
        <div className="pb-_75 pt-9 md:w-_608 md:px-_75">
          <h2 className="mb-9 text-lg font-bold">{t("billingDetails")}</h2>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {formFields.map(({ name, label }) => (
              <Input
                key={name}
                name={name}
                type="text"
                placeholder=""
                label
                labelText={label}
                border
                register={register}
                errors={errors}
              />
            ))}
          </form>
        </div>
        <div className="pmd:x-_75 flex flex-col gap-4 py-_102 font-medium md:w-_608 lg:px-9">
          <h2 className="flex justify-between font-semibold">
            <span>{t("Product")}</span>
            <span>{t("Subtotal")}</span>
          </h2>
          {items.map(({ id, title, promoPrice }) => (
            <p className="flex justify-between" key={id}>
              <span className="text-gray-500">
                {truncateTitle(title, 24)} x 1
              </span>
              <span>{promoPrice} USD</span>
            </p>
          ))}
          <p className="flex justify-between">
            <span>Total</span>
            <span className="font-semibold text-orange-500">
              {cart.subTotal} USD
            </span>
          </p>

          <div className="mt-4 border border-gray-600"></div>

          <div>
            <ul className="list-disc">
              <li>{t("creditCard")}</li>
              <p className="mt-4 text-sm font-light">
                {t("personalData")}
                <Link href="/private-policy" className="font-semibold">
                  {t("privacyPolicy")}
                </Link>
                .
              </p>
            </ul>
            <div className="mt-8 text-center">
              <Button
                variant="tertiary"
                label={t("placeOrder")}
                onClick={handleSubmit(onSubmit)}
              />
            </div>
          </div>
        </div>
      </Layout>
      <Feature />
    </section>
  );
}
