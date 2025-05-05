import React from "react";

const Lines = () => {
  const x = ["x-shape", "circle"];

  return (
    <div className="lines top-0 left-0 w-full h-full absolute pointer-events-none z-0 flex justify-evenly">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={`line line-${
            i + 1
          } bg-transparent animate-fill animate-delay-${i}`}
        >
          <div className="shapes">
            {x.map((shape, index) => (
              <div key={index} className={shape} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lines;
