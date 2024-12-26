import { DollarSign, ShieldCheck, Zap } from "lucide-react";
import { BenefitCard } from "./benefit-card";

const benefits = [
  {
    icon: DollarSign,
    title: "Maximize ROI, Minimize Costs",
    description:
      "Dramatically slash operational costs by up to 40% through intelligent automation. Experience unparalleled financial efficiency with our flexible pricing and modular architecture.",
  },
  {
    icon: ShieldCheck,
    title: "Eliminate Downtime, Boost Revenue",
    description:
      "Proactively prevent outages with cutting-edge real-time monitoring and predictive insights. Safeguard your bottom line by significantly reducing resolution times.",
  },
  {
    icon: Zap,
    title: "Achieve Operational Excellence",
    description:
      "Revolutionize your workflow by unifying IT operations and business processes in one intuitive platform. Effortlessly implement best practices and automate complex tasks.",
  },
];

export default function Benefits() {
  return (
    // TODO: remove mb-80
    <div className="mb-80 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 subpixel-antialiased sm:text-5xl md:text-6xl">
            Drive <span className="text-dcase">Tangible</span> Results with
            DCase
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
}
