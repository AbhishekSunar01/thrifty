import { useAuthStore } from "@/store/authStore";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { App } from "./index";
import ProfileView from "@/components/profile/ProfileView";
import { ProfileTabs } from "@/components/profile/ProfileTabs";

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? (
    <div className="px-24 py-8 flex flex-col gap-8">
      <ProfileView />
      <ProfileTabs />
    </div>
  ) : (
    <App />
  );
}
