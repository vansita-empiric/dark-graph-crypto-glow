import { Button } from "@/components/ui/button";
import { TrendingUp, Wallet, Settings, User } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  const navItems = [
    { value: "dashboard", label: "Dashboard" },
    { value: "markets", label: "Markets" },
    { value: "portfolio", label: "Portfolio" },
    { value: "trade", label: "Trade" },
    { value: "settings", label: "Settings" },
  ];

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">CryptoTrade</span>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Button
                  key={item.value}
                  variant="ghost"
                  onClick={() => setActiveTab(item.value)}
                  className={
                    activeTab === item.value
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-black"
                  }
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-secondary/50 rounded-lg px-3 py-2">
              <Wallet className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">$12,459.32</span>
            </div>

            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
