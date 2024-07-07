"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FaApple } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

import { loginSchema } from "@/constants/validation";
import { Button, Input, SocialLoginButton } from "@/components";

type loginFormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const t = useTranslations("Login");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<loginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<loginFormValues> = (values) => {
    setIsLoading(true);

    signIn("credentials", {
      ...values,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success(t("loggedIn"));
        router.refresh();
        router.push("/");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
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
            className={clsx("h-10 w-40 text-left text-sm font-bold uppercase")}
            variant="black"
            loading={isLoading}
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
              onClick={() =>
                signIn("google", { redirect: false, callbackUrl: "/" })
              }
            />

            <SocialLoginButton
              icon={<FaApple className="text-xl" />}
              label={t("loginGithub")}
              onClick={() =>
                signIn("github", { redirect: false, callbackUrl: "/" })
              }
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
