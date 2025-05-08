import React from 'react';
import { useSelector } from 'react-redux';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

export default function Finance() {
  const tasks = useSelector(state => state.tasks);

  const totalEarned = tasks && Array.isArray(tasks)
    ? tasks
        .filter(task => task.completed)
        .reduce((sum, task) => {
          const totalAmount = parseFloat(task.total) || 0; 
          return sum + totalAmount;
        }, 0)
    : 0;

  const employeeData = [
    { name: 'Lata', salary: 7000 },
    { name: 'Arif', salary: 7000 },
    { name: 'Anu', salary: 7000 },
  ];

  const expenses = [
    { name: 'Rent', amount: 15000 },
    { name: 'Electricity Bill', amount: 5000 },
  ];

  const totalBills = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const updateTotalAmount = (newAmount) => {
    const currentTotal = parseFloat(localStorage.getItem('totalAmount')) || 0;
    const updatedTotal = currentTotal + newAmount;
    localStorage.setItem('totalAmount', updatedTotal.toFixed(2)); 
    return updatedTotal; 
  };

  const latestTotal = updateTotalAmount(100);

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center text-pink-600 mb-10">Finance Dashboard</h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
       
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full md:w-2/3">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Employee Salary Overview</h3>
          <Line
            data={{
              labels: employeeData.map(emp => emp.name),
              datasets: [
                {
                  label: 'Monthly Salary',
                  data: employeeData.map(emp => emp.salary),
                  borderColor: '#ec4899',
                  backgroundColor: 'rgba(236, 72, 153, 0.2)',
                  fill: true,
                },
              ],
            }}
          />
        </div>

        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="bg-white border-l-4 border-green-500 shadow-md rounded-xl p-5 shine-hover cursor-pointer">
            <h3 className="text-lg font-bold text-gray-700">Total Income</h3>
            <p className="text-2xl font-semibold text-green-600 mt-2">
              ₹{latestTotal ? parseFloat(latestTotal).toFixed(2) : totalEarned.toFixed(2)}
            </p>
          </div>

          <div className="bg-white border-l-4 border-red-500 shadow-md rounded-xl p-5 shine-hover cursor-pointer">
            <h3 className="text-lg font-bold text-gray-700">Total Bills</h3>
            <p className="text-2xl font-semibold text-red-600 mt-2">₹{totalBills.toFixed(2)}</p>
          </div>       
          {employeeData.map((employee, index) => (
            <div key={index} className="bg-white border-l-4 border-blue-500 shadow-md rounded-xl p-5 shine-hover cursor-pointer">
              <h3 className="text-lg font-bold text-gray-700">{employee.name}</h3>
              <p className="text-2xl font-medium text-blue-600 mt-2">₹{employee.salary}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
