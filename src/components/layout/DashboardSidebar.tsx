import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Building2,
  MapPin,
  ClipboardList,
  Truck,
  Bell,
  Receipt,
  BarChart3,
  MessageCircle,
  Settings,
  LogOut,
  ChevronLeft,
  Leaf,
  Heart,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/organization", icon: Building2, label: "Organization Profile" },
  { to: "/discover", icon: MapPin, label: "Discover Food" },
  { to: "/requests", icon: ClipboardList, label: "My Food Requests" },
  { to: "/tracking", icon: Truck, label: "Live Tracking" },
  { to: "/notifications", icon: Bell, label: "Notifications" },
  { to: "/receipts", icon: Receipt, label: "Receipt & Feedback" },
  { to: "/impact", icon: BarChart3, label: "Impact Dashboard" },
  { to: "/support", icon: MessageCircle, label: "Support" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={cn(
        "gradient-sidebar flex flex-col h-screen sticky top-0 transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border/30">
        <div className={cn("flex items-center gap-3", collapsed && "justify-center w-full")}>
          <div className="w-10 h-10 rounded-xl bg-sidebar-foreground/10 flex items-center justify-center">
            <Leaf className="w-6 h-6 text-sidebar-foreground" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sidebar-foreground font-bold text-lg">
                Food<span className="text-warning">Share</span>
              </span>
              <span className="text-sidebar-foreground/70 text-xs">NGO Portal</span>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50",
            collapsed && "hidden"
          )}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                "text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-foreground/10",
                isActive && "bg-sidebar-foreground/15 text-sidebar-foreground font-medium shadow-sm",
                collapsed && "justify-center px-2"
              )}
            >
              <item.icon className={cn("w-5 h-5 shrink-0", isActive && "text-warning")} />
              {!collapsed && <span className="text-sm">{item.label}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-sidebar-border/30">
        <div
          className={cn(
            "flex items-center gap-3",
            collapsed && "justify-center"
          )}
        >
          <Avatar className="w-10 h-10 border-2 border-sidebar-foreground/20">
            <AvatarImage src="" />
            <AvatarFallback className="bg-sidebar-accent text-sidebar-foreground text-sm">
              HC
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                Hope Community
              </p>
              <p className="text-xs text-sidebar-foreground/60 truncate">
                NGO • Verified
              </p>
            </div>
          )}
          {!collapsed && (
            <Button
              variant="ghost"
              size="icon"
              className="text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Expand button when collapsed */}
      {collapsed && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(false)}
          className="mx-auto mb-4 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
        >
          <ChevronLeft className="w-5 h-5 rotate-180" />
        </Button>
      )}
    </aside>
  );
}
