import React from "react";

const Footer = () => {
  return (
    <footer className="font-sans footer footer-center p-10 bg-primary text-primary-content inset-x-0 bottom-0 m-0 w-full">
      <aside>
        <h1 className="text-secondary pt-20">Eat, Cook, Repeat</h1>
        <p className="text-tertiary py-10">
          Share your best recipe by uploading here!
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col text-tertiary gap-20">
          <a>Product</a>
          <a>Company</a>
          <a>Learn More</a>
          <a>Get In Touch</a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
