import { Outlet } from "@tanstack/react-router";
import Navbar from "./Navbar";
import { Toaster } from "sonner";
import { Footer } from "./Footer";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <Outlet />
        <Toaster richColors />
      </div>
      <Footer />
    </div>
  );
}
