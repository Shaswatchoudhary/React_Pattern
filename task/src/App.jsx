import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Notification from "./components/Notification";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("login");
  const [notification, setNotification] = useState(null);

  const notify = (message, type) => {
    setNotification({ message, type });

    setTimeout(() => setNotification(null), 3000);
  };

  const handleLogin = (u) => {
    if (u) {
      setUser(u);
      setPage("home");
    } else {
      setPage("signup");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-500/20 to-white text-gray-900">

      {page === "home" && (
        <Home user={user} onLogout={() => setPage("login")} />
      )}

      {page === "signup" && (
        <Signup onSwitch={() => setPage("login")} onNotify={notify} />
      )}

      {page === "login" && (
        <Login onSwitch={handleLogin} onNotify={notify} />
      )}

      {notification && (
        <Notification
          {...notification}
          onClose={() => setNotification(null)}
        />
      )}

    </div>
  );
}

export default App;