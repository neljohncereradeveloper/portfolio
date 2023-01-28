import React from "react";
import ProjectListItem from "./item";

const data = [
  {
    id: 1,
    name: "Next js Typescript",
  },
  {
    id: 2,
    name: "Tailwind CSS",
  },
  {
    id: 3,
    name: "Graphql",
  },
  {
    id: 4,
    name: "Apollo Express Server",
  },
  {
    id: 5,
    name: "React native Expo",
  },
  {
    id: 6,
    name: "PostgreSQL",
  },
];

const ProjectList = () => {
  return (
    <>
      {/* project details tech list */}
      <ul role={"list"} className="project-details__tech-list">
        {data.map((item) => (
          <ProjectListItem key={item.id} name={item.name} />
        ))}
      </ul>
    </>
  );
};

export default ProjectList;
