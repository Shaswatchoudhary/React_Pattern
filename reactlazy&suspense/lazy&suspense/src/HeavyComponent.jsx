import React from "react";

export default function HeavyComponent() {
  console.log("HeavyComponent Rendered");

  // Simulate heavy CPU work
  const bigArray = Array.from({ length: 100000 }, (_, i) => i);
  const sum = bigArray.reduce((acc, val) => acc + val, 0); // Simulate heavy CPU work means it will take time to load 

  return (
    <div style={{ padding: "20px", background: "#c81010" }}>
      <h2> Heavy Component Loaded</h2>
      <p>Computed Sum: {sum}</p>
    </div>
  );
}