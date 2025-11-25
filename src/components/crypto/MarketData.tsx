import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import { CryptoCard } from "./CryptoCard";
import { cn } from "@/lib/utils";

export const MarketData = () => {
  // Sample market data
  const cryptoData = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: 67450.32,
      change24h: 2.45,
      volume: 28500000000,
      marketCap: 1320000000000,
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      price: 3842.67,
      change24h: -1.23,
      volume: 15200000000,
      marketCap: 462000000000,
    },
    {
      symbol: "BNB",
      name: "Binance Coin",
      price: 635.89,
      change24h: 0.87,
      volume: 2100000000,
      marketCap: 95000000000,
    },
    {
      symbol: "SOL",
      name: "Solana",
      price: 198.45,
      change24h: 5.67,
      volume: 3200000000,
      marketCap: 94000000000,
    },
    {
      symbol: "ADA",
      name: "Cardano",
      price: 1.08,
      change24h: -2.34,
      volume: 1800000000,
      marketCap: 38000000000,
    },
    {
      symbol: "AVAX",
      name: "Avalanche",
      price: 42.33,
      change24h: 3.21,
      volume: 890000000,
      marketCap: 16000000000,
    },
  ];

  const marketStats = [
    {
      label: "Market Cap",
      value: "$2.84T",
      change: "+2.34%",
      positive: true,
    },
    {
      label: "24h Volume",
      value: "$89.5B",
      change: "-5.67%",
      positive: false,
    },
    {
      label: "Bitcoin Dominance",
      value: "46.8%",
      change: "+0.12%",
      positive: true,
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5" />
            <span>Market Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketStats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <div className={cn(
                  "flex items-center justify-center space-x-1 text-sm font-medium",
                  stat.positive ? "text-success" : "text-destructive"
                )}>
                  {stat.positive ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  <span>{stat.change}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-4">Top Cryptocurrencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cryptoData.map((crypto) => (
            <CryptoCard key={crypto.symbol} {...crypto} />
          ))}
        </div>
      </div>
    </div>
  );
};