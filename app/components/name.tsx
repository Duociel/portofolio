import React from "react";
import myProfile from "public/profile.png"
import { motion } from "motion/react"; 

const Name = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>nama saya</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>BAGUS PRAYUGO</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>!!!</code>
        </pre>
      </div>
      <motion.div whileHover={{scale:1.1}}>
        <img
        className="h-32 w-32 rounded-sm"
        src={myProfile}></img>
      </motion.div>
    </div>
  );
};

export default Name;
