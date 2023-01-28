import React from "react";
import classnames from "classnames";

interface Props {
  openCertificate: boolean; // State which certificate needs to be opened
}

const CertificatePanelLeft = ({ openCertificate }: Props) => {
  return (
    <>
      {/* certificate animations left */}
      <div
        className={classnames("certificate-animation__left", {
          "certificate-animation__left--animate": openCertificate,
        })}
      >
        <div className="certificate-animation__left-line"></div>
        <div className="certificate-animation__left-line"></div>
        <div className="certificate-animation__left-line--short"></div>
        <div className="certificate-animation__left-line"></div>
        <div className="certificate-animation__left-line"></div>
      </div>
    </>
  );
};

export default CertificatePanelLeft;
