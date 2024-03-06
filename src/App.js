import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Metrics from "./Components/Metrics";
import Logs from "./Components/Logs";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Error from "./Components/Error";

const AppLayout = () => {
  let { id } = useParams();
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

// Router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Metrics />,
      },
      {
        path: "/logs",
        element: <Logs />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
