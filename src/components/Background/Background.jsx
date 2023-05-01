import React from "react";
import { Avatar } from "@mui/material";
import * as styles from "./Background.module.css";

export function Background() {
  const avatars = [
    { className: `${styles.item} ${styles.binary}`, src: "binary.svg" },
    { className: `${styles.item} ${styles.code}`, src: "code.svg" },
    { className: `${styles.item} ${styles.brackets}`, src: "brackets.svg" },
    { className: `${styles.item} ${styles.network}`, src: "network.svg" },
    {
      className: `${styles.item} ${styles.flowTree}`,
      src: "flow-tree.svg",
    },
  ];
  return (
    <div className={styles.background}>
      {avatars.map((avatar, index) => (
        <Avatar
          key={index}
          className={avatar.className}
          variant="square"
          src={avatar.src}
        />
      ))}
    </div>
  );
}
