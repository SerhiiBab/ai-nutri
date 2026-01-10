import { useState } from "react";
import DeepSeekChat from "../components/DeepSeekChat";
import FoodGrid from "../components/FoodGrid/FoodGrid";
import AnalyseBlock from "../components/AnalyseBlock";

const Heute: React.FC = () => {
  const [chatOpen, setChatOpen] = useState<boolean>(false);



  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="max-w-lg flex">
          <div>
            <div className="text-white">
              Verstehe, was dein Körper wirklich bekommt
            </div>
            <div>
              KI-Nutri analysiert deine tägliche Ernährung und zeigt dir,
              wie viele Kalorien, Proteine, Fette und Kohlenhydrate du zu dir nimmst.
            </div>
          </div>

          <DeepSeekChat
            isOpen={chatOpen}
            onClose={() => setChatOpen(false)}
          />
        </div>
      </div>

      <FoodGrid onAddFood={() => setChatOpen(true)} />
        <AnalyseBlock />
        
      
    </div>
  );
};

export default Heute;
