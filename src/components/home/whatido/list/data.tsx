import {
  CodeIcon,
  DataStructureIcon,
  MobileIcon,
  ResponsiveMobileIcon,
} from "@assets/icons";

export const data = [
  {
    id: 1,
    IconComponent: <ResponsiveMobileIcon classname="whatido__item-icon" />,
    title: "Responsive Design",
  },
  {
    id: 2,
    IconComponent: <MobileIcon classname="whatido__item-icon" />,
    title: "Mobile First",
  },
  {
    id: 3,
    IconComponent: <CodeIcon classname="whatido__item-icon" />,
    title: "Design to Code",
  },
  {
    id: 4,
    IconComponent: <DataStructureIcon classname="whatido__item-icon" />,
    title: "Data Structure",
  },
];
