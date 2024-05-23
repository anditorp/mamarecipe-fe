import { Navbar, Footer } from "../../components/index";

export default function MainLayout({ children }) {
  return (
    <section>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </section>
  );
}
