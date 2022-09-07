import { useEffect, useState } from "react";
import { ITask } from "../Content";
import { EmptyList } from "../Content/EmptyList";
import { TaskList } from "../Content/TaskList";
import styles from "./TodoList.module.css";

interface IProps {
  tasks: ITask[];
  onDeleteTask: (taskId: number) => void;
  onChangeTaskSatus: (taskId: number) => void;
}

export const TodoList = ({
  tasks,
  onDeleteTask,
  onChangeTaskSatus,
}: IProps) => {
  return (
    <div className={styles.todoListContainer}>
      <div className={styles.info}>
        <div className={styles.createdTasks}>
          <span>Tarefas criadas</span>{" "}
          <button className={styles.counter}>{tasks.length}</button>
        </div>
        <div className={styles.completedTasks}>
          <span>Concluídas</span>{" "}
          <button className={styles.counter}>
            {tasks.filter((task) => task.checked).length}
          </button>
        </div>
      </div>

      {tasks.length === 0 ? (
        <EmptyList />
      ) : (
        <TaskList
          list={tasks}
          onTrashIconClick={onDeleteTask}
          onCheckboxClick={onChangeTaskSatus}
        />
      )}
    </div>
  );
};
