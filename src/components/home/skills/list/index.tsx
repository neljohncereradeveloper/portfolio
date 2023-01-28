import React, { forwardRef } from "react";
import { data } from "./data";
import ListSkillsItem from "./item";

interface Props {
  inView: boolean;
}

const ListSkills = forwardRef(({ inView }: Props, ref) => {
  return (
    <ul ref={ref as any} role={"list"} className="skills-image__list">
      {data.map((skill) => (
        <ListSkillsItem
          key={skill.id}
          src={skill.src}
          alt={skill.alt}
          inView={inView}
        />
      ))}
    </ul>
  );
});

ListSkills.displayName = "ListSkills";

export default ListSkills;
