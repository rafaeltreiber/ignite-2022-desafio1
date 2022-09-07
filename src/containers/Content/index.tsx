import { useState } from "react";
import { NewTodobox } from "../NewTodoBox";
import { TodoList } from "../TodoList";
import styles from "./Content.module.css";

export interface ITask {
  id: number;
  text: string;
  checked: boolean;
}

export const Content = () => {
  const [currentTaskId, setCurrentTaskId] = useState(0);
  const [tasks, setTasks] = useState<ITask[]>([]);

  const addTask = (inputText: string) => {
    if (inputText === "") return;

    const newTaskId = currentTaskId + 1;
    setCurrentTaskId(newTaskId);

    setTasks([...tasks, { id: newTaskId, text: inputText, checked: false }]);
  };

  const handleDeleteTask = (taskId: number) => {
    const newTaskList = tasks.filter((task) => task.id !== taskId);

    setTasks(newTaskList);
  };

  const handleTaskStatusChange = (taskId: number) => {
    const updatedTaskList = tasks.map((task) => {
      if (task.id === taskId) task.checked = !task.checked;

      return task;
    });

    setTasks(updatedTaskList);
  };

  return (
    <div className={styles.contentContainer}>
      <NewTodobox onAddButtonClick={addTask} />
      <TodoList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onChangeTaskSatus={handleTaskStatusChange}
      />
    </div>
  );
};
