import contact_us_banner_bg from "@/assets/images/banners/contact-us-banner-bg.jpg";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      <div
        className="relative h-[120px] sm:h-[150px] lg:h-[250px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${contact_us_banner_bg.src})` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content with consistent container */}
        <div className="absolute inset-0 flex items-end">
          <div className="pb-10">
            <div className="absolute inset-0 flex items-center">
              <div className="container-wrapper">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg">
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
