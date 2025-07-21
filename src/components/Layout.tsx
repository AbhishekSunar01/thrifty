import { Outlet } from "@tanstack/react-router";
import Navbar from "./Navbar";
import { Toaster } from "sonner";
import { Footer } from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <div className="flex-1 flex flex-col pt-20">
        <Outlet />
        <Toaster richColors />
      </div>
      <Footer />
    </div>
  );
}
