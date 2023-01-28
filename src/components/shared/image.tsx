import classnames from "classnames";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  alt: string;
  src: StaticImageData;
  classname?: string;
  imgclassname?: string;
}

const image = ({ alt, src, classname, imgclassname }: Props) => {
  return (
    <div className={classnames("img-container", classname)}>
      <Image src={src} alt={alt} layout="fill" className={imgclassname} />
    </div>
  );
};

export default image;
