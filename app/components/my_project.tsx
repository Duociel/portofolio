import React from "react";
import { motion } from "motion/react";

const My_project = () => {
  return (
    <motion.div
      className="justify-center flex"
      whileHover={{ scale: 1.5, rotate: -90 }}
    >
      <div className="mockup-phone border-purple-800 w-auto h-[600px]">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <div className="">
              <motion.div
                className=" w-[800px] h-[700px] flex-col flex justify-center items-center"
                whileHover={{ scale: 1.1, rotate: 90 }}
              >
                <div className="carousel">
                  <div id="item1" className="carousel-item w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                      className="w-full"
                    />
                  </div>
                  <div id="item2" className="carousel-item w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                      className="w-full"
                    />
                  </div>
                  <div id="item3" className="carousel-item w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                      className="w-full"
                    />
                  </div>
                  <div id="item4" className="carousel-item w-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                  <a href="#item1" className="btn btn-xs">
                    1
                  </a>
                  <a href="#item2" className="btn btn-xs">
                    2
                  </a>
                  <a href="#item3" className="btn btn-xs">
                    3
                  </a>
                  <a href="#item4" className="btn btn-xs">
                    4
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default My_project;
