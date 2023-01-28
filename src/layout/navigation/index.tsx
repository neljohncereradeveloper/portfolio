import React from "react";
import { DownloadIcon, MenuIcon } from "../../assets/icons";
import { Flex, List } from "../../components/shared/container";
import { MyLogo } from "../../assets/icons/index";
import Nav from "./nav";

const Navigation = () => {
  return (
    <header className="absolute top-0 left-0 right-0 container mx-auto h-[86px] z-40 bg-secondary sm:bg-primary">
      <div className="h-full flex items-center justify-between">
        {/* LOGO */}
        <figure className="w-full flex flex-row justify-between">
          <MyLogo classname="w-16 h-16" fill="white" />
          <button>
            <MenuIcon classname="w-10 h-10 text-white" />
          </button>
        </figure>
        {/* NAVIGATION */}
        <Nav />
      </div>
    </header>
  );
};

export default Navigation;
