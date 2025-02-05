"use client";

import { useState } from "react";
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
        className={`p-8 sm:p-10 ${isExpanded ? "p-[30px] sm:p-[38px]" : ""}`}
      >
        <div className="mb-8 flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
          <div className="flex items-center space-x-5">
            <motion.div
              className="rounded-xl bg-primary/10 p-4 sm:p-5"
              animate={{
                backgroundColor: isExpanded
                  ? "hsl(160.1,84.1%,39.4%)"
                  : "hsl(160.1,84.1%,39.4%, 0.1)",
                color: isExpanded ? "white" : "hsl(160.1,84.1%,39.4%)",
              }}
              transition={{ duration: 0.3 }}
            >
              <industry.icon className="h-8 w-8 sm:h-10 sm:w-10" />
            </motion.div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {industry.name}
            </h2>
          </div>
          <Button
            variant="outline"
            // Removed onClick to avoid double toggle since the Card handles the toggling.
            className="self-end rounded-full border-2 border-gray-200 p-3 text-gray-500 transition-colors duration-200 hover:border-primary hover:bg-primary/10 hover:text-primary sm:self-auto"
            aria-expanded={isExpanded}
            aria-controls={`industry-details-${industry.name}`}
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
        <p className="mb-8 text-lg leading-relaxed text-gray-600 sm:text-xl">
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
              <div className="mt-8 space-y-8 border-t border-gray-200 pt-8">
                <div>
                  <h3 className="mb-6 text-2xl font-bold text-primary">
                    Our Solution:
                  </h3>
                  <ul className="space-y-6">
                    {industry.solution.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <span className="mt-1 flex-shrink-0 rounded-full bg-dcase/10 p-2 text-primary">
                          <Check className="h-5 w-5 text-emerald-700" />
                        </span>
                        <span className="text-lg leading-relaxed text-gray-700 sm:text-xl">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-primary">
                    Impact:
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
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
