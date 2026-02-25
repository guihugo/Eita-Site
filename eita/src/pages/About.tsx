import { useTranslation } from "react-i18next";
import React from "react";
import { colors } from "../theme/colors";

const About = () => {
  const { t } = useTranslation();

  return (
    <main style={styles.main}>

      {/* HERO PEQUENO */}
      <section style={styles.heroSmall}>
        <div style={styles.heroSmallContent}>
          <h1 style={styles.pageTitle}>
            {t("about.hero.title")}
          </h1>
        </div>
      </section>

      {/* DESCRIÇÃO INSTITUCIONAL */}
      <section style={styles.section}>
        <p style={styles.paragraph}>
          {t("about.description.paragraph1")}
        </p>

        <p style={styles.paragraph}>
          {t("about.description.paragraph2")}
        </p>

        <p style={styles.paragraph}>
          {t("about.description.paragraph3")}
        </p>
      </section>

      {/* MISSÃO */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>
          {t("about.mission.title")}
        </h2>
        <p style={styles.centerText}>
          {t("about.mission.description")}
        </p>
      </section>

      {/* VISÃO */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          {t("about.vision.title")}
        </h2>
        <p style={styles.centerText}>
          {t("about.vision.description")}
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
  width: "100%",          
  boxSizing: "border-box", 
},

heroSmall: {
  position: "relative",
  width: "100%",          
  height: "50vh",
  minHeight: "300px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  background: `linear-gradient(135deg, ${colors.darkest}, ${colors.dark})`,
},

sectionAlt: {
  padding: "100px 40px",
  width: "100%",          
  backgroundColor: colors.lightBg,
  textAlign: "center",
  boxSizing: "border-box", 
},

  pageTitle: {
    fontSize: "42px",
    fontWeight: 700,
    color: colors.primary,
  },

  section: {
    padding: "100px 40px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  sectionTitle: {
    fontSize: "32px",
    marginBottom: "40px",
    textAlign: "center",
    color: colors.darkest,
  },

  paragraph: {
    fontSize: "18px",
    lineHeight: 1.8,
    marginBottom: "30px",
    textAlign: "justify",
  },

  centerText: {
    fontSize: "18px",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: 1.8,
  },
};

export default About;