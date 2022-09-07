import list from "../../../assets/Clipboard.svg";

import styles from "./EmptyList.module.css";

export const EmptyList = () => {
  return (
    <div className={styles.emptyListContainer}>
      <div className={styles.icon}>
        <img src={list} alt="Empty list" />
      </div>
      <div className={styles.NomessagesText}>
        <span className={styles.NomessagesText}>
          Você ainda não tem tarefas cadastradas
        </span>
      </div>
      <div className={styles.createTasks}>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
};
