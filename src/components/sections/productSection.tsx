import Image from "next/image";

export function ProductSection() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="flex flex-col xl:flex-row items-center content-center">
        <div className="mx-auto max-w-2xl ">
          <div className="text-left">
            {/* <h2 className="text-4xl text-center xl:text-left font-bold tracking-tight text-gray-900 sm:text-6xl">
              Ultra-compact iris recognition system
            </h2> */}
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our product, the Ultra-compact iris recognition system, is
              designed to be the most convenient and efficient access control
              solution available. Measuring only 40mm x 40mm x 40mm, our
              complete iris recognition system can be easily integrated into any
              access control product like Smart-city electronic doors, or other
              applications where high-secure, hygienic, or contactless
              identification or authorization may be required.
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
        <div className=" mx-auto flex-initial w-650 pt-12 xl:pt-0 ...">
          <Image
            src="/iretec-system.png"
            alt="Iretec System"
            height={564.47}
            width={650}
          />
        </div>
      </div>
    </div>
  );
}
