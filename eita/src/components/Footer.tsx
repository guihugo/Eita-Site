import { useTranslation } from "react-i18next";
import React from "react";
import { colors } from "../theme/colors";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        <div style={styles.left}>
          <h4 style={styles.groupName}>
            {t("footer.groupName")}
          </h4>
          <p style={styles.text}>
            {t("footer.institution")}
          </p>
          <p style={styles.text}>
            {t("footer.email")}
          </p>
        </div>

        <div style={styles.right}>
          <h4 style={styles.sectionTitle}>
            {t("footer.socialTitle")}
          </h4>

          <div style={styles.socials}>
            <a href="https://br.linkedin.com/company/diversaoseriaufabco" style={styles.link}>LinkedIn</a>
            <a href="https://www.instagram.com/diversaoseriaufabc/" style={styles.link}>Instagram</a>
            <a href="#" style={styles.link}>ResearchGate</a>
          </div>
        </div>

      </div>

      <div style={styles.bottom}>
        {t("footer.copyright")}
      </div>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {

  footer: {
    backgroundColor: colors.darkest,
    color: colors.white,
    paddingTop: "60px",
    marginTop: "80px",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "40px",
  },

  left: {
    flex: 1,
    minWidth: "250px",
  },

  right: {
    flex: 1,
    minWidth: "250px",
  },

  groupName: {
    fontSize: "18px",
    marginBottom: "10px",
  },

  sectionTitle: {
    fontSize: "16px",
    marginBottom: "15px",
  },

  text: {
    fontSize: "14px",
    marginBottom: "8px",
  },

  socials: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  link: {
    color: colors.primary,
    textDecoration: "none",
    fontSize: "14px",
  },

  bottom: {
    marginTop: "40px",
    padding: "20px",
    textAlign: "center",
    fontSize: "13px",
    borderTop: `1px solid rgba(255,255,255,0.1)`,
  },
};

export default Footer;