import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

let style = {
  dur: {
    backgroundColor: "#243629",
    height: "60px",
    alignItems: "center",
    display: "flex",
  },
  child: {
    width: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "30px",
  },
  login: {
    backgroundColor: "white",
    color: "white",
    width: "150px",
    height: "30px",
    color: "black",
    marginLeft: "900px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    borderRadius: "10px",
  },
  "@media (max-width:768px)": {
    dur: {
      width: "auto",
    },
  },
};

function Header(props) {
  return (
    <div style={style.dur}>
      <div style={style.child}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          Home
        </Link>
        <Link
          to="/About"
          style={{ color: "white", textDecoration: "none", marginLeft: "50px" }}
        >
          About
        </Link>

        <Link
          to="./Products"
          style={{ color: "white", textDecoration: "none", marginLeft: "50px" }}
        >
          Products
        </Link>
      </div>
    </div>
  );
}

export default Header;
