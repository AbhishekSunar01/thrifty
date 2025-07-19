import { Button } from "./ui/button";
import { Card } from "./ui/card";
import prod from "../assets/prod.jpg";
import { Heart } from "lucide-react";

export default function ClotheCard() {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col py-0 overflow-hidden ">
      <img
        src={prod}
        alt="Clothing Item"
        className="w-full h-72 object-cover"
        style={{ objectPosition: "top" }}
      />
      <div className="pb-4 px-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Jacket</h3>
          <Button variant={"secondary"} className="mt-2">
            <Heart className="w-4 h-4" />
            Wishlist
          </Button>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </p>
        <code className="text-green-500 bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold w-fit">
          Rs. 500
        </code>
        <p className="text-muted-foreground text-sm">By Basu</p>
      </div>
    </Card>
  );
}
