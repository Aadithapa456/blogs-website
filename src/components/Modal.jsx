import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { Button } from "./ui/button";
import axios from "axios";
const Modal = ({ onSelectedItems }) => {
  const [isShown, setVisibility] = useState(true);
  const [activeItems, setActiveItems] = useState([]);
  const labelItems = ["HTML", "CSS", "JavaScript", "Python", "React"];
  const selectedItems = () => {
    const selectedLabels = activeItems.map((index) => labelItems[index]);
    onSelectedItems(selectedLabels);
    setVisibility(false);
    const response = axios.post("/api/user", { selectedLabels });
  };
  //  Toggles the selection of an item.
  const toggleItem = (index) => {
    setActiveItems(
      (prev) =>
        prev.includes(index)
          ? prev.filter((item) => item !== index) // Remove the index if already selected
          : [...prev, index], // Add the index if not selected
    );
  };
  return (
    <>
      {isShown && (
        <div className="t-0 fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="modal-container grid space-y-5 rounded-xl bg-white p-5 px-10 sm:w-1/2 xl:w-[40%]">
            <div className="modal-top flex flex-row-reverse items-center justify-between pb-6 pt-3">
              <div className="cross-button-section">
                <button
                  onClick={() => {
                    setVisibility(!isShown);
                  }}
                  className="cursor-pointer text-sm"
                >
                  <ImCross />
                </button>
              </div>
              <div className="modal-title">
                <h1 className="text-2xl font-bold">
                  What are your preferences?
                </h1>
              </div>
            </div>
            <div className="prefer-buttons grid grid-cols-2 gap-x-5 gap-y-6 pb-10 md:grid-cols-3">
              {labelItems.map((item, index) => (
                <span
                  key={index}
                  className={`cursor-pointer self-start rounded-lg border border-gray-300 px-3 py-1.5 text-sm shadow-md transition duration-300 hover:border-gray-600 hover:bg-gray-200 ${
                    activeItems.includes(index)
                      ? "bg-gray-800 text-white hover:bg-gray-700"
                      : ""
                  }`}
                  onClick={() => toggleItem(index)}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="next-button-section justify-self-center">
              <Button
                variant="outline"
                className="px-10"
                onClick={() => selectedItems()}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
