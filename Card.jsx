export default function Card({ title, value, change, negative }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-xl font-bold my-2">{value}</h2>
      <span className={negative ? "text-red-500" : "text-green-500"}>
        {change} vs last month
      </span>
    </div>
  );
}
