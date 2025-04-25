import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
      <Link href="/" className="text-xl font-bold text-gray-800">
        HostelEasy
      </Link>
      <div className="flex space-x-6">
        <Link href="/add-student" className="text-gray-700 hover:text-blue-600">
          Add Student
        </Link>
        <Link href="/add-complaint" className="text-gray-700 hover:text-blue-600">
          Add Complaint
        </Link>
      </div>
    </nav>
  );
}
