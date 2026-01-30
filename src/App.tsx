import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import OrganizationProfile from "./pages/OrganizationProfile";
import DiscoverFood from "./pages/DiscoverFood";
import MyFoodRequests from "./pages/MyFoodRequests";
import LiveTracking from "./pages/LiveTracking";
import Notifications from "./pages/Notifications";
import ReceiptsFeedback from "./pages/ReceiptsFeedback";
import ImpactDashboard from "./pages/ImpactDashboard";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/organization" element={<OrganizationProfile />} />
          <Route path="/discover" element={<DiscoverFood />} />
          <Route path="/requests" element={<MyFoodRequests />} />
          <Route path="/tracking" element={<LiveTracking />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/receipts" element={<ReceiptsFeedback />} />
          <Route path="/impact" element={<ImpactDashboard />} />
          <Route path="/support" element={<Support />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
