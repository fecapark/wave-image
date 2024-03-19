import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import WaveFrag from "./wave.frag";
import WaveVert from "./wave.vert";
import { WaveShaderMaterialUniformType } from "../../types/shaders";

const waveShaderMaterialUniform: WaveShaderMaterialUniformType = {
  uMousePos: new THREE.Vector2(0, 0),
  uTexture: new THREE.Texture(),
  uRadius: 0,
};

const WaveShaderMaterial = shaderMaterial(
  waveShaderMaterialUniform,
  WaveVert,
  WaveFrag
);

export default WaveShaderMaterial;
