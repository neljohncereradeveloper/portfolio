import classNames from "classnames";
import React from "react";

interface Props {
  openCertificate: boolean; // State which certificate needs to be opened
  handleClickOpenCertificate: (certificate: string) => void; // function which will open certificate
  certificateNumber: string; // Certificate number state, also use in handleClickOpenCertificate parameter
}

const CertificateButtonOpen = ({
  openCertificate,
  handleClickOpenCertificate,
  certificateNumber,
}: Props) => {
  return (
    <>
      {/* certificate animation btn open */}
      <button
        className={classNames("certificate-animation__btn-open", {
          "certificate-animation__btn-open--animate": openCertificate,
        })}
        onClick={() => handleClickOpenCertificate(certificateNumber)}
      >
        OPEN
      </button>
    </>
  );
};

export default CertificateButtonOpen;
