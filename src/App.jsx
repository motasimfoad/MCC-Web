import React from "react";
import ReactGA from "react-ga4";
import { Outlet, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import useQRScanFix from "./hooks/useQRScanFix";
import InitialLoader from "./components/InitialLoader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBox from "./components/Misc/ChatBox";

export default function App() {
  useQRScanFix();

  ReactGA.initialize("G-BKRWBMRC78");

  const [transition, setTransition] = React.useState(true);
  const helmetContext = {};

  React.useEffect(() => {
    setTimeout(() => setTransition(false), 3000);
  }, [setTransition]);

  return (
    <HelmetProvider context={helmetContext}>
      <Analytics />
      {transition && <InitialLoader />}
      <div
        className={
          transition
            ? "opacity-0 duration-1000 transition-opacity"
            : "opacity-100 duration-1000 transition-opacity"
        }
      >
        {!transition && (
          <React.Fragment>
            <Header />
            <Outlet />
            <ChatBox />
            <Footer />
          </React.Fragment>
        )}
      </div>
    </HelmetProvider>
  );
}

function Analytics() {
  const location = useLocation();

  React.useEffect(() => {
    ReactGA.send("pageview", location.pathname + location.search); // Track page views on route change
    console.log(location.pathname, location.search);
  }, [location]);

  return null;
}
