import React from "react";
import { FaProjectDiagram, FaClipboardList, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const concepts = [
  { name: "Agile Methodology", icon: <FaProjectDiagram />, level: 70 },
  { name: "SDLC", icon: <FaClipboardList />, level: 80 },
  { name: "Software Testing", icon: <FaDatabase />, level: 65 },
];

const SkillConcepts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {concepts.map((concept, index) => (
        <div
          key={index}
          className=" items-center space-x-4 p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-25px] font-bold flex"
        >
          <div className="text-2xl">{concept.icon}</div>
          <div className="flex-1">
            <div className="font-semibold">{concept.name}</div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <motion.div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${concept.level}%` }}
                initial={{ width: "0%" }}
                animate={{ width: `${concept.level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
          <motion.span
            className="text-xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Counter value={concept.level} />
          </motion.span>
        </div>
      ))}
    </div>
  );
};

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{count}%</span>;
};

export default SkillConcepts;
