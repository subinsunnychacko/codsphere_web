import services_web_and_mobile_banner_bg from "@/assets/images/banners/services-web-and-mobile-banner-bg.jpg";

export default function WebMobileHero() {
  return (
    <header className="relative">
      <div
        className="relative h-[120px] sm:h-[150px] lg:h-[250px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${services_web_and_mobile_banner_bg.src})` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Title with responsive container */}
        <div className="absolute inset-0 flex items-center">
          <div className="container-wrapper">
            <h1 className="text-white text-[24px] md:text-[32px] lg:text-[48px] leading-[30px] md:leading-[40px] lg:leading-[58px] font-semibold drop-shadow-lg">
              Web & Mobile
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
