import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

export default function FormTwo() {
  const [form, setForm] = useState({
    dresses: '',
    advance: '',
    total: '',
    due: '',
    confirm: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const customer = useSelector((state) => state.customer);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.confirm) {
      const task = {
        name: customer.name,
        dresses: form.dresses,
        advance: form.advance,
        total: form.total,
        due: form.due,
        completed: false,
      };

      localStorage.setItem('totalAmount', form.total);  // Save to localStorage

      dispatch(addTask(task));

      navigate('/todo');
    } else {
      alert("Please confirm the dress count.");
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl text-pink-600 font-bold text-center">Order Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['dresses', 'advance', 'total', 'due'].map((field) => (
          <input
            key={field}
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={`Enter ${field}`}
            className="w-full px-4 py-2 border border-pink-300 rounded-lg"
          />
        ))}
        <label className="flex items-center space-x-2">
          <input type="checkbox" name="confirm" checked={form.confirm} onChange={handleChange} />
          <span>I confirm dress count is correct.</span>
        </label>
        <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600">Add to To-Do</button>
      </form>
    </div>
  );
}
