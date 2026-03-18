import { useState } from "react";

const Login = ({ onSwitch, onNotify }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = form;

    if (!email || !password)
      return onNotify("All fields required", "error");

    const user = JSON.parse(localStorage.getItem(`user_${email}`));

    if (user?.password === password) {
      onNotify("Login successful!", "success");
      return onSwitch?.(user);
    }

    if (email === "admin@example.com" && password === "admin123") {
      onNotify("Welcome admin!", "success");
      return onSwitch?.({ name: "admin", email });
    }

    onNotify(user ? "Wrong password" : "Account not found", "error");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-500/90 to-white px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Login</h2>

        <div className="space-y-4">
          {["email", "password"].map(field => (
            <input
            key={field}
            name={field}
            type={field === "password" ? "password" : "email"}
            placeholder={field}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        ))}
        </div>

        <button className="w-full bg-red-500/80 hover:bg-red-600 text-white py-2 rounded">
       Login 
        </button>

        <p className="text-center text-sm">
          No account?{" "}
          <button onClick={() => onSwitch(null)} className="text-red-500/80 hover:underline">
            Sign up
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;