import styles from "./TaskList.module.css";
import trash from "../../../assets/trash.svg";
import { ITask } from "..";

interface IProps {
  list: ITask[];
  onTrashIconClick: (taskId: number) => void;
  onCheckboxClick: (taskId: number) => void;
}

export const TaskList = ({
  list,
  onTrashIconClick,
  onCheckboxClick,
}: IProps) => {
  return (
    <>
      {list.map((task: ITask) => {
        return (
          <div className={styles.container} key={task.id}>
            <div className={styles.checkBoxContainer}>
              <input
                type="checkbox"
                checked={task.checked}
                onChange={() => onCheckboxClick(task.id)}
              />
              <p
                style={{
                  textDecoration: task.checked ? "line-through" : "none",
                }}
              >
                {task.text}
              </p>
            </div>

            <div className={styles.imgContainer}>
              <img
                src={trash}
                alt="trash icon"
                onClick={() => onTrashIconClick(task.id)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
