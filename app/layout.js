import { styling } from "./globals.css";
import { Footer, Navbar } from "@/components/index";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
