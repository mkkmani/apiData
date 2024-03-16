import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ApiDataExtractor from "./home";

const Main = () => {
  return (
    <div className="main-div">
      <ToastContainer />

      <h1>Api data</h1>
      <ApiDataExtractor />
    </div>
  );
};

export default Main;
