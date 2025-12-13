import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-10">
      <div className="cs-container">
        <div className="rounded-2xl border bg-white p-5 text-center shadow-sm">
          <p className="mb-2 text-[22px] font-semibold leading-tight">
            <span className="underline decoration-2 underline-offset-[6px]">Turn ideas into impact</span>{" "}
            <span className="opacity-80">with</span> our expert team
          </p>
          <Button className="rounded-full">Explore solutions</Button>
        </div>
      </div>
    </section>
  );
}
