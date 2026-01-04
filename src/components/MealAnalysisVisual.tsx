import React from "react";

type Props = {
  imageLeft: string;
  imageBottom: string;
};

const MealAnalysisVisual: React.FC<Props> = ({

}) => {
  return (
    <section className="w-full flex justify-center px-4">
      <div className="w-full max-w-[1280px]">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* LEFT IMAGE */}
          <div className="w-full lg:w-[35%] h-100 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1546554137-f86b9593a222?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6 w-full lg:w-[65%]">

            {/* TEXT */}
            <div className="max-w-xl">
              <p className="text-2xl md:text-3xl font-medium leading-tight">
                Die Analyse basiert auf Nährwertdaten und berücksichtigt Alter,
              Gewicht, Geschlecht und Aktivität.
              </p>
            </div>

            {/* BOTTOM WIDE IMAGE */}
            <div className="w-full h-100 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


                alt=""
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MealAnalysisVisual;
