import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCustomer } from '../redux/customerSlice';
import { addTask } from '../redux/taskSlice';

export default function FormOne() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', photo: null });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'photo') {
      const file = files[0];
      const isJPG = file && file.type === 'image/jpeg';

      if (!isJPG) {
        alert('Only JPG images are allowed.');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Photo = reader.result;

        setForm((prev) => ({
          ...prev,
          photo: base64Photo, 
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    dispatch(setCustomer(form));

    localStorage.setItem('customerData', JSON.stringify(form));

    const task = {
      name: form.name, 
      dresses: 'Dress Details',
      advance: 'Advance Amount',
      total: 'Total Amount',
      due: 'Due Date',
      completed: false,
      phone: form.phone, 
    };
    dispatch(addTask(task));

    navigate('/form-two');
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl text-pink-600 font-bold text-center">Customer Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'phone', 'email'].map((field) => (
          <input
            key={field}
            name={field}
            type={field === 'email' ? 'email' : 'text'}
            placeholder={`Enter ${field}`}
            value={form[field]}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-pink-300 rounded-lg"
          />
        ))}
        <input
          name="photo"
          type="file"
          accept="image/jpeg"
          onChange={handleChange}
          required
          className="w-full"
        />
        {form.photo && <img src={form.photo} alt="Preview" className="h-32 object-cover rounded-lg" />}
        <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600">Next</button>
      </form>
    </div>
  );
}
