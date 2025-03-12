"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SolutionsGetInTouchSection() {
  // Define the fadeIn animation variant
  const fadeIn = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="container mx-auto px-4">
      <motion.section
        className="relative my-24 overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 p-8 text-center shadow-2xl sm:p-12 md:p-16"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-50" />

        {/* SVG Layer */}
        <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
          <motion.svg
            className="absolute left-0 h-full w-[200%]"
            viewBox="0 0 1211 1133"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fill: "hsla(160.1, 84.1%, 39.4%, 0.3)",
              clipPath: "inset(0 50% 0 0)",
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <path d="M490.7 1061.5 c-16.4 -2.7 -32.7 -8.3 -44.7 -15.5 -6.5 -3.9 -305.4 -234.5 -316.3 -244.1 -12.3 -10.8 -26.3 -32.5 -32.3 -50.2 -4.9 -14.3 -6.6 -24.3 -6.7 -38.7 0 -12.2 2.5 -31.6 26.2 -204.5 18.8 -137.4 26.8 -193.5 28.6 -199.8 8.6 -30.4 31.1 -58.5 59.5 -74.4 4.4 -2.5 337.7 -139.3 363 -149 31.8 -12.3 76.3 -7.5 105.6 11.2 10.5 6.7 310.8 239.9 317.5 246.5 15.3 15.2 26.6 36.2 32.6 61 5.1 20.8 5.8 13.8 -23 225 -14.1 103.1 -26.3 191.1 -27.2 195.6 -2.7 14.2 -10.5 31.6 -20.3 45.4 -10.2 14.4 -28.3 30.5 -41.9 37.4 -6.6 3.3 -355.7 146.1 -365.9 149.7 -10.4 3.6 -17.8 4.8 -33.4 5.4 -8.3 0.3 -15.4 0 -21.3 -1z m31.3 -66.9 c5.4 -1.3 350.4 -142.2 359 -146.6 8.7 -4.5 21.1 -19 25.3 -29.7 1.5 -3.8 31.3 -218 30.5 -218.9 -0.4 -0.3 -482.4 196.9 -483.3 197.7 -0.5 0.5 -20.5 151.2 -20.5 154.6 0 1.8 43.7 35.4 50.3 38.6 10.9 5.3 27.2 7.1 38.7 4.3z m-150 -90.4 c0 -0.4 15.1 -116 33.5 -256.8 18.4 -140.7 33.5 -256.8 33.5 -258 0 -1.5 -18.5 -16.4 -73.6 -59.5 -40.6 -31.6 -74.2 -57.7 -74.8 -58.1 -1.5 -0.9 -53.7 20.3 -58.8 23.9 -7.8 5.3 -17.5 17.8 -21.1 27 -1.6 4 -53.7 383.4 -53.7 390.8 0 5.1 3.6 17.7 7 24.8 1.9 3.8 5.5 8.7 8.6 11.8 5.1 5 197 154.6 198.7 154.8 0.4 0.1 0.7 -0.3 0.7 -0.7z m224.9 -238.1 c70 -28.7 127.9 -52.5 128.7 -52.9 0.9 -0.5 -36.1 -29.9 -110.2 -87.9 -61.2 -48 -111.4 -86.7 -111.4 -86.1 0 1.1 -36.6 273.3 -37.4 277.6 -0.3 1.8 0 2.3 1.3 1.9 0.9 -0.2 58.9 -23.9 129 -52.6z m297.6 -121.8 c29.2 -11.9 53.1 -21.7 53.1 -21.7 0.6 -0.4 12.4 -91.2 12.4 -95.2 0 -11.6 -6.8 -27.2 -16 -36.6 -8.5 -8.7 -302.6 -236.4 -310.1 -240 -8.2 -4 -19.6 -6.1 -29.9 -5.6 l-8.6 0.5 -116.9 47.8 c-64.4 26.2 -117.1 47.8 -117.3 47.9 -0.5 0.5 139.3 109.4 287.7 224.2 l151.4 117.1 20.6 -8.4 c11.3 -4.6 44.5 -18.1 73.6 -30z" />
          </motion.svg>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            className="relative mb-8 inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
              Explore Further
            </h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-emerald-700 sm:text-3xl md:text-4xl">
              Schedule Your Personalized Demo
            </p>
            <motion.span
              className="absolute -bottom-3 left-0 h-1 w-full rounded bg-emerald-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            ></motion.span>
          </motion.div>
          <motion.p
            className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover the transformative power of DCase ITSM for your
            organization. Our experts are ready to provide a tailored
            demonstration that showcases how our solution can{" "}
            <span className="font-medium text-emerald-700">
              redefine your IT operations
            </span>
            , boost efficiency, and drive measurable business success.
          </motion.p>

          <motion.div
            className="inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button className="group relative overflow-hidden rounded-full bg-emerald-600 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-700 hover:shadow-lg">
              <Link href="/contact-us" className="relative z-10">
                Request a Demo
              </Link>
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
