import React from "react";
import work2 from "../assets/work-3-img.png";
import work3 from "../assets/work-4-img.png";

const works = [
  {
    title: "Ticketing System",
    description: `A comprehensive ticketing system designed to streamline the submission and tracking of support requests. Users can easily submit inquiries, monitor the status of their requests in real time, and engage in discussions with support staff directly through the platform. This system enhances communication, ensuring that users receive timely updates and resolutions to their issues. With features like automated notifications, detailed request history, and a user-friendly interface, the ticketing system facilitates efficient problem-solving and improves overall customer satisfaction.`,
    previewImage: work2,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Ajax",
      "PHP",
      "MySQL",
      "APACHE Server",
      "XAMPP",
    ],
    link: "",
    repositoryLink: "",
  },
  {
    title: "Watch Catalog",
    description: `The Watch Catalog System is a user-friendly web application designed to showcase a diverse range of watches, allowing users to browse, filter, and search for their ideal timepieces. With features such as detailed product descriptions and high-resolution images, this system provides a comprehensive shopping experience.`,
    previewImage: work3,
    technologies: ["ASP.NET MVC", "ASP.NET Web API", "Entity Framework", "Azure SQL Database", "Azure App Service", "Swagger/APIM"],
    link: "https://garywatchcatalogui.azurewebsites.net/",
    repositoryLink: "",
  },
];
const Works = () => {
  return (
    <section
      id="projects"
      className="about-me-section mt-24 h-fit grid grid-cols-12"
    >
      <div className="col-start-2 col-span-10 my-auto">
        <div className="flex flex-col ml-auto mr-auto max-w-screen-lg">
          <p className="text-4xl mb-4">My Projects</p>
          <div className="mb-4">
            <p className="text-md leading-8 text-left">
              Explore my portfolio of projects to see what I've accomplished. If
              you're curious about my NDA projects, feel free to ask or take a
              look at my CV.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {works.map((work, i) => {
              return (
                <div
                  key={i}
                  className={`py-6 px-6 bg-neutral-100 rounded-md max-w-screen-lg gap-5 md:flex md:flex-row md:justify-between ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-8/12 md:h-[400px]">
                    <img
                      className="w-full h-full"
                      src={work.previewImage}
                      alt="work"
                    ></img>
                  </div>
                  <div className="mt-3 md:mt-0 md:w-5/12 flex flex-col items-start">
                    <p className="text-lg mb-3">{work.title}</p>
                    <p className="text-sm leading-8 text-left mb-2">
                      {work.description}
                    </p>

                    <a
                      className="text-sm leading-8 text-left mb-2 text-blue-600"
                      href={work.link}
                    >
                      {work.link}
                    </a>

                    <div className="flex flex-wrap gap-2">
                      {work.technologies.map((tech) => {
                        return (
                          <span
                            key={tech}
                            className="bg-blue-700 rounded-md p-1 text-white text-xs"
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
