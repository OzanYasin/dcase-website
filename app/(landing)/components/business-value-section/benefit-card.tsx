import type { LucideIcon } from "lucide-react";
import Image from "next/image";

interface BenefitCardProps {
  image: string;
  title: string;
  description: Array<{
    subtitle: string;
    text: string;
    icon: LucideIcon;
  }>;
  className?: string;
  imagePosition: "left" | "right";
}

export function BenefitCard({
  image,
  title,
  description,
  className,
  imagePosition,
}: BenefitCardProps) {
  return (
    <div className={`flex items-stretch ${className}`}>
      <div
        className={`group flex flex-1 flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg md:flex-row ${
          imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className="relative h-[300px] w-full md:h-auto md:min-h-[400px] md:w-[500px] lg:min-h-[500px]">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-12">
          <h2 className="mb-6 text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl">
            {title}
          </h2>
          <div className="space-y-6">
            {description.map((item, index) => (
              <div key={index} className="group/item flex items-start">
                <div className="mr-4 mt-1 flex-shrink-0 rounded-lg bg-emerald-100 p-1.5 transition-colors duration-300 ease-in-out group-hover/item:bg-emerald-200 md:p-2">
                  <item.icon className="h-5 w-5 text-emerald-600 transition-transform duration-300 ease-in-out group-hover/item:scale-110 md:h-6 md:w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-base font-semibold text-gray-900 md:mb-2 md:text-lg">
                    {item.subtitle}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
