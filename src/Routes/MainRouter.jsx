import React from "react";
import { NotFoundPage } from "../NotFoundPage";

export const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/mainpage",
      element: <MainPage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  // return <RouterProvider router={router} />;
};
