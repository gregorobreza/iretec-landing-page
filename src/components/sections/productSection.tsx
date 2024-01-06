import Image from "next/image";
import { FeatureCard, FeatureCardProps } from "../styledComponents/featureCard";
import {
  ArrowsPointingInIcon,
  RocketLaunchIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

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

export function ProductSection() {
  return (
    <div className="relative isolate px-6 pt-20 pb-[80px] lg:px-8">
      <div className="flex flex-col w-full items-center justify-center xl:flex-row lg:items-top lg:justify-start">
        <div className="lg:mx-[70px] xl:max-w-2xl ">
          <div className="mb-8 rounded-[20px] bg-white p-8 lg:p-10 shadow-lg hover:shadow-xl md:px-7 xl:px-10 border">
            <div className="text-left">
              <h3 className="text-dark mb-3 text-2xl font-semibold">
                About Our Product
              </h3>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The Ultra-compact iris recognition system, is designed to be the
                most convenient and efficient access control solution available.
                Measuring only 40mm x 40mm x 40mm, our complete iris recognition
                system can be easily integrated into any access control product
                like Smart-city electronic doors, or other applications where
                high-secure, hygienic, or contactless identification or
                authorization may be required.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The communication interface with the module and the integration
                mechanics can be designed or modified according to your specific
                requirements, making it an incredibly versatile and customizable
                solution.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                With its fast and accurate operation, our Ultra-compact iris
                recognition system ensures optimal performance and maximum
                security in a wide range of applications.
              </p>
            </div>
          </div>
        </div>
        <div className=" mx-auto flex-initial w-650 pt-12 xl:pt-0 ...">
          <Image
            src="/iretec-system.png"
            alt="Iretec System"
            height={564.47}
            width={650}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-stretch gap-y-6 gap-x-6 lg:gap-x-12 pt-12 items-stretch">
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
  );
}
