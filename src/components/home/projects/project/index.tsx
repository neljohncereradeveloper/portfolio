import { img_books } from "@assets/images";
import { Image, Title } from "@components/shared";
import React from "react";
import ProjectList from "./list";

const Project = () => {
  return (
    <>
      <Image
        src={img_books}
        alt="Hands holding Books picture"
        classname="project-img"
      />
      <div className="project-details">
        <Title.SectionSubtitle>Library Book Reservation</Title.SectionSubtitle>
        <ProjectList />
      </div>
    </>
  );
};

export default Project;
