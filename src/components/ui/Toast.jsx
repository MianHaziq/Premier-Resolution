import { useState, useEffect, createContext, useContext } from "react";

// Toast Context
const ToastContext = createContext(null);

// Toast Provider Component
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "success", duration = 5000) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, duration }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const success = (message, duration) => addToast(message, "success", duration);
  const error = (message, duration) => addToast(message, "error", duration);

  return (
    <ToastContext.Provider value={{ success, error }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
}

// Hook to use toast
export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

// Success Icon
const SuccessIcon = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// Error Icon
const ErrorIcon = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// Close Icon
const CloseIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// Single Toast Component
function Toast({ id, message, type, duration, onRemove }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Trigger enter animation
    requestAnimationFrame(() => {
      setIsVisible(true);
    });

    // Auto dismiss
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onRemove(id);
    }, 300);
  };

  const isSuccess = type === "success";

  return (
    <div
      className={`
        flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl shadow-2xl
        min-w-[300px] sm:min-w-[380px] max-w-[90vw] sm:max-w-[450px]
        backdrop-blur-sm border
        transform transition-all duration-300 ease-out
        ${isVisible && !isLeaving
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
        }
        ${isSuccess
          ? "bg-gradient-to-r from-[#0B9444] to-[#0d7a3a] border-[#0B9444]/30 text-white"
          : "bg-gradient-to-r from-[#DC2626] to-[#B91C1C] border-red-500/30 text-white"
        }
      `}
      role="alert"
    >
      {/* Icon */}
      <div
        className={`
          flex-shrink-0 p-2 rounded-full
          ${isSuccess ? "bg-white/20" : "bg-white/20"}
        `}
      >
        {isSuccess ? <SuccessIcon /> : <ErrorIcon />}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[14px] sm:text-[15px] mb-0.5">
          {isSuccess ? "Success!" : "Error!"}
        </p>
        <p className="text-[13px] sm:text-[14px] opacity-90 leading-snug">
          {message}
        </p>
      </div>

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="flex-shrink-0 p-1.5 rounded-full hover:bg-white/20 transition-colors duration-200 cursor-pointer"
        aria-label="Close"
      >
        <CloseIcon />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-xl overflow-hidden">
        <div
          className="h-full bg-white/40 rounded-b-xl"
          style={{
            animation: `shrink ${duration}ms linear forwards`,
          }}
        />
      </div>

      <style>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
}

// Toast Container
function ToastContainer({ toasts, removeToast }) {
  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[9999] flex flex-col gap-3">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onRemove={removeToast}
        />
      ))}
    </div>
  );
}

export default Toast;
