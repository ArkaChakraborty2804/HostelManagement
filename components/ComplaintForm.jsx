"use client";
import { useState } from "react";

export default function ComplaintForm() {
  const [complaint, setComplaint] = useState({
    name: "",
    room: "",
    issue: "",
    details: "",
  });

  const [complaints, setComplaints] = useState([]);

  const handleChange = (e) => {
    setComplaint({ ...complaint, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComplaints([...complaints, complaint]);
    setComplaint({ name: "", room: "", issue: "", details: "" });
  };

  return (
    <div className="px-6 py-4">
      <h2 className="text-xl font-semibold mb-4">Add Complaint</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <input type="text" name="name" placeholder="Your Name" value={complaint.name} onChange={handleChange} required className="p-2 border rounded" />
        <input type="text" name="room" placeholder="Room Number" value={complaint.room} onChange={handleChange} required className="p-2 border rounded" />
        <input type="text" name="issue" placeholder="Issue Title" value={complaint.issue} onChange={handleChange} required className="p-2 border rounded" />
        <input type="text" name="details" placeholder="Issue Details" value={complaint.details} onChange={handleChange} required className="p-2 border rounded md:col-span-2" />
        <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded col-span-1 md:col-span-2">Submit Complaint</button>
      </form>

      <h3 className="text-lg font-medium mb-2">Complaints List</h3>
      {complaints.length === 0 ? (
        <p className="text-gray-600">No complaints submitted yet.</p>
      ) : (
        <div className="space-y-4">
          {complaints.map((c, index) => (
            <div key={index} className="p-4 border rounded shadow-sm bg-white">
              <p><strong>Name:</strong> {c.name}</p>
              <p><strong>Room:</strong> {c.room}</p>
              <p><strong>Issue:</strong> {c.issue}</p>
              <p><strong>Details:</strong> {c.details}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
