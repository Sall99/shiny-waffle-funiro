"use client";
import React from "react";

import { Button, Feature, HeroSection, Input, Layout } from "@/components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema } from "@/constants/validation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { selectCart, selectCartItems } from "@/store";
import { truncateTitle } from "@/utils";

type checkoutFormValues = {
  lname: string;
  fname: string;
  companyName?: string;
  countryRegion: string;
  street: string;
  townCity: string;
  province?: string;
  phone: string;
  zipCode: string;
  email: string;
  additionalInfo?: string;
};

export default function Checkout() {
  const t = useTranslations("Checkout");
  const items = useSelector(selectCartItems);
  const cart = useSelector(selectCart);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<checkoutFormValues>({
    resolver: yupResolver(checkoutSchema),
  });

  const onSubmit = (data: checkoutFormValues) => {
    console.log("Form Data: ", data);
  };

  return (
    <section>
      <HeroSection title="Checkout" />
      <Layout className="mt-16 flex flex-col items-center justify-center gap-4 px-5 md:items-start md:px-0 lg:flex-row">
        <div className="pb-_75 pt-9 md:w-_608 md:px-_75">
          <h2 className="mb-9 text-lg font-bold">{t("billingDetails")}</h2>
          <form className="flex flex-col gap-4">
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
            </div>
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
              <li className="">{t("creditCard")}</li>
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
