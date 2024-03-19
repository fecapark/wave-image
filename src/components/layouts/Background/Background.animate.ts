import gsap from "gsap";
import styles from "./Background.module.css";

export const slideBackground = () => {
  gsap.to(`.${styles.background}`, {
    duration: 1.2,
    x: 0,
    ease: "accel",
  });
};
