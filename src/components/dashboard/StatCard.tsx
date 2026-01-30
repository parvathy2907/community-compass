import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  variant?: "green" | "orange" | "blue" | "default";
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const variantStyles = {
  green: "gradient-card-green border-success/20",
  orange: "gradient-card-orange border-warning/20",
  blue: "gradient-card-blue border-info/20",
  default: "bg-card border-border",
};

const iconVariantStyles = {
  green: "bg-success/10 text-success",
  orange: "bg-warning/10 text-warning",
  blue: "bg-info/10 text-info",
  default: "bg-muted text-muted-foreground",
};

const labelVariantStyles = {
  green: "text-success",
  orange: "text-warning",
  blue: "text-info",
  default: "text-muted-foreground",
};

export function StatCard({
  label,
  value,
  subtitle,
  icon: Icon,
  variant = "default",
  trend,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border p-5 shadow-card transition-all duration-200 hover:shadow-card-hover",
        variantStyles[variant]
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className={cn("text-sm font-medium", labelVariantStyles[variant])}>
            {label}
          </p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {subtitle && (
            <p className={cn("text-sm", labelVariantStyles[variant])}>
              {subtitle}
            </p>
          )}
          {trend && (
            <p
              className={cn(
                "text-xs font-medium",
                trend.isPositive ? "text-success" : "text-destructive"
              )}
            >
              {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}% from last week
            </p>
          )}
        </div>
        <div
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center",
            iconVariantStyles[variant]
          )}
        >
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
