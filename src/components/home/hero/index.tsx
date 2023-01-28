import { FacebookIcon, GithubIcon, LinkinIcon } from "@assets/icons";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        {/* hero details */}
        <div className="hero-section__details">
          <h1 className="hero-title hero-title--animate">HELLO</h1>
          <h2 className="hero-subtitle">
            {"I'm"} <br />
            Neljohn <span>Cerera</span>
          </h2>
          <div className="hero-detail__line"></div>
          <p className="hero-detail__role">Web Developer</p>
        </div>
        {/* hero socials */}
        <div className="hero-section__socials">
          <p className="hero-social__title">Follow me</p>
          <div className="hero-social__line"></div>
          <div className="hero-social__icons">
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
      </div>
    </section>
  );
};

export default HeroSection;
