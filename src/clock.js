import React, { useState, useEffect } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return <div>{date.toString()}</div>;
}
