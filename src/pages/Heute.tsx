import DeepSeekChat from "../components/DeepSeekChat";
import FoodGrid from "../components/FoodGrid/FoodGrid";

const Heute = () => {
  return (
    <div>
    <div className="w-full flex justify-center">
    <div className="max-w-lg flex">
     <div className="text-red">
        <div className="text-white">
            Verstehe, was dein Körper wirklich bekommt
        </div>
        <div>
KI-Nutri analysiert deine tägliche Ernährung und zeigt dir, wie viele Kalorien, Proteine, Fette und Kohlenhydrate du zu dir nimmst.
        </div>
     </div>

      <DeepSeekChat />

    </div>
    </div>

<FoodGrid />
</div>
  )

};

export default Heute;
