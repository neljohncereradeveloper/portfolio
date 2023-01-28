import { Image } from "@components/shared";
import React from "react";
import { StaticImageData } from "next/image";
import classnames from "classnames";

interface Props {
  src: StaticImageData;
  alt: string;
  inView: boolean;
}

const ListSkillsItem = ({ src, alt, inView }: Props) => {
  return (
    <li
      className={classnames("skills-image__item", {
        "skills-image__item--animate": inView,
      })}
    >
      <Image src={src} alt={alt} />
    </li>
  );
};

export default ListSkillsItem;
