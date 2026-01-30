import { cn } from "@/lib/utils";
import { MapPin, Clock, Utensils, Phone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FoodRequestCardProps {
  donorName: string;
  location: string;
  foodType: string;
  quantity: string;
  pickupDeadline: string;
  description: string;
  contact: string;
  status: "pending" | "accepted" | "completed" | "expired";
  isUrgent?: boolean;
  onAccept?: () => void;
  onDecline?: () => void;
  onViewDetails?: () => void;
}

const statusConfig = {
  pending: {
    label: "Pending",
    className: "bg-warning/10 text-warning border-warning/20",
  },
  accepted: {
    label: "Accepted",
    className: "bg-success/10 text-success border-success/20",
  },
  completed: {
    label: "Completed",
    className: "bg-info/10 text-info border-info/20",
  },
  expired: {
    label: "Expired",
    className: "bg-destructive/10 text-destructive border-destructive/20",
  },
};

export function FoodRequestCard({
  donorName,
  location,
  foodType,
  quantity,
  pickupDeadline,
  description,
  contact,
  status,
  isUrgent,
  onAccept,
  onDecline,
  onViewDetails,
}: FoodRequestCardProps) {
  const statusInfo = statusConfig[status];

  return (
    <div className="bg-card rounded-xl border border-border p-5 shadow-card hover:shadow-card-hover transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg text-foreground">{donorName}</h3>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-1">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
        <Badge variant="outline" className={cn("font-medium", statusInfo.className)}>
          {statusInfo.label}
        </Badge>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-muted/50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
            <Phone className="w-3.5 h-3.5" />
            <span>Contact</span>
          </div>
          <p className="font-medium text-foreground text-sm">{contact}</p>
        </div>
        <div className="bg-muted/50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
            <Utensils className="w-3.5 h-3.5" />
            <span>Food Type</span>
          </div>
          <p className="font-medium text-foreground text-sm">{foodType}</p>
        </div>
        <div className="bg-muted/50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
            <Users className="w-3.5 h-3.5" />
            <span>Quantity</span>
          </div>
          <p className="font-medium text-foreground text-sm">{quantity}</p>
        </div>
        <div className={cn(
          "rounded-lg p-3",
          isUrgent ? "bg-warning/10" : "bg-muted/50"
        )}>
          <div className={cn(
            "flex items-center gap-2 text-xs mb-1",
            isUrgent ? "text-warning" : "text-muted-foreground"
          )}>
            <Clock className="w-3.5 h-3.5" />
            <span>Pickup Deadline</span>
          </div>
          <p className={cn(
            "font-medium text-sm",
            isUrgent ? "text-warning" : "text-foreground"
          )}>
            {pickupDeadline}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <p className="text-xs text-muted-foreground mb-1">Description</p>
        <p className="text-sm text-foreground">{description}</p>
      </div>

      {/* Pickup Address */}
      <div className="bg-muted/30 rounded-lg p-3 mb-4">
        <p className="text-xs text-muted-foreground mb-1">Pickup Address</p>
        <p className="text-sm text-foreground">{location}</p>
      </div>

      {/* Actions */}
      {status === "pending" && (
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1 text-warning border-warning/30 hover:bg-warning/10"
            onClick={onDecline}
          >
            Decline Pickup
          </Button>
          <Button
            className="flex-1 bg-primary hover:bg-primary/90"
            onClick={onAccept}
          >
            Accept Pickup
          </Button>
        </div>
      )}
    </div>
  );
}
