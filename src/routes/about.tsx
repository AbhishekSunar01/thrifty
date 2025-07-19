import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  component: () => (
    <div>
      <Button>Click me</Button>
    </div>
  ),
});
