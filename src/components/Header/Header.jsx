import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Button, Col, Container } from "react-bootstrap";

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
      className={`${styles.header} d-flex justify-content-between align-items-center p-4 p-md-0`}
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
          <h1 className="text-light m-0">ASKNICA</h1>
        </Link>
      </Col>

      {/* Menu links a destra */}
      <Col className="d-none d-md-flex flex-column align-items-end gap-2">
        <div className="d-flex flex-column ">
          <Link to={"/"} className="text-decoration-none text-light">
            <h5 className={`${styles["link-header"]} text-end`}>{t("Home")}</h5>
          </Link>
          <Link to={"/products"} className="text-decoration-none text-light">
            <h5 className={`${styles["link-header"]} text-end`}>
              {t("Products")}
            </h5>
          </Link>
          <Link to={"/about"} className="text-decoration-none text-light">
            <h5 className={`${styles["link-header"]} text-end`}>
              {t("About Us")}
            </h5>
          </Link>
        </div>
      </Col>
      <hr className="pb-4 m-0" />
    </header>
  );
};

export default Header;
