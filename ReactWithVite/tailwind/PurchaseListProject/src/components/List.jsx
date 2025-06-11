import React, { useEffect, useMemo, useState } from "react";

const List = ({ items, onChangeFilter, onToggleChange, currentFilter }) => {
 
  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          className={`px-3 py-1 rounded-md border border-green-800 text-green-900 ${currentFilter === "Purchased" ? "bg-green-500  text-white font-bold" : ""}`}
          onClick={() => onChangeFilter("Purchased")}
        >
          Purchased
        </button>
        <button
          className={`px-3 py-1 rounded-md border border-green-800 text-green-900 ${currentFilter === "Unpurchased" ? "bg-green-500 text-white font-bold" : ""}`}
          onClick={() => onChangeFilter("Unpurchased")}
        >
          Unpurchased
        </button>
      </div>

      <table className="w-full border border-gray-300 rounded-md overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Count</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((item, index) => {
              return (
                <tr key={index} className="text-center">
                  <td className="p-2 border">{item.title}</td>
                  <td className="p-2 border">{item.count}</td>
                  <td className="p-2 border">
                    <button
                      className="px-2 py-1 text-sm bg-green-500 text-white rounded"
                      onClick={() => onToggleChange(item.id)}
                    >
                      {item.type === "Purchased" ? "Unpurchased" : "Purchased"}
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
