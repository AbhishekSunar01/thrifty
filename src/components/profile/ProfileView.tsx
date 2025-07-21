import { useAuthStore } from "@/store/authStore";
import { Card } from "../ui/card";
import { User } from "lucide-react";
import { Button } from "../ui/button";

export default function ProfileView() {
  const { username } = useAuthStore();
  return (
    <Card className="w-fit py-4 px-8">
      <div className="flex items-center gap-6">
        <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
          <User className="w-12 h-12 text-primary" />
        </div>
        <div>
          <h1 className="scroll-m-20 text-start text-4xl font-extrabold tracking-tight text-balance flex items-center">
            {username}
            <Button variant="secondary" className="ml-4">
              Edit Profile
            </Button>
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            Sustainable fashion lover. Selling pre-loved items to give them a
            second life. All items are carefully cleaned and photographed in
            natural light.
          </p>
        </div>
      </div>
    </Card>
  );
}
