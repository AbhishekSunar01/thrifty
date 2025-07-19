import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__error")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/__error"!</div>;
}
