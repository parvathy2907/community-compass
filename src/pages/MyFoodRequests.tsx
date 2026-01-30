import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { FoodRequestCard } from "@/components/dashboard/FoodRequestCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MyFoodRequests = () => {
  const pendingRequests = [
    {
      donorName: "Green Garden Restaurant",
      location: "123 Main Street, Downtown District",
      foodType: "Prepared Meals",
      quantity: "15 portions",
      pickupDeadline: "2:30 PM Today",
      description: "Fresh vegetarian meals - pasta, salads, and bread",
      contact: "+1 (555) 234-5678",
      status: "pending" as const,
      isUrgent: true,
    },
    {
      donorName: "Fresh Bakery Co.",
      location: "456 Baker Lane, Midtown Plaza",
      foodType: "Bakery Items",
      quantity: "30 items",
      pickupDeadline: "4:00 PM Today",
      description: "Assorted bread, pastries, and muffins from today",
      contact: "+1 (555) 345-6789",
      status: "pending" as const,
    },
  ];

  const activeRequests = [
    {
      donorName: "Sunrise Café",
      location: "789 Sunrise Blvd, East District",
      foodType: "Mixed Food",
      quantity: "20 portions",
      pickupDeadline: "3:00 PM Today",
      description: "Sandwiches, soups, and fresh salads",
      contact: "+1 (555) 456-7890",
      status: "accepted" as const,
      isUrgent: true,
    },
  ];

  const completedRequests = [
    {
      donorName: "Grand Hotel",
      location: "100 Grand Avenue, City Center",
      foodType: "Buffet Items",
      quantity: "50 portions",
      pickupDeadline: "Yesterday 6:00 PM",
      description: "Variety of dishes from hotel buffet",
      contact: "+1 (555) 567-8901",
      status: "completed" as const,
    },
  ];

  return (
    <DashboardLayout
      title="My Food Requests"
      subtitle="Manage your incoming and outgoing food requests"
    >
      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList className="bg-muted/50">
          <TabsTrigger value="pending" className="gap-2">
            Pending
            <Badge variant="secondary" className="bg-warning/20 text-warning">
              {pendingRequests.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="active" className="gap-2">
            Active
            <Badge variant="secondary" className="bg-success/20 text-success">
              {activeRequests.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {pendingRequests.map((request, index) => (
              <FoodRequestCard
                key={index}
                {...request}
                onAccept={() => console.log("Accept:", request.donorName)}
                onDecline={() => console.log("Decline:", request.donorName)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {activeRequests.map((request, index) => (
              <FoodRequestCard
                key={index}
                {...request}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {completedRequests.map((request, index) => (
              <FoodRequestCard
                key={index}
                {...request}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default MyFoodRequests;
