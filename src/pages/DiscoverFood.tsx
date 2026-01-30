import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { AvailableFoodCard } from "@/components/dashboard/AvailableFoodCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MapPin, 
  List, 
  Map as MapIcon,
  SlidersHorizontal,
  Clock,
  Utensils
} from "lucide-react";
import { useState } from "react";

const DiscoverFood = () => {
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [searchQuery, setSearchQuery] = useState("");

  const availableFood = [
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
    {
      id: "4",
      donorName: "Grand Hotel",
      distance: "3.5 km",
      foodType: "Buffet Items",
      quantity: "50 portions",
      expiresIn: "3 hours",
      isUrgent: true,
    },
    {
      id: "5",
      donorName: "City Catering",
      distance: "4.2 km",
      foodType: "Event Leftovers",
      quantity: "100 portions",
      expiresIn: "5 hours",
    },
    {
      id: "6",
      donorName: "University Canteen",
      distance: "5.0 km",
      foodType: "Prepared Meals",
      quantity: "60 portions",
      expiresIn: "2 hours",
      isUrgent: true,
    },
  ];

  const filters = [
    { label: "All", active: true },
    { label: "Urgent", active: false },
    { label: "< 2 km", active: false },
    { label: "Prepared Meals", active: false },
    { label: "Bakery", active: false },
  ];

  return (
    <DashboardLayout
      title="Discover Food"
      subtitle="Find and request available food donations near you"
    >
      {/* Search & Filters */}
      <div className="bg-card rounded-xl border border-border p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by donor name, food type, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="gap-2"
            >
              <List className="w-4 h-4" />
              List
            </Button>
            <Button
              variant={viewMode === "map" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("map")}
              className="gap-2"
            >
              <MapIcon className="w-4 h-4" />
              Map
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          {filters.map((filter) => (
            <Badge
              key={filter.label}
              variant={filter.active ? "default" : "outline"}
              className={filter.active 
                ? "bg-primary text-primary-foreground cursor-pointer" 
                : "cursor-pointer hover:bg-muted"
              }
            >
              {filter.label}
            </Badge>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">Within 5 km radius</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Utensils className="w-4 h-4 text-primary" />
          <span className="font-medium text-foreground">{availableFood.length} donations available</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4 text-warning" />
          <span className="text-warning">3 urgent pickups</span>
        </div>
      </div>

      {/* Food List/Grid */}
      {viewMode === "list" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableFood.map((food) => (
            <AvailableFoodCard
              key={food.id}
              {...food}
              onRequest={() => console.log("Request:", food.id)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-card rounded-xl border border-border h-[500px] flex items-center justify-center">
          <div className="text-center">
            <MapIcon className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground">Map view coming soon</p>
            <p className="text-sm text-muted-foreground/60">
              Interactive map with nearby food donations
            </p>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default DiscoverFood;
