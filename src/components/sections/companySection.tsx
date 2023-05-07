import Image from "next/image";

export function CompanySection() {
  return (
    <div className="width-screen bg-sky-200 height-20 p-8 xl:py-[100px]">
      <div className="flex flex-col justify-center xl:flex-row items-center  xl:mx-10">
      <div className="flex-initial w-958 pt-12 xl:pt-0 ...">
        <Image
          className="rounded-[20px]"
          src="/eye-image.jpg"
          alt="Eye indetification Image"
          width={800}
          height={533.65}
        />
        </div>
        <div className="pt-12 xl:pt-0 xl:mx-8 max-w-[700px] lg:px-5">
          <div className="text-left">
            <h2 className="text-3xl text-left  font-bold tracking-tight text-gray-900 sm:text-5xl">
              About us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to IRETEC - The Future of Access Control Technology
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              IRETEC is a research and development company based in Slovenia,
              dedicated to advancing iris recognition technology. Our mission is
              to develop innovative solutions that redefine the future of access
              control technology, making it more secure and accessible for
              everyone.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our vision is to transfer iris recognition technology from
              high-security infrastructure to SMART-CITY access control
              applications. We believe that by doing so, we can help build safer
              and smarter cities for the future.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              To achieve this, we rely on a fast, accurate, and compact hardware
              architecture design. Our products use FPGA acceleration and
              proprietary, state-of-the-art algorithms to ensure optimal
              performance.{" "}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Damjan Zadnik, Founder and CEO <span>(<a className="font-bold hover:underline" href="mailto:damjan.zadnik@iretec.eu">damjan.zadnik@iretec.eu</a>)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
