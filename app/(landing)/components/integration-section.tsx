import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function IntegrationSection() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
        {/* Left side - Integration diagram */}
        <div className="flex w-full justify-center md:w-1/2">
          <div className="relative aspect-square w-full max-w-[500px]">
            <div className="absolute inset-0">
              <Image
                src="/lp-circle.png"
                alt="Integration background"
                fill
                className="object-contain opacity-80"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Lorem Ipsum
            <span className="block text-dcase-secondary">Dolor Sit Amet</span>
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-start">
              <div className="relative mr-2 h-6 w-6 flex-shrink-0">
                <Image
                  src="/placeholder.svg"
                  alt=""
                  fill
                  className="rounded-sm bg-green-500"
                />
              </div>
              <span className="text-lg font-medium">SLA Manager</span>
            </div>

            <div className="flex items-start">
              <div className="relative mr-2 h-6 w-6 flex-shrink-0">
                <Image
                  src="/placeholder.svg"
                  alt=""
                  fill
                  className="rounded-sm bg-green-500"
                />
              </div>
              <span className="text-lg font-medium">Workflow Engine</span>
            </div>

            <div className="flex items-start">
              <div className="relative mr-2 h-6 w-6 flex-shrink-0">
                <Image
                  src="/placeholder.svg"
                  alt=""
                  fill
                  className="rounded-sm bg-green-500"
                />
              </div>
              <span className="text-lg font-medium">Notification Manager</span>
            </div>

            <div className="flex items-start">
              <div className="relative mr-2 h-6 w-6 flex-shrink-0">
                <Image
                  src="/placeholder.svg"
                  alt=""
                  fill
                  className="rounded-sm bg-green-500"
                />
              </div>
              <span className="text-lg font-medium">Activity Manager</span>
            </div>

            <div className="flex items-start">
              <div className="relative mr-2 h-6 w-6 flex-shrink-0">
                <Image
                  src="/placeholder.svg"
                  alt=""
                  fill
                  className="rounded-sm bg-green-500"
                />
              </div>
              <span className="text-lg font-medium">Asset Manager</span>
            </div>

            <div className="flex items-start">
              <div className="relative mr-2 h-6 w-6 flex-shrink-0">
                <Image
                  src="/placeholder.svg"
                  alt=""
                  fill
                  className="rounded-sm bg-green-500"
                />
              </div>
              <span className="text-lg font-medium">Template Manager</span>
            </div>
          </div>

          <div className="mt-8">
            <Button className="rounded-md bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-800">
              View All Integrations
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
