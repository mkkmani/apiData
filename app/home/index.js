"use client";

import { useState } from "react";
import CodeEditor from "../editor.js";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApiDataExtractor = () => {
  const [bodyData, setBodyData] = useState("");
  const [method, setMethod] = useState("GET");
  const [api, setApi] = useState("");
  const [cookie, setCookie] = useState("");

  const addCodeData = (code) => {
    setBodyData(code);
  };

  const setCookieHandler = () => {
    Cookies.set("apiCookie", cookie);
    toast.error("Cookie saved");
  };

  const getResponse = async () => {
    try {
      const options = {
        method: "GET",
      };
      const response = await fetch(api, options);

      if (!response.ok) {
        throw new Error("Failed to fetch API data");
      }

      const data = await response.json();

      console.log("next api data", data);
    } catch (error) {
      console.error("Error fetching API data:", error.message);
    }
  };

  const changeMethod = (e) => {
    setMethod(e.target.value);
  };

  return (
    <div className="flex justify-center items-center w-full">
      {/* <ToastContainer /> */}
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
          Get API data
        </button>

        <div>
          <input
            type="text"
            value={cookie}
            onChange={(e) => setCookie(e.target.value)}
            className="border p-1"
            placeholder="Enter token"
          />

          <div>
            <button
              type="button"
              onClick={setCookieHandler}
              className="border p-1 m-2"
            >
              Add cookie
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApiDataExtractor;
