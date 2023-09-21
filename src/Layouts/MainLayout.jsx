// import { Footer } from "flowbite-react";
import { Outlet } from "react-router-dom";
import Footer from './../pages/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <section className="flex justify-between p-10 border-b">
        <div className="text-4xl ">E-shop</div>
        <nav className="">
          <ul className="flex gap-5">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">products</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
          </ul>
        </nav>
      </section>

    <div className="min-h-screen">
        <Outlet></Outlet>
    </div>

    <Footer/>
    </div>
  );
};

export default MainLayout;
