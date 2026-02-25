import React, { useState, useEffect } from "react";
import logo from "../assets/react.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { colors } from "../theme/colors";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const logoUrl = logo;
  const currentLang = i18n.language.startsWith("pt") ? "PT" : "EN";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
    setMenuOpen(false);
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* LOGO */}
        <Link to="/" style={styles.logoLink}>
          <img src={logoUrl} alt="Logo EITA" style={styles.logoImg} />
        </Link>

        {/* MOBILE MENU BUTTON */}
        {isMobile && (
          <button
            style={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        )}

        {/* NAVIGATION */}
        {(!isMobile || menuOpen) && (
          <nav style={isMobile ? styles.mobileNav : styles.nav}>
            <Link
              to="/about"
              style={styles.link}
              onClick={() => isMobile && setMenuOpen(false)}
            >
              {t("navbar.about")}
            </Link>

            <Link
              to="/events"
              style={styles.link}
              onClick={() => isMobile && setMenuOpen(false)}
            >
              {t("navbar.events")}
            </Link>

            <Link
              to="/team"
              style={styles.link}
              onClick={() => isMobile && setMenuOpen(false)}
            >
              {t("navbar.team")}
            </Link>

            <Link
              to="/games"
              style={styles.link}
              onClick={() => isMobile && setMenuOpen(false)}
            >
              {t("navbar.games")}
            </Link>

            <Link
              to="/research"
              style={styles.link}
              onClick={() => isMobile && setMenuOpen(false)}
            >
              {t("navbar.research")}
            </Link>

            <Link
              to="/contact"
              style={styles.link}
              onClick={() => isMobile && setMenuOpen(false)}
            >
              {t("navbar.contact")}
            </Link>

            {/* LANGUAGE SELECTOR */}
            <div style={styles.langWrapper}>
              <button
                style={styles.langButton}
                onClick={() => setLangOpen(!langOpen)}
              >
                {currentLang} ▾
              </button>

              {langOpen && (
                <div style={styles.dropdown}>
                  <div
                    style={styles.dropdownItem}
                    onClick={() => changeLanguage("pt")}
                  >
                    Português
                  </div>
                  <div
                    style={styles.dropdownItem}
                    onClick={() => changeLanguage("en")}
                  >
                    English
                  </div>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};


const styles: { [key: string]: React.CSSProperties } = {
  header: {
    position: "relative",
    zIndex: 1000,
    backgroundColor: colors.white,
    borderBottom: `2px solid ${colors.primary}`,
    padding: "15px 0",
    fontFamily: "Arial, sans-serif",
    width: "100%",
  },

  container: {
    width: "100%",
    padding: "0 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
    position: "relative",
  },

  logoLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },

  logoImg: {
    height: "55px",
    objectFit: "contain",
  },

  nav: {
    display: "flex",
    gap: "30px",
    alignItems: "center",
  },

  mobileNav: {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    backgroundColor: colors.white,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "30px 40px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    borderTop: `1px solid ${colors.medium}`,
  },

  menuButton: {
    background: "none",
    border: "none",
    fontSize: "28px",
    cursor: "pointer",
  },

  link: {
    textDecoration: "none",
    color: colors.darkest,
    fontWeight: 600,
    fontSize: "16px",
    whiteSpace: "nowrap",
  },

  langWrapper: {
    position: "relative",
  },

  langButton: {
    background: colors.secondary,
    color: colors.white,
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: 600,
  },

  dropdown: {
    position: "absolute",
    top: "45px",
    left: 0,
    backgroundColor: colors.white,
    border: `1px solid ${colors.medium}`,
    borderRadius: "6px",
    boxShadow: "0 4px 12px rgba(13,25,43,0.15)",
    overflow: "hidden",
    minWidth: "120px",
  },

  dropdownItem: {
    padding: "10px 15px",
    cursor: "pointer",
    whiteSpace: "nowrap",
    color: colors.darkest,
  },
};

export default NavBar;