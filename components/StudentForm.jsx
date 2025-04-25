"use client";
import { useState } from "react";

export default function StudentForm() {
  const [student, setStudent] = useState({
    name: "",
    dob: "",
    phone: "",
    department: "",
    roll: "",
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, student]);
    setStudent({ name: "", dob: "", phone: "", department: "", roll: "" });
  };

  return (
    <div className="px-6 py-4">
      <h2 className="text-xl font-semibold mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} required className="p-2 border rounded" />
        <input type="date" name="dob" placeholder="DOB" value={student.dob} onChange={handleChange} required className="p-2 border rounded" />
        <input type="tel" name="phone" placeholder="Phone" value={student.phone} onChange={handleChange} required className="p-2 border rounded" />
        <input type="text" name="department" placeholder="Department" value={student.department} onChange={handleChange} required className="p-2 border rounded" />
        <input type="text" name="roll" placeholder="Roll Number" value={student.roll} onChange={handleChange} required className="p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded col-span-1 md:col-span-2">Add Student</button>
      </form>

      <h3 className="text-lg font-medium mb-2">Student List</h3>
      {students.length === 0 ? (
        <p className="text-gray-600">No students added yet.</p>
      ) : (
        <div className="space-y-4">
          {students.map((s, index) => (
            <div key={index} className="p-4 border rounded shadow-sm bg-white">
              <p><strong>Name:</strong> {s.name}</p>
              <p><strong>DOB:</strong> {s.dob}</p>
              <p><strong>Phone:</strong> {s.phone}</p>
              <p><strong>Department:</strong> {s.department}</p>
              <p><strong>Roll Number:</strong> {s.roll}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
