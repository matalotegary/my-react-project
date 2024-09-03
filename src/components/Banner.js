import React from "react";
import emoji from "../assets/memoji.png";
import cv from "../assets/gary-matalote.pdf";

const Banner = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "gary-matalote.pdf";
    link.click();
  };

  return (
    <section className="banner-section h-[680px] grid grid-cols-12">
      <div className="col-start-3 col-span-8 my-auto">
        <div className=" h-4/5 ml-auto mr-auto max-w-screen-lg items-center md:flex md:flex-row md:justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl flex-grow">Hello, I'm Gary </h1>
            <h1 className="text-5xl flex-grow mb-6">a JavaScript Developer</h1>
            <button
              className="bg-blue-700 rounded-xl p-1 text-white text-xs w-28 h-12"
              onClick={handleDownload}
            >
              Download CV
            </button>
          </div>

          <div className="hidden md:block">
            <img src={emoji} alt="personal-memoji"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
