import React from "react";
import "./Footer.css";
import { Box, Container } from "./FooterStyles";
import logo from "./logo.png";

const Footer = () => {
  return (
    <>
      <hr className="footerLine" />
      <Box>
        <Container>
          <div
            style={{
              marginTop: "15px",
              fontSize: "30px",
              color: "black",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              alt=""
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            CoderCook
          </div>
          <p
            style={{
              fontSize: "10px",
              color: "black",
              display: "flex",
              justifyContent: "center",
            }}
          >
            ©Copyright by Patrick Drejerczak 2021
          </p>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
