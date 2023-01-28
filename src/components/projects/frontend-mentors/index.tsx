import { LinkIcon } from "@assets/icons";
import { Image } from "@components/shared";
import Link from "next/link";
import React from "react";
import { data } from "./data";

const CFrontendMentors = () => {
  return (
    <div className="frontentMentors">
      {data?.map((project) => (
        <div key={project.id} className={`frontentMentor_project`}>
          <div className="bg-blur"></div>
          {/* project image */}
          <Image
            src={project.img}
            alt="Cone"
            classname="frontentMentor_project-img"
          />
          <h3 className="frontentMentor_project-title">
            {project.projectName}
          </h3>
          <Link href={project.link} passHref>
            <a
              className="frontentMentor_project-link"
              target="_blank"
              rel="noreferrer"
            >
              Link
              <LinkIcon classname="frontentMentor_project-link-icon" />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CFrontendMentors;
//
