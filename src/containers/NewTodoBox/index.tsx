import React, { useState } from "react";
import plus from "../../assets/plus.svg";

import styles from "./NewTodoBox.module.css";

interface IProps {
  onAddButtonClick: (text: string) => void;
}

export const NewTodobox = ({ onAddButtonClick }: IProps) => {
  const [inputText, setInputText] = useState("");

  const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const textValue = event.target.value;

    setInputText(textValue);
  };

  return (
    <div className={styles.container}>
      <input
        name="textInput"
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => handleTextInput(e)}
      />
      <button onClick={() => onAddButtonClick(inputText)}>
        Criar <img src={plus} />
      </button>
    </div>
  );
};
