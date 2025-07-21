import { useAddToCart } from "@/services/mutation";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Heart } from "lucide-react";

export default function ClotheCard({ clothe }: { clothe: any }) {
  const addToCart = useAddToCart();
  const imageUrl = clothe.images?.[0]?.url
    ? `http://localhost:8080${clothe.images[0].url}`
    : "/fallback.jpg";

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col py-0 overflow-hidden ">
      <img
        src={imageUrl}
        alt="Clothing Item"
        className="w-full h-72 object-cover"
        style={{ objectPosition: "top" }}
      />
      <div className="pb-4 px-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold line-clamp-1 ">{clothe.name}</h3>
          <Button
            onClick={() => addToCart.mutate(clothe.id)}
            variant={"secondary"}
            className="mt-2"
          >
            <Heart className="w-4 h-4" />
            Wishlist
          </Button>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-0 line-clamp-1">
          {clothe.description.length > 100
            ? `${clothe.description.slice(0, 100)}...`
            : clothe.description}
        </p>
        <code className="text-green-500 bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold w-fit">
          Rs. {clothe.price}
        </code>
        <p className="text-muted-foreground text-sm">By {clothe.seller}</p>
      </div>
    </Card>
  );
}
