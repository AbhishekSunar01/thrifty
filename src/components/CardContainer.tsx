import Card from "./Card";

export default function CardContainer({ clothes }: { clothes: any[] }) {
  if (clothes === undefined) {
    return (
      <div className="col-span-full text-center text-gray-500 p-6">
        Loading...
      </div>
    );
  }

  if (clothes.length === 0) {
    return (
      <div className="col-span-full text-center text-gray-500 p-6">
        No items available
      </div>
    );
  }

  return (
    <div>
      <h2 className="mt-12 mb-4 scroll-m-20 text-xl font-semibold tracking-tight">
        Showing {clothes.length} Items
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {clothes.map((clothe) => (
          <Card key={clothe.id} clothe={clothe} />
        ))}
      </div>
    </div>
  );
}
