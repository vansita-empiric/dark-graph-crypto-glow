import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { PriceChart } from "./PriceChart";

export const TradingInterface = () => {
  // Sample BTC price data
  const btcData = [
    { time: "09:00", price: 66800 },
    { time: "10:00", price: 67200 },
    { time: "11:00", price: 66950 },
    { time: "12:00", price: 67450 },
    { time: "13:00", price: 67300 },
    { time: "14:00", price: 67680 },
    { time: "15:00", price: 67450 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Chart Section */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5" />
                <span>BTC/USDT</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold">$67,450.32</span>
                <div className="flex items-center space-x-1 text-success">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-medium">+2.45%</span>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PriceChart 
              data={btcData} 
              symbol="BTC/USDT" 
              color="hsl(var(--primary))"
            />
          </CardContent>
        </Card>

        {/* Order Book Preview */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Order Book</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-destructive mb-2">Sell Orders</h4>
                <div className="space-y-1">
                  {[
                    { price: 67500, amount: 0.125 },
                    { price: 67480, amount: 0.250 },
                    { price: 67460, amount: 0.180 },
                    { price: 67450, amount: 0.320 },
                  ].map((order, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-destructive">${order.price.toLocaleString()}</span>
                      <span className="text-muted-foreground">{order.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-success mb-2">Buy Orders</h4>
                <div className="space-y-1">
                  {[
                    { price: 67440, amount: 0.145 },
                    { price: 67420, amount: 0.290 },
                    { price: 67400, amount: 0.175 },
                    { price: 67380, amount: 0.385 },
                  ].map((order, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-success">${order.price.toLocaleString()}</span>
                      <span className="text-muted-foreground">{order.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Trading Panel */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Trade BTC/USDT</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="buy" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="buy" className="data-[state=active]:bg-success data-[state=active]:text-success-foreground">
                  Buy
                </TabsTrigger>
                <TabsTrigger value="sell" className="data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground">
                  Sell
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="buy" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="buy-price">Price (USDT)</Label>
                  <Input id="buy-price" placeholder="67,450.32" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="buy-amount">Amount (BTC)</Label>
                  <Input id="buy-amount" placeholder="0.001" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="buy-type">Order Type</Label>
                  <Select defaultValue="market">
                    <SelectTrigger>
                      <SelectValue placeholder="Select order type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="market">Market</SelectItem>
                      <SelectItem value="limit">Limit</SelectItem>
                      <SelectItem value="stop">Stop Loss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  Total: ~$67.45
                </div>
                
                <Button className="w-full bg-success hover:bg-success/90">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Buy BTC
                </Button>
              </TabsContent>
              
              <TabsContent value="sell" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="sell-price">Price (USDT)</Label>
                  <Input id="sell-price" placeholder="67,450.32" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sell-amount">Amount (BTC)</Label>
                  <Input id="sell-amount" placeholder="0.001" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sell-type">Order Type</Label>
                  <Select defaultValue="market">
                    <SelectTrigger>
                      <SelectValue placeholder="Select order type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="market">Market</SelectItem>
                      <SelectItem value="limit">Limit</SelectItem>
                      <SelectItem value="stop">Stop Loss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  Total: ~$67.45
                </div>
                
                <Button className="w-full bg-destructive hover:bg-destructive/90">
                  <TrendingDown className="h-4 w-4 mr-2" />
                  Sell BTC
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Wallet Balance */}
        <Card>
          <CardHeader>
            <CardTitle>Wallet Balance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">USDT</span>
              <span className="font-bold">$12,459.32</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">BTC</span>
              <span className="font-bold">0.15847</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">ETH</span>
              <span className="font-bold">2.458</span>
            </div>
            <div className="pt-2 border-t">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Total Value</span>
                <span className="font-bold text-primary">$49,127.85</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};