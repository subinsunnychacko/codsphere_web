import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function WalkThroughSection2() {
  return (
    <section className="bg-black bg-dots text-white relative">
      <div className="relative z-10 container-wrapper py-more">
        <div className="text-center w-5/5 lg:w-4/5 mx-auto pb-4 md:pb-12 text-white">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            See CodSphere in Action
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Watch how CodSphere helps teams automate tasks, visualize data, and scale operations —
            all in one place.
          </p>
        </div>

        {/* Video section - Responsive image container with aspect ratio */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <Image
              src="/images/home/work-samples/work-sample-5.jpg"
              alt="CodSphere in action"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl sm:text-2xl font-bold mb-4">
            Prefer a quick overview? Download our product brochure for a deep dive into CRM + ERP +
            Analytics.
          </p>
          <button className="rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
            <a href="/brochures/Welcome-to-CodSphere.pdf" download className="inline-block">
              <div className="flex justify-center items-center gap-3 rounded-full px-4 py-3 bg-black hover:bg-gray-800">
                <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                  <ArrowDown />
                </div>
                Download Brochure
              </div>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
