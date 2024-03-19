import FloatingText from "../../utils/FloatingText/FloatingText";
import styles from "./Title.module.css";

const Title = () => {
  return (
    <div className={styles.title}>
      <FloatingText animate={{ delay: 1 }}>The</FloatingText>
      <FloatingText animate={{ delay: 1 }}>side face.</FloatingText>
    </div>
  );
};

export default Title;
