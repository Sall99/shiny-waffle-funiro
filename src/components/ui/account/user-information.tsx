"use client";
import React, { useState } from "react";
import { Input } from "../input";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserInformationSchema } from "@/constants/validation";
import { UserInformatioFormValues } from "@/types";
import { Button } from "../button";

export const UserInformation = () => {
  const t = useTranslations("UserInformation");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserInformatioFormValues>({
    resolver: yupResolver(UserInformationSchema),
  });

  const onSubmit: SubmitHandler<UserInformatioFormValues> = (values) => {};

  return (
    <div className="w-full pt-10">
      <h2 className="mb-4 font-semibold">User Information</h2>
      <form className="border border-gray-300 p-16">
        <div className="flex w-96 flex-col gap-4">
          <Input
            name="fname"
            type="text"
            placeholder={t("name")}
            register={register}
            errors={errors}
            border
            labelText={t("firstName")}
            label
          />
          <Input
            name="lname"
            type="text"
            placeholder={t("lName")}
            register={register}
            errors={errors}
            border
            labelText={t("lastName")}
            label
          />
          <Input
            name="email"
            type="email"
            placeholder={t("emailAddresse")}
            register={register}
            errors={errors}
            border
            labelText="Email"
            label
          />
          <Button
            type="submit"
            label={t("saveChanges")}
            className="mt-10 h-10 w-44 text-left text-sm font-bold uppercase"
            variant="primary"
            loading={isLoading}
          />
        </div>
      </form>
    </div>
  );
};
