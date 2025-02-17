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
        className={`group flex flex-1 overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg ${imagePosition === "left" ? "flex-row" : "flex-row-reverse"}`}
      >
        <div className="relative w-[500px] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt=""
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="flex-1 p-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">{title}</h2>
          <div className="space-y-6">
            {description.map((item, index) => (
              <div key={index} className="group/item flex items-start">
                <div className="mr-4 mt-1 flex-shrink-0 rounded-lg bg-emerald-100 p-2 transition-colors duration-300 ease-in-out group-hover/item:bg-emerald-200">
                  <item.icon className="h-6 w-6 text-emerald-600 transition-transform duration-300 ease-in-out group-hover/item:scale-110" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {item.subtitle}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
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
