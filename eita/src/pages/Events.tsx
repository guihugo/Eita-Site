import { useTranslation } from "react-i18next";
import React from "react";
import { colors } from "../theme/colors";

const Events = () => {
  const { t } = useTranslation();

  return (
    <main style={styles.main}>

      {/* HEADER SIMPLES */}
      <section style={styles.header}>
        <h1 style={styles.pageTitle}>
          {t("events.title")}
        </h1>
        <p style={styles.subtitle}>
          {t("events.subtitle")}
        </p>
      </section>

      {/* PRÓXIMO EVENTO */}
      <section style={styles.highlightSection}>
        <h2 style={styles.sectionTitle}>
          {t("events.upcoming.title")}
        </h2>

        <div style={styles.eventCardHighlight}>
          <span style={styles.eventDate}>
            {t("events.upcoming.date")}
          </span>

          <h3 style={styles.eventTitle}>
            {t("events.upcoming.name")}
          </h3>

          <p style={styles.eventDescription}>
            {t("events.upcoming.description")}
          </p>

          <span style={styles.eventLocation}>
            {t("events.upcoming.location")}
          </span>
        </div>
      </section>

      {/* EVENTOS PASSADOS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          {t("events.past.title")}
        </h2>

        <div style={styles.eventList}>

          <div style={styles.eventItem}>
            <span style={styles.eventDateSmall}>
              {t("events.past.event1.date")}
            </span>
            <h4 style={styles.eventItemTitle}>
              {t("events.past.event1.name")}
            </h4>
            <p style={styles.eventItemDesc}>
              {t("events.past.event1.description")}
            </p>
          </div>

          <div style={styles.eventItem}>
            <span style={styles.eventDateSmall}>
              {t("events.past.event2.date")}
            </span>
            <h4 style={styles.eventItemTitle}>
              {t("events.past.event2.name")}
            </h4>
            <p style={styles.eventItemDesc}>
              {t("events.past.event2.description")}
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

  eventCardHighlight: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "40px",
    backgroundColor: colors.white,
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
  },

  eventDate: {
    display: "block",
    fontWeight: 600,
    marginBottom: "10px",
    color: colors.primary,
  },

  eventTitle: {
    fontSize: "22px",
    marginBottom: "15px",
  },

  eventDescription: {
    fontSize: "16px",
    lineHeight: 1.6,
    marginBottom: "15px",
  },

  eventLocation: {
    fontSize: "14px",
    color: colors.dark,
  },

  eventList: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  eventItem: {
    borderLeft: `4px solid ${colors.primary}`,
    paddingLeft: "20px",
  },

  eventDateSmall: {
    fontSize: "14px",
    fontWeight: 600,
    color: colors.primary,
  },

  eventItemTitle: {
    fontSize: "18px",
    margin: "5px 0 10px",
  },

  eventItemDesc: {
    fontSize: "15px",
    lineHeight: 1.6,
  },
};

export default Events;