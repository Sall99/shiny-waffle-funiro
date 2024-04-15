"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/constants/validation";
import { Button, Input, SocialLoginButton } from "@/components";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Link from "next/link";

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

  const onSubmit: SubmitHandler<loginFormValues> = (values) => {
    console.log(values);
  };

  return (
    <div className="mb-56 mt-28 flex flex-col items-center justify-center px-6 font-poppins">
      <h2 className="mb-10 text-left font-bold uppercase">{t("Login")}</h2>
      <div className="w-full sm:w-_500">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-8 sm:w-_500"
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
          {t("doNotHaveAnAccount")}{" "}
          <Link
            href="/auth/create-account"
            className="text-orange-500 underline"
          >
            {t("createIt")}
          </Link>
        </p>
      </div>
    </div>
  );
}
