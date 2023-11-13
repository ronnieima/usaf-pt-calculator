"use client";

import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastContainerWrapper() {
  useEffect(() => {
    toast("Update: Charts page has been added!");
  }, []);

  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
    />
  );
}
