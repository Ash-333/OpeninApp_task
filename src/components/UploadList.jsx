import React from "react";
import { useSelector } from "react-redux";
import UploadedItem from "./UploadedItem";

const UploadList = () => {
    const csv=useSelector(store=>store.csvFile.csvFile)
    // console.log(csv)
    
  return (
    <>
    <h1 className="ml-16 mt-24 font-bold text-xl">Uploads</h1>
      <div className="w-[85%] bg-[#F5F5F5] p-4 mt-8 mx-auto rounded-md">
        <div className="grid grid-cols-5 justify-between mx-auto font-semibold rounded text-sm ml-2" style={{ gridTemplateColumns: '12% 23% 20% 20% 25%' }}>
            <h1>Sl No.</h1>
            <h1>Links</h1>
            <h1>Prefix</h1>
            <h1>Add Tags</h1>
            <h1>Selected Tags</h1>
        </div>
        {csv?.map((item)=>(
            <UploadedItem key={item.id} item={item}/>
        ))}
      </div>
    </>
  );
};

export default UploadList;
