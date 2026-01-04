import React from "react";

type Props = {
  image: string;
  text: string;
};

const MealAnalysisImageText: React.FC<Props> = ({ image, text }) => {
  return (
    <section className="w-full flex justify-center px-4">
      <div className="w-full max-w-[1280px]">
        <div className="flex flex-col lg:flex-row gap-8 items-center">

          {/* IMAGE */}
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
            <img
             src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1153&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-1/2">
            <p className="text-2xl md:text-3xl font-medium leading-tight">
              Empfehlungen und Tagesziele werden individuell auf deinen Körper
              und deinen Lebensstil abgestimmt.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MealAnalysisImageText;
