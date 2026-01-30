import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bell, 
  Package, 
  Truck, 
  CheckCircle2, 
  AlertTriangle,
  MessageCircle,
  Clock,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "urgent",
      title: "Urgent Food Available",
      message: "Green Garden Restaurant has 25 portions expiring in 2 hours",
      time: "5 min ago",
      read: false,
      icon: AlertTriangle,
    },
    {
      id: 2,
      type: "delivery",
      title: "Delivery En Route",
      message: "John Smith is on the way with your food from Sunrise Café",
      time: "15 min ago",
      read: false,
      icon: Truck,
    },
    {
      id: 3,
      type: "success",
      title: "Pickup Confirmed",
      message: "Fresh Bakery Co. has confirmed your food request",
      time: "1 hour ago",
      read: true,
      icon: CheckCircle2,
    },
    {
      id: 4,
      type: "message",
      title: "New Message",
      message: "Platform Admin: Your verification documents have been approved",
      time: "3 hours ago",
      read: true,
      icon: MessageCircle,
    },
    {
      id: 5,
      type: "package",
      title: "New Food Listing",
      message: "University Canteen just listed 60 portions near your area",
      time: "5 hours ago",
      read: true,
      icon: Package,
    },
  ];

  const iconStyles = {
    urgent: "bg-warning/10 text-warning",
    delivery: "bg-info/10 text-info",
    success: "bg-success/10 text-success",
    message: "bg-primary/10 text-primary",
    package: "bg-primary/10 text-primary",
  };

  return (
    <DashboardLayout
      title="Notifications"
      subtitle="Stay updated with the latest activity"
    >
      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <Button variant="default" size="sm">All</Button>
        <Button variant="outline" size="sm">Unread</Button>
        <Button variant="outline" size="sm">Food Alerts</Button>
        <Button variant="outline" size="sm">Deliveries</Button>
        <Button variant="outline" size="sm">Messages</Button>
        <div className="ml-auto">
          <Button variant="ghost" size="sm" className="gap-2">
            <Settings className="w-4 h-4" />
            Notification Settings
          </Button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        {notifications.map((notification, index) => {
          const IconComponent = notification.icon;
          return (
            <div
              key={notification.id}
              className={cn(
                "flex items-start gap-4 p-4 hover:bg-muted/50 transition-colors cursor-pointer",
                index !== notifications.length - 1 && "border-b border-border",
                !notification.read && "bg-primary/5"
              )}
            >
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                iconStyles[notification.type as keyof typeof iconStyles]
              )}>
                <IconComponent className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className={cn(
                      "font-medium text-foreground",
                      !notification.read && "font-semibold"
                    )}>
                      {notification.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">
                      {notification.message}
                    </p>
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                  )}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-6">
        <Button variant="outline">Load More Notifications</Button>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
