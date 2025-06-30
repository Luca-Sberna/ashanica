import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Button, Col, Container, Image } from "react-bootstrap";
import logo from "../../assets/imgs/logo.jpg";

const Header = () => {
  const [showLangMenu, setShowLangMenu] = useState(false);
  const langRef = useRef();

  const toggleLangMenu = () => {
    setShowLangMenu((prev) => !prev);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setShowLangMenu(false);
  };

  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setShowLangMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`${styles.header} d-none d-md-flex justify-content-between align-items-center p-4 p-md-0`}
    >
      <Col className="d-none d-md-flex ">
        <div className="d-flex justify-content-end text-primary">
          <div ref={langRef} className={styles.langSelector}>
            <Button
              variant="outline-light"
              size="sm"
              onClick={toggleLangMenu}
              className={styles.languageButton}
            >
              {i18n.language.toUpperCase()}
            </Button>
            {showLangMenu && (
              <div className={styles.langMenu}>
                {["it", "en"]
                  .filter((lng) => lng !== i18n.language)
                  .map((lng) => (
                    <Button
                      key={lng}
                      variant="outline-light"
                      size="sm"
                      className={styles.languageButton}
                      onClick={() => changeLanguage(lng)}
                    >
                      {lng.toUpperCase()}
                    </Button>
                  ))}
              </div>
            )}
          </div>
        </div>
      </Col>
      {/* Titolo centrato */}
      <Col className="flex-grow-1 text-center">
        <Link to={"/"} className="text-decoration-none">
          <h1 className={`${styles.textShadow} text-light m-0`}>
            {" "}
            <Image src={logo} className="" width={250} />
          </h1>
        </Link>
      </Col>

      {/* Menu links a destra */}
      <Col className={`d-none d-md-flex flex-column align-items-end gap-2`}>
        <div
          className={`rounded-start d-none d-md-flex flex-column gap-2 ${styles.fixedLinks}`}
        >
          <Link
            to={"/"}
            className={`${styles.textShadow} text-decoration-none text-light`}
          >
            <h5 className={styles["link-header"]}>{t("Home")}</h5>
          </Link>
          <Link
            to={"/products"}
            className={`${styles.textShadow} text-decoration-none text-light`}
          >
            <h5 className={styles["link-header"]}>{t("Products")}</h5>
          </Link>
          <Link
            to={"/about"}
            className={`${styles.textShadow} text-decoration-none text-light`}
          >
            <h5 className={styles["link-header"]}>{t("About Us")}</h5>
          </Link>
        </div>
      </Col>
      <hr className="pb-4 m-0" />
    </header>
  );
};

export default Header;
