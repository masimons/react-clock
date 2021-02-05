import React, { useState } from "react";
import Clock from "./clock";
import "./style.css";

export default function App() {
  const [mounted, setMounted] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setMounted(!mounted);
        }}
      >
        Toggle Mounted
      </button>
      {mounted && <Clock />}
    </div>
  );
}
