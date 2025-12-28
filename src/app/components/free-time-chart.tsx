import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const freeTimeData = [
  { name: "Learning, Reading & Skill Building", value: 30, color: "#A5F3FC" }, // Light aqua
  { name: "Social / Relaxation", value: 15, color: "#22D3EE" }, // Cyan
  { name: "Fitness & Health", value: 25, color: "#14B8A6" }, // Teal
  { name: "Listening to Podcasts", value: 10, color: "#3B82F6" }, // Medium blue
  { name: "Playing Piano and Making Beats", value: 20, color: "#1E40AF" }, // Deep navy
];

const CustomLabel = ({
  cx,
  cy,
  midAngle,
//   innerRadius,
  outerRadius,
  name,
  value,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 30;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  // Determine text anchor based on position
  const textAnchor = x > cx ? "start" : x < cx ? "end" : "middle";

  return (
    <g>
      <text
        x={x}
        y={y - 8}
        fill="#334155"
        textAnchor={textAnchor}
        dominantBaseline="central"
        className="text-sm font-medium"
      >
        {name}
      </text>
      <text
        x={x}
        y={y + 10}
        fill="#64748B"
        textAnchor={textAnchor}
        dominantBaseline="central"
        className="text-xs"
      >
        {value}%
      </text>
    </g>
  );
};

export function FreeTimeChart() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-slate-900">How I Spend My Free Time</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I believe in maintaining a healthy balance between continuous learning, 
            creative projects, physical wellness, and meaningful connections.
          </p>
        </div>

        <div >
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={freeTimeData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={2}
                dataKey="value"
                label={CustomLabel}
                labelLine={false}
              >
                {freeTimeData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color}
                    className="transition-opacity duration-300 hover:opacity-80 cursor-pointer"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Legend for mobile */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            {freeTimeData.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div className="flex-1">
                  <p className="text-slate-700 text-sm">{item.name}</p>
                  <p className="text-slate-500 text-xs">{item.value}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
