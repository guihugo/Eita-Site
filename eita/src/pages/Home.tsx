import { useTranslation } from "react-i18next";
import group from "../assets/group_pic.jpeg";
import React from "react";
import { colors } from "../theme/colors";
import { Link } from "react-router";

const Home = () => {
  const { t } = useTranslation();

  return (
    <main style={styles.main}>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>

        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            {t("home.hero.title")}
          </h1>
          <p style={styles.heroSubtitle}>
            {t("home.hero.subtitle")}
          </p>
          <div style={styles.heroButtons}>
            <Link to="/research" style={styles.primaryButton}>
              {t("home.hero.ctaPrimary")}
            </Link>
            <Link to="/games" style={styles.secondaryButton}>
              {t("home.hero.ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          {t("home.about.title")}
        </h2>
        <p style={styles.centerText}>
          {t("home.about.description")}
        </p>
      </section>

      {/* LINHAS DE PESQUISA */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>
          {t("home.research.title")}
        </h2>

        <div style={styles.cards}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>
              {t("home.research.area1.title")}
            </h3>
            <p>
              {t("home.research.area1.description")}
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>
              {t("home.research.area2.title")}
            </h3>
            <p>
              {t("home.research.area2.description")}
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>
              {t("home.research.area3.title")}
            </h3>
            <p>
              {t("home.research.area3.description")}
            </p>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          {t("home.projects.title")}
        </h2>
        <p style={styles.centerText}>
          {t("home.projects.description")}
        </p>
      </section>

      {/* PUBLICAÇÕES */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>
          {t("home.publications.title")}
        </h2>
        <p style={styles.centerText}>
          {t("home.publications.description")}
        </p>
      </section>

    </main>
  );
};

const styles: { [key: string]: React.CSSProperties } = {

  main: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: colors.white,
    color: colors.darkest,
  },

  hero: {
    position: "relative",
    height: "85vh",
    minHeight: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundImage: `url(${group})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(135deg, rgba(13,25,43,0.85), rgba(12,81,73,0.85))",
    zIndex: 1,
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    maxWidth: "800px",
    padding: "20px",
    color: colors.white,
  },

  heroTitle: {
    fontSize: "56px",
    fontWeight: 700,
    marginBottom: "20px",
    lineHeight: 1.2,
    color: colors.primary,
  },

  heroSubtitle: {
    fontSize: "20px",
    color: "#EAFBF6",
  },

  section: {
    padding: "100px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  sectionAlt: {
    padding: "100px 40px",
    backgroundColor: colors.lightBg,
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "32px",
    marginBottom: "50px",
    textAlign: "center",
    color: colors.darkest,
  },

  cards: {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  card: {
    flex: "1 1 300px",
    padding: "40px",
    borderRadius: "14px",
    backgroundColor: colors.white,
    border: `1px solid ${colors.medium}`,
    boxShadow: "0 8px 30px rgba(13,25,43,0.06)",
  },

  cardTitle: {
    marginBottom: "15px",
    color: colors.dark,
  },

  centerText: {
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
    fontSize: "18px",
  },
  heroButtons: {
    marginTop: "40px",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  primaryButton: {
    padding: "14px 28px",
    backgroundColor: colors.primary,
    color: colors.darkest,
    borderRadius: "8px",
    fontWeight: 600,
    textDecoration: "none",
    transition: "0.3s",
  },

  secondaryButton: {
    padding: "14px 28px",
    border: `2px solid ${colors.primary}`,
    color: colors.primary,
    borderRadius: "8px",
    fontWeight: 600,
    textDecoration: "none",
  },
};

export default Home;