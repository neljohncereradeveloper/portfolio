import React from "react";
import classnames from "classnames";
import { RibbonIcon } from "@assets/icons";

interface Props {
  openCertificate: boolean; // State which certificate needs to be opened
}

const CertificatePanelRight = ({ openCertificate }: Props) => {
  return (
    <>
      {/* certificate animations right */}
      <div
        className={classnames("certificate-animation__right", {
          "certificate-animation__right--animate": openCertificate,
        })}
      >
        <span
          className={classnames("certificate-animation__right-certified", {
            "certificate-animation__right-certified--animate": openCertificate,
          })}
        >
          Certified
        </span>
        <RibbonIcon classname="certificate-animation__right-ribbon" />
      </div>
    </>
  );
};

export default CertificatePanelRight;
