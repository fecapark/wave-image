import { ReactThreeFiber } from "@react-three/fiber";
import WaveShaderMaterial from "../shaders/wave/wave.material";

export type WaveShaderMaterialUniformType = {
  uMousePos: THREE.Vector2;
  uTexture: THREE.Texture;
  uRadius: number;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      waveShaderMaterial: ReactThreeFiber.Node<
        WaveShaderMaterial,
        typeof WaveShaderMaterial
      > &
        Partial<WaveShaderMaterialUniformType>;
    }
  }
}
