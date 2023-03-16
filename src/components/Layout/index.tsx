import Navbar from "../Navbar";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto">{children}</div>
    </>
  );
};

export default Layout;
