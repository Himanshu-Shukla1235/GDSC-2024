import React from "react";
import "../components/nav.css";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { green, red } from "@mui/material/colors";
const username = "Username";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {" "}
        <Avatar
          alt="Travis Howard"
          src="https://avatars.githubusercontent.com/u/145251086?v=4"
        />
      </div>
      <div className="list">
        {" "}
        <Avatar
          alt="Travis Howard"
          src="https://avatars.githubusercontent.com/u/145251086?v=4"
        />{" "}
        <h1 style={{ color: "white", fontFamily: "sans-serif", fontSize: 15 }}>
          {username}
        </h1>
        <ul>
          <li>
            <NavLink to={"/"}>home</NavLink>
          </li>
          <li>
            <NavLink to={"/login "}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/regester "}>Regester</NavLink>
          </li>

          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
