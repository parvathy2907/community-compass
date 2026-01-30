import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { ActiveDeliveryCard } from "@/components/dashboard/ActiveDeliveryCard";
import { AvailableFoodCard } from "@/components/dashboard/AvailableFoodCard";
import { 
  Package, 
  Clock, 
  CheckCircle2, 
  TrendingUp,
  MapPin,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const Dashboard = () => {
  const [isOnline, setIsOnline] = useState(true);

  const nearbyFood = [
    {
      id: "1",
      donorName: "Green Garden Restaurant",
      distance: "0.8 km",
      foodType: "Prepared Meals",
      quantity: "25 portions",
      expiresIn: "2 hours",
      isUrgent: true,
    },
    {
      id: "2",
      donorName: "Fresh Bakery Co.",
      distance: "1.2 km",
      foodType: "Bakery Items",
      quantity: "40 items",
      expiresIn: "6 hours",
    },
    {
      id: "3",
      donorName: "Sunrise Café",
      distance: "2.1 km",
      foodType: "Mixed Food",
      quantity: "15 portions",
      expiresIn: "4 hours",
    },
  ];

  return (
    <DashboardLayout>
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Welcome back, Hope Community!
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's your NGO dashboard overview
          </p>
        </div>
        <div className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-success animate-pulse-gentle' : 'bg-muted-foreground'}`} />
            <div>
              <p className="text-sm font-medium text-foreground">Organization Status</p>
              <p className="text-xs text-muted-foreground">
                {isOnline ? 'Accepting food donations' : 'Not accepting donations'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <span className={`text-sm ${isOnline ? 'text-success' : 'text-muted-foreground'}`}>
              {isOnline ? 'Online' : 'Offline'}
            </span>
            <Switch checked={isOnline} onCheckedChange={setIsOnline} />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Active Requests"
          value={3}
          subtitle="In progress"
          icon={Package}
          variant="green"
        />
        <StatCard
          label="Pending Pickups"
          value={5}
          subtitle="Awaiting response"
          icon={Clock}
          variant="orange"
        />
        <StatCard
          label="Completed Today"
          value={12}
          subtitle="Great work!"
          icon={CheckCircle2}
          variant="green"
        />
        <StatCard
          label="Total Received"
          value="1,247"
          subtitle="All time"
          icon={TrendingUp}
          variant="orange"
          trend={{ value: 12, isPositive: true }}
        />
      </div>

      {/* Active Delivery */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Your Active Pickup</h2>
          <Link to="/tracking">
            <Button variant="ghost" className="text-primary gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <ActiveDeliveryCard
          donorName="Sunrise Café"
          address="789 Sunrise Blvd, East District"
          volunteerName="John Smith"
          volunteerPhone="+1 (555) 123-4567"
          status="pickup"
          estimatedTime="3:00 PM Today"
          instructions="Park in designated volunteer spot. Contact Lisa at the front desk."
          isUrgent
        />
      </div>

      {/* Nearby Available Food */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-foreground">Nearby Available Food</h2>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4" />
              <span>Within 5 km</span>
            </div>
          </div>
          <Link to="/discover">
            <Button variant="ghost" className="text-primary gap-1">
              Discover More <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearbyFood.map((food) => (
            <AvailableFoodCard
              key={food.id}
              {...food}
              onRequest={() => console.log("Request:", food.id)}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
