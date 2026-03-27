import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Card from "./components/Card";
import TenantTable from "./components/TenantTable";
import RevenueChart from "./components/RevenueChart";

export default function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6">
        <Topbar />

        <h1 className="text-2xl font-bold mt-4">Dashboard</h1>
        <p className="text-gray-500 mb-6">
          Welcome back! Here's your property overview.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card title="Total Properties" value="24" change="+2" />
          <Card title="Active Tenants" value="89" change="+5" />
          <Card title="Monthly Revenue" value="$94,200" change="+12%" />
          <Card title="Open Requests" value="7" change="-3" negative />
        </div>

        {/* Chart */}
        <RevenueChart />

        {/* Table */}
        <TenantTable />
      </div>
    </div>
  );
}
