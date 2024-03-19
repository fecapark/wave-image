import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

const useLandingImage = () => {
  const [image] = useLoader(TextureLoader, [
    "https://designembraced.com/_/static/media/bachelor/Bachelor_header.webp",
  ]);

  return image;
};

export default useLandingImage;
