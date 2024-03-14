"use client";

import { useState } from "react";
import CodeEditor from "../editor.js";

const ApiDataExtractor = () => {
  const [bodyData, setBodyData] = useState("");
  const [method, setMethod] = useState("GET");
  const [api, setApi] = useState("");
  // const [apiData, setDataFromApi] = useState({});

  const addCodeData = (code) => {
    setBodyData(code);
  };

  const getResponse = async () => {
    try {
      const response = await fetch(api, {
        cache: "no-cache",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch API data");
      }

      const data = await response.json();

      // setApiData(data); // Set fetched API data to state
      console.log("next api data", data);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };

  const changeMethod = (e) => {
    setMethod(e.target.value);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <form className="bg-transparent fit-content flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <select
            value={method}
            onChange={changeMethod}
            className="bg-transparent border"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
          <input
            type="url"
            placeholder="api..."
            className="bg-transparent border"
            onChange={(e) => {
              setApi(e.target.value);
            }}
          />
        </div>

        <div>
          {(method === "POST" || method === "PUT") && (
            <CodeEditor addCodeData={addCodeData} />
          )}
        </div>

        <div>{bodyData && <pre>{bodyData}</pre>}</div>

        <button type="button" onClick={getResponse}>
          Get api data
        </button>

        {/* <div>{apiData && <pre>{apiData}</pre>}</div> */}
      </form>
    </div>
  );
};

export default ApiDataExtractor;
