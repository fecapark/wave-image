import gsap from "gsap";
import styles from "./SceneWrapper.module.css";

export const sildeSceneForAppear = () => {
  gsap.to(`.${styles["scene-wrapper"]}`, {
    duration: 2,
    x: 0,
    ease: "accel",
  });
};
