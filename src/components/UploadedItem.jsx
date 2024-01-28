import React, { useState } from "react";
import { options } from "../utils/constants";
import closeIcon from "../assets/close.svg";

const UploadedItem = ({ item }) => {
  const { id, prefix, links } = item;
  const [selectedTag, setSelectedTag] = useState([]);

  const handleTagSelect = (option) => {
    if (option !== "Select Tags" && !selectedTag.includes(option)) {
      setSelectedTag([...selectedTag, option]);
    }
  };

  const handleTagRemove = (removedTag) => {
    const updatedTags = selectedTag.filter((tag) => tag !== removedTag);
    setSelectedTag(updatedTags);
  };

  return (
    <div
      className="grid grid-cols-5 justify-between p-4 mx-auto bg-white rounded mt-2 text-xs items-start"
      style={{ gridTemplateColumns: "12% 23% 20% 20% 25%" }}
    >
      <h1>{id}</h1>
      <a
        className="text-blue-400 underline cursor-pointer"
        href={`https://${links}`}
        target=""
      >
        {links}
      </a>
      <h1>{prefix}</h1>
      <div className="">
        <select
          className="w-20 border border-gray-300 rounded"
          name="select tags"
          id="mySelect"
          onChange={(e) => handleTagSelect(e.target.value)}
        >
          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="text-semibold rounded-md"
            >
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex truncate">
        {selectedTag.map((item) => (
          <h1 className=" bg-blue-600 text-white p-1 ml-1 text-xs rounded-md flex justify-center">
            {item}{" "}
            <img
              className="ml-[3px]"
              src={closeIcon}
              alt=""
              onClick={() => handleTagRemove(item)}
            />
          </h1>
        ))}
      </div>
    </div>
  );
};

export default UploadedItem;
