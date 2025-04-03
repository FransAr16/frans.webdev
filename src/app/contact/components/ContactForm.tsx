"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import emailjs from "@emailjs/browser";
import TextFadeIn from "@/components/ui/TextFadeIn";
import { fadeIn } from "@/data/animation";
import ChevronDown from "@/components/ui/ChevronDown";
import ArrowRight from "@/components/ui/ArrowRight";
import BorderLineTop from "@/components/ui/BorderLineTop";

const animationVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.1, duration: 1, ease: "easeInOut" },
  },
};

export default function ContactForm() {
  const colOne = useRef<HTMLDivElement | null>(null);
  const colTwo = useRef<HTMLDivElement | null>(null);
  const colThree = useRef<HTMLDivElement | null>(null);
  const colFour = useRef<HTMLDivElement | null>(null);
  const BtnSubmit = useRef<HTMLButtonElement | null>(null);

  const isInViewOne = useInView(colOne, { once: true });
  const isInViewTwo = useInView(colTwo, { once: true });
  const isInViewThree = useInView(colThree, { once: true });
  const isInViewFour = useInView(colFour, { once: true });
  const isInViewBtnSubmit = useInView(BtnSubmit, { once: true });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState("Select reason");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nameOrganization: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    nameOrganization: "",
    message: "",
    reason: "",
  });

  const toggleModal = () => setIsOpen(!isOpen);
  const selectReason = (reason: string) => {
    setSelectedReason(reason);
    setIsOpen(false);
    setErrors((prev) => ({ ...prev, reason: "" })); // Hapus error jika sudah dipilih
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Hapus error jika diisi
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      nameOrganization: "",
      message: "",
      reason: "",
    };
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.nameOrganization.trim())
      newErrors.nameOrganization = "Name organization is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (!selectedReason) newErrors.reason = "Reason of contact is required.";
    // if (selectedReason === "Select reason") newErrors.reason = "Reason of contact is required.";

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === ""); // Return true jika tidak ada error
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const templateParams = {
      reason: selectedReason,
      name: formData.name,
      email: formData.email,
      nameOrganization: formData.nameOrganization,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_nq8r71e",
        "template_v7e46np",
        templateParams,
        "16ExcdezLf3Oe9pGL"
      );
      alert("Your message has been sent successfully!");
      setFormData({ name: "", email: "", nameOrganization: "", message: "" });
      setSelectedReason(selectedReason);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="flex flex-col w-full h-full pt-[2rem] pb-[4rem] lg:py-[2rem] 2xl:py-[4rem] relative overflow-hidden">
      <div className="flex flex-col main-container">
        <div className="relative pt-[3rem] lg:pt-[2.5rem]">
          <div>
            <BorderLineTop />
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-4 lg:grid-cols-12 w-full h-full  gap-[2rem]"
          >
            <div className="pb-[4rem] sm:pb-[3rem] lg:pb-0 col-span-4 lg:col-span-3">
              <TextFadeIn
                slideUp={fadeIn}
                phrase="Contact Form"
                className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
              />
            </div>
            <div className="hidden lg:block lg:col-span-1">{/* blank */}</div>
            <div className="col-span-4 lg:col-span-8">
              <div className="flex flex-col">
                {/* Reason of Contact */}
                <div className="flex flex-col lg:flex-row items-center gap-[1rem] lg:gap-[2rem] pb-[3rem] lg:pb-[1rem]">
                  <div className="w-full lg:w-[16rem] 2xl:w-[24rem] 3xl:w-[33rem]">
                    <TextFadeIn
                      slideUp={fadeIn}
                      phrase="Reason of contact"
                      className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                    />
                  </div>
                  <div ref={colOne} className="w-full relative">
                    <motion.div
                      initial="initial"
                      animate={isInViewOne ? "animate" : "initial"}
                      variants={animationVariants}
                      className="border p-6 lg:p-5 xl:p-6 2xl:p-7 cursor-pointer"
                      onClick={toggleModal}
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-full overflow-hidden">
                          <span className="font-medium lg:font-semibold text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]">
                            {selectedReason || "Select reason"}
                          </span>
                        </div>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                          <ChevronDown />
                        </motion.div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{
                        clipPath:
                          "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                      }}
                      animate={{
                        clipPath: isOpen
                          ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                          : "polygon(0 0, 100% 0, 100% 0, 0 0)",
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className={`absolute -bottom-[196%] w-full flex flex-col bg-foreground text-background z-[999] ${
                        isOpen ? "flex" : ""
                      }`}
                    >
                      <div
                        className="border-b p-6 lg:p-5 xl:p-6 2xl:p-7 cursor-pointer"
                        onClick={() => selectReason("For business")}
                      >
                        <span className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]">
                          For business
                        </span>
                      </div>
                      <div
                        className="p-6 lg:p-5 xl:p-6 2xl:p-7 cursor-pointer"
                        onClick={() => selectReason("Contact for a job")}
                      >
                        <span className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]">
                          Contact for a job
                        </span>
                      </div>
                      {errors.reason && (
                        <p className="absolute bottom-0 px-6 lg:px-5 xl:px-6 2xl:px-7 text-red-500 text-sm mt-1">
                          {errors.reason}
                        </p>
                      )}
                    </motion.div>
                  </div>
                </div>
                {/* Full Name */}
                <div className="flex flex-col lg:flex-row items-center gap-[1rem] lg:gap-[2rem] pb-[3rem] lg:pb-[1rem]">
                  <div className="w-full lg:w-[16rem] 2xl:w-[24rem] 3xl:w-[33rem]">
                    <TextFadeIn
                      slideUp={fadeIn}
                      phrase="Full name"
                      className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                    />
                  </div>
                  <div ref={colTwo} className="w-full relative">
                    <motion.div
                      initial="initial"
                      animate={isInViewTwo ? "animate" : "initial"}
                      variants={animationVariants}
                      className="border"
                    >
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full font-medium lg:font-semibold text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%] ring-0 outline-0 p-6 lg:p-5 xl:p-6 2xl:p-7"
                        placeholder="Full name here*"
                      />
                      {errors.name && (
                        <p className="absolute bottom-0 px-6 lg:px-5 xl:px-6 2xl:px-7 text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </motion.div>
                  </div>
                </div>
                {/* Email Address */}
                <div className="flex flex-col lg:flex-row items-center gap-[1rem] lg:gap-[2rem] pb-[3rem] lg:pb-[1rem]">
                  <div className="w-full lg:w-[16rem] 2xl:w-[24rem] 3xl:w-[33rem]">
                    <TextFadeIn
                      slideUp={fadeIn}
                      phrase="Email address"
                      className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                    />
                  </div>
                  <div ref={colThree} className="w-full relative">
                    <motion.div
                      initial="initial"
                      animate={isInViewThree ? "animate" : "initial"}
                      variants={animationVariants}
                      className="border"
                    >
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full font-medium lg:font-semibold text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%] ring-0 outline-0 p-6 lg:p-5 xl:p-6 2xl:p-7"
                        placeholder="example@provider.com*"
                      />
                      {errors.email && (
                        <p className="absolute bottom-0 px-6 lg:px-5 xl:px-6 2xl:px-7 text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </motion.div>
                  </div>
                </div>
                {/* Name Organization */}
                <div className="flex flex-col lg:flex-row items-center gap-[1rem] lg:gap-[2rem] pb-[3rem] lg:pb-[1rem]">
                  <div className="w-full lg:w-[16rem] 2xl:w-[24rem] 3xl:w-[33rem]">
                    <TextFadeIn
                      slideUp={fadeIn}
                      phrase="Name organization"
                      className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                    />
                  </div>
                  <div ref={colThree} className="w-full relative">
                    <motion.div
                      initial="initial"
                      animate={isInViewThree ? "animate" : "initial"}
                      variants={animationVariants}
                      className="border"
                    >
                      <input
                        type="text"
                        name="nameOrganization"
                        value={formData.nameOrganization}
                        onChange={handleChange}
                        className="w-full font-medium lg:font-semibold text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%] ring-0 outline-0 p-6 lg:p-5 xl:p-6 2xl:p-7"
                        placeholder="John & Doe&reg;"
                      />
                      {errors.nameOrganization && (
                        <p className="absolute bottom-0 px-6 lg:px-5 xl:px-6 2xl:px-7 text-red-500 text-sm mt-1">
                          {errors.nameOrganization}
                        </p>
                      )}
                    </motion.div>
                  </div>
                </div>
                {/* Message */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-[1rem] lg:gap-[2rem] lg:pb-[1rem]">
                  <div className="w-full lg:w-[16rem] 2xl:w-[24rem] 3xl:w-[33rem] lg:pt-[1.3rem] xl:pt-[1.6rem] 2xl:pt-[1.8rem]">
                    <TextFadeIn
                      slideUp={fadeIn}
                      phrase="Message"
                      className="font-medium lg:font-semibold mr-[5px] xl:mr-[6px] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]"
                    />
                  </div>
                  <div ref={colFour} className="w-full relative">
                    <motion.div
                      initial="initial"
                      animate={isInViewFour ? "animate" : "initial"}
                      variants={animationVariants}
                      className="border"
                    >
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full h-[10rem] 2xl:h-[14rem] resize-none font-medium lg:font-semibold text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%] ring-0 outline-0 p-6 lg:p-5 xl:p-6 2xl:p-7"
                        placeholder="Start typing here ..."
                      />
                      {errors.message && (
                        <p className="absolute bottom-0 px-6 lg:px-5 xl:px-6 2xl:px-7 text-red-500 text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
                    </motion.div>
                  </div>
                </div>
                {/* Btn Submit */}
                <div className="flex flex-col lg:flex-row items-center gap-[1rem] lg:gap-[2rem]">
                  <div className="w-full lg:w-[16rem] 2xl:w-[24rem] 3xl:w-[33rem]"></div>
                  <button
                    type="submit"
                    ref={BtnSubmit}
                    className="w-full relative"
                  >
                    <motion.div
                      initial="initial"
                      animate={isInViewBtnSubmit ? "animate" : "initial"}
                      variants={animationVariants}
                      className="border p-6 lg:p-5 xl:p-6 2xl:p-7 cursor-pointer bg-foreground text-background"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-full overflow-hidden flex ">
                          <span className="font-medium lg:font-semibold text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.28rem] leading-[120%]">
                            Submit form
                          </span>
                        </div>
                        <div>
                          <ArrowRight />
                        </div>
                      </div>
                    </motion.div>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
