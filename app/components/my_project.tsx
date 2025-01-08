import React from "react";
import { motion } from "motion/react";
import Card from "./card";

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
                  <div
                    id="item1"
                    className="carousel-item w-full flex justify-center p-2"
                  >
                    <Card />
                  </div>
                  <div
                    id="item2"
                    className="carousel-item w-full flex justify-center p-2"
                  >
                    <Card />
                  </div>
                  <div
                    id="item3"
                    className="carousel-item w-full flex justify-center p-2"
                  >
                    <Card />
                  </div>
                  <div
                    id="item4"
                    className="carousel-item w-full flex justify-center p-2"
                  >
                    <Card />
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
