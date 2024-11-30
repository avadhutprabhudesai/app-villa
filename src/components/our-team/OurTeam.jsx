import React from "react";
import SectionHeader from "../section-header/SectionHeader";
import styles from "./OurTeam.module.scss";
import Member1Img from "@/assets/images/member-1.jpg";
import Member2Img from "@/assets/images/member-2.jpg";
import Member3Img from "@/assets/images/member-3.jpg";
import TeamMember from "./team-member/TeamMember";

const team = [
  {
    imageSrc: Member1Img.src,
    name: "Angela Kristy",
    designation: "Senior Designer",
  },
  {
    imageSrc: Member2Img.src,
    name: "Sarah Conner",
    designation: "Frontend Developer",
  },
  {
    imageSrc: Member3Img.src,
    name: "Leonard Krasner",
    designation: "Backend Developer",
  },
];

export default function OurTeam() {
  return (
    <div className={styles.ourTeam}>
      <div className="container">
        <div className={styles.header}>
          <SectionHeader
            title="Team"
            heading="Meet our team"
            text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
          />
        </div>
        <div className={styles.team}>
          {team.map(({ imageSrc, name, designation }) => (
            <TeamMember
              imageSrc={imageSrc}
              name={name}
              designation={designation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
