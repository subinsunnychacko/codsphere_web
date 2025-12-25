interface CaseStudyDetailHeaderProps {
  title: string;
  backgroundImage?: string;
}

export default function CaseStudyDetailHeader({
  title,
  backgroundImage,
}: CaseStudyDetailHeaderProps) {
  return (
    <header className="relative">
      <div
        className="relative w-full min-h-[120px] sm:min-h-[150px] lg:min-h-[250px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="h-full flex items-end pb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="container-wrapper">
              <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
