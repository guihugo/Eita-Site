import React, { useState } from 'react';
import logo from '../assets/react.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const NavBar = () => {

  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const logoUrl = logo;

  const currentLang = i18n.language.startsWith("pt") ? "PT" : "EN";

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>

        <Link to="/" style={styles.logoLink}>
          <img src={logoUrl} alt="Logo Help Vans" style={styles.logoImg} />
        </Link>

        <nav style={styles.nav}>
          <Link to="/about" style={styles.link}>{t("navbar.about")}</Link>
          <Link to="/events" style={styles.link}>{t("navbar.events")}</Link>
          <Link to="/news" style={styles.link}>{t("navbar.news")}</Link>
          <Link to="/games" style={styles.link}>{t("navbar.games")}</Link>
          <Link to="/research" style={styles.link}>{t("navbar.research")}</Link>
          <Link to="/contact" style={styles.link}>{t("navbar.contact")}</Link>
        </nav>

        <div style={styles.langWrapper}>
          <button
            style={styles.langButton}
            onClick={() => setOpen(!open)}
          >
            {currentLang} ▾
          </button>

          {open && (
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

      </div>
    </header>
  );
};

const colors = {
  primary: "#07F9A2",
  secondary: "#09C184",
  medium: "#0A8967",
  dark: "#0C5149",
  darkest: "#0D192B",
  white: "#FFFFFF",
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    position: "relative",
    zIndex: 1000,
    backgroundColor: colors.white,
    borderBottom: `2px solid ${colors.primary}`,
    padding: '15px 0',
    fontFamily: 'Arial, sans-serif',
    width: '100%',
  },

  container: {
    width: '100%',
    padding: '0 40px',
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },

  logoLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    marginRight: '20px',
  },

  logoImg: {
    height: '60px',
    objectFit: 'contain',
  },

  nav: {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  link: {
    textDecoration: 'none',
    color: colors.darkest,
    fontWeight: 600,
    fontSize: '16px',
    whiteSpace: 'nowrap',
    transition: "all 0.3s ease",
  },

  langWrapper: {
    position: "relative",
    marginLeft: "20px",
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
    right: 0,
    backgroundColor: colors.white,
    border: `1px solid ${colors.medium}`,
    borderRadius: "6px",
    boxShadow: `0 4px 12px rgba(13,25,43,0.15)`,
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