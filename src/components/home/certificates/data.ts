import {
  img_certificate_advancereact,
  img_certificate_frontendcareerpath,
  img_certificate_learnresponsivedesign,
} from "@assets/images";
import { StaticImageData } from "next/image";

interface Props {
  id: number;
  certificateName: string;
  certificateNumber: string;
  certificateImg: StaticImageData;
  link: string;
}

export const certificates: Props[] = [
  {
    id: 1,
    certificateName: "Advance React",
    certificateNumber: "certificateOne",
    certificateImg: img_certificate_advancereact,
    link: "https://scrimba.com/certificate/u7Yqm3Sd/greact",
  },
  {
    id: 2,
    certificateName: "Front End Development Career Path",
    certificateNumber: "certificateTwo",
    certificateImg: img_certificate_frontendcareerpath,
    link: "https://scrimba.com/certificate/u7Yqm3Sd/gfrontend",
  },
  {
    id: 3,
    certificateName: " Learn Responsive Design",
    certificateNumber: "certificateThree",
    certificateImg: img_certificate_learnresponsivedesign,
    link: "https://scrimba.com/certificate/u7Yqm3Sd/gresponsive",
  },
];
