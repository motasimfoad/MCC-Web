import React from "react";
import { useLocation, useNavigate } from "react-router";

const useQRScanFix = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  React.useEffect(() => {
    const isQRScan = pathname === "/contact-master-class-commercial-cleaning";
    if (isQRScan) {
      navigate("/contact");
    }
  }, [pathname]);
};

export default useQRScanFix;
