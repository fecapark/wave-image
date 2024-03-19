import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { clickedAtom } from "../shared/atom";
import { useFrame } from "@react-three/fiber";

const PROPAGATION_SPEED = 0.026;

const useRippleRadius = () => {
  const clicked = useRecoilValue(clickedAtom);
  const radiusRef = useRef(0);

  useFrame(() => {
    if (!clicked) return;
    radiusRef.current += PROPAGATION_SPEED;
  });

  return radiusRef;
};

export default useRippleRadius;
