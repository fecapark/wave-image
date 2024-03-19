import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Wave from "./Wave";

const Scene = () => {
  return (
    <Canvas camera={{ fov: 10, position: [0, 0, 5] }}>
      <Suspense>
        <Wave />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
