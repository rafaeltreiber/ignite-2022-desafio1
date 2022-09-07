import logo from "../../assets/TodoLogo.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img className="logo" src={logo} alt="todo logo" />
    </header>
  );
};
