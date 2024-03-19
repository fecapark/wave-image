import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { clickedAtom } from "../shared/atom";

const useMouseTracking = () => {
  const posRef = useRef({ x: 0, y: 0 });
  const clicked = useRecoilValue(clickedAtom);

  useEffect(() => {
    const pos = { x: 0, y: 0 };
    const vel = { x: 0, y: 0 };

    const calcCurrentAccel = (mouseX: number, mouseY: number) => {
      return {
        x: (mouseX - pos.x) / 6,
        y: (mouseY - pos.y) / 6,
      };
    };

    const acceleration = (accelX: number, accelY: number) => {
      vel.x += accelX;
      vel.y += accelY;
      vel.x *= 0.5;
      vel.y *= 0.5;
    };

    const positioning = () => {
      pos.x += vel.x;
      pos.y += vel.y;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (clicked) return;

      const { clientX: mouseX, clientY: mouseY } = e;

      const { x: accelX, y: accelY } = calcCurrentAccel(mouseX, mouseY);
      acceleration(accelX, accelY);
      positioning();

      posRef.current = { ...pos };
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [clicked]);

  return posRef;
};

export default useMouseTracking;
