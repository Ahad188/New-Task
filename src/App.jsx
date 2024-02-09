import { useEffect } from "react";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./Router/router";

function App() {
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
