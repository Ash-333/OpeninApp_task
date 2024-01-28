import React, { useState } from "react";
import notification from "../assets/notification.svg";
import loading from "../assets/loading.svg";
import excel from "../assets/excel.svg";
import upload from "../assets/csv-upload.svg";
import { useDispatch, useSelector } from "react-redux";
import { addCsv,removeCsv } from "../store/csvSlice";
import { parse } from "papaparse";
import UploadList from "./UploadList";

const Upload = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const csv = useSelector((store) => store?.csvFile?.csvFile);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "text/csv") {
      setCsvFile(selectedFile);
    } else {
      setError("Please choose a valid CSV file.")
    }
  };

  const addToStore = () => {
    parse(csvFile, {
      complete: (result) => {
        const jsonData = result.data;
        dispatch(addCsv(jsonData));
      },
      header: true,
    });
    setCsvFile(null);
  };

  const handleBrowseClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleRemoveClick = () => {
    dispatch(removeCsv())
    setCsvFile(null);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "text/csv") {
      setCsvFile(droppedFile);
    } else {
      setError
    }
  };

  const preventDefaultAndStopPropagation = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className="w-full p-4">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">Upload CSV</h1>
        <div className="flex">
          <img src={notification} alt="" />
          <img
            className="h-8 w-8 rounded-full ml-4"
            src="https://thispersondoesnotexist.com/"
            alt=""
          />
        </div>
      </div>

      <div className="w-4/5 md:w-1/2 h-[315px] mx-auto p-4 mt-20 bg-white rounded-md">
        <div
          className="border-dashed border-2  text-center h-[240px] rounded-md"
          onDragOver={preventDefaultAndStopPropagation}
          onDrop={handleDrop}
        >
          <img className="m-auto mt-20 mb-4" src={excel} alt="" />
          {!csvFile ? (
            <h2 className="font-thin mb-4 ">
              Drop your CSV file here or{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={handleBrowseClick}
              >
                browse
              </span>
            </h2>
          ) : (
            <>
              <h2 className="font-thin mb-4 ">Uploaded file: {csvFile.name}</h2>
              <h2
                className="mb-1 text-red-600 cursor-pointer"
                onClick={handleRemoveClick}
              >
                remove
              </h2>
            </>
          )}
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="fileInput"
          />
        </div>
        <button
          className={`text-white flex mx-auto w-full justify-center p-2 rounded-md mt-3 ${
            csv ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600"
          }`}
          onClick={addToStore}
          disabled={csv}
        >
          {csvFile?<img className='animate-spin' src={loading}/>:<><img className="mr-1" src={upload} alt="" /> Upload</>}
        </button>
      </div>
      <p className="text-red-700 font-bold">{error}</p>

      {csv && <UploadList />}
    </div>
  );
};

export default Upload;
