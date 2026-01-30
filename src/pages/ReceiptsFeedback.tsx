import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Receipt, 
  Star, 
  Download, 
  ThumbsUp,
  Calendar,
  Package,
  MapPin,
  Clock
} from "lucide-react";
import { useState } from "react";

const ReceiptsFeedback = () => {
  const [selectedReceipt, setSelectedReceipt] = useState<number | null>(null);

  const receipts = [
    {
      id: 1,
      donorName: "Sunrise Café",
      date: "Jan 28, 2026",
      quantity: "20 portions",
      foodType: "Mixed Food",
      status: "completed",
      rating: 5,
      feedbackGiven: true,
    },
    {
      id: 2,
      donorName: "Grand Hotel",
      date: "Jan 27, 2026",
      quantity: "50 portions",
      foodType: "Buffet Items",
      status: "completed",
      rating: 4,
      feedbackGiven: true,
    },
    {
      id: 3,
      donorName: "Fresh Bakery Co.",
      date: "Jan 26, 2026",
      quantity: "40 items",
      foodType: "Bakery Items",
      status: "completed",
      rating: null,
      feedbackGiven: false,
    },
  ];

  return (
    <DashboardLayout
      title="Receipt & Feedback"
      subtitle="View donation receipts and provide feedback"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Receipts List */}
        <div className="lg:col-span-2 space-y-4">
          {receipts.map((receipt) => (
            <div
              key={receipt.id}
              className={`bg-card rounded-xl border p-5 shadow-card transition-all cursor-pointer ${
                selectedReceipt === receipt.id 
                  ? "border-primary ring-1 ring-primary" 
                  : "border-border hover:border-primary/50"
              }`}
              onClick={() => setSelectedReceipt(receipt.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-foreground">{receipt.donorName}</h3>
                  <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {receipt.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Package className="w-4 h-4" />
                      {receipt.quantity}
                    </span>
                  </div>
                </div>
                <Badge className="bg-success/10 text-success border-success/20">
                  Completed
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {receipt.feedbackGiven ? (
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < (receipt.rating || 0) 
                              ? "text-warning fill-warning" 
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  ) : (
                    <Button variant="outline" size="sm" className="gap-1.5">
                      <ThumbsUp className="w-4 h-4" />
                      Give Feedback
                    </Button>
                  )}
                </div>
                <Button variant="ghost" size="sm" className="gap-1.5">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Panel */}
        <div className="space-y-6">
          {/* Leave Feedback */}
          <div className="bg-card rounded-xl border border-border p-5 shadow-card">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <ThumbsUp className="w-5 h-5 text-primary" />
              Leave Feedback
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your feedback helps improve the platform and recognizes great donors.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Rating</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-8 h-8 text-muted-foreground hover:text-warning hover:fill-warning cursor-pointer transition-colors"
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Comments (Optional)</p>
                <Textarea 
                  placeholder="Share your experience with this donation..."
                  className="min-h-[100px]"
                />
              </div>
              <Button className="w-full">Submit Feedback</Button>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="bg-card rounded-xl border border-border p-5 shadow-card">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Receipt className="w-5 h-5 text-primary" />
              This Month
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Total Receipts</span>
                <span className="font-medium text-foreground">24</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Meals Received</span>
                <span className="font-medium text-foreground">487</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-muted-foreground">Feedback Given</span>
                <span className="font-medium text-foreground">21 / 24</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ReceiptsFeedback;
