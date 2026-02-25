import React from "react";
import { useTranslation } from "react-i18next";
import { colors } from "../theme/colors";
import foto_andre from "../assets/members/André Luiz Brandão.jpg";
import foto_karla from "../assets/members/Karla Vittori.jpg";
import foto_janaina from "../assets/members/Janaina Gonçalves.jpg";
import foto_kazuo from "../assets/members/André Kazuo.jpg";
import foto_mario from "../assets/members/Mário.png";
import foto_julia from "../assets/members/Júlia Pessoa.jpg";
//import foto_iris from "../assets/members/Íris.jpg";
import foto_paulo from "../assets/members/Paulo Gabriel Massa.jpg";
import foto_rodrigo from "../assets/members/Rodrigo Souza.jpg";
import foto_guilherme from "../assets/members/Guilherme Hugo.jpeg";
import foto_ryan from "../assets/members/Ryan Sallatti.jpeg";
import foto_diana from "../assets/members/Diana Brito.jpg";
import foto_felipe from "../assets/members/Felipe Yoshida Ferreira.jpg";
import foto_flavia from "../assets/members/Flavia cristina.jpg";

const teamMembers = [
    {
        nameKey: "team.members.member1.name",
        roleKey: "team.members.member1.role",
        photoUrl: foto_andre,
        linkedin: "https://linkedin.com/in/member1",
        github: "https://github.com/member1",
    },
    {
        nameKey: "team.members.member2.name",
        roleKey: "team.members.member2.role",
        photoUrl: foto_karla,
        linkedin: "https://linkedin.com/in/member2",
    },
    {
        nameKey: "team.members.member3.name",
        roleKey: "team.members.member3.role",
        photoUrl: foto_janaina,
    },
    {
        nameKey: "team.members.member4.name",
        roleKey: "team.members.member4.role",
        photoUrl: foto_kazuo,
    },
    {
        nameKey: "team.members.member5.name",
        roleKey: "team.members.member5.role",
        photoUrl: foto_mario,
    },
    {
        nameKey: "team.members.member6.name",
        roleKey: "team.members.member6.role",
        photoUrl: foto_julia,
    },
    {
        nameKey: "team.members.member7.name",
        roleKey: "team.members.member7.role",
        photoUrl: "https://avatars.dicebear.com/api/avataaars/member7.svg",
    }, {
        nameKey: "team.members.member8.name",
        roleKey: "team.members.member8.role",
        photoUrl: foto_paulo,
    }, {
        nameKey: "team.members.member9.name",
        roleKey: "team.members.member9.role",
        photoUrl: foto_rodrigo,
    }, {
        nameKey: "team.members.member10.name",
        roleKey: "team.members.member10.role",
        photoUrl: foto_guilherme,
    }, {
        nameKey: "team.members.member11.name",
        roleKey: "team.members.member11.role",
        photoUrl: foto_ryan,
    }, {
        nameKey: "team.members.member12.name",
        roleKey: "team.members.member12.role",
        photoUrl: foto_diana,
    }, {
        nameKey: "team.members.member13.name",
        roleKey: "team.members.member13.role",
        photoUrl: foto_felipe,
    }, {
        nameKey: "team.members.member14.name",
        roleKey: "team.members.member14.role",
        photoUrl: foto_flavia,
    },
    // Adicione os outros membros até 15 (ou mais) replicando o padrão
];

const TeamSection = () => {
    const { t } = useTranslation();

    return (
        <section style={styles.teamSection}>
            <h2 style={styles.teamTitle}>{t("team.title")}</h2>
            <div style={styles.teamGrid}>
                {teamMembers.map((member, index) => (
                    <div key={index} style={styles.teamCard}>
                        <img
                            src={member.photoUrl}
                            alt={t(member.nameKey)}
                            style={styles.teamPhoto}
                        />
                        <h3 style={styles.teamName}>{t(member.nameKey)}</h3>
                        <p style={styles.teamRole}>{t(member.roleKey)}</p>
                        <div style={styles.teamLinks}>
                            {member.linkedin && (
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.teamLink}
                                >
                                    LinkedIn
                                </a>
                            )}
                            {member.github && (
                                <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.teamLink}
                                >
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    teamSection: {
        padding: "80px 20px",
        textAlign: "center",
        backgroundColor: colors.lightBg,
    },
    teamTitle: {
        fontSize: "32px",
        fontWeight: 700,
        marginBottom: "50px",
    },
    teamGrid: {
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
        justifyContent: "center",
    },
    teamCard: {
        flex: "1 1 250px",
        maxWidth: "250px",
        textAlign: "center",
        backgroundColor: colors.white,
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.2s",
    },
    teamPhoto: {
        width: "140px",
        height: "140px",
        borderRadius: "50%",
        objectFit: "cover",
        marginBottom: "15px",
    },
    teamName: {
        fontSize: "20px",
        fontWeight: 600,
    },
    teamRole: {
        fontSize: "16px",
        color: colors.dark,
        marginBottom: "15px",
    },
    teamLinks: {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap",
    },
    teamLink: {
        color: colors.primary,
        textDecoration: "none",
        fontWeight: 600,
        fontSize: "14px",
    },
};

export default TeamSection;