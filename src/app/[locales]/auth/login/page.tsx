"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/constants/validation";
import { Button, Input, LoginButton } from "@/components";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { useTranslations } from "next-intl";

type loginFormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const t = useTranslations("Login");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<loginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (values: loginFormValues) => {
    console.log(values);
  };

  return (
    <div className="mb-56 mt-28 flex flex-col items-center justify-center font-poppins">
      <h2 className="mb-10 text-left font-bold uppercase">{t("Login")}</h2>
      <div className="w-_500">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-_500 flex-col gap-8"
        >
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
          <Button
            type="submit"
            label={t("Login")}
            className="h-10 w-20 text-left text-sm font-bold uppercase"
            variant="black"
          />
        </form>

        <h1 className="my-9 text-center text-gray-400">- OR -</h1>

        <div className="flex flex-col">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:gap-9">
            <LoginButton
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

            <LoginButton
              icon={<FaApple className="text-xl" />}
              label={t("loginApple")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
