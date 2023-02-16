import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Bar = ({ progress }) => {
  const radius = 60;
  const stroke = 5;
  const circumference = 2 * Math.PI * (radius - stroke);
  const offset = circumference - (progress / 100) * circumference;

  return (
    <ProgressBar
      now={progress}
      label={`${progress}%`}
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        borderRadius: "70%",
        padding: stroke,
        position: "relative",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
      }}
    >
      <svg
        style={{ position: "absolute", top: 0, left: 0 }}
        width={radius * 2}
        height={radius * 2}
      >
        <circle
          cx={radius}
          cy={radius}
          r={radius - stroke}
          stroke="#d9d9d9"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={radius}
          cy={radius}
          r={radius - stroke}
          stroke="#007bff"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          fill="none"
        />
      </svg>
    </ProgressBar>
  );
};

export default Bar;
