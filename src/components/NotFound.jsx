import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center text-slate-200 pt-24 px-12 gap-16">
      <div className="flex flex-col gap-16">
        <h1 className="text-9xl text-center font-extrabold">
          <span className="text-rose-600">404</span> - Not Found
        </h1>
        <p className="text-2xl text-center font-semibold text-slate-400">
          Redirecting to the home-page in 3 seconds...
        </p>
      </div>
    </div>
  );
}

export default NotFound;
