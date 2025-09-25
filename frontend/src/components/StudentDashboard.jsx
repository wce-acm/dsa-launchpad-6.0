import React, { useEffect, useState } from "react";

export default function StudentDashboard() {
  const [students, setStudents] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch(
          "https://dsa-launchpad-6-0-av2t.onrender.com/api/launchpad/students"
        );
        const data = await res.json();
        setStudents(data.students);
        setCount(data.totalStudents);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const filteredStudents = students.filter(
    (s) =>
      s.fullName.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.college.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-10">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-3xl p-6 sm:p-8 md:p-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-10">
          <div className="w-full sm:w-full md:w-auto mb-4 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
              Registered Students
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl">
              Total Students:{" "}
              <span className="font-semibold text-blue-600">{count}</span>
            </p>
          </div>

          {/* Search */}
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search by name, email, or college..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 sm:px-5 sm:py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <p className="text-center text-gray-500 text-base sm:text-lg md:text-xl py-6 sm:py-10">
            Loading students...
          </p>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
            <table className="min-w-[600px] w-full table-auto border-collapse">
              <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left font-semibold tracking-wide text-sm sm:text-base md:text-base">
                    Name
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left font-semibold tracking-wide text-sm sm:text-base md:text-base">
                    Email
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left font-semibold tracking-wide text-sm sm:text-base md:text-base">
                    College
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student, idx) => (
                    <tr
                      key={student._id}
                      className={`transition cursor-pointer ${
                        idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-gray-100`}
                    >
                      <td className="px-4 sm:px-6 py-3 text-gray-800 font-medium text-sm sm:text-base">
                        {student.fullName}
                      </td>
                      <td className="px-4 sm:px-6 py-3 text-gray-600 text-sm sm:text-base">
                        {student.email}
                      </td>
                      <td className="px-4 sm:px-6 py-3 text-gray-600 text-sm sm:text-base">
                        {student.college}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      className="text-center py-6 text-gray-400 italic text-sm sm:text-base"
                    >
                      No students found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
