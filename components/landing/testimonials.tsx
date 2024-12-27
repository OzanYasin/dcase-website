import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TestimonialSection() {
  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8 lg:py-20">
      <div className="space-y-6 sm:space-y-8 lg:space-y-12">
        <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#10b981] sm:text-4xl md:text-5xl">
          Trusted by Innovators
        </h2>

        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-12">
          <Card className="flex-1 border-0 shadow-none">
            <CardContent className="space-y-4 p-0 sm:space-y-6">
              <blockquote className="text-lg leading-relaxed sm:text-xl md:text-2xl">
                &ldquo;DCase radically streamlined our ticket handling
                processes, leading to quicker resolutions and happier
                stakeholders.&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 sm:gap-4">
                <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                  <AvatarImage src="/placeholder.svg" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-semibold sm:text-base">
                    John Doe
                  </div>
                  <div className="text-xs text-gray-500 sm:text-sm">
                    CIO at FutureTech
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator
            orientation="vertical"
            className="hidden h-auto lg:block"
          />
          <Separator orientation="horizontal" className="w-full lg:hidden" />

          <Card className="flex-1 border-0 shadow-none">
            <CardContent className="space-y-4 p-0 sm:space-y-6">
              <blockquote className="text-lg leading-relaxed sm:text-xl md:text-2xl">
                &ldquo;The customizable templates and automated workflows gave
                us unprecedented agility.&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 sm:gap-4">
                <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                  <AvatarImage src="/placeholder.svg" alt="Jane Smith" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-semibold sm:text-base">
                    Jane Smith
                  </div>
                  <div className="text-xs text-gray-500 sm:text-sm">
                    Head of Operations at GlobalNet
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
