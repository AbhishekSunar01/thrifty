import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { SlidersHorizontal } from "lucide-react";

export default function BrowseCategory() {
  return (
    <Card className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Browse Category</h1>
        <Button variant={"outline"} className="mt-2">
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </Button>
      </div>
      {/* Add your category browsing logic here */}
      <div className="flex gap-2 justify-items-start">
        <Button>All Item</Button>
        <Button variant="outline">Tops</Button>
        <Button variant="outline">Buttoms</Button>
        <Button variant="outline">Dresses</Button>
        <Button variant="outline">Shoes</Button>
      </div>
    </Card>
  );
}
