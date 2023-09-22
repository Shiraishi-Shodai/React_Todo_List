import React, { useState } from "react";

export default function InputForm({taskList, setTaskList}) {

  const [inputText, setInputText] = useState("");
  const handleSubmit = (e) => {
    // formを送信した時に再レンダリングされるのを防ぐ
    e.preventDefault();
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false
      }
    ]);
    // setState関数は非同期なため、コンソールを出す際にはまだtaskListが更新されておらず、結果としてひとつ前の情報がコンソールに表示される
    // console.log("タスクリスト1");
    // console.table(taskList);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    
  };

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText}/>
        <button>
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
}
