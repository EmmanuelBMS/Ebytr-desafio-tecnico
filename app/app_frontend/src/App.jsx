import React, { useState, useEffect } from 'react';
import {
  getTasksAPI,
  updateTaskAPI,
  deleteTaskAPI,
  createTaskAPI,
} from './utils/requestApi';

function App() {
  const [tasks, useTasks] = useState([]);
  const [showEdit, useShowEdit] = useState(false);
  const [updateStatus, useUpdateStatus] = useState({});
  const [createTask, useCreateTask] = useState({ task: '', employeeId: 0 });

  useEffect(() => {
    getTasksAPI('/')
      .then((response) => useTasks(response))
      .catch((error) => console.log(error));
  }, []);

  const submitUpdate = () => {
    updateTaskAPI('/tasks', updateStatus);
    useUpdateStatus({});
    useShowEdit(!showEdit);
    window.location.reload();
  };

  const editForm = () => {
    useShowEdit(true);
  };

  const handleChangeUpdate = (e, id) => {
    e.preventDefault();
    const update = { id, status: e.target.value };
    useUpdateStatus(update);
  };

  const checkEditForm = (task) => {
    if (showEdit) {
      const input = (
        <input placeholder="Status" onChange={(e) => handleChangeUpdate(e, task.id)} />
      );
      return input;
    }
    const tableCell = (
      <div>
        <h3>Status</h3>
        <p>{task.status}</p>
      </div>
    );
    return tableCell;
  };

  const deleteTask = (id) => {
    deleteTaskAPI(`/task/${id}`);
    window.location.reload();
  };

  const handleChangeCreate = (e) => {
    e.preventDefault();
    const { target } = e;
    const { id, value } = target;
    useCreateTask({ ...createTask, [id]: value });
  };

  const createNewTask = () => {
    createTaskAPI('/tasks', createTask);
    window.location.reload();
  };

  return (
    <div className="main-div">
      {tasks.map((task) => (
        <div key={task.id} className="tasks-div-main">
          <div className="tasks-div">
            <h3>Task</h3>
            <div>
              <p>{task.task}</p>
            </div>
            <h3>Name</h3>
            <div>
              <p>{task.employee.full_name}</p>
            </div>
            { checkEditForm(task) }
          </div>
          <div>
            <div>
              <button
                type="button"
                onClick={() => {
                  editForm();
                  checkEditForm(task.id, task.status);
                }}
              >
                Edit
              </button>
            </div>
            <div>
              <button type="button" onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
            { showEdit
            && (
            <div>
              <button type="submit" onClick={() => submitUpdate()}>Submit</button>
            </div>
            )}
          </div>
        </div>
      ))}
      <form className="form">
        Create new Task
        <label htmlFor="task">
          Task:
          <input id="task" onChange={(e) => handleChangeCreate(e)} />
        </label>
        <label htmlFor="employeeId">
          Employee-id:
          <input id="employeeId" onChange={(e) => handleChangeCreate(e)} type="number" />
        </label>
        <button type="button" onClick={() => createNewTask()} className="form-button">Create</button>
      </form>
    </div>
  );
}

export default App;
