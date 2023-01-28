import { Title } from "@components/shared";
import React from "react";
import CProjectsNavigation from "./aside";
import CFrontendMentors from "./frontend-mentors";
import CCapstonesProjects from "./capstone-projects";

const CProjects = () => {
  return (
    <div className="projectsWrapper">
      <div className="container">
        {/* Aside */}
        <CProjectsNavigation />
        {/* Capstones projects */}
        <Title.Section
          id="personalProjects"
          classname="capstonesProjects-title"
        >
          Projects
        </Title.Section>
        <CCapstonesProjects />
        {/* Frontend Mentors Projects */}
        <Title.Section id="frontendMentors" classname="frontentMentors-title">
          Frontend Mentors Projects
        </Title.Section>
        <CFrontendMentors />
      </div>
    </div>
  );
};

export default CProjects;
