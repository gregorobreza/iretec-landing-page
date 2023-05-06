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
    icon: <RocketLaunchIcon className="h-8 w-8 text-gray-900 " />,
  },
  {
    title: "Accurate",
    text: "operation of our products relies on proprietary, and state of the art algorithms.",
    icon: <ScaleIcon className="h-8 w-8 text-gray-900 " />,
  },
  {
    title: "Compact",
    text: "design of our products relies on highly-optimized hardware architecture.",
    icon: <ArrowsPointingInIcon className="h-8 w-8 text-gray-900 " />,
  },
];

export function ServiceSection() {
  return (
    <div className="relative isolate px-6 pt-20  lg:px-8 xl:pb-6">
      <div className="lg:mx-14 flex flex-col justify-center">
        <div className=" flex flex-wrap">
          <div className="w-full">
            <div className="mx-4 mb-12 text-center lg:mb-16">
              <h2 className="text-3xl text-center  font-bold tracking-tight text-gray-900 sm:text-5xl">
                Ultra-compact iris recognition system
              </h2>
            </div>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row flex-wrap justify-center items-center ">
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
    </div>
  );
}
