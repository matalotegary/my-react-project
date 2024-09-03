import React from "react";
import phFlag from "../assets/ph-icon.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";

const ReachMe = () => {
  return (
    <section
      id="reach-me"
      className="h-[180px] mt-16 bg-neutral-100"
    >
      <div className="flex justify-center size-full pt-8">
        <div class="w-5/12 my-auto flex items-center flex-col gap-2">
          <p class="mx-auto text-md md:text-lg">Gary Matalote</p>

          <span class="mx-auto flex flex-row items-center gap-2">
            <img className="w-3 h-3" src={email} alt="icon"></img>
            <a
              target="_blank"
              class="text-xs md:text-sm"
              href="mailto:matalotegary@gmail.com"
            >
              matalotegary@gmail.com
            </a>
          </span>
          <span class="mx-auto flex flex-row items-center gap-2">
            <img className="w-3 h-3" src={phFlag} alt="icon"></img>
            <a
              target="_blank"
              class="text-xs md:text-sm"
              href="tel:+639455277748"
            >
              +63 945 527 7748
            </a>
          </span>
          <span class="mx-auto flex flex-row items-center gap-2">
            <img className="w-4 h-4" src={linkedin} alt="icon"></img>
            <a
              target="_blank"
              class="text-xs md:text-sm"
              href="https://ph.linkedin.com/in/gary-matalote-08b073140"
            >
              LinkedIn
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ReachMe;
