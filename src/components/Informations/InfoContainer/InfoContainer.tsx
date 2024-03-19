import Title from "../Title/Title";
import styles from "./InfoContainer.module.css";
import Name from "../Name/Name";

const InfoContainer = () => {
  return (
    <div className={styles["info-container"]}>
      <Title />
      <Name />
    </div>
  );
};

export default InfoContainer;
