"use client";

import React, { useEffect } from "react";
import anime from "animejs";

const TopographicBackground: React.FC = () => {
  useEffect(() => {
    // Select all path elements within the SVG
    const paths = document.querySelectorAll(".topographic-svg path");

    // Apply wave effect to each path
    paths.forEach((path, index) => {
      anime({
        targets: path,
        translateY: [
          { value: -10, duration: 1000 },
          { value: 10, duration: 1000 },
        ],
        translateX: [
          { value: -10, duration: 1000 },
          { value: 10, duration: 1000 },
        ],
        easing: "easeInOutSine",
        loop: true,
        delay: anime.stagger(100, { start: 500, from: "center" }),
        direction: "alternate",
      });
    });
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg
          id="Layer_1"
          className="topographic-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1136.47 849.88"
        >
          <defs>
            <style>
              {`.cls-1 { fill: #46a4a3; }
                .cls-3 { fill: #46a4a3; }`}
            </style>
          </defs>
          <path
            d="M568.34,360.7a72.88,72.88,0,1,1-73.19,72.56A73,73,0,0,1,568.34,360.7Zm-.62,143.8a70.93,70.93,0,1,0-70.62-71.23A71,71,0,0,0,567.72,504.5Z"
            className="cls-1"
          />
          <g className="cls-2">
            <path
              d="M565.06,365.81a67.76,67.76,0,1,1-68,67.46A67.83,67.83,0,0,1,565.06,365.81Zm-.58,133.56A65.81,65.81,0,1,0,499,433.28,65.88,65.88,0,0,0,564.48,499.37Z"
              className="cls-1"
            />
          </g>
          <circle
            id="circle"
            cx="566.03"
            cy="434.85"
            r="40.6"
            className="cls-3"
          />
          <path
            d="M569.37,356.08a80.48,80.48,0,1,1-80.83,80.13A80.56,80.56,0,0,1,569.37,356.08Zm-.69,159a78.53,78.53,0,1,0-78.19-78.87A78.62,78.62,0,0,0,568.68,515.09Z"
            className="cls-1"
          />
          <path
            d="M563.22,346.67a88.17,88.17,0,1,1-88.54,87.78A88.27,88.27,0,0,1,563.22,346.67Zm-.75,174.38a86.22,86.22,0,1,0-85.84-86.59A86.3,86.3,0,0,0,562.47,521.05Z"
            className="cls-1"
          />
          <g className="cls-2">
            <path
              d="M566.48,385.44a48.56,48.56,0,1,1-48.77,48.35A48.62,48.62,0,0,1,566.48,385.44Zm-.41,95.17a46.61,46.61,0,1,0-46.4-46.81A46.66,46.66,0,0,0,566.07,480.61Z"
              className="cls-1"
            />
          </g>
          <g className="cls-2">
            <path
              d="M564.31,388.83a45.17,45.17,0,1,1-45.36,45A45.21,45.21,0,0,1,564.31,388.83Zm-.39,88.38a43.22,43.22,0,1,0-43-43.4A43.28,43.28,0,0,0,563.92,477.21Z"
              className="cls-1"
            />
          </g>
          <g className="cls-2">
            <path
              d="M567.17,382.39a53.59,53.59,0,1,1-53.83,53.36A53.65,53.65,0,0,1,567.17,382.39Zm-.46,105.22a51.64,51.64,0,1,0-51.41-51.86A51.69,51.69,0,0,0,566.71,487.61Z"
              className="cls-1"
            />
          </g>
          <g className="cls-2">
            <path
              d="M563.1,376.16a58.68,58.68,0,1,1-58.93,58.42A58.74,58.74,0,0,1,563.1,376.16Zm-.5,115.4a56.73,56.73,0,1,0-56.48-57A56.79,56.79,0,0,0,562.6,491.56Z"
              className="cls-1"
            />
          </g>
          <path
            d="M545.14,336.77a131.78,131.78,0,0,1,25.48,2.81c42-1.47,88.67,23.85,93.74,99.17v.19l0,.18C651.94,477.56,626,524.55,572.67,530c-33.74,6.39-66.31-6.46-87-34.37-13.48-18.18-18.52-39.34-12.33-51.6-1.26-45.35,8-76.7,27.61-93.19C512.19,341.4,527,336.69,545.14,336.77Zm25.32,4.77-.12,0c-29.54-6-52.47-2.35-68.15,10.85-19.14,16.11-28.19,47-26.91,91.88v.26l-.12.22c-6.05,11.59-1.09,32,12.05,49.76,20.25,27.3,52.1,39.86,85.17,33.61,52.27-5.38,77.79-51.54,90-89.4-5-73.86-50.75-98.64-91.83-97.17Z"
            className="cls-1"
          />
          {/* ...additional paths here */}
        </svg>
      </div>
    </div>
  );
};

export default TopographicBackground;
