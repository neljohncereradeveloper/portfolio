import { FacebookIcon, GithubIcon, LinkinIcon } from "@assets/icons";
import Link from "next/link";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

interface Props {
  isProjectsPage?: boolean;
}

const Footer = ({ isProjectsPage }: Props) => {
  return (
    <footer className="footer">
      <div className="container">
        {/* footer  navigation */}
        {isProjectsPage ? (
          <nav className="footer-navigation">
            <ul role={"list"}>
              <li className="footer-navigation__item">
                <AnchorLink href="#personalProjects">Projects</AnchorLink>
              </li>
              <li className="footer-navigation__item">
                <AnchorLink href="#frontendMentors">
                  Frontend Mentors
                </AnchorLink>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className="footer-navigation">
            <ul role={"list"}>
              <li className="footer-navigation__item">
                <AnchorLink href="#home">Home</AnchorLink>
              </li>
              <li className="footer-navigation__item">
                <AnchorLink href="#whatido">What i do</AnchorLink>
              </li>
              <li className="footer-navigation__item">
                <AnchorLink href="#skills">Skills</AnchorLink>
              </li>
              <li className="footer-navigation__item">
                <AnchorLink href="#projects">Projects</AnchorLink>
              </li>
              <li className="footer-navigation__item">
                <AnchorLink href="#certificates">Certificates</AnchorLink>
              </li>
              <li className="footer-navigation__item">
                <AnchorLink href="#aboutme">About Me</AnchorLink>
              </li>
              <li className="footer-navigation__item">
                <AnchorLink href="#contactme">Contact Me</AnchorLink>
              </li>
            </ul>
          </nav>
        )}

        {/* footer bottom */}
        <div className="footer-bottom">
          {/* footer bottom socials */}
          <div className="footer-socials">
            <p className="footer-social__title">Follow me</p>
            <div className="footer-social__line"></div>
            <div className="footer-social__icons">
              <Link href="https://www.facebook.com/nel.john.125" passHref>
                <a className="project__link" target="_blank" rel="noreferrer">
                  <FacebookIcon classname="icon-social" />
                </a>
              </Link>
              <Link href="https://github.com/Neljohn-Cerera" passHref>
                <a className="project__link" target="_blank" rel="noreferrer">
                  <GithubIcon classname="icon-social" />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/neljohn-cerera/" passHref>
                <a className="project__link" target="_blank" rel="noreferrer">
                  <LinkinIcon classname="icon-social" />
                </a>
              </Link>
            </div>
          </div>
          {/* footer bottom copyright */}
          <div className="footer-copyright">
            <p>Alrights Reserved 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
