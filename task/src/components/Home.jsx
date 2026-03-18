const Home = ({ user, onLogout }) => (
  <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500/90 to-white px-4">
    <div className="w-full max-w-md text-center space-y-6 bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
      
      <h2 className="text-3xl font-extrabold text-gray-800">
        Welcome, {user?.name}   
      </h2>

      <p className="text-gray-600">
        You are successfully logged in.
      </p>

      <button
        onClick={onLogout}
        className="w-full bg-black/80 text-white py-2 rounded-xl hover:bg-black transition-colors shadow-lg hover:shadow-black/30"
      >
        Logout
      </button>

    </div>
  </div>
);

export default Home;