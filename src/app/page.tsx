import { CompanySection } from "@/components/sections/companySection";
import { Contact } from "@/components/sections/contact";
import { ContactUsSection } from "@/components/sections/contactUsSection";
import { HeroSection } from "@/components/sections/heroSection";
import { ProductSection } from "@/components/sections/productSection";
import { ServiceSection } from "@/components/sections/serviceSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}

      {/* <HeroSection /> */}
      <div id="product" className="pt-24">
        <ServiceSection />
      </div>
      <div id="company">
        <CompanySection />
      </div>
      <ProductSection />
      <div id="contact">
        <ContactUsSection />
      </div>
    </main>
  );
}
