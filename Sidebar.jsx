export default function Sidebar() {
  const menu = [
    "Dashboard", "Properties", "Tenants", "Payments", "Maintenance"
  ];

  const system = ["Reports", "Documents", "Settings"];

  return (
    <aside className="w-64 bg-white p-5 border-r">
      <h2 className="text-xl font-bold mb-6">RentalPro</h2>

      <p className="text-xs text-gray-400 mb-2">MAIN</p>
      {menu.map(item => (
        <div key={item} className="p-2 rounded hover:bg-indigo-100 cursor-pointer">
          {item}
        </div>
      ))}

      <p className="text-xs text-gray-400 mt-6 mb-2">SYSTEM</p>
      {system.map(item => (
        <div key={item} className="p-2 rounded hover:bg-indigo-100 cursor-pointer">
          {item}
        </div>
      ))}

      <p className="absolute bottom-5 text-xs text-gray-400">© 2026</p>
    </aside>
  );
}
