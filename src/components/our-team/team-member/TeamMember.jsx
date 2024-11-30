import React from "react";
import styles from "./TeamMember.module.scss";
import Image from "next/image";

export default function TeamMember({ imageSrc, name, designation }) {
  console.log(imageSrc);
  return (
    <div className={styles.member}>
      <div className={styles.avatar}>
        <Image
          src={imageSrc}
          fill
          style={{
            objectFit: "cover",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.designation}>{designation}</p>
      </div>
    </div>
  );
}
