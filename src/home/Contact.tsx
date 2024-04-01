/* eslint-disable @next/next/no-img-element */
import React from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import { Header } from "../components/header";
import Button from "../components/button";
import { FiSend } from "react-icons/fi";

interface IFormInput {
  name: String;
  email: String;
  message: String;
}

const inputStyle =
  "bg-gray-100 px-4 py-2 w-full rounded-lg border-none outline-none my-2 placeholder:capitalize font-semibold font-inter";
const errorStyle = "text-red-700 my-1 text-sm capitalize";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data: any, e: any) => {
    emailjs
      .send("service_hsvsftt", "template_brr0qvb", data, "CyMbXRk8pnr8YsgLJ")
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Message sent", {
              position: "bottom-right",
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="w-full pt-16 bg-skin-background" id="contact">
      <Header
        name="Send me a message!"
        description="Got a question or proposal, or just want to say hello? Feel free to reach out to me!"
      />
      <div className="w-[90%] mx-auto lg:w-[80%] md:flex flex md:flex-row flex-col items-center md:gap-10 gap-1">
        <form
          data-testid="form"
          onSubmit={handleSubmit(onSubmit)}
          className="font-Lato w-full mx-auto flex gap-2 flex-col">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-skin-accent">
              Your Name
            </label>
            <input
              id="name"
              placeholder="name"
              {...register("name", { required: true })}
              className={`${inputStyle}`}
            />
            {errors.name && (
              <span className={`${errorStyle}`}>Your name is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-skin-accent">
              Your Email
            </label>
            <input
              id="email"
              placeholder="email"
              {...register("email", { required: true })}
              className={`${inputStyle}`}
            />
            {errors.email && (
              <span className={`${errorStyle}`}>Your email is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-skin-accent">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="message"
              {...register("message", { required: true })}
              className={`${inputStyle} h-52`}></textarea>
            {errors.message && (
              <span className={`${errorStyle}`}>Please leave a message</span>
            )}
          </div>
          <div className="my-4 flex justify-end">
            <Button
              name="Send Message"
              color="bg-skin-herobackground"
              icon={<FiSend size={24} />}
            />
          </div>
        </form>
      </div>
    </section>
  );
};
