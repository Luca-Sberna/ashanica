import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={"/"} className="">
        <h1 className="text-center pt-4">Ashanica</h1>
      </Link>
      <Link />
      <div className="d-none d-md-flex justify-content-center align-items-center gap-3 mt-5">
        <Link to={"/"}>
          <h5>Home</h5>
        </Link>
        <Link to={"/products"}>
          <h5>Prodotti</h5>
        </Link>
        <Link to={"/about"}>
          <h5>Chi siamo</h5>
        </Link>
        <h5>Lingua</h5>
      </div>
      <hr className="pb-4" />
    </header>
  );
};

export default Header;
