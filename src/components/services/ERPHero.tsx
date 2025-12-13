// components/services/CRM/CRMHero.tsx
export default function CRMHero() {
  return (
    <section className="relative w-full h-[250px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/crm-hero-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 cs-container h-full flex items-center justify-center">
        <h1 className="text-white text-[40px] font-sequel font-[415] leading-[47px] text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.5)]">
          Custom CRM Development Services
        </h1>
      </div>
    </section>
  );
}