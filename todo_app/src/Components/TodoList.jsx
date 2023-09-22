import React from 'react'
import Todo from './Todo';

export default function TodoList({taskList, setTaskList}) {
  console.log("タスクリスト1");
  console.table(taskList);

  // タスクの削除
  const handleDelete = (id) => {
    // alert("実行されました");
    setTaskList(
      // !==は値と型の両方をチェック。!=は値のみチェック
      taskList.filter((task) => task.id !== id)
    );
  }

  // タスクの完了
  const completed = (id) => {

    setTaskList(taskList.map((task) => {
      if(id === task.id) {
        console.log("ここから");
        const a = {...task};
        console.log(a);
        return {
          ...task,
          completed: !task.completed
        };
      }

      return task;
    }));

  }
  return (
    <div className='todoList'>
        <div className="todos">
        {
          // array.map((value) => {})は引数に空のオブジェクトを返す
          // array.map((value) => ())は引数に空の関数を返す
          taskList.map((task, index) => (
            <div className={`todo ${task.completed ? "completed" : ""}`} key={index}>
            <div className="todoText">
              <span>{task.text}</span>
            </div>
            <div className="icons">
  
              <button onClick={() => completed(task.id)}>
                <i className="fas fa-check"></i>
              </button>
  {/*引数を受け取る関数はイベントハンドラに下記のように記述する
  引数を受け取らない場合は関数の前にアロー関数を記述しなくてもよい*/}
              <button onClick={() => handleDelete(task.id)}>
                <i className="fas fa-trash"></i>
              </button>
  
            </div>
          </div>
          ))
        }

        
        </div>
    </div>
  );
};
