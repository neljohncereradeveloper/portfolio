import React from "react";
import { DownloadIcon } from "../../../assets/icons";

const Nav = () => {
  return (
    <nav className="absolute top-0 right-0  flex flex-col z-50 bg-yellow-main">
      <ul className="flex flex-col gap-5 text-white">
        <li>
          <a href="#">Home</a>{" "}
        </li>
        <li>
          <a href="#">What i do</a>{" "}
        </li>
        <li>
          <a href="#">Projects</a>{" "}
        </li>
        <li>
          <a href="#">Certificates</a>{" "}
        </li>
        <li>
          <a href="#">About me</a>{" "}
        </li>
        <li>
          <a href="#">Contact</a>{" "}
        </li>
      </ul>
      {/* BUTTON */}
      <div>
        <button className="flex flex-row gap-5 text-white font-bold bg-yellow-main px-5 py-2 rounded-sm">
          Download CV
          <DownloadIcon classname="w-5 h-5 text-white" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
