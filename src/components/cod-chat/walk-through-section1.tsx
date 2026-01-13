import { ArrowRight, PauseIcon, PlayIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WalkThroughSection1() {
  return (
    <section className="bg-black bg-dots text-white relative">
      <div className="relative z-10 container-wrapper py-more">
        {/* headings */}
        <div className="text-center w-5/5 lg:w-4/5 mx-auto pb-4 md:pb-12 text-white">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#828282]">
            Learn & Grow with Codsphere
          </p>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Curious How CodChat would work for you?
          </h2>
          <p className="mt-2 text-[20px] font-light">
            We'll walk you through real use cases and show how CodChat captures and quallifies leads
            without getting into the way of how you work today
          </p>
        </div>

        <div className="mb-12 flex justify-center relative h-124 rounded-xl overflow-hidden">
          <Image
            src="/images/home/work-samples/work-sample-20.png"
            alt="How Codsphere works"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Steps */}
        <div className="flex justify-center mb-5">
          <div className="text-start">
            <p className="text-[20px] font-light">
              <span className="block">
                Step 1: Create your account and personalize your CodChat.
              </span>
              <span className="block">Step 2: Paste in Script tag of your website.</span>
              <span className="block">
                Step 3: Start automating your lead generation and management.
              </span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">Ready to see why 100+ teams trust CodSphere?</p>
          <Link href="/success-stories">
            <button className="rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
              <div className="flex justify-center items-center gap-3 rounded-full px-4 py-3 bg-black hover:bg-gray-800">
                <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                  <ArrowRight />
                </div>
                Explore our Success Stories
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
