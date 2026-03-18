import { useEffect } from "react";

const Notification = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const id = setTimeout(onClose, 3000);
    return () => clearTimeout(id);
  }, [onClose]);

  const isSuccess = type === "success";

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className={`${isSuccess ? "bg-blue-500/90 to-white" : "bg-red-500/90 to-white"} text-white px-5 py-3 rounded-lg shadow flex items-center gap-2`}>
        
        {/* Icon */}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isSuccess ? (
            <path strokeWidth="2" d="M 13l4 4L19 7" />
          ) : (
            <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          )}
        </svg>

        {/* Message */}
        <p className="text-sm">{message}</p>

        {/* Close */}
        <button onClick={onClose} className="ml-2 text-white/80 hover:text-white"></button>
      </div>
    </div>
  );
};

export default Notification;