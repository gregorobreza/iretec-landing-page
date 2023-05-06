import { BeakerIcon, BoltIcon } from "@heroicons/react/24/outline";

export interface FeatureCardProps {
  title: string;
  text: string;
  icon: JSX.Element;
}

export function FeatureCard({ title, text, icon }: FeatureCardProps) {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-8 rounded-[20px] bg-white p-10 shadow-xl hover:shadow-2xl md:px-7 xl:px-10">
        <div className="bg-primary mb-8 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-iretec-lightblue">
          {icon}
        </div>
        <h4 className="text-dark mb-3 text-xl font-semibold">
          {title}
        </h4>
        <p className="text-body-color">
          {text}
        </p>
      </div>
    </div>
  );
}