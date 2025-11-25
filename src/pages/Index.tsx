import { useState } from "react";
import { Header } from "@/components/crypto/Header";
import { Portfolio } from "@/components/crypto/Portfolio";
import { MarketData } from "@/components/crypto/MarketData";
import { TradingInterface } from "@/components/crypto/TradingInterface";
import { Settings } from "@/components/crypto/Settings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, DollarSign, Activity, Settings as SettingsIcon } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              CryptoTrade
            </span>
          </h1>
          <p className="text-muted-foreground">
            Advanced cryptocurrency trading platform with real-time data and professional tools
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="markets" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Markets</span>
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4" />
              <span>Portfolio</span>
            </TabsTrigger>
            <TabsTrigger value="trade" className="flex items-center space-x-2">
              <Activity className="h-4 w-4" />
              <span>Trade</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <SettingsIcon className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <Portfolio />
            <MarketData />
          </TabsContent>

          <TabsContent value="markets" className="space-y-6">
            <MarketData />
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-6">
            <Portfolio />
          </TabsContent>

          <TabsContent value="trade" className="space-y-6">
            <TradingInterface />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Settings />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
