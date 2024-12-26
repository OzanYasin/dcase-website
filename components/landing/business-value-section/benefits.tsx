import { DollarSign, ShieldCheck, Zap } from "lucide-react";
import { BenefitCard } from "./benefit-card";

const benefits = [
  {
    icon: Zap,
    title: "Operational Excellence",
    description:
      '<br/><span class="font-bold">Streamline Processes Across Departments:</span> Unify your IT operations and business workflows in a single, intuitive platform, eliminating silos and enabling seamless collaboration between teams.<br/><br/><span class="font-bold">Standardize & Automate</span>: Implement industry best practices effortlessly while automating repetitive tasks, freeing up valuable resources for strategic initiatives.',
  },
  {
    icon: ShieldCheck,
    title: "Reduced Downtime & Incident Cost",
    description:
      '<br/><span class="font-bold">Prevent Outages Before They Happen</span>: Harness real-time monitoring and predictive insights to tackle issues proactively.<br/><br/><span class="font-bold">Minimize Revenue Impact</span>: Every minute of downtime costs money. DCase drastically shortens resolution times.',
  },
  {
    icon: DollarSign,
    title: "Faster ROI & Lower TCO",
    description:
      '<br/><span class="font-bold">Slash Operational Costs:</span> DCase\'s intelligent automation reduces manual tasks by up to 40%, leading to substantial cost savings.<br/><br/><span class="font-bold">Simplified Licensing</span>: Flexible pricing models and modular architecture ensure you only pay for what you truly need.',
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
