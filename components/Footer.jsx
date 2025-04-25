export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 py-4 mt-8 border-t">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h4 className="font-semibold text-lg">About HostelEasy</h4>
          <p className="text-sm mt-1 max-w-md">
            HostelEasy is a simple platform to manage hostel-related tasks at NIT Jamshedpur including student info and complaints.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg">Contact</h4>
          <p className="text-sm mt-1">
            📞 Warden Office: +91-9876543210 <br />
            📧 Email: warden@nitjsr.ac.in
          </p>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-4">
        © {new Date().getFullYear()} NIT Jamshedpur Hostel Management. All rights reserved.
      </p>
    </footer>
  );
}
