import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { SlidersHorizontal } from "lucide-react";

export default function BrowseCategory({ categories }: { categories: any[] }) {
  return (
    <Card className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Browse Category</h1>
        <Button variant={"outline"} className="mt-2">
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </Button>
      </div>
      <div className="flex gap-2 justify-items-start flex-wrap mt-4">
        <Button>All Items</Button>
        {categories?.map((cat) => (
          <Button key={cat.id} variant="outline">
            {cat.name}
            <span className="text-primary">
              {cat.count > 0 && ` (${cat.count})`}
            </span>
          </Button>
        ))}
      </div>
    </Card>
  );
}
