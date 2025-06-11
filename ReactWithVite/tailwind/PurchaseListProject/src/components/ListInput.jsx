import React, { useState } from "react";

const ListInput = ({onAdd}) => {
  const [error, setError] = useState("");
  const [inputItemTitle, setInputItemTitle] = useState("");
  const [inputItemCount, setInputItemCount] = useState(1);

  const handleAddItem = () => {
    if (!inputItemTitle) {
      setError("Title cannot be empty");
      return;
    }

    if (!inputItemCount || Number(inputItemCount) <= 0) {
      setError("Item count should be positive number");
      return;
    }

    setError("");
    onAdd(inputItemTitle, inputItemCount);
    setInputItemTitle("");
    setInputItemCount(1);

  };

  return (
    <div className="flex flex-col gap-3 mb-6">
      <div className="text-center text-red-500 font-bold text-xl">
        {error && error}
      </div>
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Item"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          value={inputItemTitle}
          onChange={(event) => setInputItemTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Number"
          className="w-24 px-3 py-2 border border-gray-300 rounded-md"
          value={inputItemCount}
          onChange={(event) => setInputItemCount(event.target.value)}
        />
        <button
          onClick={handleAddItem}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ListInput;
