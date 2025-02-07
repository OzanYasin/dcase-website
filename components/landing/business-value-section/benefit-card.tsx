import type { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: Array<{
    subtitle: string;
    text: string;
    icon: LucideIcon;
  }>;
  className?: string;
}

export function BenefitCard({
  icon: Icon,
  title,
  description,
  className,
}: BenefitCardProps) {
  console.log("Rendering BenefitCard:", title);
  return (
    <div className={`flex items-center gap-8 ${className}`}>
      <div className="group flex-1 rounded-lg bg-white p-8 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg">
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
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 text-white transition-transform duration-300 ease-in-out group-hover:scale-110">
        <Icon className="h-16 w-16" />
      </div>
    </div>
  );
}
