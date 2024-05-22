import React, { useState } from "react";

function TaskCard({ key, title, description, dueDate, onRemove }) {
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);

  const markCompleted = () => {
    setCompleted(!completed);
  };

  const markImportant = () => {
    setImportant(!important);
  };

  const handleRemove = async () => {
    if (onRemove) {
      onRemove(key);
    }
  };

  return (
    <>
      <div
        // style={{ width: "100%" }}
        className={`card-vishal rounded-md task-card   ${
          important ? "important-task" : ""
        } ${completed ? "completed-task completed-text" : ""}`}
      >
        <div className="px-2 py-2 rounded-md card-header task-header">
          <h5 className="text-white text-xl card-title">
            {title} <br />
            <small>Due {dueDate}</small>
          </h5>
        </div>
        <div className="px-2 py-2 card-body">
          <p className="card-text text-white">{description}</p>
          <button
            type="button"
            className="bg-green-500 hover:bg-green-600 text-white mt-4 mb-1 py-2 px-4 rounded-md"
            onClick={markCompleted}
          >
            {completed ? "Mark as Not Completed" : "Mark as Completed"}
          </button>
          <button
            type="button"
            className="bg-yellow-500 hover:bg-yellow-600 text-white mt-4 mb-1 py-2 px-4 rounded-md ml-2"
            onClick={markImportant}
          >
            {important ? "Mark as Unimportant" : "Mark as Important"}
          </button>

          {completed && (
            <button
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white mt-4 mb-1 py-2 px-4 rounded-md ml-2"
              onClick={handleRemove}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default TaskCard;
