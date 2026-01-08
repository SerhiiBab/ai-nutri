import { Wheat, Beef, Droplets, Flame } from "lucide-react";

type FoodGridProps = {
  onAddFood: () => void;
};

type StatItem = {
  title: string;
  value: number;
  unit: string;
  color: string;
  icon: React.ReactNode;
};

const stats: StatItem[] = [
  {
    title: "Kohlenhydrate",
    value: 142,
    unit: "g",
    color: "emerald",
    icon: <Wheat className="w-8 h-8 text-emerald-600" />,
  },
  {
    title: "Protein",
    value: 81,
    unit: "g",
    color: "blue",
    icon: <Beef className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Fette",
    value: 39,
    unit: "g",
    color: "yellow",
    icon: <Droplets className="w-8 h-8 text-yellow-600" />,
  },
  {
    title: "Kalorien",
    value: 1320,
    unit: "kcal",
    color: "orange",
    icon: <Flame className="w-8 h-8 text-orange-600" />,
  },
];

const FoodGrid: React.FC<FoodGridProps> = ({ onAddFood }) => {
  return (
    <section className="w-full min-h-screen bg-[#eef3ea00] py-16">
      {/* Button */}
      <div className="flex justify-center mb-12">
        <button onClick={onAddFood} className="essenhinzu flex items-center gap-2 bg-[#2fa0d4] text-white text-2xl font-semibold px-10 py-4 rounded-sm shadow-md hover:opacity-90 transition">
          <span className="text-3xl leading-none">+</span>
          Essen
        </button>
      </div>    


<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 bg-[#248f590d]">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white rounded-2xl p-6 shadow-sm border-border/50 hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </h3>

            <div
              className={`p-2 rounded-xl bg-${stat.color}-600 bg-opacity-10`}
            >
              {stat.icon}
            </div>
          </div>

          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-foreground">
              {stat.value}
            </span>
            <span className="ml-1 text-sm text-muted-foreground">
              {stat.unit}
            </span>
          </div>
        </div>
        
      ))}
    </div>
    </div>
    </section>
  );
}

export default FoodGrid;