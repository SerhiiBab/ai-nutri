export default function FoodGrid() {
  return (
    <section className="w-full min-h-screen bg-[#eef3ea00] py-16">
      {/* Button */}
      <div className="flex justify-center mb-12">
        <button className="flex items-center gap-2 bg-[#2fa0d4] text-white text-2xl font-semibold px-10 py-4 rounded-sm shadow-md hover:opacity-90 transition">
          <span className="text-3xl leading-none">+</span>
          Essen
        </button>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 px-6">
        <div className="bg-[#b9cfa8] rounded-2xl px-8 py-10 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center text-white text-6xl">
              0
            </div>
          </div>

          {/* Title */}
          <h3 className="text-white text-3xl font-extrabold leading-tight">
            Kalorien <br /> (kcal)
          </h3>
        </div>

        <div className="bg-[#b9cfa8] rounded-2xl px-8 py-10 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center text-white text-6xl">
              0
            </div>
          </div>

          {/* Title */}
          <h3 className="text-white text-3xl font-extrabold leading-tight">
            Proteine <br /> (g)
          </h3>
        </div>

        <div className="bg-[#b9cfa8] rounded-2xl px-8 py-10 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center text-white text-6xl">
              0
            </div>
          </div>

          {/* Title */}
          <h3 className="text-white text-3xl font-extrabold leading-tight">
            Fette <br /> (g)
          </h3>
        </div>

        <div className="bg-[#8C6765] rounded-2xl px-8 py-10 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center text-white text-6xl">
              0
            </div>
          </div>

          {/* Title */}
          <h3 className="text-white text-3xl font-extrabold leading-tight">
            Kohlenhydrate <br /> (g)
          </h3>
        </div>
      </div>
    </section>
  );
}
