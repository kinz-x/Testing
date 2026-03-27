const API = "http://localhost:5000/api";

export const login = async (data) => {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const getTenants = async (token) => {
  const res = await fetch(`${API}/tenants`, {
    headers: { Authorization: token }
  });
  return res.json();
};
