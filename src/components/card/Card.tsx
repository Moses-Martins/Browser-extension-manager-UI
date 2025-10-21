import React, { useEffect, useState } from "react";
import type { Filter } from "../filterbutton/FilterButtons";

export type CardProps = {
  name: string;
  description: string;
  icon: React.ReactNode;
  activeFilter: Filter;
};

function Card({ name, description, icon, activeFilter }: CardProps) {
  const removedKey = `card_${name}_removed`;
  const activeKey = `card_${name}_active`;

  // --- Initialize directly from sessionStorage (runs only once) ---
  const [isRemoved, setIsRemoved] = useState<boolean>(() => {
    const stored = sessionStorage.getItem(removedKey);
    return stored ? JSON.parse(stored) : false;
  });

  const [isActive, setIsActive] = useState<boolean>(() => {
    const stored = sessionStorage.getItem(activeKey);
    return stored ? JSON.parse(stored) : false;
  });

  // --- Keep storage synced whenever state changes ---
  useEffect(() => {
    sessionStorage.setItem(removedKey, JSON.stringify(isRemoved));
  }, [isRemoved, removedKey]);

  useEffect(() => {
    sessionStorage.setItem(activeKey, JSON.stringify(isActive));
  }, [isActive, activeKey]);

  // --- Handlers ---
  const handleRemoveClick = () => setIsRemoved(true);
  const handleToggle = () => setIsActive((prev) => !prev);

  // --- Visibility rules ---
  if (isRemoved) return null;
  if (
    (activeFilter === "Active" && !isActive) ||
    (activeFilter === "Inactive" && isActive)
  ) {
    return null;
  }

  return (
    <div className="flex flex-col justify-between w-full h-full p-[6%] rounded-xl bg-white dark:bg-black shadow-md transition-transform duration-200 hover:scale-[1.01]">     
     {/* Top */}
      <div className="flex items-start mb-5">
        <div className="w-[12%]">{icon}</div>
        <div className="flex-grow ml-[3%] mt-[-1.5%] max-sm:mt-[-0.8%]">
          <h3 className="m-0 text-[clamp(1rem,1.5vw,6.5rem)] font-semibold text-gray-800 dark:text-white">
            {name}
          </h3>
          <p className="mt-1 w-[20vw] max-sm:w-[68vw] text-[clamp(0.85rem,1vw,5.1rem)] text-gray-600 leading-snug dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-[1%] flex justify-between items-center">
        <button
          onClick={handleRemoveClick}
          className="px-[5%] py-[2.5%] rounded-full border border-gray-300 bg-white text-gray-600 text-[clamp(0.85rem,1vw,5.1rem)] font-medium hover:bg-gray-100 transition-colors dark:bg-gray-700 dark:text-gray-100"
        >
          Remove
        </button>

        {/* Toggle */}
        <div
          onClick={handleToggle}
          className={`w-[11%] h-[3.3vh] rounded-full flex items-center p-[0.9%] cursor-pointer transition-all duration-300 ${isActive ? "bg-orange-400 justify-end" : "bg-gray-300 justify-start"
            }`}
        >
          <div className="w-[44%] h-[100%] rounded-full bg-white shadow transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
}

export default Card;
