import { useTranslation } from "react-i18next";
import React from "react";
import { colors } from "../theme/colors";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <main style={styles.main}>

      {/* HEADER */}
      <section style={styles.header}>
        <h1 style={styles.pageTitle}>
          {t("contact.title")}
        </h1>
        <p style={styles.subtitle}>
          {t("contact.subtitle")}
        </p>
      </section>

      {/* CONTEÚDO */}
      <section style={styles.section}>
        <div style={styles.grid}>

          {/* INFORMAÇÕES */}
          <div style={styles.infoBox}>
            <h3 style={styles.infoTitle}>
              {t("contact.info.title")}
            </h3>

            <p style={styles.infoText}>
              <strong>{t("contact.info.emailLabel")}:</strong><br />
              {t("contact.info.email")}
            </p>

            <p style={styles.infoText}>
              <strong>{t("contact.info.addressLabel")}:</strong><br />
              {t("contact.info.address")}
            </p>

            <p style={styles.infoText}>
              <strong>{t("contact.info.institutionLabel")}:</strong><br />
              {t("contact.info.institution")}
            </p>
          </div>

          {/* FORMULÁRIO */}
          <div style={styles.formBox}>
            <h3 style={styles.infoTitle}>
              {t("contact.form.title")}
            </h3>

            <form style={styles.form}>
              <input
                type="text"
                placeholder={t("contact.form.name")}
                style={styles.input}
              />

              <input
                type="email"
                placeholder={t("contact.form.email")}
                style={styles.input}
              />

              <textarea
                placeholder={t("contact.form.message")}
                style={styles.textarea}
              />

              <button type="submit" style={styles.button}>
                {t("contact.form.button")}
              </button>
            </form>
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
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "60px",
  },

  infoBox: {
    backgroundColor: colors.lightBg,
    padding: "30px",
    borderRadius: "12px",
  },

  formBox: {
    backgroundColor: colors.white,
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
  },

  infoTitle: {
    fontSize: "20px",
    marginBottom: "20px",
  },

  infoText: {
    fontSize: "15px",
    lineHeight: 1.6,
    marginBottom: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "12px",
    borderRadius: "6px",
    border: `1px solid ${colors.lightBg}`,
    fontSize: "14px",
  },

  textarea: {
    padding: "12px",
    borderRadius: "6px",
    border: `1px solid ${colors.lightBg}`,
    fontSize: "14px",
    minHeight: "120px",
    resize: "vertical",
  },

  button: {
    padding: "12px",
    backgroundColor: colors.primary,
    color: colors.white,
    border: "none",
    borderRadius: "6px",
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default Contact;