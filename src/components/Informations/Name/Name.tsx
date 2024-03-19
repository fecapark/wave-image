import FloatingText from "../../utils/FloatingText/FloatingText";
import styles from "./Name.module.css";

const Name = () => {
  return (
    <div className={styles["name-container"]}>
      <div className={styles["name-wrapper"]}>
        <FloatingText animate={{ delay: 1.2 }}>Sanghyeok</FloatingText>
      </div>
      <div className={styles["name-wrapper"]}>
        <FloatingText animate={{ delay: 1.2 }}>Park</FloatingText>
      </div>
      <div className={styles["name-wrapper"]}>
        <FloatingText animate={{ delay: 1.2 }}>
          <span className={styles.date}>24.03.19</span>
        </FloatingText>
      </div>
    </div>
  );
};

export default Name;
