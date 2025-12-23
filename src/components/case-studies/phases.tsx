import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface PhasesType {
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  phase: string;
  title: string;
  keyFocus: string;
  milestone: string;
  outcome: string;
  overview?: string;
  challenges?: string[];
  solutions?: string[];
  details?: Detail[];
  steps?: string[];
  activities?: string[];
}
interface Detail {
  label: string;
  items: string[];
}

export default function Phases({ data }: { data: PhasesType[] }) {
  return (
    <section className="relative space-y-8">
      {/* Vertical connecting line */}
      <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-linear-to-b from-[#6165ED] via-[#6165ED] to-transparent block"></div>

      {data.map((phase, index) => {
        const Icon = phase.icon;
        return (
          <div key={index} className="relative">
            <div className="flex gap-3 sm:gap-6 lg:gap-8">
              {/* Icon circle - positioned absolutely on the line */}
              <div className="relative shrink-0 z-10">
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-2 sm:border-3 border-[#6165ED] bg-white shadow-lg">
                  <Icon className="w-5 h-5 sm:w-8 sm:h-8 text-[#6165ED]" />
                </div>
              </div>

              {/* Content card */}
              <div className="grow">
                <div className="space-y-3">
                  <div>
                    <span className="text-[#6165ED] font-semibold text-md sm:text-lg md:text-xl lg:text-2xl">
                      {phase.phase}:
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold lg:mt-1">
                      {phase.title}
                    </h3>
                  </div>

                  {phase.activities && (
                    <div>
                      <p className="text-gray-700 leading-relaxed italic mb-2">{phase.overview}</p>
                    </div>
                  )}

                  <div>
                    <p>
                      <span className="font-medium">Key Focus:</span> {phase.keyFocus}
                    </p>
                  </div>

                  {phase.activities && phase.activities.length > 0 && (
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Core Activities:</p>
                      <ul className="list-disc list-inside space-y-1 ml-1">
                        {phase.activities.map((activity, i) => (
                          <li key={i}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {phase.challenges && phase.challenges.length > 0 && (
                    <div>
                      <p className="font-medium mb-1">Challenges Identified:</p>
                      <ul className="list-disc list-inside space-y-1 ml-1">
                        {phase.challenges.map((challenge, i) => (
                          <li key={i}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {phase.solutions && phase.solutions.length > 0 && (
                    <div>
                      <p className="font-medium mb-1">Solutions Implemented:</p>
                      <ul className="space-y-1">
                        {phase.solutions.map((solution, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-green-600 font-bold mt-0.5 shrink-0">✓</span>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {phase.details && phase.details.length > 0 && (
                    <div className="space-y-2">
                      {phase.details.map((detail, i) => (
                        <div key={i}>
                          <p className="font-medium mb-1">{detail.label}</p>
                          <ul className="list-disc list-inside space-y-1 ml-1">
                            {detail.items.map((item, j) => (
                              <li key={j}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {phase.steps && phase.steps.length > 0 && (
                    <div>
                      <p className="font-medium mb-1">Deployment Steps:</p>
                      <ul className="space-y-1">
                        {phase.steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-green-600 font-bold mt-0.5 shrink-0">✓</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="border-t border-white/20 space-y-2">
                    <p>
                      <span className="font-medium">Milestone:</span> {phase.milestone}
                    </p>
                    <p>
                      <span className="font-medium">Outcome:</span> {phase.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
