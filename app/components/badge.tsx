import { Link } from "@remix-run/react";
import { motion } from "motion/react";

const Badge = () => {
  return (
    <div className="flex justify-evenly">
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.1,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
        transition={{
          type: "spring", // Menggunakan animasi spring
          stiffness: 300, // Kekakuan animasi
          damping: 20, // Peredam animasi
        }}
        className="badge"
      >
        <Link to={"/"}>HOME</Link>
      </motion.div>
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.1,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
        transition={{
          type: "spring", // Menggunakan animasi spring
          stiffness: 300, // Kekakuan animasi
          damping: 20, // Peredam animasi
        }}
        className="badge badge-neutral"
      >
        <Link to={"/project"}>PROJECT</Link>
      </motion.div>
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.1,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
        transition={{
          type: "spring", // Menggunakan animasi spring
          stiffness: 300, // Kekakuan animasi
          damping: 20, // Peredam animasi
        }}
        className="badge badge-primary"
      >
        primary
      </motion.div>
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.1,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
        transition={{
          type: "spring", // Menggunakan animasi spring
          stiffness: 300, // Kekakuan animasi
          damping: 20, // Peredam animasi
        }}
        className="badge badge-secondary"
      >
        secondary
      </motion.div>
    </div>
  );
};

export default Badge;
