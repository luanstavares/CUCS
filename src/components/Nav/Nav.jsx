import React from "react";
import * as styles from "./Nav.module.css";
import { ListLinks } from "./ListLinks";
import Logo from "../Logo/Logo";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Nav() {
  return (
    <div className={styles.navBar}>
      <Logo />
      <ListLinks />
      <SocialMediaLinks />
    </div>
  );
}
