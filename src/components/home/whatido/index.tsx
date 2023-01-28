import { Title } from "@components/shared";
import { useInView } from "react-intersection-observer";
import classnames from "classnames";
import ListWhatIdo from "./list";

const WhatIdoSection = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div id="whatido" className="whatido-section">
      <div className="container">
        <Title.Section
          classname={classnames("whatido-title", {
            "whatido-title--animate": inView,
          })}
        >
          WHAT I DO
        </Title.Section>

        {/* whatido list */}
        <ListWhatIdo ref={ref} inView={inView!} />
      </div>
    </div>
  );
};

export default WhatIdoSection;
