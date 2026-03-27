import { useEffect, useState } from "react";
import { getTenants } from "../api";

export default function TenantTable({ token }) {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    getTenants(token).then(setTenants);
  }, []);

  return (
    <table className="w-full">
      <tbody>
        {tenants.map(t => (
          <tr key={t._id}>
            <td>{t.name}</td>
            <td>{t.unit}</td>
            <td>${t.rent}</td>
            <td>{t.status}</td>
            <td>{t.dueDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
