'use client';

import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ComplaintPage() {
  const [form, setForm] = useState({
    name: "",
    room: "",
    issue: "",
    details: ""
  });
  const [complaints, setComplaints] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/complaints', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
      setForm({ name: "", room: "", issue: "", details: "" });
      fetchComplaints();
    }
  };

  const fetchComplaints = async () => {
    const res = await fetch('/api/complaints');
    const data = await res.json();
    setComplaints(data);
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-6 max-w-xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Submit Complaint</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "room", "issue", "details"].map((field) => (
            <input
              key={field}
              name={field}
              type="text"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          ))}
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>

        <h3 className="text-lg font-semibold mt-8">Complaints:</h3>
        <ul className="mt-2 space-y-2">
          {complaints.map((c) => (
            <li key={c.id} className="border p-2 rounded shadow">
              <strong>{c.name}</strong> ({c.room})<br />
              <em>{c.issue}</em>: {c.details}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
