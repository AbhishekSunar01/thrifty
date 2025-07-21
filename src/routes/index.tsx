import { createFileRoute } from "@tanstack/react-router";
import BrowseCategory from "@/components/home/BrowseCategory";
import CardContainer from "@/components/CardContainer";
import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { useCategories, useClothes } from "@/services/queries";
import HeroSection from "@/components/home/HeroSection";

// const systemFont =
//   '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

export const Route = createFileRoute("/")({
  component: App,
});

export function App() {
  const initialize = useAuthStore((s) => s.initialize);
  const categories = useCategories();
  const clothes = useClothes();

  console.log("Categories:", categories.data);
  console.log("Clothes:", clothes.data);

  useEffect(() => {
    initialize(); // checks localStorage
  }, []);
  return (
    <div>
      <HeroSection />
      <div className="px-20 py-8">
        <BrowseCategory categories={categories.data ?? []} />

        <CardContainer clothes={clothes.data ?? []} />
      </div>
    </div>
  );
}
