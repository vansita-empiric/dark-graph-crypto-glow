import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Wallet, DollarSign, BarChart3 } from "lucide-react";
import { PriceChart } from "./PriceChart";

export const Portfolio = () => {
  // Sample portfolio data
  const portfolioData = [
    { time: "00:00", price: 45250 },
    { time: "04:00", price: 46100 },
    { time: "08:00", price: 45800 },
    { time: "12:00", price: 47200 },
    { time: "16:00", price: 46900 },
    { time: "20:00", price: 48350 },
    { time: "24:00", price: 49100 },
  ];

  const stats = [
    {
      title: "Total Balance",
      value: "$49,127.85",
      change: "+12.5%",
      icon: Wallet,
      positive: true,
    },
    {
      title: "24h P&L",
      value: "+$2,847.32",
      change: "+6.2%",
      icon: TrendingUp,
      positive: true,
    },
    {
      title: "Total Invested",
      value: "$35,000.00",
      change: "Initial",
      icon: DollarSign,
      positive: null,
    },
    {
      title: "Portfolio ROI",
      value: "+40.37%",
      change: "All time",
      icon: BarChart3,
      positive: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gradient-to-br from-card via-card to-secondary/20">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className={`text-sm font-medium ${
                    stat.positive === true 
                      ? 'text-success' 
                      : stat.positive === false 
                        ? 'text-destructive' 
                        : 'text-muted-foreground'
                  }`}>
                    {stat.change}
                  </p>
                </div>
                <div className="p-2 bg-primary/10 rounded-lg">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>Portfolio Performance</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <PriceChart 
            data={portfolioData} 
            symbol="Portfolio" 
            color="hsl(var(--primary))"
          />
        </CardContent>
      </Card>
    </div>
  );
};