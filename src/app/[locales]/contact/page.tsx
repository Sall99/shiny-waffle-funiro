"use client";
import React, { useState } from "react";
import { Clock4, MapPin, Phone } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

import { contactSchema } from "@/constants/validation";
import { Button, Feature, HeroSection, Input, Layout } from "@/components";
import { contactAction } from "@/actions/contact.action";

type contactFormValues = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const t = useTranslations("Contact");
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<contactFormValues>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<contactFormValues> = (values) => {
    setIsLoading(true);
    contactAction(values)
      .then((result) => {
        toast.success(t("submissionSuccess"));
        setIsLoading(false);
        reset();
      })
      .catch((error) => {
        toast.error("error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <section className="px-5">
      <HeroSection title="Contact" />
      <Layout className="pb-16 pt-24">
        <div className="text-center">
          <h2 className="text-lg font-bold capitalize">{t("getInTouch")}</h2>
          <p className="mt-4 text-sm text-gray-500">
            {t("ForMore")}
            <br /> {t("AnEmail")}
          </p>
        </div>

        <div className="m-auto mt-_102 flex flex-col-reverse  justify-center gap-8 lg:w-_1000 lg:flex-row">
          <div className="w-full lg:w-72">
            <ul className="flex flex-col gap-4 md:gap-11 lg:flex-col">
              <li>
                <div>
                  <MapPin />
                  <p className="font-semibold">{t("Address")}</p>
                  <address className="text-sm">
                    236 5th SE Avenue, New <br /> York NY10000, United <br />{" "}
                    States
                  </address>
                </div>
              </li>
              <li>
                <div>
                  <Phone />
                  <p className="font-semibold">{t("Phone")}</p>
                  <p className="text-sm">
                    Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <Clock4 />
                  <p className="font-semibold">{t("workingTime")}</p>
                  <p className="text-sm">
                    {t("Monday-Friday")}: 9:00 - 22:00 <br />{" "}
                    {t("Saturday-Sunday")}: 9:00 - 21:00
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-_635 lg:px-14">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-9"
            >
              <Input
                name="name"
                type="text"
                placeholder="Abc"
                label
                labelText={t("yourName")}
                border
                register={register}
                errors={errors}
              />
              <Input
                name="email"
                type="text"
                placeholder="Abc@def.com"
                label
                labelText={t("emailAddress")}
                border
                register={register}
                errors={errors}
              />
              <Input
                name="subject"
                type="text"
                placeholder={t("optional")}
                label
                labelText="Subject"
                border
                register={register}
                errors={errors}
              />
              <Input
                name="message"
                type="textarea"
                placeholder={t("Hi")}
                label
                labelText="Message"
                border
                register={register}
                errors={errors}
              />

              <Button
                label={t("Submit")}
                variant="primary"
                className="w-_245 rounded-md py-4"
                loading={isLoading}
              />
            </form>
          </div>
        </div>
      </Layout>
      <Feature />
    </section>
  );
}

export default Contact;
