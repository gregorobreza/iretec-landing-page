import {
  ArrowsPointingInIcon,
  BoltIcon,
  RocketLaunchIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import { FeatureCard, FeatureCardProps } from "../styledComponents/featureCard";

const services: FeatureCardProps[] = [
  {
    title: "Fast",
    text: "operation of our products relies on FPGA accelerated hardware architecture.",
    icon: <RocketLaunchIcon className="h-8 w-8 text-iretec-darkblue " />,
  },
  {
    title: "Accurate",
    text: "operation of our products relies on proprietary, and state of the art algorithms.",
    icon: <ScaleIcon className="h-8 w-8 text-iretec-darkblue " />,
  },
  {
    title: "Compact",
    text: "design of our products relies on highly-optimized hardware architecture.",
    icon: <ArrowsPointingInIcon className="h-8 w-8 text-iretec-darkblue " />,
  },
];

export function ServiceSection() {
  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-12">
              <h2 className="text-3xl text-center  font-bold tracking-tight text-gray-900 sm:text-5xl">
                Ultra-compact iris recognition system
              </h2>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {services.map((service, index) => (
            <FeatureCard
              key={index}
              title={service.title}
              text={service.text}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
