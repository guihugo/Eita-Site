import { useTranslation } from "react-i18next";
import React from "react";
import { colors } from "../theme/colors";

const News = () => {
  const { t } = useTranslation();

  return (
    <main style={styles.main}>

      {/* HEADER */}
      <section style={styles.header}>
        <h1 style={styles.pageTitle}>
          {t("news.title")}
        </h1>
        <p style={styles.subtitle}>
          {t("news.subtitle")}
        </p>
      </section>

      {/* DESTAQUE */}
      <section style={styles.highlightSection}>
        <h2 style={styles.sectionTitle}>
          {t("news.highlight.title")}
        </h2>

        <div style={styles.highlightCard}>
          <span style={styles.category}>
            {t("news.highlight.category")}
          </span>

          <h3 style={styles.newsTitle}>
            {t("news.highlight.name")}
          </h3>

          <span style={styles.date}>
            {t("news.highlight.date")}
          </span>

          <p style={styles.description}>
            {t("news.highlight.description")}
          </p>
        </div>
      </section>

      {/* LISTA DE NOTÍCIAS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          {t("news.recent.title")}
        </h2>

        <div style={styles.newsList}>

          <div style={styles.newsItem}>
            <span style={styles.categorySmall}>
              {t("news.recent.item1.category")}
            </span>
            <h4 style={styles.itemTitle}>
              {t("news.recent.item1.name")}
            </h4>
            <span style={styles.dateSmall}>
              {t("news.recent.item1.date")}
            </span>
            <p style={styles.itemDescription}>
              {t("news.recent.item1.description")}
            </p>
          </div>

          <div style={styles.newsItem}>
            <span style={styles.categorySmall}>
              {t("news.recent.item2.category")}
            </span>
            <h4 style={styles.itemTitle}>
              {t("news.recent.item2.name")}
            </h4>
            <span style={styles.dateSmall}>
              {t("news.recent.item2.date")}
            </span>
            <p style={styles.itemDescription}>
              {t("news.recent.item2.description")}
            </p>
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

  highlightSection: {
    backgroundColor: colors.lightBg,
    padding: "80px 20px",
    textAlign: "center",
  },

  section: {
    padding: "80px 20px",
    maxWidth: "900px",
    margin: "0 auto",
  },

  sectionTitle: {
    fontSize: "28px",
    marginBottom: "40px",
    textAlign: "center",
  },

  highlightCard: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "40px",
    backgroundColor: colors.white,
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
  },

  newsList: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  newsItem: {
    borderLeft: `4px solid ${colors.primary}`,
    paddingLeft: "20px",
  },

  category: {
    display: "inline-block",
    fontSize: "14px",
    fontWeight: 600,
    color: colors.primary,
    marginBottom: "10px",
  },

  categorySmall: {
    fontSize: "13px",
    fontWeight: 600,
    color: colors.primary,
  },

  newsTitle: {
    fontSize: "22px",
    margin: "10px 0",
  },

  itemTitle: {
    fontSize: "18px",
    margin: "5px 0",
  },

  date: {
    display: "block",
    fontSize: "14px",
    marginBottom: "15px",
    color: colors.dark,
  },

  dateSmall: {
    fontSize: "13px",
    color: colors.dark,
  },

  description: {
    fontSize: "16px",
    lineHeight: 1.6,
  },

  itemDescription: {
    fontSize: "15px",
    lineHeight: 1.6,
  },
};

export default News;