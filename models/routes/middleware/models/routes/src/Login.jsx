import { useState } from "react";
import { login } from "../api";

export default function Login({ setToken }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async () => {
    const res = await login(form);
    setToken(res.token);
    localStorage.setItem("token", res.token);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="mb-4 text-lg font-bold">Login</h2>

        <input
          placeholder="Email"
          className="border p-2 w-full mb-2"
          onChange={e => setForm({...form, email: e.target.value})}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-2"
          onChange={e => setForm({...form, password: e.target.value})}
        />

        <button onClick={handleSubmit} className="bg-indigo-600 text-white w-full py-2">
          Login
        </button>
      </div>
    </div>
  );
}
