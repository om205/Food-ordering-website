import { useState, useEffect } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(navigator.onLine);
  useEffect(() => {
    window.addEventListener("offline", () => setOnline(false));
    window.addEventListener("online", () => setOnline(true));
    return () => {
      window.removeEventListener("offline", () => setOnline(false));
      window.removeEventListener("online", () => setOnline(true));
    };
  }, []);
  return online;
};

export default useOnline;
