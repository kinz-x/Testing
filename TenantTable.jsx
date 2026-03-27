import { useState } from "react";

const data = [
  { name: "Sarah Johnson", unit: "Apt 101", rent: "$1200", status: "Active", date: "Mar 1" },
  { name: "Michael Chen", unit: "Apt 205", rent: "$1450", status: "Active", date: "Mar 1" },
  { name: "Emily Davis", unit: "Apt 312", rent: "$980", status: "Late", date: "Feb 15" }
];

export default function TenantTable() {
  const [search, setSearch] = useState("");

  const filtered = data.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">Recent Tenants</h3>
        <input
          placeholder="Search..."
          className="border px-2 py-1 rounded"
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <table className="w-full text-left">
        <thead className="text-gray-400 text-sm">
          <tr>
            <th>Name</th>
            <th>Unit</th>
            <th>Rent</th>
            <th>Status</th>
            <th>Due Date</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((t, i) => (
            <tr key={i} className="border-t">
              <td>{t.name}</td>
              <td>{t.unit}</td>
              <td>{t.rent}</td>
              <td>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  t.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}>
                  {t.status}
                </span>
              </td>
              <td>{t.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
