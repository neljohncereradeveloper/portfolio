import { LinkIcon } from "@assets/icons";
import { Image, Title } from "@components/shared";
import Link from "next/link";
import React from "react";
import { data } from "./data";

const CCapstonesProjects = () => {
  return (
    <div className="capstonesProjects">
      {data?.map((project) => (
        <div
          id={project.idNumber}
          key={project.id}
          className={`project__content`}
        >
          {/* project image */}
          <Image
            src={project.img}
            alt={project.imgAlt}
            classname="project__img"
          />
          {/* project subtitle */}
          <Title.SectionSubtitle>{project.projectName}</Title.SectionSubtitle>
          {/* project link container */}
          <div className="project__link-container">
            <Link href={project.websiteLink} passHref>
              <a className="project__link" target="_blank" rel="noreferrer">
                Website
                <LinkIcon classname="project__link-icon" />
              </a>
            </Link>
            {project.androidDownloadLinkOne &&
            project.androidDownloadLinkTwo ? (
              <>
                <Link href={project.androidDownloadLinkOne} passHref>
                  <a className="project__link" target="_blank" rel="noreferrer">
                    Android Apk One
                    <LinkIcon classname="project__link-icon" />
                  </a>
                </Link>
                <Link href={project.androidDownloadLinkTwo} passHref>
                  <a className="project__link" target="_blank" rel="noreferrer">
                    Android Apk Two
                    <LinkIcon classname="project__link-icon" />
                  </a>
                </Link>
              </>
            ) : null}
          </div>
          {/* project description */}
          <p>{project.description}</p>
          {/* project technologies */}
          <ul className="project__technologies">
            {project.technologies.map((tech) => (
              <li className="project__technologies-name" key={tech.id}>
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CCapstonesProjects;
