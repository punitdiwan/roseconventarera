import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from 'next/head'
import ReactGA from "react-ga4";

ReactGA.initialize("G-5TBLVZHDES");
import ErrorBoundary from "./ErrorBoundary";

const Layout = ({ children, header_data }) => {
  return (
    <ErrorBoundary>
      {/* Removed ReactGA.OutboundLink, as it does not exist in react-ga4 */}
      <div>
        <Head>
          <title>{header_data?.data ? header_data?.data[0]?.title : "Maitretech School"}</title>
          <link rel="icon" type="image/jpg" href={header_data?.data ? header_data?.data[0]?.logo?.data?.full_url : "/images/hmlogo1.png"} />
        </Head>
        <Header header_data={header_data} />
        {children}
        <Footer header_data={header_data} />
      </div>
    </ErrorBoundary>
  );
};

export default Layout;
