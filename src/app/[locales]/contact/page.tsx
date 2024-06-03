"use client";
import React from "react";
import { Clock4, MapPin, Phone } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { contactSchema } from "@/constants/validation";
import { Button, Feature, HeroSection, Input, Layout } from "@/components";

type contactFormValues = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

function Contact() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<contactFormValues>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<contactFormValues> = (values) => {
    console.log(values);
  };
  return (
    <section className="px-5">
      <HeroSection title="Contact" />
      <Layout className="pb-16 pt-24">
        <div className="text-center">
          <h2 className="text-lg font-bold capitalize">Get In Touch With Us</h2>
          <p className="mt-4 text-sm text-gray-500">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us <br /> An Email. Our Staff Always Be There To Help You
            Out. Do Not Hesitate!
          </p>
        </div>

        <div className="m-auto mt-_102 flex flex-col-reverse  justify-center gap-8 lg:w-_1000 lg:flex-row">
          <div className="w-full lg:w-72">
            <ul className="flex flex-col gap-4 md:gap-11 lg:flex-col">
              <li>
                <div>
                  <MapPin />
                  <p className="font-semibold">Address</p>
                  <address className="text-sm">
                    236 5th SE Avenue, New <br /> York NY10000, United <br />{" "}
                    States
                  </address>
                </div>
              </li>
              <li>
                <div>
                  <Phone />
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm">
                    Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <Clock4 />
                  <p className="font-semibold">Working Time</p>
                  <p className="text-sm">
                    Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 -
                    21:00
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
                labelText="Your name"
                border
                register={register}
                errors={errors}
              />
              <Input
                name="email"
                type="text"
                placeholder="Abc@def.com"
                label
                labelText="Email address"
                border
                register={register}
                errors={errors}
              />
              <Input
                name="subject"
                type="text"
                placeholder="This is an optional"
                label
                labelText="Subject"
                border
                register={register}
                errors={errors}
              />
              <Input
                name="message"
                type="textarea"
                placeholder="Hi! i’d like to ask about"
                label
                labelText="Message"
                border
                register={register}
                errors={errors}
              />

              <Button
                label="Submit"
                variant="primary"
                className="w-_245 rounded-md py-4"
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
