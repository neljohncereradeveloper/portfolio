import Link from "next/link";
import React from "react";

interface Props {
  certificateLink: string; // Certificate link
  certificateName: string; // Certificate name
}

const CertificateButtons = ({ certificateLink, certificateName }: Props) => {
  return (
    <>
      {/* certificate buttons */}
      <div className="certificate-buttons">
        <h4 className="certificate-buttons__title">{certificateName}</h4>
        <Link href={certificateLink} passHref>
          <a target="_blank" rel="noreferrer">
            Certificate
          </a>
        </Link>
      </div>
    </>
  );
};

export default CertificateButtons;
