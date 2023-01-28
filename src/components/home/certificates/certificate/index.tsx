import { RibbonIcon } from "@assets/icons";
import { Image } from "@components/shared";
import classnames from "classnames";
import { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";
import CertificatePanelLeft from "./panel-left";
import CertificatePanelRight from "./panel-right";
import CertificateButtons from "./buttons";
import CertificateButtonOpen from "./btn-open";

interface Props {
  certificateLink: string; // Certificate link
  certificateName: string; // Certificate name
  openCertificate: boolean; // State which certificate needs to be opened
  certificateImg: StaticImageData; // Certificate image
  handleClickOpenCertificate: (certificate: string) => void; // function which will open certificate
  certificateNumber: string; // Certificate number state, also use in handleClickOpenCertificate parameter
  inView: boolean;
}

/**
 *
 * @param certificateLink Certificate link
 * @param certificateName Certificate name
 * @param certificateImg Certificate image
 * @param openCertificate State which certificate needs to be opened
 * @param handleClickOpenCertificate function which will open certificate
 * @param certificateNumber Certificate number state, also use in handleClickOpenCertificate parameter
 * @returns
 */

const Certificate = ({
  certificateLink,
  certificateName,
  certificateImg,
  openCertificate,
  handleClickOpenCertificate,
  certificateNumber,
  inView,
}: Props) => {
  return (
    <div
      className={classnames("certificate", {
        "certificate-one": certificateNumber === "certificateOne",
        "certificate-two": certificateNumber === "certificateTwo",
        "certificate-three": certificateNumber === "certificateThree",
        "certificate--animate": inView,
      })}
    >
      {/* certificate animation */}
      <div
        className={classnames("certificate-animation", {
          "certificate-animation--animate": openCertificate,
        })}
      >
        {/* certificate animation btn open */}
        <CertificateButtonOpen
          openCertificate={openCertificate}
          handleClickOpenCertificate={handleClickOpenCertificate}
          certificateNumber={certificateNumber}
        />
        {/* certificate animations left */}
        <CertificatePanelLeft openCertificate={openCertificate} />
        {/* certificate animations right */}
        <CertificatePanelRight openCertificate={openCertificate} />
      </div>

      {/* certificate buttons */}
      <CertificateButtons
        certificateLink={certificateLink}
        certificateName={certificateName}
      />

      {/* certificate image */}
      <Image
        classname="certificate-img"
        src={certificateImg}
        alt="advance react certificate image"
      />
    </div>
  );
};

export default Certificate;
