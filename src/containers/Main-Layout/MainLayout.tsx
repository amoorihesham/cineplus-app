import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../../components/Static/Footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        theme="dark"
        transition={Bounce}
      />
      <Footer />
    </>
  );
};

export default MainLayout;
