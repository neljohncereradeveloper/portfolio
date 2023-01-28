import React, { forwardRef } from "react";
import { data } from "./data";
import ListItemWhatIdo from "./item";

interface Props {
  inView: boolean;
}

const ListWhatIdo = forwardRef(({ inView }: Props, ref) => {
  return (
    <ul ref={ref as any} role="list" className="whatido__list">
      {data.map((list) => (
        <ListItemWhatIdo
          key={list.id}
          title={list.title}
          IconComponent={list.IconComponent}
          classnameAnimate={
            list.id % 2 === 0
              ? "whatido__item--animate-right"
              : "whatido__item--animate-left"
          }
          inView={inView}
        />
      ))}
    </ul>
  );
});

ListWhatIdo.displayName = "ListWhatIdo";

export default ListWhatIdo;
