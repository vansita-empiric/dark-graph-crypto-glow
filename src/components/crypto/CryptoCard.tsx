import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CryptoCardProps {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume: number;
  marketCap: number;
  icon?: string;
}

export const CryptoCard = ({ 
  symbol, 
  name, 
  price, 
  change24h, 
  volume, 
  marketCap,
  icon 
}: CryptoCardProps) => {
  const isPositive = change24h >= 0;
  
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary/20 bg-gradient-to-br from-card via-card to-card/80">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {icon && (
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold">{symbol[0]}</span>
              </div>
            )}
            <div>
              <span className="text-lg font-bold">{symbol}</span>
              <p className="text-sm text-muted-foreground">{name}</p>
            </div>
          </div>
          
          <div className={cn(
            "flex items-center space-x-1 px-2 py-1 rounded-lg text-sm font-medium",
            isPositive 
              ? "bg-success/10 text-success" 
              : "bg-destructive/10 text-destructive"
          )}>
            {isPositive ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            <span>{isPositive ? '+' : ''}{change24h.toFixed(2)}%</span>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div>
          <span className="text-2xl font-bold">${price.toLocaleString()}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Volume 24h</p>
            <p className="font-medium">${(volume / 1000000).toFixed(1)}M</p>
          </div>
          <div>
            <p className="text-muted-foreground">Market Cap</p>
            <p className="font-medium">${(marketCap / 1000000000).toFixed(1)}B</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};