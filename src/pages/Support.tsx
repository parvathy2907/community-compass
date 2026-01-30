import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  HelpCircle,
  ChevronRight,
  Send,
  Clock,
  CheckCircle2
} from "lucide-react";

const Support = () => {
  const faqs = [
    {
      question: "How do I request food from a donor?",
      answer: "Browse available food in the Discover section and click 'Request Food' on any listing."
    },
    {
      question: "What happens after I accept a pickup?",
      answer: "A volunteer will be assigned to collect the food and deliver it to your location."
    },
    {
      question: "How do I update my organization details?",
      answer: "Go to Organization Profile and click 'Edit Profile' to make changes."
    },
    {
      question: "What if the food quality doesn't meet standards?",
      answer: "Report the issue immediately through the delivery card and our team will investigate."
    },
  ];

  const recentTickets = [
    {
      id: "#12345",
      subject: "Delivery delay issue",
      status: "resolved",
      date: "Jan 25, 2026"
    },
    {
      id: "#12344",
      subject: "Storage verification question",
      status: "open",
      date: "Jan 27, 2026"
    },
  ];

  return (
    <DashboardLayout
      title="Support & Communication"
      subtitle="Get help and connect with our team"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Form */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-card">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-primary" />
              Send Us a Message
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Subject" />
                <Input placeholder="Category" />
              </div>
              <Textarea 
                placeholder="Describe your issue or question..."
                className="min-h-[150px]"
              />
              <div className="flex justify-end">
                <Button className="gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-card">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-foreground">{faq.question}</p>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Contact */}
          <div className="bg-card rounded-xl border border-border p-5 shadow-card">
            <h3 className="font-semibold text-foreground mb-4">Quick Contact</h3>
            <div className="space-y-4">
              <a 
                href="tel:+15551234567"
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Phone Support</p>
                  <p className="text-xs text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </a>
              <a 
                href="mailto:support@foodshare.org"
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Email Support</p>
                  <p className="text-xs text-muted-foreground">support@foodshare.org</p>
                </div>
              </a>
            </div>
          </div>

          {/* Recent Tickets */}
          <div className="bg-card rounded-xl border border-border p-5 shadow-card">
            <h3 className="font-semibold text-foreground mb-4">Recent Tickets</h3>
            <div className="space-y-3">
              {recentTickets.map((ticket) => (
                <div 
                  key={ticket.id}
                  className="flex items-start justify-between py-3 border-b border-border last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">{ticket.subject}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">{ticket.id}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{ticket.date}</span>
                    </div>
                  </div>
                  <Badge 
                    variant="outline"
                    className={ticket.status === "resolved" 
                      ? "bg-success/10 text-success border-success/20" 
                      : "bg-warning/10 text-warning border-warning/20"
                    }
                  >
                    {ticket.status === "resolved" ? (
                      <><CheckCircle2 className="w-3 h-3 mr-1" /> Resolved</>
                    ) : (
                      <><Clock className="w-3 h-3 mr-1" /> Open</>
                    )}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Tickets
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Support;
