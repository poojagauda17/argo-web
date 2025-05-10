"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-[#007A33]">
            About <span className="text-[#80B82D]">Aries Agro Limited</span>
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Aries Agro Ltd. was founded by Dr. T. B. Mirchandani and Mrs.
            Bala Mirchandani in 1969. We are in the business of manufacturing
            of micronutrients and other customized nutritional products for
            plants and animals. We started our activity by manufacturing a
            small range of mineral feed additives for animals & birds and then
            diversified into mineral additives for the agriculture use.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            In 1975, we diversified into nutrients for plant. We conducted
            research on compounds that could deliver mineral nutrients to
            plants more efficiently. This research identified “Metal Chelates”.
          </p>

          <button class="read-more-button mt-8"><a href="/">Read More</a></button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="/images/plant-img.jpg" // make sure this image is in public/images
            alt="Founders"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
