import React, { useState, useEffect } from "react";
import TaskCard from "../components/Tasks/TaskCard";
import "../style.css";
import "../style_forum.css";
import "../index.css";

function Taskpage() {
  const [personalTasks, setPersonalTasks] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [completed2, setCompleted2] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch("/tasks/");
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      const data = await response.json();
      setPersonalTasks(data.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addPersonalTask = async () => {
    const taskTitle = prompt("Enter task title:");
    if (taskTitle) {
      const taskDescription = prompt("Enter task description:");
      const dueDate = prompt("Enter due date (e.g., 20/12/2023):");
      const newTask = {
        title: taskTitle,
        description: taskDescription,
        dueDate: dueDate,
      };
      try {
        const response = await fetch("/tasks/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTask),
        });
        if (!response.ok) {
          throw new Error("Failed to add task");
        }
        fetchTasks();
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  const removePersonalTask = async (taskId) => {
    try {
      const response = await fetch(`/tasks/${taskId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete task");
      }
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <>
      <div className="container-forum mx-auto w-full" style={{ maxWidth: "90%" }}>
        <section className="main">
          <div className="container task-container">
            <h1 className="text-4xl text-white text-center mb-3">Your Tasks</h1>
            <h6 className=" h6-vishal text-center">
              <a href="../Dashboard/index.html">Back to Dashboard</a>
            </h6>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-4">
              <div className="col-span-1 task-section">
                <h2 className="text-3xl text-white mb-3">Assigned Tasks</h2>
                <div className={`cardv rounded-md task-card ${completed ? "completed-task completed-text" : ""}`}>
                  <div className="px-2 py-2 rounded-md card-header task-header">
                    <h5 className="text-white text-xl card-title">
                      Task 1 <br />
                      <small>Due 20/12/2023</small>
                    </h5>
                  </div>
                  <div className="px-2 py-2 card-body">
                    <p className="card-text text-white">Description of Task 1.</p>
                    <button
                      type="button"
                      className="bg-green-500 hover:bg-green-600 text-white mt-4 mb-1 py-2 px-4 rounded-md"
                      onClick={() => setCompleted(!completed)}
                    >
                      Mark as Completed
                    </button>
                  </div>
                </div>
                <div className={`cardv rounded-md task-card ${completed2 ? "completed-task completed-text" : ""}`}>
                  <div className="px-2 py-2 rounded-md card-header task-header">
                    <h5 className="text-white text-xl card-title">
                      Task 2 <br />
                      <small>Due 20/12/2023</small>
                    </h5>
                  </div>
                  <div className="px-2 py-2 card-body">
                    <p className="card-text text-white">Description of Task 2.</p>
                    <button
                      type="button"
                      className="bg-green-500 hover:bg-green-600 text-white mt-4 mb-1 py-2 px-4 rounded-md"
                      onClick={() => setCompleted2(!completed2)}
                    >
                      Mark as Completed
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-2 task-section">
                <h2 className="text-3xl mb-3 text-white">Personal Tasks</h2>
                <button
                  type="button"
                  className="bg-green-500 hover:bg-blue-600 text-white mb-1 py-2 px-4 rounded-md add-task-btn"
                  onClick={addPersonalTask}
                >
                  Add New Task
                </button>
                <br />
                <br />
                {personalTasks.map((task) => (
                  <TaskCard
                    key={task.taskId}
                    title={task.title}
                    description={task.description}
                    dueDate={task.dueDate}
                    onRemove={() => removePersonalTask(task.taskId)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Taskpage;
