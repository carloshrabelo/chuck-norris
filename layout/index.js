import React from "react";
import PropTypes from "prop-types";
import { Normalize } from "styled-normalize";
import GlobalStyle from "layout/GlobalStyle";
import Header from "./Header";

const Layout = ({ children }) => (
  <>
    <Normalize />
    <GlobalStyle />
    <Header />
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
