import { createFileRoute } from "@tanstack/react-router";
import logo from "../assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { ShoppingBasket, Shirt } from "lucide-react";
import BrowseCategory from "@/components/BrowseCategory";
import CardContainer from "@/components/CardContainer";

// const systemFont =
//   '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

const systemFont = "";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <div className="relative w-full overflow-hidden">
        <img
          src={logo}
          className="w-full h-auto object-cover"
          alt="Background"
        />

        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none"
          style={{ fontFamily: systemFont }}
        >
          <h1 className="text-8xl text-white font-extrabold mt-30">
            Discover Unique
          </h1>
          <h1 className="text-8xl text-primary font-extrabold mt-4">
            Secondhand Treasures
          </h1>
          <p className="text-lg text-white mt-4 max-w-2xl">
            Buy and sell pre-loved fashion. Sustainable style that's kind to
            your wallet and the planet.
          </p>
          <div className="mt-4 flex gap-4">
            <Button size="lg">
              <ShoppingBasket className="w-4 h-4" />
              Start Shopping
            </Button>
            <Button size="lg" variant="outline">
              <Shirt className="w-4 h-4" />
              Sell your Items
            </Button>
          </div>
        </div>
      </div>
      <div className="px-20 py-8">
        <BrowseCategory />
        <h2 className="mt-12 mb-4 scroll-m-20 text-xl font-semibold tracking-tight">
          Showing 6 Items
        </h2>
        <div>
          <CardContainer />
        </div>
      </div>
    </div>
  );
}
