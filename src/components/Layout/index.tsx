import Navbar from "../Navbar";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto mt-10">{children}</div>
    </>
  );
};

export default Layout;
