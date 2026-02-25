import { useTranslation } from "react-i18next";
import React from "react";
import { colors } from "../theme/colors";

const Games = () => {
  const { t } = useTranslation();

  return (
    <main style={styles.main}>

      {/* HEADER */}
      <section style={styles.header}>
        <h1 style={styles.pageTitle}>
          {t("games.title")}
        </h1>
        <p style={styles.subtitle}>
          {t("games.subtitle")}
        </p>
      </section>

      {/* GRID DE JOGOS */}
      <section style={styles.section}>
        <div style={styles.grid}>

          {/* JOGO 1 */}
          <div style={styles.card}>
            <div style={styles.imagePlaceholder} />

            <h3 style={styles.gameTitle}>
              {t("games.game1.name")}
            </h3>

            <p style={styles.description}>
              {t("games.game1.description")}
            </p>

            <button style={styles.button}>
              {t("games.game1.button")}
            </button>
          </div>

          {/* JOGO 2 */}
          <div style={styles.card}>
            <div style={styles.imagePlaceholder} />

            <h3 style={styles.gameTitle}>
              {t("games.game2.name")}
            </h3>

            <p style={styles.description}>
              {t("games.game2.description")}
            </p>

            <button style={styles.button}>
              {t("games.game2.button")}
            </button>
          </div>

        </div>
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
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: 1.6,
  },

  section: {
    padding: "60px 20px 100px",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "40px",
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: "14px",
    padding: "25px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    textAlign: "center",
    transition: "transform 0.2s ease",
  },

  imagePlaceholder: {
    width: "100%",
    height: "180px",
    backgroundColor: colors.lightBg,
    borderRadius: "10px",
    marginBottom: "20px",
  },

  gameTitle: {
    fontSize: "20px",
    marginBottom: "15px",
  },

  description: {
    fontSize: "15px",
    lineHeight: 1.6,
    marginBottom: "20px",
  },

  button: {
    padding: "10px 20px",
    backgroundColor: colors.primary,
    color: colors.white,
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: 600,
  },
};

export default Games;