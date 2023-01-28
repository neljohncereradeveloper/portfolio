import { Button, Title } from "@components/shared";
import { useInView } from "react-intersection-observer";
import Project from "./project";
// import Image from "next/image";
import classnames from "classnames";
import Link from "next/link";

const ProjectSection = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      id="projects"
      className={classnames("project-section", {
        "project-section--animate": inView,
      })}
    >
      <div className="container">
        <Title.Section classname="project-title">PROJECTS</Title.Section>
        {/* project */}
        <Project />
        {/* project view all button */}

        {/* <Button text="View all" /> */}
        <Link href="/projects" passHref>
          <a className="project-btn-view">View all</a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
