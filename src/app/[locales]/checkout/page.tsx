"use client";
import React from "react";

import { Button, HeroSection, Input, Layout } from "@/components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema } from "@/constants/validation";
import Link from "next/link";

type checkoutFormValues = {
  lname: string;
  fname: string;
  companyName?: string;
  countryRegion: string;
  street: string;
  townCity: string;
  province?: string;
  phone: string;
  zipCode: number;
  email: string;
  additionalInfo?: string;
};

export default function Checkout() {
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
      <Layout className="mt-16 flex flex-col items-center justify-center gap-4 px-5 md:px-0 lg:flex-row">
        <div className="pb-_75 pt-9 md:w-_608 md:px-_75">
          <h2 className="mb-9 text-lg font-bold">Billing details</h2>
          <form className="flex flex-col gap-4">
            <div className="flex justify-between gap-8">
              <Input
                name="fname"
                type="text"
                placeholder=""
                label
                labelText="First Name"
                border
                register={register}
                errors={errors}
              />
              <Input
                name="lname"
                type="text"
                placeholder=""
                label
                labelText="Last Name"
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
                labelText="Company Name (Optional)"
                border
                register={register}
                errors={errors}
              />
              <Input
                name="countryRegion"
                type="text"
                placeholder=""
                label
                labelText="Country / Region"
                border
                register={register}
                errors={errors}
              />
              <Input
                name="street"
                type="text"
                placeholder=""
                label
                labelText="Street address"
                border
                register={register}
                errors={errors}
              />
              <Input
                name="townCity"
                type="text"
                placeholder=""
                label
                labelText="Town / City"
                border
                register={register}
                errors={errors}
              />

              <Input
                name="province"
                type="text"
                placeholder=""
                label
                labelText="Province (Optional)"
                border
                register={register}
                errors={errors}
              />
              <Input
                name="zipCode"
                type="text"
                placeholder=""
                label
                labelText="Zip code"
                border
                register={register}
                errors={errors}
              />
              <Input
                name="phone"
                type="text"
                placeholder=""
                label
                labelText="Phone"
                border
                register={register}
                errors={errors}
              />
              <Input
                name="email"
                type="text"
                placeholder=""
                label
                labelText="Email address"
                border
                register={register}
                errors={errors}
              />
              <Input
                name="additionalInfo"
                type="text"
                placeholder=""
                label
                labelText="Additional information (Optional)"
                border
                register={register}
                errors={errors}
              />
            </div>
          </form>
        </div>
        <div className="pmd:x-_75 flex flex-col gap-4 py-_102 font-medium md:w-_608 lg:px-9">
          <h2 className="flex justify-between font-semibold">
            <span>Product</span>
            <span>Subtotal</span>
          </h2>
          <p className="flex justify-between">
            <span className="text-gray-500">Asgaard sofa x 1</span>
            <span>250.00 usd</span>
          </p>
          <p className="flex justify-between">
            <span>Total</span>
            <span className="font-semibold text-orange-500">250.00 usd</span>
          </p>

          <div className="border-gray-600 mt-4 border"></div>

          <div>
            <ul className="list-disc">
              <li className="">Credit card</li>
              <p className="mt-4 text-sm font-light">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <Link href="/private-policy" className="font-semibold">
                  privacy policy
                </Link>
                .
              </p>
            </ul>
            <div className="mt-8 text-center">
              <Button
                variant="tertiary"
                label={"Place order"}
                onClick={handleSubmit(onSubmit)}
              />
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}
