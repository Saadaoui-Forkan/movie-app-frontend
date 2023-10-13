import React from "react";
import "./header.css";
import logo from '../../assets/images/logo.svg'
import Search from "../search/Search";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
        <Link to={"/"} className="logo">
          <img src={logo} alt="Filmlane logo" />
        </Link>
        <div className="input">
          <input className="search-input" placeholder="search ..." type="text"/>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="user">
          <h3>M</h3>
        </div>
    </header>
  );
};

export default Header;
