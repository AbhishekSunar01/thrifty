import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { ShoppingCart, Flower, LogIn } from "lucide-react";
import { Register } from "./RegisterForm";
import { Login } from "./LoginForm";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-24 py-6 border-b bg-background/70 backdrop-blur-md">
      <h1 className="text-2xl font-bold flex items-center gap-1">
        <Flower className="w-8 h-8 text-primary" />
        Thrifty
      </h1>
      <ul className="flex gap-4 items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">
            <ShoppingCart className="w-4 h-4" />
          </Link>
        </li>
        <li className="flex gap-2 items-center">
          <Login />
          <Register />
        </li>
      </ul>
    </div>
  );
}
