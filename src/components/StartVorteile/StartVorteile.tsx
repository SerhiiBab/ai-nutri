import { Rocket, Target, User } from "lucide-react";

export default function Features() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
          
          {/* Einfach */}
          <div className="flex flex-col items-center gap-4">
            <Rocket size={36} className="text-orange-500" />
            <h3 className="text-2xl font-semibold">Einfach</h3>
            <p className="max-w-xs text-white text-xl">
              Trage deine Mahlzeiten per Text oder Foto ein und erhalte sofort
              eine verständliche Auswertung.
            </p>
          </div>

          {/* Präzise */}
          <div className="flex flex-col items-center gap-4">
            <Target size={36} className="text-orange-500" />
            <h3 className="text-2xl font-semibold">Präzise</h3>
            <p className="max-w-xs text-white text-xl">
              Die Analyse basiert auf Nährwertdaten und berücksichtigt Alter,
              Gewicht, Geschlecht und Aktivität.
            </p>
          </div>

          {/* Persönlich */}
          <div className="flex flex-col items-center gap-4">
            <User size={36} className="text-orange-500" />
            <h3 className="text-2xl font-semibold">Persönlich</h3>
            <p className="max-w-xs text-white text-xl">
              Empfehlungen und Tagesziele werden individuell auf deinen Körper
              und deinen Lebensstil abgestimmt.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
