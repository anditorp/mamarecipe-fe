import Footer from "../../../../components/templates/Footer";

const EditLayout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default EditLayout;
