import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const ContactUs = () => {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hsvsftt",
        "template_brr0qvb",
        form.current,
        "CyMbXRk8pnr8YsgLJ"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Message sent");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-screen-md mx-auto">
      <div className="flex gap-10 w-full">
        <div>
          <label>Your Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full bg-skin-background px-4 py-2 outline-none"
          />
        </div>
        <div>
          <label>Your Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full bg-skin-background px-4 py-2 outline-none"
          />
        </div>
      </div>
      <label>Message</label>
      <textarea
        name="message"
        className="block w-full h-44 bg-skin-background px-4 py-2 outline-none"
      />
      <button type="submit" value="Send">
        Send
      </button>
    </form>
  );
};
