export default function Hero() {
  return (
    <section className="w-full bg-white pt-32 pb-20">
      <div className="max-w-[1440px] mx-auto px-20 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* LEFT TEXT CONTENT */}
        <div className="max-w-[600px]">
          <h1 className="text-[56px] leading-[1.1] font-bold text-black">
            Premiere Resolutions — <br />
            Operational Excellence. <br />
            Customer-Centric <br />

            <span className="relative inline-block">
              Results.
              <span className="absolute left-0 right-0 -bottom-2 h-2 bg-[#0B9444] opacity-80 rounded-full scale-x-110" />
            </span>
          </h1>

          <p className="text-[17px] text-gray-600 mt-6 leading-relaxed max-w-[460px]">
            Delivering high-performance customer support, collections, and
            outreach services tailored for modern businesses.
          </p>

          <button className="mt-8 bg-[#0B9444] text-white px-6 py-3 rounded-lg text-[16px] font-medium hover:bg-[#098039] transition">
            Get a Consultation
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end w-full lg:w-auto">
          <img
            src="/heroImage.jpg"
            alt="Call center"
            className="
              w-[572px]
              h-[593px]
              object-cover
              rounded-[48px]
            "
          />
        </div>

      </div>
    </section>
  );
}
