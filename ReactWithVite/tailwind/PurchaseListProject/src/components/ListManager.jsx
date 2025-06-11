import React, { useCallback, useMemo, useState } from "react";
import ListInput from "./ListInput";
import List from "./List";

const ListManager = () => {
  const [groceryItems, setGroceryItems] = useState([]);
  const [fitlerValue, setFilterValue] = useState("Unpurchased");

  console.log(groceryItems);

  const handleTogglePurchase = (itemId) => {
    setGroceryItems((prev) => {
      return prev.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            type: item.type === "Unpurchased" ? "Purchased" : "Unpurchased",
          };
        } else {
          return item;
        }
      });
    });
  };

  const handleAddItem = useCallback((itemTitle, itemCount) => {
    const newItem = {
      id: Date.now(),
      title: itemTitle,
      count: itemCount,
      type: "Unpurchased",
    };
    setGroceryItems((prev) => [...prev, newItem]);
  }, []);

  const filterdItems = useMemo(() => {
    return groceryItems.filter((x) => x.type === fitlerValue);
  }, [groceryItems, fitlerValue]);

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Purchase List!
      </h1>
      <ListInput onAdd={handleAddItem} />
      <List
        items={filterdItems}
        currentFilter={fitlerValue}
        onChangeFilter={setFilterValue}
        onToggleChange={handleTogglePurchase}
      />
    </div>
  );
};

export default ListManager;
