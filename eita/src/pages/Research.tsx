import { useTranslation } from "react-i18next";
import React from "react";
import { colors } from "../theme/colors";

const Research = () => {
  const { t } = useTranslation();

  return (
    <main style={styles.main}>

      {/* HEADER */}
      <section style={styles.header}>
        <h1 style={styles.pageTitle}>
          {t("research.title")}
        </h1>
        <p style={styles.subtitle}>
          {t("research.subtitle")}
        </p>
      </section>

      {/* ÁREAS DE PESQUISA */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>
          {t("research.areas.title")}
        </h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>
              {t("research.areas.area1.title")}
            </h3>
            <p style={styles.cardText}>
              {t("research.areas.area1.description")}
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>
              {t("research.areas.area2.title")}
            </h3>
            <p style={styles.cardText}>
              {t("research.areas.area2.description")}
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>
              {t("research.areas.area3.title")}
            </h3>
            <p style={styles.cardText}>
              {t("research.areas.area3.description")}
            </p>
          </div>
        </div>
      </section>

      {/* PROJETOS EM ANDAMENTO */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          {t("research.projects.title")}
        </h2>

        <div style={styles.verticalList}>
          <div style={styles.projectItem}>
            <h4 style={styles.projectTitle}>
              {t("research.projects.project1.title")}
            </h4>
            <p style={styles.projectText}>
              {t("research.projects.project1.description")}
            </p>
          </div>

          <div style={styles.projectItem}>
            <h4 style={styles.projectTitle}>
              {t("research.projects.project2.title")}
            </h4>
            <p style={styles.projectText}>
              {t("research.projects.project2.description")}
            </p>
          </div>
        </div>
      </section>

      {/* INICIATIVAS */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>
          {t("research.initiatives.title")}
        </h2>

        <p style={styles.centerText}>
          {t("research.initiatives.description")}
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
    paddingTop: "80px",
  },

  header: {
    textAlign: "center",
    padding: "60px 20px 40px",
  },

  pageTitle: {
    fontSize: "42px",
    fontWeight: 700,
    color: colors.primary,
    marginBottom: "15px",
  },

  subtitle: {
    fontSize: "18px",
    color: colors.dark,
    maxWidth: "750px",
    margin: "0 auto",
    lineHeight: 1.6,
  },

  section: {
    padding: "80px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  sectionAlt: {
    padding: "80px 20px",
    backgroundColor: colors.lightBg,
  },

  sectionTitle: {
    fontSize: "30px",
    marginBottom: "50px",
    textAlign: "center",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "40px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  card: {
    backgroundColor: colors.white,
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
  },

  cardTitle: {
    fontSize: "20px",
    marginBottom: "15px",
  },

  cardText: {
    fontSize: "15px",
    lineHeight: 1.6,
  },

  verticalList: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  projectItem: {
    borderLeft: `4px solid ${colors.primary}`,
    paddingLeft: "20px",
  },

  projectTitle: {
    fontSize: "18px",
    marginBottom: "10px",
  },

  projectText: {
    fontSize: "15px",
    lineHeight: 1.6,
  },

  centerText: {
    maxWidth: "800px",
    margin: "0 auto",
    fontSize: "16px",
    lineHeight: 1.7,
    textAlign: "center",
  },
};

export default Research;