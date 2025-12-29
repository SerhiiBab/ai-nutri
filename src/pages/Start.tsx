import HeroBild from "../components/HeroBild/HeroBild";  // Исправлено

const Start = () => {
  return (
    <div className="main-width">
      <div>
        <div>Verstehe, was dein Körper wirklich bekommt</div>
        <div>AI-gestützte Ernährungsanalyse</div>
        <div>AI-Nutri analysiert deine tägliche Ernährung und zeigt dir, welche Vitamine fehlen – basierend auf deinen persönlichen Daten.</div>
        <div></div>
      </div>
      <div>
        <HeroBild />
      </div>
    </div>
  );
};

export default Start;