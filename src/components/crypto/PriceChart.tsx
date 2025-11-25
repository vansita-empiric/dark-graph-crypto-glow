import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface PriceChartProps {
  data: Array<{
    time: string;
    price: number;
  }>;
  symbol: string;
  color?: string;
}

export const PriceChart = ({ data, symbol, color = "hsl(var(--primary))" }: PriceChartProps) => {
  const chartConfig = {
    price: {
      label: "Price",
      color: color,
    },
  };

  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="95%" stopColor={color} stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis 
          dataKey="time" 
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12 }}
        />
        <YAxis 
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12 }}
          domain={['dataMin', 'dataMax']}
        />
        <ChartTooltip 
          content={<ChartTooltipContent />}
          labelFormatter={(value) => `Time: ${value}`}
          formatter={(value) => [`$${value.toLocaleString()}`, symbol]}
        />
        <Area
          type="monotone"
          dataKey="price"
          stroke={color}
          strokeWidth={2}
          fill="url(#priceGradient)"
        />
      </AreaChart>
    </ChartContainer>
  );
};