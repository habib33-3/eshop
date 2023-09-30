// import { Footer } from "flowbite-react";
import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "./../pages/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";

const MainLayout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div>
      <section className="flex justify-between p-10 border-b">
        <div className="text-4xl ">E-shop</div>
        <nav className="">
          <ul className="flex gap-5">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }
            >
              Dashboard
            </NavLink>
          </ul>
        </nav>
      </section>

      <div className="min-h-screen">{isLoading ? <Spinner /> : <Outlet />}</div>

      <Footer />
    </div>
  );
};

export default MainLayout;
