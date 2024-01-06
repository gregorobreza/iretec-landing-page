import {
  ArrowsPointingInIcon,
  BoltIcon,
  RocketLaunchIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import { FeatureCard, FeatureCardProps } from "../styledComponents/featureCard";

export function ServiceSection() {
  return (
    <div className="relative isolate px-6 py-6 sm:pt-20  lg:px-8 sm:pb-12">
      <div className="lg:mx-14 flex flex-col justify-center items-center">
        <div className=" flex flex-wrap">
          <div className="w-full">
            <div className="mx-4 mb-12 text-center lg:mb-16">
              <h1 className="text-3xl text-center  font-bold tracking-tight text-gray-900 sm:text-5xl">
                Ultra-compact iris recognition system
              </h1>
            </div>
          </div>
        </div>
        <div className="pb-[50px] sm:px-8 w-[100%] max-w-[750px] h-[300px] sm:h-[435px] rounded-lg">
          <iframe
            width={"100%"}
            height={"100%"}
            className="rounded-lg"
            src="https://www.youtube.com/embed/AVfx8qqhejQ?wmode=transparent"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
