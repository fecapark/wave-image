import gsap from "gsap";
import styles from "./InfoContainer.module.css";

export const slideInfoContainerToLeftSide = () => {
  gsap.to(`.${styles["info-container"]}`, {
    duration: 0.85,
    delay: 0.3,
    left: "26%",
    x: "-100%",
    ease: "accel",
  });
};
