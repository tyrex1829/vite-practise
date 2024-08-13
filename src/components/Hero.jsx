import React from "react";

function Hero() {
  return (
    <div className="flex flex-col justify-center text-slate-200 pt-24 px-12 gap-16">
      <div className="flex flex-col gap-16">
        <h1 className="text-9xl text-center font-extrabold">
          This is a Hero Section of our{" "}
          <span className="text-rose-600">App.</span>
        </h1>
        <p className="text-2xl text-center font-semibold text-slate-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          sequi illum ut, voluptatum aspernatur, dolorem nisi repudiandae
          quaerat nobis saepe officiis fugit, alias accusamus inventore in velit
          laboriosam. Repellendus, itaque.
        </p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            window.location.href = "/admin-panel";
          }}
          className="bg-rose-600 hover:bg-rose-700 py-4 px-8 rounded-md"
        >
          Admin Panel
        </button>
      </div>
    </div>
  );
}

export default Hero;
