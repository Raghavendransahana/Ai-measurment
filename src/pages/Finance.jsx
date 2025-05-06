import React from 'react';
import { useSelector } from 'react-redux';

export default function Finance() {
  const tasks = useSelector(state => state.tasks);

  const totalEarned = tasks
    .filter(task => task.completed)
    .reduce((sum, task) => {
      const totalAmount = parseFloat(task.total) || 0; 
      return sum + totalAmount;
    }, 0);

  return (
    <div className="p-8">
      <h2 className="text-2xl text-center font-bold text-pink-600 mb-6">Finance Overview</h2>
      <p className="text-lg text-center">Total Earned: ₹{totalEarned.toFixed(2)}</p>
    </div>
  );
}
