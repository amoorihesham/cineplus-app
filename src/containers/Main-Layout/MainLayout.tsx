import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../../components/Static/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default MainLayout;
