//like the other ones
"use client";
import { type FaqItem, faqItems } from "@/lib/constants";
import Image from "next/image";
import Arrow from "../../public/images/Arrow.svg";
import TriangleWithCircle from "../../public/images/TriangleWithCircle.svg";
import TriangleWithX from "../../public/images/TriangleWithX.svg";
import { useState } from "react";

export default function FAQ() {
  return (
    <section id={"faq"} className="bg-[#111111]">
      <div className="pb-40 pt-1.5 container px-1.5 mx-auto">
        <div className="relative">
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center mt-12 mb-16 font-no-continue bg-gradient">
            FAQ
          </h2>
          <div className="absolute max-w-sm mx-auto aspect-square inset-0 rounded-3xl bg-gradient-to-r from-transparent via-[#00F2EA] to-transparent opacity-5 top-1/2 -translate-y-1/2 blur-xl"></div>
        </div>
        <FaqList />
      </div>
    </section>
  );
}

const BackgroundImages = () => {
  return (
    <>
      <Image
        src={TriangleWithCircle}
        alt="TriangleWithCircle"
        className="w-48 h-48 absolute -translate-x-full -top-28 hidden md:block"
      />
      <Image
        src={TriangleWithX}
        alt="TriangleWithX"
        className="w-36 h-36 absolute right-0 -bottom-36 translate-x-full hidden md:block"
      />
    </>
  );
};

const FaqList = () => {
  return (
    <div className="flex flex-col gap-4 max-w-4xl mx-auto py-3 px-4 md:px-0 md:py-0 relative">
      <BackgroundImages />
      {faqItems.map((item) => (
        <FaqItem key={item.id} {...item} />
      ))}
    </div>
  );
};

const FaqItem = ({ id, question, answer }: FaqItem) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen((prev) => !prev);
  return (
    <div key={id} className=" rounded-lg overflow-hidden">
      <div className="flex justify-between items-center bg-[hsl(178,100%,47%,0.3)] px-3.5 py-3">
        <p className="text-white font-medium tracking-wide">{question}</p>
        <Image
          src={Arrow}
          alt="Arrow"
          className={`${
            isOpen && "-rotate-180"
          } transition-transform duration-500 ease-in-out w-5 h-5 cursor-pointer`}
          onClick={toggleIsOpen}
        />
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen
            ? "max-h-screen bg-[hsl(178,26%,44%)]"
            : "max-h-0 bg-[hsl(178,26%,30%)]"
        }`}
      >
        <p className="text-white font-normal px-6 py-4">{answer}</p>
      </div>
    </div>
  );
};
