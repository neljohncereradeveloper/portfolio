import { DownloadIcon, MenuIcon, MyLogo } from "@assets/icons";
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

const Header = () => {
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState<boolean | undefined>(undefined);

  const handleClickOpenMenu = () => {
    !openMenu ? setOpenMenu(true) : openMenu ? setOpenMenu(false) : undefined;
  };

  const handleDownloadResume = () => {
    // using Java Script method to get PDF file
    fetch("neljohncerera-resume.docx").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "neljohncerera-resume.docx";
        alink.click();
      });
    });
  };
  return (
    <header id="home" className="header">
      {/* header logo */}
      <MyLogo classname="header-logo" fill="#ffffff" />

      {/* header button menu */}
      <button className="btn btn-menu" onClick={handleClickOpenMenu}>
        <MenuIcon classname="btn-menu__icon" />
      </button>

      {/* header navigation */}
      <nav className="header-navigation">
        {/* header navigation list */}
        <ul
          role={"list"}
          className={classnames("header-navigation__list", {
            "header-navigation__list--animate": openMenu == true,
            "header-navigation__list--animate-close": openMenu == false,
          })}
        >
          <li className="header-navigation__item">
            {router.pathname === "/" ? (
              <AnchorLink href="#home">Home</AnchorLink>
            ) : (
              <Link href="/" passHref>
                <a>Home</a>
              </Link>
            )}
          </li>

          <li className="header-navigation__item">
            <Link href="/projects" passHref>
              <a>Projects</a>
            </Link>
          </li>
          <li className="header-navigation__item">
            {router.pathname === "/" ? (
              <AnchorLink href="#certificates">Certificates</AnchorLink>
            ) : (
              <Link href="/" passHref>
                <a>Certificates</a>
              </Link>
            )}
          </li>
          <li className="header-navigation__item">
            {router.pathname === "/" ? (
              <AnchorLink href="#aboutme">About Me</AnchorLink>
            ) : (
              <Link href="/" passHref>
                <a>About Me</a>
              </Link>
            )}
          </li>
          <li className="header-navigation__item">
            {router.pathname === "/" ? (
              <AnchorLink href="#contactme">Contact Me</AnchorLink>
            ) : (
              <Link href="/" passHref>
                <a>Contact Me</a>
              </Link>
            )}
          </li>
          <li
            className="header-navigation__item-download"
            onClick={handleDownloadResume}
          >
            <a>Download CV</a>
          </li>
        </ul>
      </nav>

      {/* header button download cv */}
      <button className="btn btn-download" onClick={handleDownloadResume}>
        Download CV <DownloadIcon classname="btn-download__icon" />
      </button>
    </header>
  );
};

export default Header;
