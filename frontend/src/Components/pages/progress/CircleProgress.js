import React, { useState } from "react";

import Bar from "./Bar";
import "./Circleprogress.css";
function CircleProgress() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="card shadow"
          style={{
            width: " 350px",
            height: " 350px",
            marginLeft: "70px",
            marginTop: "120px",
          }}
        >
          <div className="circle1">
            <label className="pname">ToDo</label>
            <Bar progress={15} />
          </div>
        </div>
        <div
          className="card shadow"
          style={{
            width: " 350px",
            height: " 350px",
            marginLeft: "50px",
            marginTop: "120px",
          }}
        >
          <div className="circle2">
            <label className="pname2">OverallProgress</label>
            <Bar progress={15} />
          </div>
        </div>
        <div
          className="card shadow"
          style={{
            width: " 350px",
            height: " 350px",
            marginLeft: "50px",
            marginTop: "120px",
          }}
        >
          <div className="circle3">
            <label className="pname3">DeadlineRemaing</label>
            <Bar progress={15} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CircleProgress;
