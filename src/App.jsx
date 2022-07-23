import React from "react";
import food from "./assets/food.jpg";
function App() {
  return (
    <div className="bg-gradient-to-br from-green-300 flex justify-center items-center w-full h-screen ">
      <div className="rounded-xl overflow-hidden">
        <img src={food} className="w-96" />
        <div className="bg-white p-5">
          <div classname="text-md font-seimifold">Nasi Lemak</div>
          <div>
            by<span classname="font-semifold">you</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
