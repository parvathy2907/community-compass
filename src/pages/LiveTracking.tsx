import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ActiveDeliveryCard } from "@/components/dashboard/ActiveDeliveryCard";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  MapPin, 
  Clock, 
  Truck, 
  Package,
  Navigation,
  Phone
} from "lucide-react";

const LiveTracking = () => {
  const activeDeliveries = [
    {
      donorName: "Sunrise Café",
      address: "789 Sunrise Blvd, East District",
      volunteerName: "John Smith",
      volunteerPhone: "+1 (555) 123-4567",
      status: "pickup" as const,
      estimatedTime: "3:00 PM Today",
      instructions: "Park in designated volunteer spot. Contact Lisa at the front desk.",
      isUrgent: true,
    },
    {
      donorName: "Fresh Bakery Co.",
      address: "456 Baker Lane, Midtown Plaza",
      volunteerName: "Maria Garcia",
      volunteerPhone: "+1 (555) 987-6543",
      status: "in_transit" as const,
      estimatedTime: "Arriving in 15 min",
      instructions: "Delivery to main entrance. Call on arrival.",
    },
  ];

  return (
    <DashboardLayout
      title="Live Delivery Tracking"
      subtitle="Track your incoming food deliveries in real-time"
    >
      {/* Map Placeholder */}
      <div className="bg-card rounded-xl border border-border h-[300px] mb-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
          <div className="text-center">
            <Navigation className="w-12 h-12 text-primary/30 mx-auto mb-3" />
            <p className="text-muted-foreground font-medium">Live Map View</p>
            <p className="text-sm text-muted-foreground/60">
              Real-time delivery tracking coming soon
            </p>
          </div>
        </div>
        
        {/* Map Overlay Stats */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-4">
          <div className="bg-card/95 backdrop-blur rounded-lg px-4 py-3 shadow-lg">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">2 Active</p>
                <p className="text-xs text-muted-foreground">Deliveries</p>
              </div>
            </div>
          </div>
          <div className="bg-card/95 backdrop-blur rounded-lg px-4 py-3 shadow-lg">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-warning" />
              <div>
                <p className="text-sm font-medium text-foreground">15 min</p>
                <p className="text-xs text-muted-foreground">Next arrival</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Deliveries */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Active Deliveries</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {activeDeliveries.map((delivery, index) => (
            <ActiveDeliveryCard key={index} {...delivery} />
          ))}
        </div>
      </div>

      {/* Delivery Timeline */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Today's Delivery Timeline</h2>
        <div className="space-y-4">
          {[
            { time: "2:30 PM", event: "Pickup started at Sunrise Café", status: "completed" },
            { time: "2:45 PM", event: "Food quality verified", status: "completed" },
            { time: "3:00 PM", event: "En route to your location", status: "current" },
            { time: "3:15 PM", event: "Estimated arrival", status: "pending" },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${
                  item.status === "completed" ? "bg-success" :
                  item.status === "current" ? "bg-warning animate-pulse-gentle" :
                  "bg-muted-foreground/30"
                }`} />
                {index < 3 && (
                  <div className={`w-0.5 h-8 ${
                    item.status === "completed" ? "bg-success" : "bg-muted-foreground/20"
                  }`} />
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{item.event}</p>
                <p className="text-xs text-muted-foreground">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LiveTracking;
