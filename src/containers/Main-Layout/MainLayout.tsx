import { Outlet } from "react-router-dom";
import { Footer, Sectionheading } from "../../components";
import Header from "../Header/Header";

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
