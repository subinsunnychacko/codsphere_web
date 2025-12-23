import blog_banner_bg from "@/assets/images/banners/blog-banner-bg.jpg";

export function BlogHero() {
  return (
    <header className="relative">
      <div
        className="relative h-[120px] sm:h-[150px] lg:h-[250px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${blog_banner_bg.src})` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/80" />

        <div className="h-full flex items-end pb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="container-wrapper">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg">
                Blogs: Cod Sphere
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
