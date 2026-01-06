import DeepSeekChat from "../components/DeepSeekChat";
import FoodGrid from "../components/FoodGrid";
import PageWrapper from "../components/PageWrapper";

const Heute = () => {
  return (
    <PageWrapper>
    <div>
     <div>
        <div>
            Verstehe, was dein Körper wirklich bekommt
        </div>
        <div>
           AI-gestützte 
Ernährungsanalyse
        </div>
        <div>
AI-Nutri analysiert deine tägliche Ernährung und zeigt dir, welche Vitamine fehlen – basierend auf deinen persönlichen Daten.
        </div>
        <div>

        </div>
     </div>
     <div>

     </div>
      <DeepSeekChat />

    </div>
    <FoodGrid />
</PageWrapper>

  )

};

export default Heute;
