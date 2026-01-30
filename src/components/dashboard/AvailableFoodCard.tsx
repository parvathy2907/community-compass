import { cn } from "@/lib/utils";
import { MapPin, Clock, Utensils, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AvailableFoodCardProps {
  id: string;
  donorName: string;
  distance: string;
  foodType: string;
  quantity: string;
  expiresIn: string;
  imageUrl?: string;
  isUrgent?: boolean;
  onRequest?: () => void;
}

export function AvailableFoodCard({
  donorName,
  distance,
  foodType,
  quantity,
  expiresIn,
  imageUrl,
  isUrgent,
  onRequest,
}: AvailableFoodCardProps) {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-200 group">
      {/* Image */}
      <div className="relative h-40 bg-muted overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={foodType}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
            <Package className="w-12 h-12 text-primary/30" />
          </div>
        )}
        {isUrgent && (
          <Badge className="absolute top-3 right-3 bg-warning text-warning-foreground">
            Urgent
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold text-foreground">{donorName}</h3>
            <div className="flex items-center gap-1 text-muted-foreground text-sm mt-0.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{distance}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Utensils className="w-4 h-4 text-primary" />
            <span className="text-foreground">{foodType}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Package className="w-4 h-4 text-primary" />
            <span className="text-foreground">{quantity}</span>
          </div>
          <div className={cn(
            "flex items-center gap-2 text-sm",
            isUrgent && "text-warning"
          )}>
            <Clock className={cn("w-4 h-4", isUrgent ? "text-warning" : "text-primary")} />
            <span>Expires in {expiresIn}</span>
          </div>
        </div>

        <Button
          className="w-full bg-primary hover:bg-primary/90"
          onClick={onRequest}
        >
          Request Food
        </Button>
      </div>
    </div>
  );
}
