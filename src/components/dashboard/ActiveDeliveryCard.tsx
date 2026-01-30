import { cn } from "@/lib/utils";
import { MapPin, Clock, User, Phone, Truck, AlertTriangle, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface ActiveDeliveryCardProps {
  donorName: string;
  address: string;
  volunteerName: string;
  volunteerPhone: string;
  status: "pickup" | "in_transit" | "arriving" | "delivered";
  estimatedTime: string;
  instructions?: string;
  isUrgent?: boolean;
}

const statusConfig = {
  pickup: { label: "Picking up", progress: 25, color: "bg-warning" },
  in_transit: { label: "In Transit", progress: 50, color: "bg-info" },
  arriving: { label: "Arriving Soon", progress: 75, color: "bg-success" },
  delivered: { label: "Delivered", progress: 100, color: "bg-success" },
};

export function ActiveDeliveryCard({
  donorName,
  address,
  volunteerName,
  volunteerPhone,
  status,
  estimatedTime,
  instructions,
  isUrgent,
}: ActiveDeliveryCardProps) {
  const statusInfo = statusConfig[status];

  return (
    <div className="bg-card rounded-xl border border-border p-5 shadow-card">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg text-foreground">{donorName}</h3>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-1">
            <MapPin className="w-4 h-4" />
            <span>{address}</span>
          </div>
        </div>
        <Badge variant="outline" className="bg-success/10 text-success border-success/20">
          Accepted
        </Badge>
      </div>

      {/* Urgent Warning */}
      {isUrgent && (
        <div className="bg-warning/10 border border-warning/20 rounded-lg p-3 mb-4">
          <div className="flex items-center gap-2 text-warning">
            <AlertTriangle className="w-4 h-4" />
            <span className="font-medium text-sm">Pickup Deadline: {estimatedTime}</span>
          </div>
          <p className="text-warning/80 text-xs mt-1">
            Please arrive before the deadline to ensure food quality
          </p>
        </div>
      )}

      {/* Instructions */}
      {instructions && (
        <div className="bg-muted/50 rounded-lg p-3 mb-4">
          <div className="flex items-center gap-2 text-primary text-sm mb-1">
            <Info className="w-4 h-4" />
            <span className="font-medium">Pickup Instructions</span>
          </div>
          <p className="text-foreground text-sm">{instructions}</p>
        </div>
      )}

      {/* Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted-foreground">Delivery Progress</span>
          <span className="font-medium text-foreground">{statusInfo.label}</span>
        </div>
        <Progress value={statusInfo.progress} className="h-2" />
      </div>

      {/* Volunteer Info */}
      <div className="bg-muted/30 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Truck className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">{volunteerName}</p>
            <p className="text-xs text-muted-foreground">Volunteer Driver</p>
          </div>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Phone className="w-4 h-4" />
            Call
          </Button>
        </div>
      </div>
    </div>
  );
}
