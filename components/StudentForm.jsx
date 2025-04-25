'use client';

import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function StudentPage() {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    phone: "",
    department: "",
    roll: ""
  });
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/students', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
      setForm({ name: "", dob: "", phone: "", department: "", roll: "" });
      fetchStudents();
    }
  };

  const fetchStudents = async () => {
    const res = await fetch('/api/students');
    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-6 max-w-xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Add Student</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "dob", "phone", "department", "roll"].map((field) => (
            <input
              key={field}
              name={field}
              type={field === "dob" ? "date" : "text"}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          ))}
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>

        <h3 className="text-lg font-semibold mt-8">Student List:</h3>
        <ul className="mt-2 space-y-2">
          {students.map((s) => (
            <li key={s.id} className="border p-2 rounded shadow">
              {s.name} | {s.department} | {s.roll}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
