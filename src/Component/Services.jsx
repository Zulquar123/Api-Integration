import React, { useEffect, useState } from "react";

export default function Services() {
  const [first, setFirst] = useState("This is normal Datea");
  const [second, setSecond] = useState("This is normal Datea");
  useEffect(() => {
    console.log("Service component is created");
    return () => {
      console.log("Service component is deleted");
    };
  }, []);
  return <div>Services</div>;
}
