export default function Topbar() {
  return (
    <div className="flex justify-between items-center">
      <input
        className="border rounded-lg px-4 py-2 w-80"
        placeholder="Search..."
      />

      <div className="flex items-center gap-4">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
          + Quick Add
        </button>

        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
          JD
        </div>
      </div>
    </div>
  );
}
