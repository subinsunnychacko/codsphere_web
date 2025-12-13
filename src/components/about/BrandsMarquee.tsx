import Image from "next/image";

const logos = [
  "brand-visa.svg","brand-amazon.svg","brand-google.svg",
  "brand-microsoft.svg","brand-ibm.svg","brand-shopify.svg",
];

export default function BrandsMarquee() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="mb-4 text-center text-sm text-muted-foreground">
          Brands That Trust CodSphere
        </h3>
        <div className="grid grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((l) => (
            <div key={l} className="flex items-center justify-center">
              <Image src={`/images/about/${l}`} alt={l} width={110} height={28} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
