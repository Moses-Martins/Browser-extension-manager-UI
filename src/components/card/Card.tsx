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
    <div className="flex flex-col w-[29.3vw] p-5 rounded-xl bg-white shadow-md transition-transform duration-200 hover:scale-[1.01]">
      {/* Top */}
      <div className="flex items-start mb-5">
        <div>{icon}</div>
        <div className="flex-grow ml-2.5 mt-[-1%]">
          <h3 className="m-0 text-[clamp(1rem,1.5vw,1.5rem)] font-semibold text-gray-800">
            {name}
          </h3>
          <p className="mt-1 text-[clamp(0.85rem,1vw,1.1rem)] text-gray-600 leading-snug">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex justify-between items-center">
        <button
          onClick={handleRemoveClick}
          className="px-5 py-2 rounded-full border border-gray-300 bg-white text-gray-600 text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          Remove
        </button>

        {/* Toggle */}
        <div
          onClick={handleToggle}
          className={`w-10 h-5 rounded-full flex items-center p-[2px] cursor-pointer transition-all duration-300 ${isActive ? "bg-orange-400 justify-end" : "bg-gray-300 justify-start"
            }`}
        >
          <div className="w-4 h-4 rounded-full bg-white shadow transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
}

export default Card;
