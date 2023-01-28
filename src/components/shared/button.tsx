import React from "react";
import classnames from "classnames";

interface Props {
  text: string;
  classNames?: string;
}

const Button = ({ text, classNames }: Props) => {
  return <button className={classnames("btn", classNames)}>{text}</button>;
};

export default Button;
