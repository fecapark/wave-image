import FloatingText from "../../utils/FloatingText/FloatingText";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <FloatingText className="footer" animate={{ delay: 0.8 }}>
        Inspiration by Design Embraced.
      </FloatingText>
    </div>
  );
};

export default Footer;
