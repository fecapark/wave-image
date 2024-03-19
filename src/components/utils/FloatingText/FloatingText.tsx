import { useGSAP } from "@gsap/react";
import { useId } from "react";
import styles from "./FloatingText.module.css";
import { floatText } from "./FloatingText.animate";

type AnimateProps = {
  delay: number;
};

interface FloatingTextProps {
  children: React.ReactNode;
  animate?: AnimateProps;
  className?: string;
}

const FloatingText = ({
  children,
  animate: { delay } = { delay: 0 },
  className = "",
}: FloatingTextProps) => {
  const id = useId();

  useGSAP(() => {
    floatText(CSS.escape(id), delay);
  });

  return (
    <div id={id} className={`${styles["floating-text"]} ${className}`}>
      <div className={styles.text}>{children}</div>
    </div>
  );
};

export default FloatingText;
