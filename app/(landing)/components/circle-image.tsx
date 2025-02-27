import Image from "next/image";

export default function CircleImage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-4xl space-y-8">
        <div className="flex justify-center">
          <div className="relative aspect-square w-full max-w-2xl">
            <Image
              src="/lp-circle.png"
              alt="Management Platform Components Diagram"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "SLA Manager",
              description: "Monitor and manage service level agreements",
            },
            {
              name: "Asset Manager",
              description: "Track and maintain system resources",
            },
            {
              name: "Activity Manager",
              description: "Monitor real-time system activities",
            },
            {
              name: "Workflow Engine",
              description: "Automate and orchestrate business processes",
            },
            {
              name: "Template Manager",
              description: "Create and manage reusable templates",
            },
            {
              name: "Notification Manager",
              description: "Configure and deliver system alerts",
            },
          ].map((component) => (
            <div
              key={component.name}
              className="rounded-lg border border-green-100 bg-white p-6 shadow-md"
            >
              <h3 className="text-lg font-medium text-green-600">
                {component.name}
              </h3>
              <p className="mt-2 text-gray-600">{component.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
