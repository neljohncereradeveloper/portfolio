import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

const CProjectsNavigation = () => {
  return (
    <aside className="aside">
      <nav className="projectsNavigation">
        <ul role={"list"} className="projectsNavigation__list">
          <li className="projectsNavigation__listItem">
            <AnchorLink href="#personalProjects">Projects</AnchorLink>
            <ul className="projectsNavigation__listItem__capstones-list">
              <li className="projectsNavigation__listItem__capstones-listItem">
                <AnchorLink href="#bookReservation">
                  Library Book Reservation
                </AnchorLink>
              </li>
              <li className="projectsNavigation__listItem__capstones-listItem">
                <AnchorLink href="#assetManagement">
                  Assset Management
                </AnchorLink>
              </li>
              <li className="projectsNavigation__listItem__capstones-listItem">
                <AnchorLink href="#teacherAttendance">
                  Library Book Reservation
                </AnchorLink>
              </li>
              <li className="projectsNavigation__listItem__capstones-listItem">
                <AnchorLink href="#barangayCertificate">
                  Online Barangay Certificate Request
                </AnchorLink>
              </li>
              <li className="projectsNavigation__listItem__capstones-listItem">
                <AnchorLink href="#crud">Crud MERN Stack</AnchorLink>
              </li>
              <li className="projectsNavigation__listItem__capstones-listItem">
                <AnchorLink href="#urlShortener">Url Shortener</AnchorLink>
              </li>
              <li className="projectsNavigation__listItem__capstones-listItem">
                <AnchorLink href="#pricingComponents">
                  Pricing Components
                </AnchorLink>
              </li>
            </ul>
          </li>
          {/* <li className="projectsNavigation__listItem">
            <AnchorLink href="#personalProjects">Personal Projects</AnchorLink>
          </li> */}
          <li className="projectsNavigation__listItem">
            <AnchorLink href="#frontendMentors"> Frontend Mentors</AnchorLink>

            <ul className="projectsNavigation__listItem__frontendmentor-list">
              <li className="projectsNavigation__listItem__frontendmentor-listItem">
                <AnchorLink href="#frontendMentors">
                  Sunnyside agency landing page
                </AnchorLink>
              </li>
              <li className="projectsNavigation__listItem__frontendmentor-listItem">
                <AnchorLink href="#frontendMentors">
                  Testimonials grid section
                </AnchorLink>
              </li>
              <li className="projectsNavigation__listItem__frontendmentor-listItem">
                <AnchorLink href="#frontendMentors">
                  Social proof section
                </AnchorLink>
              </li>
              <li className="projectsNavigation__listItem__frontendmentor-listItem">
                <AnchorLink href="#frontendMentors">
                  Order summary component
                </AnchorLink>
              </li>
              <li className="projectsNavigation__listItem__frontendmentor-listItem">
                <AnchorLink href="#frontendMentors">
                  Interactive rating component
                </AnchorLink>
              </li>
              <li className="projectsNavigation__listItem__frontendmentor-listItem">
                <AnchorLink href="#frontendMentors">
                  Blog Responsive Design
                </AnchorLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default CProjectsNavigation;
