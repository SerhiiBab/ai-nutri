const items = [1, 2, 3, 4];

export default function FoodGrid() {
  return (
    <section className="w-full min-h-screen bg-[#eef3ea] py-16">
      {/* Button */}
      <div className="flex justify-center mb-12">
        <button className="flex items-center gap-2 bg-[#2fa0d4] text-white text-2xl font-semibold px-10 py-4 rounded-sm shadow-md hover:opacity-90 transition">
          <span className="text-3xl leading-none">+</span>
          Essen
        </button>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 px-6">
        {items.map((_, i) => (
          <div
            key={i}
            className="bg-[#b9cfa8] rounded-2xl px-8 py-10 text-center"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white text-2xl">
                😊
              </div>
            </div>

            {/* Title */}
            <h3 className="text-white text-3xl font-extrabold leading-tight">
              NO ADDED <br /> SUGAR
            </h3>

            {/* Text */}
            <p className="text-[#2f3f2a] text-sm mt-4 max-w-xs mx-auto">
              No added sugar – only naturally occurring, with{" "}
              <span className="underline">95%</span> less sugar than traditional
              instant matcha lattes.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
