"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createAccountSchema, loginSchema } from "@/constants/validation";
import { Button, Input, SocialLoginButton } from "@/components";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Link from "next/link";

type createAccountFormValues = {
  email: string;
  password: string;
  name: string;
  lname: string;
  confirmPassword: string;
};

export default function Login() {
  const t = useTranslations("createAccount");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<createAccountFormValues>({
    resolver: yupResolver(createAccountSchema),
  });

  const onSubmit: SubmitHandler<createAccountFormValues> = (values) => {
    console.log(values);
  };

  return (
    <section className="mb-56 mt-20 flex flex-col items-center justify-center px-6 font-poppins sm:mt-9">
      <h2 className="mb-10 text-left font-bold uppercase">
        {t("createAccount")}
      </h2>
      <div className="w-full sm:w-_500">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 sm:w-_500"
        >
          <div className="flex justify-between gap-9">
            <Input
              name="name"
              type="text"
              placeholder={t("name")}
              register={register}
              errors={errors}
            />
            <Input
              name="lname"
              type="text"
              placeholder={t("lName")}
              register={register}
              errors={errors}
            />
          </div>
          <Input
            name="email"
            type="email"
            placeholder={t("emailAddresse")}
            register={register}
            errors={errors}
          />
          <Input
            name="password"
            type="password"
            placeholder={t("Password")}
            register={register}
            errors={errors}
          />
          <Input
            name="confirmPassword"
            type="password"
            placeholder={t("confirmPassword")}
            register={register}
            errors={errors}
          />
          <Button
            type="submit"
            label={t("createAccount")}
            className="h-10 w-36 text-left text-sm font-bold uppercase"
            variant="black"
          />
        </form>

        <h1 className="my-9 text-center text-gray-400">- {t("OR")} -</h1>

        <div className="flex flex-col">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:gap-9">
            <SocialLoginButton
              icon={
                <Image
                  src="/svg/googleIcon.svg"
                  priority
                  width={20}
                  height={20}
                  alt=""
                />
              }
              label={t("loginGoogle")}
            />

            <SocialLoginButton
              icon={<FaApple className="text-xl" />}
              label={t("loginApple")}
            />
          </div>
        </div>
        <p className="mt-4 text-xs">
          {t("haveAnAccount")}{" "}
          <Link href="/auth/login" className="text-orange-500 underline">
            {t("login")}
          </Link>
        </p>
      </div>
    </section>
  );
}
