"use client";

import React from "react";
import { motion } from "framer-motion";

const classes = [
  {
    name: "BD",
    description: "This is a BD.",
    friends: [
      { image: "https://picsum.photos/200/300", name: "Friend 1" },
      { image: "https://picsum.photos/200/301", name: "Friend 2" },
      { image: "https://picsum.photos/200/302", name: "Friend 3" },
      { image: "https://picsum.photos/200/303", name: "Friend 4" },
      { image: "https://picsum.photos/200/304", name: "Friend 5" },
    ],
  },
  {
    name: "SI",
    description: "This is a SI.",
    friends: [
      { image: "https://picsum.photos/200/305", name: "Friend 6" },
      { image: "https://picsum.photos/200/306", name: "Friend 7" },
      { image: "https://picsum.photos/200/307", name: "Friend 8" },
      { image: "https://picsum.photos/200/308", name: "Friend 9" },
      { image: "https://picsum.photos/200/309", name: "Friend 10" },
    ],
  },
  {
    name: "KA",
    description: "This is a KA.",
    friends: [
      { image: "https://picsum.photos/200/310", name: "Friend 11" },
      { image: "https://picsum.photos/200/311", name: "Friend 12" },
      { image: "https://picsum.photos/200/312", name: "Friend 13" },
      { image: "https://picsum.photos/200/313", name: "Friend 14" },
      { image: "https://picsum.photos/200/314", name: "Friend 15" },
    ],
  },
];

const ProfileCard = ({ className, description, friends }) => {
  return (
    <motion.div className="bg-white rounded-lg shadow-lg p-8 mb-8 flex flex-col items-center w-full max-w-2xl mx-auto">
      <div className="w-full mb-4">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">{className}</h2>
        <p className="text-center text-gray-600 mb-6">{description}</p>
        <ul className="list-disc space-y-4 text-left pl-6">
          {friends.map((friend, index) => (
            <li key={index} className="flex items-center gap-4">
              <img
                src={friend.image}
                alt={friend.name}
                className="w-20 h-20 object-cover rounded-full"
              />
              <span>{friend.name}</span>
            </li>
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
