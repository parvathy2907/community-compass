import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  Settings as SettingsIcon, 
  Shield, 
  Bell, 
  MapPin,
  Lock,
  Eye,
  EyeOff,
  Smartphone,
  Mail
} from "lucide-react";
import { useState } from "react";

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const [notifications, setNotifications] = useState({
    newFood: true,
    deliveryUpdates: true,
    urgentAlerts: true,
    weeklyReports: false,
    emailNotifications: true,
    pushNotifications: true,
  });

  return (
    <DashboardLayout
      title="Settings & Security"
      subtitle="Manage your account preferences and security settings"
    >
      <div className="space-y-6 max-w-3xl">
        {/* Account Settings */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-card">
          <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
            <SettingsIcon className="w-5 h-5 text-primary" />
            Account Settings
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Email Address</Label>
                <Input value="contact@hopecommunity.org" />
              </div>
              <div className="space-y-2">
                <Label>Phone Number</Label>
                <Input value="+1 (555) 234-5678" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Default Location
                </Label>
                <Input value="123 Community Drive, Downtown District" />
              </div>
              <div className="space-y-2">
                <Label>Timezone</Label>
                <Input value="Eastern Time (ET)" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-card">
          <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Security
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Current Password</Label>
              <div className="relative">
                <Input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter current password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>New Password</Label>
                <Input type="password" placeholder="Enter new password" />
              </div>
              <div className="space-y-2">
                <Label>Confirm Password</Label>
                <Input type="password" placeholder="Confirm new password" />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground text-sm">Two-Factor Authentication</p>
                  <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
                </div>
              </div>
              <Switch />
            </div>
            <div className="flex justify-end">
              <Button>Update Password</Button>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-card">
          <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
            <Bell className="w-5 h-5 text-primary" />
            Notifications
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-border">
              <div>
                <p className="font-medium text-foreground text-sm">New Food Alerts</p>
                <p className="text-xs text-muted-foreground">Get notified when new food is available</p>
              </div>
              <Switch 
                checked={notifications.newFood}
                onCheckedChange={(checked) => setNotifications({...notifications, newFood: checked})}
              />
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <div>
                <p className="font-medium text-foreground text-sm">Delivery Updates</p>
                <p className="text-xs text-muted-foreground">Real-time tracking notifications</p>
              </div>
              <Switch 
                checked={notifications.deliveryUpdates}
                onCheckedChange={(checked) => setNotifications({...notifications, deliveryUpdates: checked})}
              />
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <div>
                <p className="font-medium text-foreground text-sm">Urgent Alerts</p>
                <p className="text-xs text-muted-foreground">Food expiring soon in your area</p>
              </div>
              <Switch 
                checked={notifications.urgentAlerts}
                onCheckedChange={(checked) => setNotifications({...notifications, urgentAlerts: checked})}
              />
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <div>
                <p className="font-medium text-foreground text-sm">Weekly Reports</p>
                <p className="text-xs text-muted-foreground">Summary of your impact</p>
              </div>
              <Switch 
                checked={notifications.weeklyReports}
                onCheckedChange={(checked) => setNotifications({...notifications, weeklyReports: checked})}
              />
            </div>

            <div className="pt-4">
              <p className="font-medium text-foreground text-sm mb-4">Notification Channels</p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 flex-1">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">Email</span>
                  <Switch 
                    className="ml-auto"
                    checked={notifications.emailNotifications}
                    onCheckedChange={(checked) => setNotifications({...notifications, emailNotifications: checked})}
                  />
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 flex-1">
                  <Smartphone className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">Push</span>
                  <Switch 
                    className="ml-auto"
                    checked={notifications.pushNotifications}
                    onCheckedChange={(checked) => setNotifications({...notifications, pushNotifications: checked})}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
