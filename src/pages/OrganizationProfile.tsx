import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Users, 
  Package,
  Edit2,
  CheckCircle2,
  Clock,
  FileText
} from "lucide-react";
import { useState } from "react";

const OrganizationProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const orgInfo = {
    name: "Hope Community Center",
    type: "NGO / Community Kitchen",
    address: "123 Community Drive, Downtown District",
    phone: "+1 (555) 234-5678",
    email: "contact@hopecommunity.org",
    dailyCapacity: 150,
    storageAvailable: "Yes - Refrigerated",
    description: "We serve hot meals to homeless and low-income families in the downtown area. Operating since 2018, we've helped thousands of families access nutritious food.",
    verified: true,
    memberSince: "March 2022"
  };

  return (
    <DashboardLayout
      title="Organization Profile"
      subtitle="Manage your NGO information and credentials"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Profile Card */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card rounded-xl border border-border p-6 shadow-card">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-foreground">{orgInfo.name}</h2>
                    {orgInfo.verified && (
                      <Badge className="bg-success/10 text-success border-success/20">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground">{orgInfo.type}</p>
                </div>
              </div>
              <Button
                variant={isEditing ? "default" : "outline"}
                onClick={() => setIsEditing(!isEditing)}
                className="gap-2"
              >
                <Edit2 className="w-4 h-4" />
                {isEditing ? "Save Changes" : "Edit Profile"}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-muted-foreground">Organization Name</Label>
                <Input 
                  value={orgInfo.name} 
                  disabled={!isEditing}
                  className="bg-muted/50"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground">Organization Type</Label>
                <Input 
                  value={orgInfo.type} 
                  disabled={!isEditing}
                  className="bg-muted/50"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Address
                </Label>
                <Input 
                  value={orgInfo.address} 
                  disabled={!isEditing}
                  className="bg-muted/50"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Phone Number
                </Label>
                <Input 
                  value={orgInfo.phone} 
                  disabled={!isEditing}
                  className="bg-muted/50"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email Address
                </Label>
                <Input 
                  value={orgInfo.email} 
                  disabled={!isEditing}
                  className="bg-muted/50"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground flex items-center gap-2">
                  <Users className="w-4 h-4" /> Daily Intake Capacity
                </Label>
                <Input 
                  value={`${orgInfo.dailyCapacity} meals`} 
                  disabled={!isEditing}
                  className="bg-muted/50"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label className="text-muted-foreground">Description</Label>
                <Textarea 
                  value={orgInfo.description} 
                  disabled={!isEditing}
                  className="bg-muted/50 min-h-[100px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Side Cards */}
        <div className="space-y-6">
          {/* Verification Status */}
          <div className="bg-card rounded-xl border border-border p-5 shadow-card">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Verification Status
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Identity Verified</span>
                <CheckCircle2 className="w-5 h-5 text-success" />
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">NGO Registration</span>
                <CheckCircle2 className="w-5 h-5 text-success" />
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Address Verified</span>
                <CheckCircle2 className="w-5 h-5 text-success" />
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-muted-foreground">Storage Inspection</span>
                <Clock className="w-5 h-5 text-warning" />
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-card rounded-xl border border-border p-5 shadow-card">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" />
              Activity Stats
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-2xl font-bold text-foreground">1,247</p>
                <p className="text-sm text-muted-foreground">Total meals received</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">89</p>
                <p className="text-sm text-muted-foreground">Successful pickups</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">4.8</p>
                <p className="text-sm text-muted-foreground">Average rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OrganizationProfile;
