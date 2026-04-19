import React from 'react';
import './Man.css';
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Main({ task, setTask, tasks, setTasks, edited, setEdited, addTask, clearTasks, deleteTask, editTask, toggleTask }) {
  return (
      <div className='main-container'>

          <h2 className="welcome">Welcome to TaskMate 👋</h2>

          <div className='card task-creation'>
              <h3>Create Your Tasks</h3>

              <div className='task-input'>
                  <input type="text" placeholder='Enter your task here...' name="task" value={task} onChange={(e) => setTask(e.target.value)}/>
                  <button onClick={addTask}>{edited ? 'Update Task' : 'Add Task'}</button>
              </div>
          </div>

          <div className='card task-list'>

              <div className="task-header">
                  <p>Your Tasks</p>
                  <button className="clear-btn" onClick={clearTasks}>Clear All</button>
              </div>

              <div className='tasks'>
                  {tasks.map(task => (
                      <div className={`task-item ${task.done ? "done" : "pending"}`} key={task.id}>

                          <div className="task-content">

                              {/* 🔥 Top row */}
                              <div className="task-top">
                                  <span className="task-text">{task.text}</span>

                                  <input
                                      type="checkbox"
                                      checked={task.completed}
                                      disabled={task.done}
                                      onChange={() => toggleTask(task.id)}
                                      className="task-checkbox"
                                  />
                              </div>

                              {/* 🔥 Bottom row */}
                              <span className="task-time">{task.timestamp}</span>

                          </div>

                          <div className="actions">
                              <FaEdit
                                  className="icon edit-icon"
                                  title="Edit Task"
                                  onClick={() => editTask(task.id)}
                              />
                              <FaTrash
                                  className="icon delete-icon"
                                  title="Delete Task"
                                  onClick={() => deleteTask(task.id)}
                              />
                          </div>

                      </div>
                  ))}
              </div>


          </div>
      </div>
  );
}


