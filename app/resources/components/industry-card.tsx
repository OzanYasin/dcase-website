"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type React from "react";

interface Industry {
  name: string;
  icon: React.ElementType;
  challenge: string;
  solution: string[];
  impact: string;
}

export default function IndustryCard({ industry }: { industry: Industry }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <Card
      onClick={() => setIsExpanded(!isExpanded)}
      className={`w-full cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ${
        isExpanded
          ? "border-2 border-[hsl(160.1,84.1%,39.4%)]"
          : "border-2 border-transparent"
      } hover:border-[hsl(160.1,84.1%,39.4%)]`}
    >
      <CardContent
        className={`p-6 sm:p-8 md:p-10 ${isExpanded ? "pb-8 sm:pb-10" : ""}`}
      >
        {/* Mobile layout (stacked) */}
        {isMobile ? (
          <div className="flex flex-col">
            <div className="mb-4 flex w-full items-start justify-between">
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 p-3"
                animate={{
                  backgroundColor: isExpanded
                    ? "hsl(160.1,84.1%,39.4%)"
                    : "hsl(160.1,84.1%,39.4%, 0.1)",
                  color: isExpanded ? "white" : "hsl(160.1,84.1%,39.4%)",
                }}
                transition={{ duration: 0.3 }}
              >
                <industry.icon className="h-6 w-6" />
              </motion.div>
              <Button
                variant="outline"
                className="ml-2 flex-shrink-0 rounded-full border-2 border-gray-200 p-2 text-gray-500 transition-colors duration-200 hover:border-primary hover:bg-primary/10 hover:text-primary"
                aria-expanded={isExpanded}
                aria-controls={`industry-details-${industry.name}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.div>
                <span className="sr-only">
                  {isExpanded ? "Hide Details" : "Show Details"}
                </span>
              </Button>
            </div>
            <h2 className="mb-6 hyphens-auto break-words text-xl font-bold tracking-tight text-gray-900">
              {industry.name}
            </h2>
          </div>
        ) : (
          // Desktop layout (horizontal)
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-5">
              <motion.div
                className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 p-4 md:h-[70px] md:w-[70px] md:p-5"
                animate={{
                  backgroundColor: isExpanded
                    ? "hsl(160.1,84.1%,39.4%)"
                    : "hsl(160.1,84.1%,39.4%, 0.1)",
                  color: isExpanded ? "white" : "hsl(160.1,84.1%,39.4%)",
                }}
                transition={{ duration: 0.3 }}
              >
                <industry.icon className="h-9 w-9 md:h-10 md:w-10" />
              </motion.div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                {industry.name}
              </h2>
            </div>
            <Button
              variant="outline"
              className="ml-4 flex-shrink-0 rounded-full border-2 border-gray-200 p-3 text-gray-500 transition-colors duration-200 hover:border-primary hover:bg-primary/10 hover:text-primary"
              aria-expanded={isExpanded}
              aria-controls={`industry-details-${industry.name}`}
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
            >
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-6 w-6" />
              </motion.div>
              <span className="sr-only">
                {isExpanded ? "Hide Details" : "Show Details"}
              </span>
            </Button>
          </div>
        )}

        <p
          className={`mb-6 text-base leading-relaxed text-gray-600 ${isMobile ? "" : "sm:mb-8 sm:text-lg md:text-xl"}`}
        >
          {industry.challenge}
        </p>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              id={`industry-details-${industry.name}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`mt-6 space-y-6 border-t border-gray-200 pt-6 ${isMobile ? "" : "sm:mt-8 sm:space-y-8 sm:pt-8"}`}
              >
                <div>
                  <h3
                    className={`mb-4 text-xl font-bold text-primary ${isMobile ? "" : "sm:mb-6 sm:text-2xl"}`}
                  >
                    Our Solution:
                  </h3>
                  <ul className={`space-y-4 ${isMobile ? "" : "sm:space-y-6"}`}>
                    {industry.solution.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start space-x-3 sm:space-x-4"
                      >
                        <span
                          className={`mt-0.5 flex-shrink-0 rounded-full bg-dcase/10 p-1.5 text-primary ${isMobile ? "" : "sm:mt-1 sm:p-2"}`}
                        >
                          <Check
                            className={`h-4 w-4 text-emerald-700 ${isMobile ? "" : "sm:h-5 sm:w-5"}`}
                          />
                        </span>
                        <span
                          className={`text-base leading-relaxed text-gray-700 ${isMobile ? "" : "sm:text-lg md:text-xl"}`}
                        >
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3
                    className={`mb-3 text-xl font-bold text-primary ${isMobile ? "" : "sm:mb-4 sm:text-2xl"}`}
                  >
                    Impact:
                  </h3>
                  <p
                    className={`text-base leading-relaxed text-gray-700 ${isMobile ? "" : "sm:text-lg md:text-xl"}`}
                  >
                    {industry.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
