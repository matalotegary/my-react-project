import React from "react";
import git from "../assets/git.png";
import angular from "../assets/angular.png";
import nodejs from "../assets/nodejs.png";
import db from "../assets/db.png";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="about-me-section h-fit grid grid-cols-12"
    >
      <div className="col-start-2 col-span-10 my-auto">
        <div className="flex flex-col ml-auto mr-auto max-w-screen-lg ">
          <p className="text-4xl mb-4">About Me</p>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-md leading-8 text-left">
                As a Front-End Developer Lead, I specialize in creating Single
                Page Applications (SPA) that deliver seamless and dynamic user
                experiences. My expertise spans both front-end and back-end
                development, with a strong emphasis on leveraging Microsoft
                Azure for robust and scalable solutions. I have a solid
                background in database creation and integration, ensuring that
                applications are not only visually appealing but also
                functionally powerful. As an agile practitioner, I actively
                participate in scrum ceremonies, fostering collaboration and
                continuous improvement within the development team.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-10 w-full">
              <div className="md:max-w-[220px] bg-neutral-100 rounded-md py-8 px-6 flex flex-col gap-3">
                <img className="w-8 h-8" src={git} alt="personal-memoji"></img>
                <p className="text-m">Cloud Platforms</p>
                <p className="text-sm">
                  Extensive experience in Microsoft Azure for project
                  management, utilizing Azure Pipelines and Azure Repos
                </p>
              </div>

              <div className="md:max-w-[220px] bg-neutral-100 rounded-md py-8 px-6 flex flex-col gap-3">
                <img
                  className="w-8 h-8"
                  src={angular}
                  alt="personal-memoji"
                ></img>
                <p className="text-m">Front-end Technologies</p>
                <p className="text-sm">
                  Mainly works with the Angular and has extensive experience
                  using vanilla JavaScript as well
                </p>
              </div>

              <div className="md:max-w-[220px] bg-neutral-100 rounded-md py-8 px-6 flex flex-col gap-3">
                <img
                  className="w-8 h-8"
                  src={nodejs}
                  alt="personal-memoji"
                ></img>
                <p className="text-m">Back-end Technologies</p>
                <p className="text-sm">
                  Primarily worked with Node.js and also possesses experience
                  with C# ASP.NET
                </p>
              </div>

              <div className="md:max-w-[220px] bg-neutral-100 rounded-md py-8 px-6 flex flex-col gap-3">
                <img className="w-8 h-8" src={db} alt="personal-memoji"></img>
                <p className="text-m">Database Technologies</p>
                <p className="text-sm">
                  Experienced with relational databases like MySQL and
                  PostgreSQL, as well as non-relational databases such as
                  MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
