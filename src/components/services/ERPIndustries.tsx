import Image from "next/image";

const industries = [
  { name: "Manufacturing & Distribution", color: "#EEDFFF", icon: "/images/services/erp/industries-manufacturing.svg" },
  { name: "Logistics & Transportation", color: "#FFF4D5", icon: "/images/services/erp/industries-logistics.svg" },
  { name: "Retail & E-Commerce", color: "#FFE7D5", icon: "/images/services/erp/industries-retail.svg" },
  { name: "Hospitality & Healthcare", color: "#CFFFEE", icon: "/images/services/erp/industries-hospitality.svg" },
  { name: "Startups scaling", color: "#BCCFFF", icon: "/images/services/erp/industries-startups.svg" },
];

export default function ERPIndustries() {
  return (
    <section className="relative bg-black py-10 text-white md:py-16">
      {/* rotated bg streak on left can be replaced with a decorative image if needed */}
      <div className="cs-container text-center">
        <h2 className="heading-40 fw-415">Industries We Serve</h2>
        <p className="body-20 mt-2">Our flexible architecture suits any industry, but we specialise in:</p>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((x) => (
            <li key={x.name} className="text-center">
              <div
                className="mx-auto flex h-[122px] w-[131px] items-center justify-center rounded"
                style={{ background: x.color }}
              >
                <div className="relative h-20 w-20">
                  <Image src={x.icon} alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="body-20 fw-420 mt-3">{x.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
