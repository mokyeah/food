import React from "react";
import food from "./assets/food.jpg";
import { Icon } from '@iconify/react';

function App() {
  return (
    <div className="bg-gradient-to-br from-green-300 flex justify-center items-center w-full h-screen ">
      <div className="rounded-xl overflow-hidden">
        <img src={food} className="w-64 md:w-96 " />
        <div className="bg-white p-5 relative">
          <div classname="text-md font-seimifold">yummy<strong> Nasi Lemak</strong></div>
          <div>
            by<span classname="font-semifold"><strong> Someone who likes Nasi Lemak</strong></span>
            <div classname="text-md font-seimifold text-xl mt-4 tracking-wider">
              <strong>$6969</strong></div>



            <div>
              <div className='flex '>
                {Array(5)
                  .fill(0)
                  .map(() => (
                    <div>
                      <Icon
                        icon="eva:star-fill"
                        className="text-yellow-300 w-4 h-4 mt-1 ">
                      </Icon>

                    </div>


                  ))}
                <div className='ml-2'><strong>(5)</strong>
                </div>

              </div>
              <div className='p-2 md:p-3 rounded-xl absolute right-3 bottom-3 w-min bg-red-300 hover:animate-bounce transition-all'>
                <Icon className="w-5 h-6 md:w-6 h-6" icon="fa-solid:cart-arrow-down" />
              </div>
              
            </div>
            
          </div>
          
        </div>

      </div>
      <div className="absolute bottom-0">Made by <strong className="font-['Ibarra Real Nova '] text-xl tracking-wider">MRGA</strong>. All right reserved. </div>
      
    </div>
    
  );
}

export default App;
