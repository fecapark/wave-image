import gsap from "gsap";
import styles from "./FloatingText.module.css";

export const floatText = (id: string, delay: number) => {
  gsap.to(`#${id} > .${styles.text}`, {
    duration: 0.8,
    y: 0,
    delay,
    ease: "power4",
  });
};

export const changeFloatingTextColorToWhite = () => {
  gsap.to(`.${styles.text}`, {
    duration: 0.5,
    delay: 0.6,
    color: "#eee",
    ease: "power2",
  });

  gsap.to(`.${styles.text}`, {
    duration: 0.5,
    delay: 0.6,
    color: "#eee",
    ease: "power2",
  });
};
