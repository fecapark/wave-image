import gsap from "gsap";
import styles from "./Name.module.css";

export const slideTextsInContainer = () => {
  gsap.to(`.${styles["name-container"]}`, {
    duration: 0.85,
    delay: 0.3,
    marginLeft: "10%",
    ease: "accel",
  });

  gsap.to(`.${styles["name-wrapper"]}`, {
    duration: 0.85,
    delay: 0.3,
    x: 0,
    ease: "accel",
  });
};
