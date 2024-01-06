"use client";
import { MapPinIcon } from "@heroicons/react/24/solid";
import GoogleMapReact from "google-map-react";
import Image from "next/image";

// <MapPinIcon />
const AnyReactComponent = () => (
  <div>
    <MapPinIcon className="w-8 h-8" color="red" />
  </div>
);

export function ContactUsSection() {
  const defaultProps = {
    center: {
      lat: 46.19070139562739,
      lng: 14.498149826443857,
    },
    zoom: 11,
  };
  return (
    <div className="width-screen bg-sky-200 height-20 p-8 xl:py-[100px]">
      <div className="grid gap-y-6 gap-x-6 sm:grid-cols-2">
        <div className="pt-12 xl:pt-0 xl:mx-8 lg:px-5">
          <div className="text-left flex flex-col gap-y-6">
            <h2 className="text-3xl text-left  font-bold tracking-tight text-gray-900 sm:text-5xl">
              Contact us
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              For inquiries, collaboration opportunities, or information about
              our cutting-edge iris recognition technology, feel free to get in
              touch with us:
            </p>
            <p className="text-lg leading-8 text-gray-600">
              Damjan Zadnik, Founder and CEO{" "}
            </p>
            <p>
              <span className="font-bold">Email: </span>
              <a className="underline" href="mailto:damjan.zadnik@iretec.eu">
                damjan.zadnik@iretec.eu
              </a>{" "}
            </p>
            <p className="text-lg leading-8 text-gray-600">
              Thank you for your interest in IRETEC. We look forward to
              connecting with you!
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-self-center gap-y-2 self-end w-full lg:px-24">
          <div style={{ height: "300px", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.MAP_API_KEY || "",
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                // @ts-ignore
                lat={46.19070139562739}
                lng={14.498149826443857}
              />
            </GoogleMapReact>
          </div>
          <p className="text-sm text-center text-gray-600">
            We&apos;re located at Vodiška cesta 71, 1217 Vodice, Slovenia.
          </p>
        </div>
      </div>
    </div>
  );
}
