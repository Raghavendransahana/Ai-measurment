import { createSlice } from '@reduxjs/toolkit';

const loadTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: loadTasksFromLocalStorage(),
  reducers: {
    addTask: (state, action) => {
      state.push({ ...action.payload, completed: false });
      saveTasksToLocalStorage(state);
    },
    markCompleted: (state, action) => {
      const task = state[action.payload];
      if (task) {
        task.completed = true;
        task.completedAt = new Date().toISOString(); // Store the completion date and time
      }
      saveTasksToLocalStorage(state);
    },
    removeTask: (state, action) => {
      const updatedTasks = state.filter((_, index) => index !== action.payload);
      saveTasksToLocalStorage(updatedTasks);
      return updatedTasks;
    },
  },
});

export const { addTask, markCompleted, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
