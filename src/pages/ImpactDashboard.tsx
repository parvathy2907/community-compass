import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { 
  TrendingUp, 
  Users, 
  Package,
  Leaf,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";

const ImpactDashboard = () => {
  const monthlyData = [
    { month: "Aug", meals: 320 },
    { month: "Sep", meals: 450 },
    { month: "Oct", meals: 380 },
    { month: "Nov", meals: 520 },
    { month: "Dec", meals: 680 },
    { month: "Jan", meals: 750 },
  ];

  const foodTypeData = [
    { name: "Prepared Meals", value: 45 },
    { name: "Bakery Items", value: 25 },
    { name: "Fresh Produce", value: 20 },
    { name: "Packaged Food", value: 10 },
  ];

  const COLORS = ["#2d7a4f", "#f59e0b", "#3b82f6", "#8b5cf6"];

  const weeklyData = [
    { day: "Mon", pickups: 4 },
    { day: "Tue", pickups: 6 },
    { day: "Wed", pickups: 3 },
    { day: "Thu", pickups: 8 },
    { day: "Fri", pickups: 5 },
    { day: "Sat", pickups: 9 },
    { day: "Sun", pickups: 7 },
  ];

  return (
    <DashboardLayout
      title="Impact Dashboard"
      subtitle="Track your organization's contribution to reducing food waste"
    >
      {/* Key Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Meals Saved"
          value="2,847"
          subtitle="This month"
          icon={Package}
          variant="green"
          trend={{ value: 15, isPositive: true }}
        />
        <StatCard
          label="CO₂ Prevented"
          value="1.2 tons"
          subtitle="Environmental impact"
          icon={Leaf}
          variant="green"
        />
        <StatCard
          label="People Fed"
          value="3,520"
          subtitle="Lives impacted"
          icon={Users}
          variant="orange"
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          label="Food Value"
          value="$12,450"
          subtitle="Estimated savings"
          icon={TrendingUp}
          variant="blue"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Meals Over Time */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-foreground">Meals Received</h3>
              <p className="text-sm text-muted-foreground">Last 6 months</p>
            </div>
            <div className="flex items-center gap-1 text-success text-sm">
              <ArrowUpRight className="w-4 h-4" />
              <span>+23% from last period</span>
            </div>
          </div>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorMeals" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2d7a4f" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2d7a4f" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                <YAxis stroke="#9ca3af" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }} 
                />
                <Area
                  type="monotone"
                  dataKey="meals"
                  stroke="#2d7a4f"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorMeals)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Food Type Distribution */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-card">
          <div className="mb-6">
            <h3 className="font-semibold text-foreground">Food Type Distribution</h3>
            <p className="text-sm text-muted-foreground">By category</p>
          </div>
          <div className="h-[250px] flex items-center">
            <ResponsiveContainer width="50%" height="100%">
              <PieChart>
                <Pie
                  data={foodTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {foodTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-3">
              {foodTypeData.map((item, index) => (
                <div key={item.name} className="flex items-center gap-3">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <span className="text-sm text-foreground">{item.name}</span>
                  <span className="text-sm text-muted-foreground ml-auto">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Activity */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold text-foreground">Weekly Pickup Activity</h3>
            <p className="text-sm text-muted-foreground">This week's pickups by day</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Jan 22 - Jan 28, 2026</span>
          </div>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
              <XAxis dataKey="day" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }} 
              />
              <Bar dataKey="pickups" fill="#f59e0b" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ImpactDashboard;
