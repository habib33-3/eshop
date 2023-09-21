import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Dashboard from "../pages/Dashboard/Dashboard";
import Product from "../pages/Product/Product";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/products",
        element: <Products />,
        loader: () => fetch(`https://dummyjson.com/products`),
      },

      {
        path: "/product/:id",
        element: <Product />,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.id}`),
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default Route;
