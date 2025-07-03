import React, { useEffect, useState } from 'react';
import { Navbar } from '../features/navigation/components/Navbar';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from '../features/auth/AuthSlice';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export const UserExpenseChartPage = () => {
  const user = useSelector(selectLoggedInUser);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
  axios.get(`/expenses/${user._id}`)
    .then((res) => {
      console.log("Expenses from backend:", res.data);
      setExpenses(res.data);
    })
    .catch((err) => console.error("Failed to fetch expenses:", err));
}, [user._id]);

  const groupedExpenses = expenses.reduce((acc, curr) => {
    const category = curr.category;
    acc[category] = (acc[category] || 0) + curr.amount;
    return acc;
  }, {});

  const chartData = Object.entries(groupedExpenses).map(([key, value]) => ({
    category: key,
    amount: value,
  }));

  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem', height: '70vh', width: '100%' }}>
        <h2>My Expenses</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
