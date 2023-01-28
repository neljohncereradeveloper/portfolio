import { img_me } from "@assets/images";
import { Image, Title } from "@components/shared";
import { useInView } from "react-intersection-observer";
import classnames from "classnames";

const AboutMeSection = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section ref={ref} id="aboutme" className={classnames("aboutme-section")}>
      <div className="container">
        <Title.Section
          classname={classnames("aboutme-title", {
            "aboutme-title--animate": inView,
          })}
        >
          About Me
        </Title.Section>

        {/* about me details */}
        <p
          className={classnames("aboutme-details", {
            "aboutme-details--animate": inView,
          })}
        >
          {"I'm"} a recent college graduate with a degree of Bachelor of Science
          in Information Technology who is passionate and committed to website
          developing and integrating Android applications.
        </p>

        {/* about me img container */}
        <div
          className={classnames("aboutme-img__container", {
            "aboutme-img__container--animate": inView,
          })}
        >
          <Image
            src={img_me}
            alt="Graduation picture"
            classname="aboutme-details__img"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
