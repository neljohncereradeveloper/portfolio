import { Image, Title } from "@components/shared";
import { useInView } from "react-intersection-observer";
import ListSkills from "./list";
import classnames from "classnames";

const SkillsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div ref={ref} id="skills" className="skills-section">
      <div className="container">
        {/* skills title */}
        <Title.Section
          classname={classnames("skills-section__title", {
            "skills-section__title--animate": inView,
          })}
        >
          SKILLS
        </Title.Section>
        {/* skills list */}
        <ListSkills ref={ref} inView={inView!} />
        {/* skills buttom cirlces */}
        <div className="skills-shapes">
          <div className="skills-shapes__circle"></div>
          <div className="skills-shapes__circle"></div>
          <div className="skills-shapes__circle"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
