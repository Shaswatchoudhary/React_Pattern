import { useState } from "react";

const Signup = ({ onSwitch, onNotify }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = form; 

    if (Object.values(form).some(v => !v)) 
      return onNotify("All fields are required", "error");//using object.values to check if any field is empty

    if (password.length < 8)
      return onNotify("Password must be at least 8 characters", "error");//checking password length

    if (password !== confirmPassword)
      return onNotify("Passwords do not match", "error");//checking if passwords match

    if (!email.endsWith("@gmail.com"))
      return onNotify("Only Gmail allowed", "error");

    localStorage.setItem(`user_${email}`, JSON.stringify({ name, email, password }));

    onNotify("Account created!", "success");
    onSwitch();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-500/90 to-white px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Create account</h2>

        <div className="space-y-4">
          {["name", "email", "password", "confirmPassword"].map(field => (
            <input
            key={field}
            name={field}
            type={field== 'password' || field== 'confirmPassword' ? "password" : "text"}

            placeholder={field.replace(/([A-Z])/g, " $1")}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        ))}
        </div>

        <button className="w-full bg-red-500/80 hover:bg-red-600 text-white py-2 rounded">
       Register
        </button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <button onClick={onSwitch} className="text-red-500/80 hover:underline">
            Login 
          </button>
        </p>
      </form>
    </div>
  );
};

export default Signup;