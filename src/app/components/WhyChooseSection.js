"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const features = [
  {
    title: "Exceptional Crop Quality and Yield",
    description:
      "Our agro solutions are crafted to improve soil health and enhance overall crop yield using research-backed formulations and natural inputs.",
  },
  {
    title: "Eco-Friendly & Sustainable Farming",
    description:
      "All products are designed for minimal environmental impact and support sustainable farming practices that benefit both crops and climate.",
  },
  {
    title: "Research-Driven Innovation",
    description:
      "We invest in agricultural R&D to develop next-gen micronutrient blends and formulations tailored for modern farming needs.",
  },
  {
    title: "Reliable Farmer Support",
    description:
      "Our agri experts provide guidance, application tips, and region-specific recommendations to ensure maximum productivity.",
  },
];

export default function WhyChooseUsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="blog-carousel mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-[#1B5E20] mb-8 text-center">
        Why Choose <span className="text-[#80B82D]">Us</span>
      </h2>

      <div className="space-y-4">
        {features.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggle(index)}
              >
                <span
                  className={`text-lg font-semibold ${
                    isOpen ? "text-[#80B82D]" : "text-gray-800"
                  }`}
                >
                  {item.title}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#80B82D]" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 ease-in-out px-6 overflow-hidden ${
                  isOpen ? "max-h-[500px] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
