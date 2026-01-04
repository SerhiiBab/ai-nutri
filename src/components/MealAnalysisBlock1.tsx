import React from "react";

type Props = {
  image1: string;
  image2: string;
  image3: string;
};

const MealAnalysisBlock1: React.FC<Props> = ({
  image1,
  image2,
  image3,
}) => {
  return (
    <section className="w-full flex justify-center px-4">
      <div className="w-full max-w-[1280px]">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6 flex-1">

            {/* TOP ROW: TEXT + IMAGE 1 */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 flex items-center">
                <p className="text-[40px] md:text-[40px] font-medium leading-tight">
                  Trage deine Mahlzeiten per Text oder Foto ein und erhalte
                  sofort eine verständliche Auswertung.
                </p>
              </div>

              <div className="flex-1 rounded-xl overflow-hidden">
                <img
                   src="https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


                  alt=""
                  className="w-100 h-[200px] object-cover"
                />
              </div>
            </div>

            {/* BOTTOM IMAGE 2 */}
            <div className="rounded-xl overflow-hidden">
              <img
                 src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


                alt=""
                className="w-300 h-50 object-cover"
              />
            </div>
          </div>

          {/* RIGHT IMAGE 3 */}
          <div className="flex-1 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D}"
              alt=""
              className="w-200 h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MealAnalysisBlock1;
