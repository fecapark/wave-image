import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { extend } from "@react-three/fiber";
import { CustomEase } from "gsap/CustomEase";
import WaveShaderMaterial from "../shaders/wave/wave.material";

export const setGsapConfigs = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(CustomEase);

  CustomEase.create("accel", "0.83, 0, 0.17, 1");
};

export const extendMaterials = () => {
  extend({ WaveShaderMaterial });
};
