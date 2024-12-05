// LiveAgentOption.jsx
import React from "react";

const LiveAgentOption = ({ onYesClick, onNoClick }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-white">
        Sorry! I can't understand the query. Do you want to talk with live
        agent?
      </p>
      <div className="flex gap-2">
        <button
          onClick={onYesClick}
          className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition-colors"
        >
          Yes
        </button>
        <button
          onClick={onNoClick}
          className="px-4 py-2 bg-white rounded hover:bg-gray-200 transition-colors text-black"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default LiveAgentOption;
