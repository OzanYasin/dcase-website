import { DollarSign, ShieldCheck, ShieldCheckIcon, Zap } from "lucide-react";
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
  {
    icon: Zap,
    title: "Accelerated Digital Transformation",
    description:
      '<br/><span class="font-bold">Agile Customization:</span> Our Template Manager and Workflow Engine adapt to your ever-evolving processes, ensuring a seamless transformation journey.<br/><br/><span class="font-bold">Unify Disparate Systems:</span> Bring all your IT assets under one roof. Streamlined workflows, integrated data, better decision-making.',
  },
  {
    icon: ShieldCheckIcon,
    title: "Enhanced Customer Satisfaction",
    description:
      '<br/><span class="font-bold">Faster Ticket Resolutions:</span> Leverage data-driven insights and intelligent workflows to ensure quick and effortless issue resolution.<br/><br/><span class="font-bold">Boost User Engagement:</span> A clear, flexible platform reduces frustration, fosters collaboration, and improves overall service culture.',
  },
  {
    icon: DollarSign,
    title: "Scalable Growth",
    description:
      '<br/><span class="font-bold">Future-Proof IT Operations:</span> DCase evolves with your business, enabling fast adaptation to new challenges and industry demands without disruption.<br/><br/><span class="font-bold">Flexible and Cost-Effective Scaling:</span> Scale effortlessly as your needs grow, paying only for what you use while maintaining full control over costs.',
  },
];

export default function Benefits() {
  return (
    // TODO: remove mb-80
    <div className="mb-80 bg-neutral-100 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-16 pb-24 pt-16">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 subpixel-antialiased sm:text-4xl md:text-5xl">
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
