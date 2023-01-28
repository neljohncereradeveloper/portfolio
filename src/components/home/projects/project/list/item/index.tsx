import React from "react";

const ProjectListItem = ({ name }: { name: string }) => {
  return <li className="project-details__tech-list__item">{name}</li>;
};

export default ProjectListItem;
