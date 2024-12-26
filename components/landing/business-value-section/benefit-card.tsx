import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function BenefitCard({
  icon: Icon,
  title,
  description,
}: BenefitCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
      <div className="absolute bottom-0 left-0 top-0 w-1 origin-top scale-y-0 bg-dcase transition-transform duration-300 group-hover:scale-y-100"></div>
      <div className="p-8">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-dcase text-white transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary dark:text-white">
          {title}
        </h3>
        <p
          className="leading-relaxed text-gray-600 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
