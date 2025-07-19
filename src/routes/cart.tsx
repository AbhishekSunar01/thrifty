import { useAuthStore } from "@/store/authStore";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/cart")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <div>Please log in to view your cart.</div>
  );
}
