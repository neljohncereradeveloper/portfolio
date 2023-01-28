import { ReactElement } from "react";
import React from "react";
import classnames from "classnames";

interface Props {
  children: ReactElement;
  classname?: string;
  direction?: "row" | "column";
  justify?: "center" | "between" | "around" | "evenly" | undefined;
  align?: "center" | "start" | "end" | "baseline";
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export const Flex: React.FC<Props> = ({
  children,
  classname,
  direction,
  justify = undefined,
  align,
  gap = 0,
}) => {
  return (
    <div
      className={classnames(
        "flex",
        `flex-${direction}`,
        `gap-${gap}`,
        `justify-${justify} align-${align}`,
        classname
      )}
    >
      {children}
    </div>
  );
};

export const List: React.FC<Props> = ({
  children,
  classname,
  direction,
  justify = undefined,
  align,
  gap = 0,
}) => {
  return (
    <ul
      className={classnames(
        "flex",
        `flex-${direction}`,
        `gap-${gap}`,
        `justify-${justify} align-${align}`,
        classname
      )}
    >
      {children}
    </ul>
  );
};
