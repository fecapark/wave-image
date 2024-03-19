import { useThree } from "@react-three/fiber";

const usePlaneViewport = (planeWidth: number, planeHeight: number) => {
  const viewport = useThree((state) => state.viewport);

  const getSize = () => {
    const { factor } = viewport.getCurrentViewport();
    return {
      width: planeWidth * factor,
      height: planeHeight * factor,
    };
  };

  return getSize;
};

export default usePlaneViewport;
