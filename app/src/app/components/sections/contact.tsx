"use client";
import React from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { ContactFieldType } from "@/types";
import { Input, TextArea } from "@/ui/input";
import { Button } from "../ui";

export const ContactMe = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<ContactFieldType>();

  const onSubmit: SubmitHandler<ContactFieldType> = (data, e: any) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="container flex flex-col gap-6 py-12 lg:py-24 max-w-7xl mx-auto">
      <h1 className="text3xl md:text-4xl lg:text-5xl font-bold">Contact me</h1>
      <form
        action=""
        className="flex flex-col gap-6 px-4 py-2 max-w-lg"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <Input
            {...register("name")}
            className="text-gray-900 focus:outline focus:outline-offset-2 focus:outline-white transition-all duration-200 placeholder:text-gray-600 "
            placeholder={"Enter your name"}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Input
            {...register("email", {
              required: "Email address is required",
            })}
            aria-invalid={errors.email ? "true" : "false"}
            className="text-gray-900 focus:outline focus:outline-offset-3 focus:outline-white transition-all duration-200 placeholder:text-gray-600 "
            placeholder={"Enter your email"}
          />
          {errors.message && (
            <span className="text-red-500">{errors.email?.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <TextArea
            aria-invalid={errors.message ? "true" : "false"}
            cols={60}
            rows={5}
            {...register("message", { required: "Please, enter a message" })}
            className="text-gray-900 overflow-y-hidden focus:outline focus:outline-offset-2 focus:outline-white transition-all duration-200 placeholder:text-gray-600 min-h-[70px] "
            placeholder={"Enter your message"}
          />
          {errors.message && (
            <span className="text-red-500">{errors.message?.message}</span>
          )}
        </div>
        <Button text="Submit" variant={"primary"} role="submit" type="submit" />
      </form>
    </div>
  );
};

export {};
