"use client";
import Image from "next/image";
import { handleClickScroll, navigation } from "./header";
import dayjs from "dayjs";
export function Footer() {
  const currentYear = dayjs().year().toString();
  return (
    <footer className="bg-iretec-darkblue shadow">
      <div className="w-full flex flex-col items-center sm:block  mx-auto px-6 py-4 md:px-12">
        <div className="flex flex-col  sm:flex-row items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0">
            <Image
              src="/iretec-logo.jpg"
              alt="iretec-logo"
              height={70}
              width={217.68}
              priority
            />
          </a>
          <div className="hidden sm:flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            {navigation.map((item) => (
              <a
                key={item.name}
                onClick={() => handleClickScroll(item.href)}
                className="cursor-pointer text-base font-semibold  text-white mr-4 hover:underline md:mr-6"
              >
                {item.name}
              </a>
            ))}
            <a
              href={"#"}
              className="text-base font-semibold  text-white  hover:underline"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto  lg:my-6" />
        <span className="block text-sm text-white sm:text-center ">
          © {currentYear}{" "}
          <a href="#" className="hover:underline">
            IRETEC d.o.o.
          </a>{" "}
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
