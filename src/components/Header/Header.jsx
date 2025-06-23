import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import ita from "../../assets/imgs/itaflag.png";
import eng from "../../assets/imgs/engflag.png";

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
    <header className={styles.header}>
      <Link to={"/"} className="text-decoration-none">
        <h1 className="text-center pt-4 text-dark m-0">ASKNICA</h1>
        <p
          className={`${styles.slogan} text-center m-0 text-secondary border border-top-0 p-3`}
        >
          FEMMINILE PER NATURA, AUDACE PER SCELTA <br /> L'ELEGANZA CON
          CARATTERE
        </p>
      </Link>
      <Link />
      <div className="d-none d-md-flex justify-content-center align-items-center gap-3 mt-3 border-bottom">
        <Link to={"/"} className="text-decoration-none text-dark">
          <h5 className={styles["link-header"]}>{t("Home")}</h5>
        </Link>
        <Link to={"/products"} className="text-decoration-none text-dark">
          <h5 className={styles["link-header"]}>{t("Products")}</h5>
        </Link>
        <Link to={"/about"} className="text-decoration-none text-dark">
          <h5 className={styles["link-header"]}>{t("About Us")}</h5>
        </Link>
        <div className="d-flex align-items-center gap-2">
          <div ref={langRef} className={styles.langSelector}>
            <img
              src={i18n.language === "it" ? ita : eng}
              alt={i18n.language}
              width="22"
              height="22"
              className={`${styles.imgLang} rounded-circle`}
              style={{ cursor: "pointer" }}
              onClick={toggleLangMenu}
            />
            {showLangMenu && (
              <div className={styles.langMenu}>
                {["it", "en"]
                  .filter((lng) => lng !== i18n.language)
                  .map((lng) => (
                    <img
                      key={lng}
                      src={lng === "it" ? ita : eng}
                      alt={lng}
                      width="22"
                      height="22"
                      className={`${styles.imgLang} rounded-circle`}
                      style={{ cursor: "pointer" }}
                      onClick={() => changeLanguage(lng)}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="pb-4" />
    </header>
  );
};

export default Header;
