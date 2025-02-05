"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { Button } from "./button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { useIsMobile } from "@/hooks/useIsMobile";
import { MenuIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const SIDEBAR_WIDTH_MOBILE = "80%";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = React.useState<string | null>(null);
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  if (isMobile) {
    return (
      <div className="container fixed inset-x-0 top-0 z-50 mx-auto flex w-full items-center justify-between bg-black p-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 font-semibold text-white"
        >
          <Image
            src="/vectorize-logo-icon.svg"
            alt="Logo"
            width={40}
            height={40}
          />
          dcase
        </Link>

        {/* Mobil -> Hamburger button and Sheet */}
        <Sheet open={openMobile} onOpenChange={setOpenMobile}>
          <SheetTrigger asChild>
            <Button variant="default" className="bg-dcase text-white">
              {/* hamburger icon */}
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            data-mobile="true"
            className="text-sidebar-foreground p-4"
            side="right"
            style={
              { "--sidebar-width": SIDEBAR_WIDTH_MOBILE } as React.CSSProperties
            }
          >
            <div className="flex flex-col space-y-4">
              {/* Platform */}
              <Accordion type="single" collapsible>
                <AccordionItem value="platform">
                  <AccordionTrigger className="text-sidebar-foreground cursor-pointer">
                    Platform
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2 text-sm">
                      <Link
                        href="/product"
                        onClick={() => setOpenMobile(false)}
                        className="cursor-pointer hover:opacity-90"
                      >
                        Product Overview
                      </Link>
                      <Link
                        href="/platform-architecture"
                        onClick={() => setOpenMobile(false)}
                        className="cursor-pointer hover:opacity-90"
                      >
                        Platform Architecture
                      </Link>
                      <Link
                        href="/deployment-models"
                        onClick={() => setOpenMobile(false)}
                        className="cursor-pointer hover:opacity-90"
                      >
                        Deployment Models
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Other links */}
              <Link
                href="/solutions"
                className="text-sidebar-foreground cursor-pointer hover:opacity-90"
                onClick={() => setOpenMobile(false)}
              >
                Solutions
              </Link>
              <Link
                href="/resources"
                className="text-sidebar-foreground cursor-pointer hover:opacity-90"
                onClick={() => setOpenMobile(false)}
              >
                Resources
              </Link>
              <Link
                href="/about"
                className="text-sidebar-foreground cursor-pointer hover:opacity-90"
                onClick={() => setOpenMobile(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sidebar-foreground cursor-pointer hover:opacity-90"
                onClick={() => setOpenMobile(false)}
              >
                Contact
              </Link>
              <Link href="/request-demo" onClick={() => setOpenMobile(false)}>
                <Button variant="default" className="w-full">
                  Request a Demo
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    );
  }

  // Desktop görünüm (orijinal Navbar yapınız)
  return (
    <div
      className={cn(
        "container fixed inset-x-0 top-10 z-50 mx-auto w-full",
        className,
      )}
    >
      <Menu setActive={setActive}>
        <Link
          href="/"
          className="absolute left-6 top-4 flex items-center gap-1.5 font-semibold text-white"
        >
          <Image
            src="/vectorize-logo-icon.svg"
            alt="Logo"
            width={40}
            height={40}
          />
          dcase
        </Link>
        <div className="flex space-x-4 md:space-x-6 lg:space-x-10">
          <MenuItem setActive={setActive} active={active} item="Platform">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/product">Product Overview</HoveredLink>
              <HoveredLink href="/platform-architecture">
                Platform Architecture
              </HoveredLink>
              <HoveredLink href="/deployment-models">
                Deployment Models
              </HoveredLink>
            </div>
          </MenuItem>
          <Link
            href="/solutions"
            className="cursor-pointer text-white hover:opacity-[0.9]"
          >
            Solutions
          </Link>
          <Link
            href="/resources"
            className="cursor-pointer text-white hover:opacity-[0.9]"
          >
            Resources
          </Link>
          <Link
            href="/about"
            className="cursor-pointer text-white hover:opacity-[0.9]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="cursor-pointer text-white hover:opacity-[0.9]"
          >
            Contact
          </Link>
        </div>
        <Link href="/request-demo">
          <Button
            variant="default"
            className="duration-400 absolute right-6 top-4 transform rounded-r-2xl bg-dcase/95 font-semibold text-white transition hover:translate-x-1 hover:bg-dcase"
          >
            Request a Demo
          </Button>
        </Link>
      </Menu>
    </div>
  );
}
