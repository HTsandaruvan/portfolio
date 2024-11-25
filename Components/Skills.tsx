import React from "react";
import { useState } from "react";
import SkillsLanguages from "./SkillsLanguages";
import SkillConcepts from "./SkillConcepts";
import { motion } from "framer-motion";
import SkillsOther from "./SkillsOther";

const Skills = () => {
  const tabs = [
    { id: 1, title: "Languages", component: <SkillsLanguages /> },
    { id: 2, title: "Concepts", component: <SkillConcepts /> },
    { id: 3, title: "Other Skills", component: <SkillsOther /> },
  ];
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        My <span className="text-yellow-400">Skills</span>
      </h1>
      <div className="flex justify-center space-x-6 mb-[4rem] mt-[3rem]  ">
        {tabs.map((tab) => (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
            transition={{ type: "spring", stiffness: 400, damping: 7 }}
            key={tab.id}
            className={`py-2 px-4 rounded-lg font-semibold ${
              activeTab === tab.id
                ? "bg-[#55e6a5] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </motion.button>
        ))}
      </div>
      <motion.div
        key={activeTab} // Ensures content animates on tab change
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 mx-auto mt-5 w-[60%]"
      >
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </motion.div>
    </div>
  );
};

export default Skills;
