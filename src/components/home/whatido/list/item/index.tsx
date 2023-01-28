import React from "react";
import classnames from "classnames";

interface Props {
  IconComponent: JSX.Element;
  title: string;
  classnameAnimate: string;
  inView: boolean;
}
const ListItemWhatIdo = ({
  IconComponent,
  title,
  classnameAnimate,
  inView,
}: Props) => {
  return (
    <li
      className={classnames("whatido__item", {
        [classnameAnimate]: inView,
      })}
    >
      {IconComponent}
      <p className="whatido__item-detail">{title}</p>
    </li>
  );
};
export default ListItemWhatIdo;
