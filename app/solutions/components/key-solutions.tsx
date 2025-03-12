import {
  Activity,
  BarChart3,
  Clock,
  Code,
  Database,
  Server,
  Settings,
  Shield,
  Zap,
  TrendingUp,
  Target,
  Scale,
  Workflow,
  LayoutGrid,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function KeySolutions() {
  return (
    <div className="flex w-full flex-col items-center bg-white">
      <main className="mx-auto w-full max-w-7xl px-4 py-12">
        {/* Section 1: End-to-End IT Service Management */}
        <section className="group relative mb-28 overflow-hidden rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 via-white to-teal-50/30 px-8 py-20 shadow-xl">
          <div className="absolute left-0 top-0 -z-10 h-40 w-40 rounded-br-[120px] rounded-tl-3xl bg-teal-50 transition-colors duration-700 group-hover:bg-teal-100/50"></div>
          <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 translate-x-1/4 translate-y-1/4 transform rounded-full bg-teal-50/40 blur-3xl"></div>
          <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white/80 opacity-70 blur-3xl"></div>
          <div className="absolute right-10 top-10 -z-10 h-20 w-20 rounded-full border-4 border-teal-100/30"></div>
          <div className="absolute bottom-10 left-20 -z-10 h-16 w-16 rounded-full border-4 border-teal-100/20"></div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
            <div className="space-y-8 md:col-span-7">
              <div className="inline-flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="border border-teal-200/50 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-700 hover:bg-teal-100 hover:text-teal-800"
                >
                  Core Functionality
                </Badge>
                <span className="h-px w-10 bg-teal-200"></span>
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-900">
                <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                  End-to-End
                </span>{" "}
                IT Service Management
              </h2>
              <p className="text-xl font-medium text-gray-600">
                A Comprehensive Framework for Your Entire Service Lifecycle
              </p>
              <p className="text-balance leading-relaxed text-gray-600">
                DCase ITSM consolidates critical ITIL processes—including
                incident, change, problem, and asset management—into a single,
                integrated solution. This unified approach delivers enhanced
                visibility, consistent workflows, and stronger governance across
                your IT environment. By standardizing and automating repetitive
                tasks, DCase ITSM reduces human error and enables your team to
                focus on innovation and strategic initiatives.
              </p>
              <div className="space-y-1 pt-4">
                <div className="group/item flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-teal-50/50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-teal-100 bg-teal-50 shadow-sm transition-all duration-300 group-hover/item:shadow-md">
                    <Settings className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Integrated ITIL processes
                    </p>
                    <p className="mt-1.5 text-gray-500">
                      Unified management of incidents, problems, changes, and
                      assets
                    </p>
                  </div>
                </div>

                <div className="group/item flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-teal-50/50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-teal-100 bg-teal-50 shadow-sm transition-all duration-300 group-hover/item:shadow-md">
                    <Workflow className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Consistent workflows
                    </p>
                    <p className="mt-1.5 text-gray-500">
                      Standardized processes that ensure reliable service
                      delivery
                    </p>
                  </div>
                </div>

                <div className="group/item flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-teal-50/50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-teal-100 bg-teal-50 shadow-sm transition-all duration-300 group-hover/item:shadow-md">
                    <Shield className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Enhanced governance
                    </p>
                    <p className="mt-1.5 text-gray-500">
                      Improved oversight and control of IT service operations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center md:col-span-5">
              <div className="relative w-full transform overflow-hidden rounded-2xl border border-teal-200/50 bg-gradient-to-b from-white to-teal-50/30 p-3 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/3 rounded-full bg-teal-100/20 blur-xl"></div>
                <div className="absolute bottom-0 left-0 h-20 w-20 translate-x-1/3 translate-y-1/3 rounded-full bg-teal-100/20 blur-xl"></div>
                <div className="relative overflow-hidden rounded-xl bg-white">
                  <Image
                    src="/solution-01.png"
                    alt="End-to-End IT Service Management"
                    width={350}
                    height={420}
                    className="w-full rounded-xl object-contain transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2: Streamlined Service Delivery */}
        <section className="group relative mb-28 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-50/30 px-8 py-20 shadow-xl">
          <div className="absolute right-0 top-0 -z-10 h-40 w-40 rounded-bl-[120px] rounded-tr-3xl bg-blue-50 transition-colors duration-700 group-hover:bg-blue-100/50"></div>
          <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 -translate-x-1/4 translate-y-1/4 transform rounded-full bg-blue-50/40 blur-3xl"></div>
          <div className="absolute right-1/2 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-white/80 opacity-70 blur-3xl"></div>
          <div className="absolute left-10 top-10 -z-10 h-20 w-20 rounded-full border-4 border-blue-100/30"></div>
          <div className="absolute bottom-10 right-20 -z-10 h-16 w-16 rounded-full border-4 border-blue-100/20"></div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="order-2 flex items-center justify-center md:order-1 md:col-span-5">
              <div className="relative w-full transform overflow-hidden rounded-2xl border border-blue-200/50 bg-gradient-to-b from-white to-blue-50/30 p-3 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/3 rounded-full bg-blue-100/20 blur-xl"></div>
                <div className="absolute bottom-0 left-0 h-20 w-20 translate-x-1/3 translate-y-1/3 rounded-full bg-blue-100/20 blur-xl"></div>
                <div className="relative overflow-hidden rounded-xl bg-white">
                  <Image
                    src="/solution-02.png"
                    alt="Service Workflow Management"
                    width={350}
                    height={455}
                    className="w-full rounded-xl object-contain transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 space-y-8 md:order-2 md:col-span-7">
              <div className="inline-flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="border border-blue-200/50 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-100 hover:text-blue-800"
                >
                  Efficiency
                </Badge>
                <span className="h-px w-10 bg-blue-200"></span>
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-900">
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Streamlined
                </span>{" "}
                Service Delivery
              </h2>

              <p className="text-xl font-medium text-gray-600">
                Eliminate Bottlenecks and Optimize Response Times
              </p>

              <p className="text-balance leading-relaxed text-gray-600">
                Our platform accelerates every stage of service delivery, from
                request submission to final resolution. Automated workflows
                intelligently route tickets to the right teams, while
                user-friendly self-service portals empower employees to quickly
                resolve issues. This results in faster resolution times,
                improved resource allocation, and higher satisfaction for both
                IT staff and end-users.
              </p>

              <div className="space-y-1 pt-4">
                <div className="group/item flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-blue-50/50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 shadow-sm transition-all duration-300 group-hover/item:shadow-md">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Accelerated service delivery
                    </p>
                    <p className="mt-1.5 text-gray-500">
                      Faster resolution through optimized workflows
                    </p>
                  </div>
                </div>

                <div className="group/item flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-blue-50/50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 shadow-sm transition-all duration-300 group-hover/item:shadow-md">
                    <Activity className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Intelligent ticket routing
                    </p>
                    <p className="mt-1.5 text-gray-500">
                      Automated assignment to the right teams and specialists
                    </p>
                  </div>
                </div>

                <div className="group/item flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-blue-50/50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 shadow-sm transition-all duration-300 group-hover/item:shadow-md">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Faster resolution times
                    </p>
                    <p className="mt-1.5 text-gray-500">
                      Reduced wait times and improved service levels
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3: Proactive Problem Management */}
        <section className="group relative mb-28 overflow-hidden rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-amber-50/30 px-8 py-20 shadow-xl">
          <div className="absolute left-0 top-0 -z-10 h-40 w-40 rounded-br-[120px] rounded-tl-3xl bg-amber-50 transition-colors duration-700 group-hover:bg-amber-100/50"></div>
          <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 translate-x-1/4 translate-y-1/4 transform rounded-full bg-amber-50/40 blur-3xl"></div>
          <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white/80 opacity-70 blur-3xl"></div>
          <div className="absolute right-10 top-10 -z-10 h-20 w-20 rounded-full border-4 border-amber-100/30"></div>
          <div className="absolute bottom-10 left-20 -z-10 h-16 w-16 rounded-full border-4 border-amber-100/20"></div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="space-y-8 md:col-span-7">
              <div className="inline-flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="border border-amber-200/50 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700 hover:bg-amber-100 hover:text-amber-800"
                >
                  Prevention
                </Badge>
                <span className="h-px w-10 bg-amber-200"></span>
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-900">
                <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                  Proactive
                </span>{" "}
                Problem Management
              </h2>

              <p className="text-xl font-medium text-gray-600">
                Identify and Resolve Issues Before They Disrupt Operations
              </p>

              <p className="text-balance leading-relaxed text-gray-600">
                DCase ITSM shifts your organization from reactive
                troubleshooting to proactive prevention. Advanced monitoring,
                real-time analytics, and root-cause analysis help detect early
                warning signs, allowing you to address potential problems before
                they escalate. This proactive stance minimizes unplanned
                downtime and ensures a more reliable IT environment.
              </p>

              <div className="space-y-1 pt-4">
                <div className="group/item flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-amber-50/50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-amber-100 bg-amber-50 shadow-sm transition-all duration-300 group-hover/item:shadow-md">
                    <BarChart3 className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Advanced monitoring
                    </p>
                    <p className="mt-1.5 text-gray-500">
                      Continuous system surveillance to detect anomalies
                    </p>
                  </div>
                </div>

                <div className="group/item flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-amber-50/50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-amber-100 bg-amber-50 shadow-sm transition-all duration-300 group-hover/item:shadow-md">
                    <Target className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Root-cause analysis
                    </p>
                    <p className="mt-1.5 text-gray-500">
                      Identifying underlying issues to prevent recurrence
                    </p>
                  </div>
                </div>

                <div className="group/item flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-amber-50/50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-amber-100 bg-amber-50 shadow-sm transition-all duration-300 group-hover/item:shadow-md">
                    <Server className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Minimized downtime
                    </p>
                    <p className="mt-1.5 text-gray-500">
                      Reduced service interruptions and business impact
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center md:col-span-5">
              <div className="relative w-full transform overflow-hidden rounded-2xl border border-amber-200/50 bg-gradient-to-b from-white to-amber-50/30 p-3 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/3 rounded-full bg-amber-100/20 blur-xl"></div>
                <div className="absolute bottom-0 left-0 h-20 w-20 translate-x-1/3 translate-y-1/3 rounded-full bg-amber-100/20 blur-xl"></div>
                <div className="relative overflow-hidden rounded-xl bg-white">
                  <Image
                    src="/solution-03.png"
                    alt="Proactive Issue Management"
                    width={350}
                    height={385}
                    className="w-full rounded-xl object-contain transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 4: Service Level Excellence */}
        <section className="group relative mb-28 overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-indigo-50/30 px-8 py-20 shadow-xl">
          <div className="absolute right-0 top-0 -z-10 h-40 w-40 rounded-bl-[120px] rounded-tr-3xl bg-indigo-50 transition-colors duration-700 group-hover:bg-indigo-100/50"></div>
          <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 -translate-x-1/4 translate-y-1/4 transform rounded-full bg-indigo-50/40 blur-3xl"></div>
          <div className="absolute right-1/2 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-white/80 opacity-70 blur-3xl"></div>
          <div className="absolute left-10 top-10 -z-10 h-20 w-20 rounded-full border-4 border-indigo-100/30"></div>
          <div className="absolute bottom-10 right-20 -z-10 h-16 w-16 rounded-full border-4 border-indigo-100/20"></div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="order-2 flex items-center justify-center md:order-1 md:col-span-5">
              <div className="relative w-full transform overflow-hidden rounded-2xl border border-indigo-200/50 bg-gradient-to-b from-white to-indigo-50/30 p-3 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/3 rounded-full bg-indigo-100/20 blur-xl"></div>
                <div className="absolute bottom-0 left-0 h-20 w-20 translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-100/20 blur-xl"></div>
                <div className="relative overflow-hidden rounded-xl bg-white">
                  <Image
                    src="/solution-04.png"
                    alt="Service Level Excellence"
                    width={350}
                    height={406}
                    className="w-full rounded-xl object-contain transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 space-y-8 md:order-2 md:col-span-7">
              <div className="inline-flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="border border-indigo-200/50 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800"
                >
                  Quality Assurance
                </Badge>
                <span className="h-px w-10 bg-indigo-200"></span>
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-900">
                <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                  Service Level
                </span>{" "}
                Excellence
              </h2>

              <p className="text-xl font-medium text-gray-600">
                Exceed SLAs Through Real-Time Insights and Rigorous Tracking
              </p>

              <p className="text-balance leading-relaxed text-gray-600">
                Maintaining high service quality is critical to fostering trust
                and operational reliability. With robust dashboards and
                analytics, DCase ITSM continuously monitors performance against
                Service Level Agreements (SLAs) and Operational Level Agreements
                (OLAs). Real-time data empowers you to spot deviations
                instantly, take corrective action, and consistently enhance
                service delivery.
              </p>

              <div className="space-y-1 pt-4">
                <div className="group/item flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-indigo-50/50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50 shadow-sm transition-all duration-300 group-hover/item:shadow-md">
                    <TrendingUp className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Continuous performance monitoring
                    </p>
                    <p className="mt-1.5 text-gray-500">
                      Real-time tracking of service metrics and KPIs
                    </p>
                  </div>
                </div>

                <div className="group/item flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-indigo-50/50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50 shadow-sm transition-all duration-300 group-hover/item:shadow-md">
                    <BarChart3 className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Robust analytics
                    </p>
                    <p className="mt-1.5 text-gray-500">
                      Comprehensive reporting and performance insights
                    </p>
                  </div>
                </div>

                <div className="group/item flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-indigo-50/50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50 shadow-sm transition-all duration-300 group-hover/item:shadow-md">
                    <CheckCircle2 className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      SLA and OLA tracking
                    </p>
                    <p className="mt-1.5 text-gray-500">
                      Automated compliance monitoring and alerts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 5: Business-Aligned IT Operations */}
        <section className="group relative mb-28 overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 px-8 py-20 shadow-xl">
          <div className="absolute left-0 top-0 -z-10 h-40 w-40 rounded-br-[120px] rounded-tl-3xl bg-emerald-50 transition-colors duration-700 group-hover:bg-emerald-100/50"></div>
          <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 translate-x-1/4 translate-y-1/4 transform rounded-full bg-emerald-50/40 blur-3xl"></div>
          <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white/80 opacity-70 blur-3xl"></div>
          <div className="absolute right-10 top-10 -z-10 h-20 w-20 rounded-full border-4 border-emerald-100/30"></div>
          <div className="absolute bottom-10 left-20 -z-10 h-16 w-16 rounded-full border-4 border-emerald-100/20"></div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="space-y-8 md:col-span-7">
              <div className="inline-flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="border border-emerald-200/50 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800"
                >
                  Strategic Alignment
                </Badge>
                <span className="h-px w-10 bg-emerald-200"></span>
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-900">
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                  Business-Aligned
                </span>{" "}
                IT Operations
              </h2>

              <p className="text-xl font-medium text-gray-600">
                Bridge the Gap Between IT Capabilities and Strategic Goals
              </p>

              <p className="text-balance leading-relaxed text-gray-600">
                DCase ITSM transforms IT from a mere support function into a
                strategic enabler. By aligning IT initiatives with your
                organization&apos;s core objectives, our solution ensures that
                every technological investment directly contributes to overall
                business success. This integrated approach promotes enhanced
                collaboration, efficient resource allocation, and sustainable
                growth.
              </p>

              <div className="space-y-1 pt-4">
                <div className="group/item flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-emerald-50/50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 shadow-sm transition-all duration-300 group-hover/item:shadow-md">
                    <LayoutGrid className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Strategic IT alignment
                    </p>
                    <p className="mt-1.5 text-gray-500">
                      Connecting technology initiatives with business objectives
                    </p>
                  </div>
                </div>

                <div className="group/item flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-emerald-50/50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 shadow-sm transition-all duration-300 group-hover/item:shadow-md">
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Enhanced collaboration
                    </p>
                    <p className="mt-1.5 text-gray-500">
                      Improved communication between IT and business units
                    </p>
                  </div>
                </div>

                <div className="group/item flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-emerald-50/50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 shadow-sm transition-all duration-300 group-hover/item:shadow-md">
                    <Target className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Sustainable growth
                    </p>
                    <p className="mt-1.5 text-gray-500">
                      Long-term value creation through strategic IT investments
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center md:col-span-5">
              <div className="relative w-full transform overflow-hidden rounded-2xl border border-emerald-200/50 bg-gradient-to-b from-white to-emerald-50/30 p-3 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/3 rounded-full bg-emerald-100/20 blur-xl"></div>
                <div className="absolute bottom-0 left-0 h-20 w-20 translate-x-1/3 translate-y-1/3 rounded-full bg-emerald-100/20 blur-xl"></div>
                <div className="relative overflow-hidden rounded-xl bg-white">
                  <Image
                    src="/solution-05.png"
                    alt="Business-IT Alignment"
                    width={350}
                    height={350}
                    className="w-full rounded-xl object-contain transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 6: Scalable and Future-Proof */}
        <section className="group relative mb-28 overflow-hidden rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-purple-50/30 px-8 py-20 shadow-xl">
          <div className="absolute right-0 top-0 -z-10 h-40 w-40 rounded-bl-[120px] rounded-tr-3xl bg-purple-50 transition-colors duration-700 group-hover:bg-purple-100/50"></div>
          <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 -translate-x-1/4 translate-y-1/4 transform rounded-full bg-purple-50/40 blur-3xl"></div>
          <div className="absolute right-1/2 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-white/80 opacity-70 blur-3xl"></div>
          <div className="absolute left-10 top-10 -z-10 h-20 w-20 rounded-full border-4 border-purple-100/30"></div>
          <div className="absolute bottom-10 right-20 -z-10 h-16 w-16 rounded-full border-4 border-purple-100/20"></div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="order-2 flex items-center justify-center md:order-1 md:col-span-5">
              <div className="relative w-full transform overflow-hidden rounded-2xl border border-purple-200/50 bg-gradient-to-b from-white to-purple-50/30 p-3 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/3 rounded-full bg-purple-100/20 blur-xl"></div>
                <div className="absolute bottom-0 left-0 h-20 w-20 translate-x-1/3 translate-y-1/3 rounded-full bg-purple-100/20 blur-xl"></div>
                <div className="relative overflow-hidden rounded-xl bg-white">
                  <Image
                    src="/solution-06.png"
                    alt="Scalability Roadmap"
                    width={350}
                    height={490}
                    className="w-full rounded-xl object-contain transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 space-y-8 md:order-2 md:col-span-7">
              <div className="inline-flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="border border-purple-200/50 bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-700 hover:bg-purple-100 hover:text-purple-800"
                >
                  Future-Ready
                </Badge>
                <span className="h-px w-10 bg-purple-200"></span>
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-900">
                <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                  Scalable
                </span>{" "}
                and Future-Proof
              </h2>

              <p className="text-xl font-medium text-gray-600">
                Stay Agile with a Modular, Adaptable ITSM Foundation
              </p>

              <p className="text-balance leading-relaxed text-gray-600">
                Built on a flexible architecture, DCase ITSM scales effortlessly
                to meet your evolving business needs—whether you&apos;re a
                growing startup or a global enterprise. Regular updates and
                seamless integrations ensure that your IT infrastructure remains
                current with industry standards, keeping you prepared for future
                challenges and opportunities.
              </p>

              <div className="space-y-1 pt-4">
                <div className="group/item flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-purple-50/50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-purple-100 bg-purple-50 shadow-sm transition-all duration-300 group-hover/item:shadow-md">
                    <Scale className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Flexible architecture
                    </p>
                    <p className="mt-1.5 text-gray-500">
                      Adaptable framework that grows with your organization
                    </p>
                  </div>
                </div>

                <div className="group/item flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-purple-50/50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-purple-100 bg-purple-50 shadow-sm transition-all duration-300 group-hover/item:shadow-md">
                    <Code className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Seamless integrations
                    </p>
                    <p className="mt-1.5 text-gray-500">
                      Connect with your existing tools and systems
                    </p>
                  </div>
                </div>

                <div className="group/item flex items-start gap-5 rounded-xl p-3 transition-all duration-300 hover:bg-purple-50/50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-purple-100 bg-purple-50 shadow-sm transition-all duration-300 group-hover/item:shadow-md">
                    <Database className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Future-ready infrastructure
                    </p>
                    <p className="mt-1.5 text-gray-500">
                      Prepared for emerging technologies and industry changes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
