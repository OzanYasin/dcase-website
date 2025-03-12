import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function IntegrationSection() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
        {/* Left side - Integration diagram */}
        <div className="flex w-full justify-center md:w-1/2">
          <div className="relative aspect-square w-full max-w-[600px]">
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
            Transform Your
            <span className="block text-dcase-secondary">
              IT Service Operations
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Our comprehensive suite of integrated ITSM solutions streamlines
            every aspect of your service lifecycle from real-time SLA monitoring
            and process automation to proactive alerts, task tracking, asset
            management, and customizable templates empowering your team to
            achieve operational excellence.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start">
              {/* <div className="relative mr-3 h-6 w-6 flex-shrink-0">
                <Image
                  src="/placeholder.svg"
                  alt=""
                  fill
                  className="rounded-sm bg-green-500"
                />
              </div> */}
              <div>
                <span className="text-lg font-medium">SLA Manager:</span>
                <span className="text-gray-700">
                  {" "}
                  Monitor SLAs in real time with actionable insights and
                  reporting.
                </span>
              </div>
            </div>

            <div className="flex items-start">
              {/* <div className="relative mr-3 h-6 w-6 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt=""
                  fill
                  className="rounded-sm bg-green-500"
                />
              </div> */}
              <div>
                <span className="text-lg font-medium">Workflow Engine:</span>
                <span className="text-gray-700">
                  {" "}
                  Automate critical processes to accelerate service delivery.
                </span>
              </div>
            </div>

            <div className="flex items-start">
              {/* <div className="relative mr-3 h-6 w-6 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt=""
                  fill
                  className="rounded-sm bg-green-500"
                />
              </div> */}
              <div>
                <span className="text-lg font-medium">
                  Notification Manager:
                </span>
                <span className="text-gray-700">
                  {" "}
                  Receive instant, actionable alerts to keep your team informed.
                </span>
              </div>
            </div>

            <div className="flex items-start">
              {/* <div className="relative mr-3 h-6 w-6 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt=""
                  fill
                  className="rounded-sm bg-green-500"
                />
              </div> */}
              <div>
                <span className="text-lg font-medium">Activity Manager:</span>
                <span className="text-gray-700">
                  {" "}
                  Manage tasks efficiently to achieve optimal performance.
                </span>
              </div>
            </div>

            <div className="flex items-start">
              {/* Commenting out image div for Asset Manager */}
              {/*
              <div className="relative mr-3 h-6 w-6 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt=""
                  fill
                  className="rounded-sm bg-green-500"
                />
              </div>
              */}
              <div>
                <span className="text-lg font-medium">Asset Manager:</span>
                <span className="text-gray-700">
                  {" "}
                  Oversee the entire lifecycle of IT assets seamlessly and
                  effectively.
                </span>
              </div>
            </div>

            <div className="flex items-start">
              {/* Commenting out image div for Template Manager */}
              {/*
              <div className="relative mr-3 h-6 w-6 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt=""
                  fill
                  className="rounded-sm bg-green-500"
                />
              </div>
              */}
              <div>
                <span className="text-lg font-medium">Template Manager:</span>
                <span className="text-gray-700">
                  {" "}
                  Quickly utilize templates for consistent service delivery.
                </span>
              </div>
            </div>

            <div className="flex items-start">
              {/* Commenting out image div for And More */}
              {/*
              <div className="relative mr-3 h-6 w-6 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt=""
                  fill
                  className="rounded-sm bg-green-500"
                />
              </div>
              */}
              <div>
                <span className="text-lg font-medium">And More:</span>
                <span className="text-gray-700">
                  {" "}
                  Access additional tools designed to enhance every aspect of
                  ITSM.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button className="rounded-md bg-gray-900 px-6 py-3 font-bold text-white hover:bg-gray-800">
              <Link href="/product">Explore Product Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
