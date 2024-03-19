import FloatingText from "../../utils/FloatingText/FloatingText";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div id="header" className={styles.header}>
      <FloatingText animate={{ delay: 0.8 }}>FECA</FloatingText>
      <FloatingText animate={{ delay: 0.8 }}>PARK</FloatingText>
    </div>
  );
};

export default Header;
