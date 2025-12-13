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
        className="relative h-[120px] sm:h-[150px] lg:h-[250px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="h-full flex items-end pb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="container-wrapper">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg">
                Case Studies - {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
