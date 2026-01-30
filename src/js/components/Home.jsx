import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component




const Home = () => {
  const [nuevoTodo, setNuevoTodo] = useState("Tarea Ejemplo");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setNuevoTodo(e.target.value);
  }

  const deleteTask = (index) => {
    const newList = taskList.filter((todo, i) => i !== index);
    setTaskList(newList)
  }
  return (
    <div className="text-center bg-light">
      <h1 className="text-center mt-5">To Do List</h1>
      <div className="d-flex justify-content-center">
        <input type="text" className="form-control w-75 mb-3"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              setTaskList([...taskList, nuevoTodo])
              setNuevoTodo("")
              e.target.value = "";
            }
          }}
          onChange={handleChange} />
      </div>
      {taskList.map((task, index) =>
        <div className="d-flex justify-content-center p-2" key={index}>
          <p className="fs-1 mx-2">{task}</p>
          <button className="btn btn-outline-danger float-end" onClick={() => deleteTask(index)}>x</button>
        </div>)}

    </div>
  );
};

export default Home;