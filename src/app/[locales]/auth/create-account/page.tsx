"use client";

import React, { useState, useCallback } from "react";
import { signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Link from "next/link";
import toast from "react-hot-toast";

import { createAccountSchema } from "@/constants/validation";
import { Button, Input, SocialLoginButton } from "@/components";
import { createAccountFormValues } from "@/types/auth";
import { resisterAction } from "@/actions/auth.action";
import { AxiosError } from "axios";

const Login: React.FC = () => {
  const t = useTranslations("createAccount");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<createAccountFormValues>({
    resolver: yupResolver(createAccountSchema),
  });

  const onSubmit: SubmitHandler<createAccountFormValues> = useCallback(
    async (values) => {
      setIsLoading(true);
      try {
        await resisterAction(values);
        toast.success(t("accountCreated"));
        router.push("/auth/login");
      } catch (error) {
        if (error instanceof AxiosError && error.response) {
          toast.error(error.response.data?.error || "An error occurred");
        } else {
          toast.error("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    },
    [router, t],
  );

  const handleSocialLogin = useCallback(
    (provider: string) => () => {
      signIn(provider, { redirect: false, callbackUrl: "/" });
    },
    [],
  );

  return (
    <section className="mb-56 mt-20 flex flex-col items-center justify-center px-6 font-poppins sm:mt-9">
      <h2 className="mb-10 text-left font-bold uppercase">
        {t("createAccount")}
      </h2>
      <div className="w-full sm:w-[500px]">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
          <div className="flex justify-between gap-9">
            <Input
              name="fname"
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
            className="h-10 w-44 text-left text-sm font-bold uppercase"
            variant="black"
            loading={isLoading}
          />
        </form>

        <div className="my-9 text-center text-gray-400">- {t("OR")} -</div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-9">
          <SocialLoginButton
            icon={
              <Image
                src="/svg/googleIcon.svg"
                priority
                width={20}
                height={20}
                alt="Google login"
              />
            }
            label={t("loginGoogle")}
            onClick={handleSocialLogin("google")}
          />
          <SocialLoginButton
            icon={<FaGithub className="text-xl" />}
            label={t("loginGithub")}
            onClick={handleSocialLogin("github")}
          />
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
};

export default Login;
