import { useFrame } from "@react-three/fiber";
import useMouseTracking from "../../hooks/useMouseTracking";
import useRippleRadius from "../../hooks/useRippleRadius";
import useLandingImage from "../../hooks/useLandingImage";
import WaveShaderMaterial from "../../shaders/wave/wave.material";
import { WaveShaderMaterialUniformType } from "../../types/shaders";
import { useRef } from "react";
import usePlaneViewport from "../../hooks/usePlaneViewport";

type ShaderMaterialType = typeof WaveShaderMaterial &
  WaveShaderMaterialUniformType;

const PLANE_ASPECT = [16, 9];
const PLANE_WIDTH = 0.84;
const PLANE_HEIHGT = PLANE_WIDTH * (PLANE_ASPECT[1] / PLANE_ASPECT[0]);

const Wave = () => {
  const image = useLandingImage();
  const mousePosRef = useMouseTracking();
  const radiusRef = useRippleRadius();
  const shaderRef = useRef<ShaderMaterialType>(null);
  const getPlaneSize = usePlaneViewport(PLANE_WIDTH, PLANE_HEIHGT);

  const mappingPositionToScene = (x: number, y: number) => {
    const relX = (x / document.body.clientWidth) * 2 - 1;
    const relY = ((y / document.body.clientHeight) * 2 - 1) * -1;

    const { width, height } = getPlaneSize();
    const wRatio = document.body.clientWidth / width;
    const hRatio = document.body.clientHeight / height;

    const resX = relX * wRatio * (PLANE_WIDTH / 2);
    const resY = relY * hRatio * (PLANE_HEIHGT / 2);

    return {
      x: resX,
      y: resY,
    };
  };

  useFrame(() => {
    if (!shaderRef.current) return;

    const { x, y } = mappingPositionToScene(
      mousePosRef.current.x,
      mousePosRef.current.y
    );

    shaderRef.current.uMousePos.x = x;
    shaderRef.current.uMousePos.y = y;
    shaderRef.current.uRadius = radiusRef.current;
  });

  return (
    <mesh>
      <planeGeometry
        args={[PLANE_WIDTH, PLANE_HEIHGT, PLANE_ASPECT[0], PLANE_ASPECT[1]]}
      />
      <waveShaderMaterial ref={shaderRef} uTexture={image} />
    </mesh>
  );
};

export default Wave;
