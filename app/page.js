"use client";

import React from "react";
import { motion } from "framer-motion";

const classes = [
  // ... (keep the same classes array as before)
];

const ProfileCard = ({ className, description, friends }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-8 mb-8 flex flex-col items-center w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full mb-4">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">{className}</h2>
        <p className="text-center text-gray-600 mb-6">{description}</p>
        <ul className="list-disc space-y-4 text-left pl-6">
          {friends.map((friend, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={friend.image}
                alt={friend.name}
                className="w-20 h-20 object-cover rounded-full"
              />
              <span>{friend.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <button className="bg-blue-500 text-white rounded px-5 py-2 hover:bg-blue-600 w-fit">
        Action
      </button>
    </motion.div>
  );
};

const ProfileCarouselCards = () => (
  <div className="min-h-screen bg-gradient-to-br from-pink-300 to-purple-400 p-6 sm:p-12">
    <div className="grid grid-cols-1 gap-8">
      {classes.map((classInfo, index) => (
        <ProfileCard
          key={index}
          className={classInfo.name}
          description={classInfo.description}
          friends={classInfo.friends}
        />
      ))}
    </div>
  </div>
);

export default ProfileCarouselCards;
