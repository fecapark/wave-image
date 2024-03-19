import { useGSAP } from "@gsap/react";
import { slideInfoContainerToLeftSide } from "../../Informations/InfoContainer/InfoContainer.animate";
import { slideTextsInContainer } from "../../Informations/Name/Name.animate";
import Scene from "../../graphics/Scene";
import { changeFloatingTextColorToWhite } from "../../utils/FloatingText/FloatingText.animate";
import { slideBackground } from "../Background/Background.animate";
import { useSetRecoilState } from "recoil";
import { clickedAtom } from "../../../shared/atom";
import styles from "./SceneWrapper.module.css";
import gsap from "gsap";
import { sildeSceneForAppear } from "./SceneWrapper.animate";

const SceneWrapper = () => {
  const setClicked = useSetRecoilState(clickedAtom);

  useGSAP(() => {
    sildeSceneForAppear();
  });

  const onClick = () => {
    setClicked((prev) => {
      if (prev) return true;

      // Text color transitions
      gsap.to("#root", {
        duration: 0.5,
        delay: 0.6,
        color: "#fff",
        ease: "power2",
      });
      changeFloatingTextColorToWhite();

      // Slide transitions
      slideBackground();
      slideInfoContainerToLeftSide();
      slideTextsInContainer();

      return true;
    });
  };

  return (
    <div className={styles["scene-wrapper"]} onClick={onClick}>
      <Scene />
    </div>
  );
};

export default SceneWrapper;
