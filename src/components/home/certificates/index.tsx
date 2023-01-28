import { Title } from "@components/shared";
import { useState } from "react";
import { certificates } from "./data";
import Certificate from "./certificate";
import { useInView } from "react-intersection-observer";
import classnames from "classnames";

const CertificatesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [openCertificateOne, setOpenCertificateOne] = useState(false); // certificate one
  const [openCertificateTwo, setOpenCertificateTwo] = useState(false); // certificate two
  const [openCertificateThree, setOpenCertificateThree] = useState(false); // certificate three

  /**
   *
   * Open certificate function
   *
   * @param certificate certificate number
   * @returns
   */
  const handleClickOpenCertificate = (certificate: string) => {
    if (certificate === "certificateOne") {
      setOpenCertificateOne(true);
    } else if (certificate === "certificateTwo") {
      setOpenCertificateTwo(true);
    } else {
      setOpenCertificateThree(true);
    }
    return;
  };

  return (
    <section ref={ref} id="certificates" className="certificates-section">
      <div className="container">
        {/* certificate title */}
        <Title.Section
          classname={classnames("certificate-title", {
            "certificate-title--animate": inView,
          })}
        >
          CERTIFICATES
        </Title.Section>
        {/* mapping certificates and render Certificate component */}
        {certificates?.map((certificate) => (
          <Certificate
            key={certificate.id}
            certificateName={certificate.certificateName}
            handleClickOpenCertificate={handleClickOpenCertificate}
            certificateNumber={certificate.certificateNumber}
            certificateImg={certificate.certificateImg}
            openCertificate={
              certificate.certificateNumber === "certificateOne"
                ? openCertificateOne
                : certificate.certificateNumber === "certificateTwo"
                ? openCertificateTwo
                : openCertificateThree
            }
            certificateLink={certificate.link}
            inView={inView}
          />
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
