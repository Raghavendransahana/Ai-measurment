import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../redux/taskSlice';

export default function ToDoList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (index, task) => {
    dispatch(removeTask(index));

    const message = `Order for ${task.name} is complete. Dresses: ${task.dresses}, Advance: ${task.advance}, Total: ${task.total}, Due: ${task.due}`;
    const phone=task.phone;
    const whatsappLink = `https://wa.me/91${phone}?text=Order%20completed%21?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl text-pink-600 font-bold text-center">To-Do List</h2>
      <div className="space-y-4">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h3 className="font-semibold">{task.name}</h3>
              <p><strong>Dresses:</strong> {task.dresses}</p>
              <p><strong>Advance:</strong> {task.advance}</p>
              <p><strong>Total:</strong> {task.total}</p>
              <p><strong>Due:</strong> {task.due}</p>
              <button
                onClick={() => handleDelete(index, task)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 mt-4"
              >
               Order Completed
              </button>
            </div>
          ))
        ) : (
          <p>No tasks available.</p>
        )}
      </div>
    </div>
  );
}
