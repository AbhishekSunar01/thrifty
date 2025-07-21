import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Listing from "./Listing";
import History from "./History";
import Sell from "./Sell";

export function ProfileTabs() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="listing">
        <TabsList>
          <TabsTrigger value="listing" defaultChecked>
            My Listing
          </TabsTrigger>
          <TabsTrigger value="history">Purchase History</TabsTrigger>
          <TabsTrigger value="sell">Sell Items</TabsTrigger>
        </TabsList>
        <TabsContent value="listing" defaultChecked>
          <Listing />
        </TabsContent>
        <TabsContent value="history">
          <History />
        </TabsContent>
        <TabsContent value="sell">
          <Sell />
        </TabsContent>
      </Tabs>
    </div>
  );
}
